import test from 'ava';

import * as tape from '@async-abstraction/tape';
import {map} from '@iterable-iterator/map';
import {enumerate} from '@iterable-iterator/zip';

import {grammar, ast, ll1} from '../../../src/index.js';

test('complete', async (t) => {
	const G = grammar.from({
		root: 'root',
		start: 'start',
		eof: '$',
		productions: {
			root: {
				start: ['&A', '=$'],
			},
			A: [['&B']],
			B: [['=x'], []],
		},
	});

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const actualTable = parser.table();

	const expectedTable = new Map([
		[
			'root',
			new Map([
				['$', 'start'],
				['x', 'start'],
			]),
		],
		[
			'A',
			new Map([
				['$', '0'],
				['x', '0'],
			]),
		],
		[
			'B',
			new Map([
				['$', '1'],
				['x', '0'],
			]),
		],
	]);

	t.deepEqual(actualTable, expectedTable);

	const tokens = tape.fromIterable(
		map(
			([i, a]) => ({
				type: 'leaf',
				terminal: a,
				buffer: a,
				position: i,
			}),
			enumerate(''),
		),
	);

	const tree = parser.parse(tokens);

	const result = await ast.materialize(tree);
	const expected = {
		type: 'node',
		nonterminal: 'root',
		production: 'start',
		children: [
			{
				type: 'node',
				nonterminal: 'A',
				production: '0',
				children: [
					{
						type: 'node',
						nonterminal: 'B',
						production: '1',
						children: [],
					},
				],
			},
			{
				type: 'leaf',
				terminal: '$',
			},
		],
	};

	t.deepEqual(result, expected);
});

const macro = (t, productions) => {
	const G = grammar.from({
		root: 'root',
		start: 'start',
		eof: '$',
		productions: {
			root: {
				start: ['&A', '=$'],
			},
			...productions,
		},
	});

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const table = parser.table();

	t.true(new Set(table.get('A').keys()).has('$'));
};

macro.title = (title, productions) =>
	`auto ${title ?? JSON.stringify(productions)}`;

test('1 - 1 - 0', macro, {A: [['&B']], B: [['&C']], C: [[]]});
test('1 - 1 - 1 - 0', macro, {A: [['&B']], B: [['&C']], C: [['&D']], D: [[]]});
test('3 - 0', macro, {A: [['&B', '&C', '&D']], B: [[]], C: [[]], D: [[]]});
