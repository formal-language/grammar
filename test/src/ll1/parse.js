import test from 'ava';

import {fromIterable} from '@async-abstraction/tape';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {enumerate} from '@iterable-iterator/zip';

import {grammar, ast, ll1} from '../../../src/index.js';

const node = (G, nonterminal, productionid, children) => ({
	type: 'node',
	nonterminal: String(nonterminal), // Needs to be a string
	production: String(productionid), // Needs to be a string
	children,
});

const leaf = (terminal) => ({type: 'leaf', terminal, buffer: terminal});

const eofleaf = (terminal) => ({type: 'leaf', terminal});

test('Dragon Book (2006) page 62', async (t) => {
	const root = 'root';
	const start = 0;
	const eof = '$';
	const productions = {
		// Page 62
		root: [['&stmt', '=$']],
		stmt: [
			// Stmt : 0 (start)
			['=expr', '=;'],
			['=if', '=(', '=expr', '=)', '&stmt'],
			[
				'=for',
				'=(',
				'&optexpr',
				'=;',
				'&optexpr',
				'=;',
				'&optexpr',
				'=)',
				'&stmt',
			],
			['=other'],
		],
		optexpr: [
			// Optexpr : 1
			[],
			['=expr'],
		],
	};

	const G = grammar.from({root, start, eof, productions});

	// Page 62

	const parser = ll1.from(G);

	const tokens = fromIterable(
		map(
			([_i, a]) => ({
				type: 'leaf',
				terminal: a,
				buffer: a,
			}),
			enumerate('for ( ; expr ; expr ) other'.split(' ')),
		),
	);

	const tree = parser.parse(tokens);

	const expected = node(G, 'root', 0, [
		node(G, 'stmt', 2, [
			leaf('for'),
			leaf('('),
			node(G, 'optexpr', 0, []),
			leaf(';'),
			node(G, 'optexpr', 1, [leaf('expr')]),
			leaf(';'),
			node(G, 'optexpr', 1, [leaf('expr')]),
			leaf(')'),
			node(G, 'stmt', 3, [leaf('other')]),
		]),
		eofleaf(eof),
	]);

	const materialized1 = await ast.materialize(tree);

	t.deepEqual(materialized1, expected);

	const materialized2 = await ast.materialize(materialized1);

	t.deepEqual(materialized2, expected);
});

test('Dragon Book (2006) page 71', async (t) => {
	const root = 0;
	const start = 0;
	const eof = '$';

	const productions = [
		[
			// Expr : 0 (start)
			[2, 1, '=$'],
		],
		[
			// Rest : 1
			['=+', 2, 1],
			['=-', 2, 1],
			[],
		],
		list(map((d) => [`=${d}`], '0123456789')), // Term : 2
	];

	const G = grammar.from({root, start, eof, productions});

	const parser = ll1.from(G);

	const tokens = fromIterable(
		map(
			([_i, a]) => ({
				type: 'leaf',
				terminal: a,
				buffer: a,
			}),
			enumerate('9-5+2'),
		),
	);

	const tree = parser.parse(tokens);

	const expected = node(G, 0, 0, [
		node(G, 2, 9, [leaf('9')]),
		node(G, 1, 1, [
			leaf('-'),
			node(G, 2, 5, [leaf('5')]),
			node(G, 1, 0, [leaf('+'), node(G, 2, 2, [leaf('2')]), node(G, 1, 2, [])]),
		]),
		eofleaf(eof),
	]);

	const materialized1 = await ast.materialize(tree);

	t.deepEqual(materialized1, expected);

	const materialized2 = await ast.materialize(materialized1);

	t.deepEqual(materialized2, expected);
});

test('Test all features of JSON encoding', async (t) => {
	const object = {
		root: 'sentence',
		start: 'main',
		eof: '$',
		productions: {
			sentence: {
				main: [
					{
						type: 'node',
						nonterminal: 'beginning-of-sentence',
					},
					'&end-of-sentence',
					'=$',
				],
			},
			'beginning-of-sentence': {
				main: ['&Word'],
			},
			'end-of-sentence': {
				add: ['= ', '&word', '&end-of-sentence'],
				end: ['=.'],
			},
			word: {
				main: ['&lowercase-letter', '&lowercase-letters'],
			},
			Word: {
				main: ['&uppercase-letter', '&lowercase-letters'],
			},
			'lowercase-letters': {
				add: ['&lowercase-letter', '&lowercase-letters'],
				end: [],
			},
			'lowercase-letter': [['=a'], [{type: 'leaf', terminal: 'b'}], ['=c']],
			'uppercase-letter': [['=A'], ['=B'], ['=C']],
		},
	};

	const G = grammar.from(object);

	const parser = ll1.from(G);

	const tokens = fromIterable(
		map(
			([i, a]) => ({
				type: 'leaf',
				terminal: a,
				buffer: a,
				position: i,
			}),
			enumerate('Bac.'),
		),
	);

	const tree = parser.parse(tokens);

	const expected = node(G, 'sentence', 'main', [
		node(G, 'beginning-of-sentence', 'main', [
			node(G, 'Word', 'main', [
				node(G, 'uppercase-letter', '1', [
					{
						type: 'leaf',
						position: 0,
						terminal: 'B',
						buffer: 'B',
					},
				]),
				node(G, 'lowercase-letters', 'add', [
					node(G, 'lowercase-letter', '0', [
						{
							type: 'leaf',
							position: 1,
							terminal: 'a',
							buffer: 'a',
						},
					]),
					node(G, 'lowercase-letters', 'add', [
						node(G, 'lowercase-letter', '2', [
							{
								type: 'leaf',
								position: 2,
								terminal: 'c',
								buffer: 'c',
							},
						]),
						node(G, 'lowercase-letters', 'end', []),
					]),
				]),
			]),
		]),
		node(G, 'end-of-sentence', 'end', [
			{
				type: 'leaf',
				position: 3,
				terminal: '.',
				buffer: '.',
			},
		]),
		eofleaf(object.eof),
	]);

	const materialized1 = await ast.materialize(tree);

	t.deepEqual(materialized1, expected);

	const materialized2 = await ast.materialize(materialized1);

	t.deepEqual(materialized2, expected);
});
