import test from 'ava';

import { cfg , grammar } from '../../../src' ;

const { iterObject } = grammar ;
const { nullable } = cfg ;

function macro ( t , productions , expected ) {
	const it = iterObject(productions);
	const result = nullable(it);
	t.assert(result instanceof Set);
	const _result = Array.from(result).sort();
	t.deepEqual(expected, _result);
}

macro.title = (title, productions, expected) => title || `nullable(${JSON.stringify(productions)}) = ${JSON.stringify(expected)}` ;

test(macro, {}, []);

test(macro, {A: [[]]}, ['A']);
test(macro, {A: [['=x'],[]]}, ['A']);
test(macro, {A: [['=x']]}, []);
test(macro, {A: [['=x'],['=y']]}, []);
test(macro, {A: [[],[]]}, ['A']);
test(macro, {A: [[],['=x'],[]]}, ['A']);
test(macro, {A: [[],['=x'],[],['=y']]}, ['A']);

test(macro, {
	A: [
		['&B'],
	],
}, []);

test(macro, {
	A: [
		['&B'],
	],
	B: [
		[],
	]
}, ['A', 'B']);

test(macro, {
	A: [
		['&B'],
		[]
	],
	B: [
		[],
	]
}, ['A', 'B']);

test(macro, {
	A: [
		['&B'],
		[]
	],
	B: [
		['&C'],
	]
}, ['A']);

test(macro, {
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
}, ['A', 'B']);

test(macro, {
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
}, []);
