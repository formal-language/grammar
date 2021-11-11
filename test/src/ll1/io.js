import fs from 'node:fs';
import test from 'ava';

import * as tape from '@async-abstraction/tape';
import {asyncIterableMap} from '@async-abstraction/tape';
import {grammar, ast, ll1} from '../../../src/index.js';

test("A convoluted `'010101'.replace(/0/g, 'a').replace(/1/g, 'b')` that reads from a file!", async (t) => {
	const filepath = 'test/data/010101.txt';
	const encoding = 'utf8';
	const expected = 'ababab\n';

	const G = grammar.from({
		root: 'root',
		start: 'start',
		eof: '$',
		productions: {
			root: {
				start: ['&bits', '=\n', '=$'],
			},
			bits: {
				add: ['&bit', '&bits'],
				end: [],
			},
			bit: [['=0'], ['=1']],
		},
	});

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const readStream = fs.createReadStream(filepath, {
		encoding,
		highWaterMark: 1024,
	});

	const tokens = tape.map(
		(a) => ({
			type: 'leaf',
			terminal: a,
			buffer: a,
		}),
		// eslint-disable-next-line unicorn/no-array-method-this-argument
		tape.fromReadStream(readStream),
	);

	const tree = parser.parse(tokens);

	const m = (children, match, ctx) =>
		ast.map(async (child) =>
			child.type === 'leaf' ? child : ast.transform(child, match, ctx),
		);

	const transformed = await ast.transform(tree, {
		root: {
			start: (tree, match) => ({
				type: 'node',
				nonterminal: 'root',
				production: 'start',
				children: m(tree.children, match),
			}),
		},
		bits: {
			add: (tree, match) => ({
				type: 'node',
				nonterminal: 'letters',
				production: 'yetanotherletter',
				children: m(tree.children, match),
			}),
			end: () => ({
				type: 'node',
				nonterminal: 'letters',
				production: 'done',
				children: [],
			}),
		},
		bit: [
			() => ({
				type: 'node',
				nonterminal: 'letter',
				production: 'aaa',
				children: ast.map(() => ({
					type: 'leaf',
					terminal: 'a',
					buffer: 'a',
				})),
			}),
			() => ({
				type: 'node',
				nonterminal: 'letter',
				production: 'bbb',
				children: ast.map(() => ({
					type: 'leaf',
					terminal: 'b',
					buffer: 'b',
				})),
			}),
		],
	});

	const got = await tape.toString(
		tape.fromAsyncIterable(
			asyncIterableMap((leaf) => leaf.buffer, ast.flatten(transformed)),
		),
	);
	t.is(got, expected);
});
