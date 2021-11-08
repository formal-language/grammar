# Examples

> More examples in [the test files](https://github.com/make-github-pseudonymous-again/js-grammar/tree/main/test/src).


## A convoluted `'010101'.replace(/0/g, 'a').replace(/1/g, 'b')`.

```js
import { map , enumerate } from '@aureooms/js-itertools' ;
import tape , { asyncIterableMap } from '@aureooms/js-tape' ;
import { grammar , ll1 , ast } from '@aureooms/js-grammar' ;

const G = grammar.from( {
	"root" : "root" ,
	"start" : "start" ,
	"eof" : "$" ,
	"productions" : {
		"root" : {
			"start" : [ "&bits" , "=$" ]
		} ,
		"bits" : {
			"add" : [ "&bit" , "&bits" ] ,
			"end" : [ ] ,
		} ,
		"bit" : [
			[ "=0" ] ,
			[ "=1" ] ,
		] ,
	} ,
} ) ;

const parser = ll1.from(G);

const replace = async input => {

	const tokens = tape.fromIterable(
		map(
			( [ i , a ] ) => ({
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
				"position" : i ,
			}) ,
			enumerate( input )
		)
	) ;

	const tree = parser.parse(tokens);

	const m = ( children , match , ctx ) => ast.map( async child => child.type === 'leaf' ? child : await ast.transform( child , match , ctx ) , children ) ;

	const transform = {
		"root" : {
			"start" : ( tree , match ) => ({
				"type" : "node" ,
				"nonterminal" : "root" ,
				"production" : "start" ,
				"children" : m( tree.children , match ) ,
			}) ,
		} ,
		"bits" : {
			"add" : ( tree , match ) =>  ({
				"type" : "node" ,
				"nonterminal" : "letters" ,
				"production" : "yetanotherletter" ,
				"children" : m( tree.children , match ) ,
			}) ,
			"end" : ( ) =>  ({
				"type" : "node" ,
				"nonterminal" : "letters" ,
				"production" : "done" ,
				"children" : [ ] ,
			}) ,
		} ,
		"bit" : [
			tree => ({
				"type" : "node" ,
				"nonterminal" : "letter" ,
				"production" : "aaa" ,
				"children" : ast.map( leaf => ({
					"type" : "leaf" ,
					"terminal" : "a" ,
					"buffer" : "a" ,
					"position" : leaf.position ,
				}) , tree.children ) ,
			}) ,
			tree => ({
				"type" : "node" ,
				"nonterminal" : "letter" ,
				"production" : "bbb" ,
				"children" : ast.map( leaf => ({
					"type" : "leaf" ,
					"terminal" : "b" ,
					"buffer" : "b" ,
					"position" : leaf.position ,
				}) , tree.children ) ,
			}) ,
		] ,
	} ;

	const transformed = await ast.transform( tree , transform ) ;

	const flattened = ast.flatten( transformed ) ;

	const chunks = asyncIterableMap( leaf => leaf.buffer , flattened ) ;

	const output = tape.fromAsyncIterable( chunks ) ;

	return await tape.toString( output ) ;

} ;

replace('010101').then( output => console.log(output) ) ; // 'ababab'

```
