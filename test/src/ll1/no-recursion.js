import test from 'ava' ;

import {map} from '@iterable-iterator/map';
import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {nrepeat} from '@iterable-iterator/repeat';
import * as tape from '@async-abstraction/tape' ;
import {asyncIterableMap} from '@async-abstraction/tape';
import { grammar , ast , ll1 } from '../../../src/index.js' ;

async function flatten ( t , n ) {

	const G = grammar.from( {
		"root" : "root" ,
		"start" : "start" ,
		"eof" : "$" ,
		"productions" : {
			"root" : {
				"start" : [ "&letters" , "=$" ] ,
			} ,
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

	const tokens = tape.fromIterable(
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

	const got = await tape.toString( tape.fromAsyncIterable( asyncIterableMap( leaf => leaf.buffer , ast.flatten( tree ) ) ) ) ;

	const expected = list(nrepeat('x', n)).join('') ;

	t.is( got , expected ) ;

}

flatten.title = ( _ , n ) => `No recursion: flatten repetition of a single letter x${n} times.` ;

test( flatten , 1000 ) ;
test( flatten , 10000 ) ;
test( flatten , 100000 ) ;


async function materialize ( t , n ) {

	const G = grammar.from( {
		"root" : "root" ,
		"start" : "start" ,
		"eof" : "$" ,
		"productions" : {
			"root" : {
				"start" : [ "&letters" , "=$" ] ,
			} ,
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

	const tokens = tape.fromIterable(
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

	const materialized = await ast.materialize(tree) ;

	const got = await tape.toString( tape.fromAsyncIterable( asyncIterableMap( leaf => leaf.buffer , ast.flatten( materialized ) ) ) ) ;

	const expected = list(nrepeat('x', n)).join('') ;

	t.is( got , expected ) ;

}

materialize.title = ( _ , n ) => `No recursion: materialize repetition of a single letter x${n} times.` ;

test( materialize , 1000 ) ;
test( materialize , 10000 ) ;
test( materialize , 100000 ) ;


async function exhaust ( t , G , n ) {

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = tape.fromIterable(
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

	const it = tree.children[Symbol.asyncIterator]();

	await it.next() ; // skip first node

	const eof = await it.next() ;
	t.deepEqual( eof.value , { 'type' : 'leaf' , 'terminal' : G.eof } ) ;

	const { done } = await it.next() ;
	t.true( done ) ;

}

const G1 = grammar.from( {
	"root" : "root" ,
	"start" : "start" ,
	"eof" : "$" ,
	"productions" : {
		"root" : {
			"start" : [ "&letters" , "=$" ]
		} ,
		"letters" : {
			"add" : [ "=x" , "&letters" ] ,
			"end" : [ ] ,
		} ,
	} ,
} ) ;

const G2 = grammar.from( {
	"root" : "root" ,
	"start" : "start" ,
	"eof" : "$" ,
	"productions" : {
		"root" : {
			"start" : [ "&letters" , "=$" ]
		} ,
		"letters" : {
			"add" : [ "&letter" , "&letters" ] ,
			"end" : [ ]
		} ,
		"letter" : {
			"x" : [ "=x" ]
		}
	}
} ) ;


exhaust.title = ( which , _ , n ) => `No recursion: exhaust repetition of a single letter x${n} times (${which} case).` ;

test( 'leaf' , exhaust , G1 , 1000 ) ;
test( 'leaf' , exhaust , G1 , 10000 ) ;
test( 'leaf' , exhaust , G1 , 100000 ) ;

test( 'node' , exhaust , G2 , 1000 ) ;
test( 'node' , exhaust , G2 , 10000 ) ;
test( 'node' , exhaust , G2 , 100000 ) ;
