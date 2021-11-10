import test from 'ava' ;

import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';

import { grammar , ll1 } from '../../../src/index.js' ;

test( 'Dragon Book (2006) page 48: 2.2.5 Associativity of Operators' , t => {

	const root = 'root' ;
	const start = 'start' ;
	const eof = '$';

	const productions = {
		'root': {
			'start' : [ '&right' , '=$' ] ,
		} ,
		'right': [
			[ '&letter' , '==' , '&right' ] ,
			[ '&letter' ] ,
		] ,
		'letter': list( map( l => [ `=${l}` ] , 'abcdefghijklmnopqrstuvwxyz' ) ) ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	t.false(ll1.is(G));

}) ;

test( 'Dragon Book (2006) page 258 exercise 4.6.6' , t => {

	const root = "R" ;
	const start = 0 ;
	const eof = "$" ;

	const productions = {
		"R" : [
			[ "&S" , "=$" ]
		] ,
		"S" : [
			[ "&S" , "&A" ] ,
			[ "&A" ]
		] ,
		"A" : [
			[ "=a" ]
		]
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	t.false(ll1.is(G));

}) ;

test( 'Dragon Book (2006) page 224 ... if the empty word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets ...' , t => {

	const root = 'S'
	const start = 0;
	const eof = '$';

	const productions = {
		"S" : [
			[ "&A" , "=x" , '=$' ]
		] ,
		"A" : [
			[ "=x" ] ,
			[ ]
		]
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	t.false(ll1.is(G));

}) ;
