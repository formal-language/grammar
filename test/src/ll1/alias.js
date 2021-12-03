import test from 'ava';

import {map} from '@iterable-iterator/map';
import {enumerate} from '@iterable-iterator/zip';
import * as tape from '@async-abstraction/tape';

import {grammar, ast, ll1} from '../../../src/index.js';

test('alias', async (t) => {
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
