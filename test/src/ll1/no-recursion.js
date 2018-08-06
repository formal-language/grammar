import test from 'ava' ;

import { iter , map , enumerate , list , range , nrepeat , ncycle } from '@aureooms/js-itertools' ;
import * as stream from '@aureooms/js-stream' ;
import { grammar , ast , ll1 } from '../../../src' ;

function flatten ( t , n ) {

	const G = grammar.from( {
		"start" : "letters" ,
		"eof" : "$" ,
		"productions" : {
			"letters" : {
				"add" : [ "&letter" , "&letters" ] ,
				"end" : [ ] ,
			} ,
			"letter" : {
				"x" : [ "=x" ] ,
			} ,
		} ,
	} ) ;

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = stream.fromiterable(
		map(
			i => ({
				"type" : "leaf" ,
				"terminal" : "x" ,
				"buffer" : "x" ,
				"position" : i ,
			}) ,
			range(n)
		)
	) ;

	const tree = parser.parse(tokens);

	t.is( list( map( leaf => leaf.buffer , ast.flatten( tree ) ) ).join('') , list(nrepeat('x', n)).join('') ) ;

}

flatten.title = ( _ , n ) => `Tail-recursion: flatten repetition of a single letter x${n} times.` ;

test( flatten , 1000 ) ;
test( flatten , 10000 ) ;
test( flatten , 100000 ) ;


function materialize ( t , n ) {

	const G = grammar.from( {
		"start" : "letters" ,
		"eof" : "$" ,
		"productions" : {
			"letters" : {
				"add" : [ "&letter" , "&letters" ] ,
				"end" : [ ] ,
			} ,
			"letter" : {
				"x" : [ "=x" ] ,
			} ,
		} ,
	} ) ;

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = stream.fromiterable(
		map(
			i => ({
				"type" : "leaf" ,
				"terminal" : "x" ,
				"buffer" : "x" ,
				"position" : i ,
			}) ,
			range(n)
		)
	) ;

	const tree = parser.parse(tokens);

	const materialized = ast.materialize(tree) ;

	t.is( list( map( leaf => leaf.buffer , ast.flatten( materialized ) ) ).join('') , list(nrepeat('x', n)).join('') ) ;

}

materialize.title = ( _ , n ) => `Tail-recursion: materialize repetition of a single letter x${n} times.` ;

test( materialize , 1000 ) ;
test( materialize , 10000 ) ;
test( materialize , 100000 ) ;
