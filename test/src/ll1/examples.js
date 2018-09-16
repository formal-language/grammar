import test from 'ava' ;

import { map , enumerate } from '@aureooms/js-itertools' ;
import tape , { asyncIterableMap } from '@aureooms/js-tape' ;
import { grammar , ast , ll1 } from '../../../src' ;

test( "A convoluted `'010101'.replace(/0/g, 'a').replace(/1/g, 'b')`." , async t => {

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

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = tape.fromIterable(
		map(
			( [ i , a ] ) => ({
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
				"position" : i ,
			}) ,
			enumerate( '010101' )
		)
	) ;

	const tree = parser.parse(tokens);

	const m = ( children , match , ctx ) => ast.map( async child => child.type === 'leaf' ? child : await ast.transform( child , match , ctx ) , children ) ;

	const transformed = await ast.transform( tree , {
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
	} ) ;

	const got = await tape.toString( tape.fromAsyncIterable( asyncIterableMap( leaf => leaf.buffer , ast.flatten( transformed ) ) ) ) ;
	const expected = 'ababab' ;
	t.is( got , expected ) ;

});
