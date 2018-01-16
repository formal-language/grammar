import test from 'ava' ;

import { map , enumerate , list } from '@aureooms/js-itertools' ;
import * as stream from '@aureooms/js-stream' ;
import { grammar , ast , ll1 } from '../../../src' ;

test( "A convoluted `'010101'.replace(/0/g, 'a').replace(/1/g, 'b')`." , t => {

	const G = grammar.from( {
		"start" : "bits" ,
		"eof" : "$" ,
		"productions" : {
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

	const tokens = stream.fromiterable(
		map(
			( [ i , a ] ) => { return {
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
				"position" : i ,
			} ; } ,
			enumerate( '010101' )
		)
	) ;

	const tree = parser.parse(tokens);

	const transformed = ast.transform( tree , {
		"bits" : {
			"add" : ( t , n ) =>  { return {
				"type" : "node" ,
				"nonterminal" : "letters" ,
				"production" : "yetanotherletter" ,
				"children" : ast.cmap( t , n.children ) ,
			} ; } ,
			"end" : ( t , n ) =>  { return {
				"type" : "node" ,
				"nonterminal" : "letters" ,
				"production" : "done" ,
				"children" : [ ] ,
			} ; } ,
		} ,
		"bit" : [
			( t , n ) => {
				return {
					"type" : "node" ,
					"nonterminal" : "letter" ,
					"production" : "aaa" ,
					"children" : ast.cmap( leaf => {
						return {
							"type" : "leaf" ,
							"terminal" : "a" ,
							"buffer" : "a" ,
							"position" : leaf.position ,
						} ;
					} , n.children ) ,
				} ;
			} ,
			( t , n ) => {
				return {
					"type" : "node" ,
					"nonterminal" : "letter" ,
					"production" : "bbb" ,
					"children" : ast.cmap( leaf => {
						return {
							"type" : "leaf" ,
							"terminal" : "b" ,
							"buffer" : "b" ,
							"position" : leaf.position ,
						} ;
					} , n.children ) ,
				} ;
			} ,
		] ,
	} ) ;

	t.is( list( map( leaf => leaf.buffer , ast.flatten( transformed ) ) ).join('') , 'ababab' ) ;

});
