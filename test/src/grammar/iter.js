import test from 'ava';

import { list } from '@aureooms/js-itertools' ;
import { grammar } from '../../../src' ;

const { iter , iterObject } = grammar ;

function macro ( t , productions ) {

	const G = grammar.from({
		root: '',
		start: 0,
		eof: '',
		productions,
	});

	t.deepEqual(list(iter(G.productions)), list(iterObject(productions)));

}

macro.title = (title, productions) => title || `iter(grammar.from({..., ${JSON.stringify(productions)}}).productions) = iterObject(${JSON.stringify(productions)})` ;

test(macro, {
	A: [
		['&B'],
	],
});

test(macro, {
	A: [
		['&B'],
	],
	B: [
		[],
	]
});

test(macro, {
	A: [
		['&B'],
		[]
	],
	B: [
		[],
	]
});

test(macro, {
	A: [
		['&B'],
		[]
	],
	B: [
		['&C'],
	]
});

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
});

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
});
