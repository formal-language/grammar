import test from 'ava' ;

import { list , map } from '@aureooms/js-itertools' ;

import { grammar , ll1 } from '../../../src' ;

test( 'Dragon Book (2006) page 49' , t => {

	const start = '0';
	const eof = '$';

	const productions = [
		[ // right : 0 (start)
			[ 1 , '==' , 0 ] ,
			[ 1 ] ,
		] ,
		list( map( l => [ `=${l}` ] , 'abcdefghijklmnopqrstuvwxyz' ) ) , // letter : 1
	] ;

	const G = grammar.from( { start , eof , productions } ) ;

	t.false(ll1.is(G));

	//const table = compile(start, eof, G);

	//const tokens = tape.fromString('a=b=c');

	//const tree = parse(start, eof, G, table, tokens);

}) ;

test( 'Dragon Book (2006) page 258 exercise 4.6.6' , t => {

	const start = 'S';
	const eof = '$';

	const productions = {
		"S" : [
			[ "&S" , "&A" ] ,
			[ "&A" ]
		] ,
		"A" : [
			[ "=a" ]
		]
	} ;

	const G = grammar.from( { start , eof , productions } ) ;

	t.false(ll1.is(G));

}) ;

test( 'Dragon Book (2006) page 224 ... if the empty word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets ...' , t => {

	const start = 'S';
	const eof = '$';

	const productions = {
		"S" : [
			[ "&A" , "=x" ]
		] ,
		"A" : [
			[ "=x" ] ,
			[ ]
		]
	} ;

	const G = grammar.from( { start , eof , productions } ) ;

	t.false(ll1.is(G));

}) ;
