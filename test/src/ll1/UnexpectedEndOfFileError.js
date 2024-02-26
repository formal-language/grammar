import test from 'ava';

import * as tape from '@async-abstraction/tape';
import {asyncIterableMap} from '@async-abstraction/tape';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';

import {grammar, ast, ll1} from '../../../src/index.js';

async function throws(t, G, n) {
	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = tape.fromIterable(
		map(
			(i) => ({
				type: 'leaf',
				terminal: 'x',
				buffer: 'x',
				position: i,
			}),
			range(2 * n + 1),
		),
	);

	const tree = parser.parse(tokens);

	const flattened = ast.flatten(tree);

	const chunks = asyncIterableMap((leaf) => leaf.buffer, flattened);

	const output = tape.fromAsyncIterable(chunks);

	const expectedError = {
		message: /unexpected end of file, expected one of \["x"]/,
	};

	await t.throwsAsync(tape.toString(output), expectedError);
}

throws.title = (which, G, n) =>
	`Unexpected end of file error (${which}, ${n}).`;

const G1 = grammar.from({
	root: 'root',
	start: 'start',
	eof: '$',
	productions: {
		root: {
			start: ['&letters', '=$'],
		},
		letters: {
			add: ['=x', '=x', '&letters'],
			end: [],
		},
	},
});

const G2 = grammar.from({
	root: 'root',
	start: 'start',
	eof: '$',
	productions: {
		root: {
			start: ['&letters', '=$'],
		},
		letters: {
			add: ['&letter', '&letter', '&letters'],
			end: [],
		},
		letter: {
			x: ['=x'],
		},
	},
});

test('leaf', throws, G1, 0);
test('leaf', throws, G1, 2);
test('leaf', throws, G1, 10);
test('leaf', throws, G1, 100);
test('leaf', throws, G1, 666);

test('node', throws, G2, 0);
test('node', throws, G2, 2);
test('node', throws, G2, 10);
test('node', throws, G2, 100);
test('node', throws, G2, 666);
