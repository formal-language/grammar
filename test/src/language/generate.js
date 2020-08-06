import test from 'ava' ;

import { list , map , take , sorted } from '@aureooms/js-itertools' ;

import { quasilexicographical , increasing } from '@aureooms/js-compare' ;

import { grammar , language } from '../../../src' ;

const compare = quasilexicographical(increasing) ;
const set = x => sorted(compare, x) ;

test( 'language.generate' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ "=x" ] ,
			[ ]
		]
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const L = set(map(x => list(x).join(''), language.generate(G))) ;

	const expected = set([ '$' , 'x$' ]) ;

	t.deepEqual(expected, L);

}) ;

test( 'language.generate empty x2' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ "&X" ] ,
			[ ]
		] ,
		"X" : [
			[ ]
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const L = set(map(x => list(x).join(''), language.generate(G))) ;

	const expected = set([ '$' , '$' ]) ;

	t.deepEqual(expected, L);

}) ;

test( 'language.generate finite (large)' , t => {
	const root = 'R' ;
	const start = 0 ;
	const eof = '$' ;

	const productions = {
		"R" : [
			[ "&S_0" , "=$" ] ,
		] ,
		"S_0" : [
			[ "&A" , "=b" , "&B" ] ,
			[ "&C" ] ,
		] ,
		"B": [
			[ "&A" , "&A" ] ,
			[ "&A" , "&C" ]
		] ,
		"C": [
			["=b"],
			["=c"],
		],
		"A": [
			[ "=a" ] ,
			[ ] ,
		]
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const L = set(new Set(map(x => list(x).join(''), language.generate(G)))) ;

	const expected = set([ 'ab$','aba$','abaa$','abab$','abac$','abb$','abc$','b$','ba$','baa$','bab$','bac$','bb$','bc$','c$' ]) ;

	t.deepEqual(expected, L);
});

test( 'language.generate finite (large without ε-rules)' , t => {
	const root = 'R' ;
	const start = 0 ;
	const eof = '$' ;

	const productions = {
		"R" : [
			[ "&S_0" , "=$" ] ,
		] ,
		"S_0" : [
			[ "&A" , "=b" , "&B" ] ,
			[ "&A" , "=b" ] ,
			[ "=b" , "&B" ] ,
			[ "=b" ] ,
			[ "&C" ] ,
		] ,
		"B": [
			[ "&A" , "&A" ] ,
			[ "&A" ] ,
			[ "&A" , "&C" ] ,
			[ "&C" ]
		] ,
		"C": [
			["=b"],
			["=c"],
		],
		"A": [
			[ "=a" ] ,
		]
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const L = set(new Set(map(x => list(x).join(''), language.generate(G)))) ;

	const expected = set([ 'ab$','aba$','abaa$','abab$','abac$','abb$','abc$','b$','ba$','baa$','bab$','bac$','bb$','bc$','c$' ]) ;

	t.deepEqual(expected, L);
});

test( 'language.generate infinite (left)' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ ] ,
			[ "=0" , "&S" ] ,
			[ "=1" , "&S" ] ,
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const N = 5 ;
	const L = set(take(map(x => list(x).join(''), language.generate(G)), N)) ;

	const expected = set([ '$' , '0$' , '1$' , '00$' , '10$' ]) ;

	t.deepEqual(expected, L);

}) ;

test( 'language.generate infinite (right)' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ ] ,
			[ "&S" , "=0" ] ,
			[ "&S" , "=1" ] ,
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const N = 5 ;
	const L = set(take(map(x => list(x).join(''), language.generate(G)), N)) ;

	const expected = set([ '$' , '0$' , '1$' , '00$' , '01$' ]) ;

	t.deepEqual(expected, L);

}) ;

test( 'language.generate infinite (left &B)' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ ] ,
			[ "&B" , "&S" ] ,
		] ,
		"B" : [
			[ "=0" ] ,
			[ "=1" ] ,
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const N = 5 ;
	const L = set(take(map(x => list(x).join(''), language.generate(G)), N)) ;

	const expected = set([ '$' , '0$' , '1$' , '00$' , '000$' ]) ;

	t.deepEqual(expected, L);

}) ;

test( 'language.generate infinite (right &B)' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ ] ,
			[ "&S" , "&B" ] ,
		] ,
		"B" : [
			[ "=0" ] ,
			[ "=1" ] ,
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const N = 5 ;
	const L = set(take(map(x => list(x).join(''), language.generate(G)), N)) ;

	const expected = set([ '$' , '0$' , '1$' , '00$' , '01$' ]) ;

	t.deepEqual(expected, L);

}) ;

test( 'language.generate ambiguous (empty word)' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ ] ,
			[ "&S"] ,
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const N = 5 ;
	const L = set(take(map(x => list(x).join(''), language.generate(G)), N)) ;

	const expected = set([ '$' , '$' , '$' , '$' , '$' ]) ;

	t.deepEqual(expected, L);

}) ;

test( 'language.generate ambiguous (words)' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ "=x" ] ,
			[ "&S" , "&S"] ,
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } ) ;

	const N = 5 ;
	const L = set(take(map(x => list(x).join(''), language.generate(G)), N)) ;

	const expected = set([ 'x$' , 'xx$' , 'xxx$' , 'xxx$' , 'xxxx$' ]) ;

	t.deepEqual(expected, L);

}) ;


