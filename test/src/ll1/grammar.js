import test from 'ava';

import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {sorted} from '@iterable-iterator/sorted';

import {increasing} from '@total-order/primitive';

import {grammar, ll1} from '../../../src/index.js';

const {_first, _follow, first, follow} = ll1;

const {EW, _expandproduction} = grammar;

const ALPHABET = (t, abc, e) =>
	t.deepEqual(sorted(increasing, abc), sorted(increasing, e));
const FIRST = (t, phi, i, e) =>
	t.deepEqual(
		sorted(increasing, first(phi, _expandproduction(i))),
		sorted(increasing, e),
	);
const FOLLOW = (t, pho, i, e) =>
	t.deepEqual(
		sorted(increasing, follow(pho, _expandproduction(i))),
		sorted(increasing, e),
	);

test('Dragon Book (2006) page 62 & 65', (t) => {
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

	t.true(ll1.is(G));

	// Page 65

	// eslint-disable-next-line new-cap
	ALPHABET(t, G.alphabet(), [
		'expr',
		';',
		'if',
		'(',
		')',
		'for',
		'other',
		EW,
		eof,
	]);

	const phi = _first(G.productions);

	// eslint-disable-next-line new-cap
	FIRST(t, phi, ['&stmt'], ['expr', 'for', 'if', 'other']);
	// eslint-disable-next-line new-cap
	FIRST(t, phi, ['=expr', '=;'], ['expr']);
});

test('Dragon Book (2006) Example 4.30', (t) => {
	const root = 'R';
	const start = 0;
	const eof = '$';

	const productions = {
		R: [['&E', '=$']],
		E: [
			// E : 0 (start)
			['&T', "&E'"],
		],
		"E'": [
			// E' : 1
			['=+', '&T', "&E'"],
			[],
		],
		T: [
			// T : 2
			['&F', "&T'"],
		],
		"T'": [
			// T' : 3
			['=*', '&F', "&T'"],
			[],
		],
		F: [
			// F : 4
			['=(', '&E', '=)'],
			['=id'],
		],
	};

	const G = grammar.from({root, start, eof, productions});

	t.true(ll1.is(G));

	// eslint-disable-next-line new-cap
	ALPHABET(t, G.alphabet(), ['+', '*', '(', ')', 'id', EW, eof]);

	const phi = _first(G.productions);
	const pho = _follow(phi, G.productions);

	// 1.
	// eslint-disable-next-line new-cap
	FIRST(t, phi, ['&F'], ['(', 'id']);
	// eslint-disable-next-line new-cap
	FIRST(t, phi, ['&T'], ['(', 'id']);
	// eslint-disable-next-line new-cap
	FIRST(t, phi, ['&E'], ['(', 'id']);

	// 2.
	// eslint-disable-next-line new-cap
	FIRST(t, phi, ["&E'"], ['+', EW]);

	// 3.
	// eslint-disable-next-line new-cap
	FIRST(t, phi, ["&T'"], ['*', EW]);

	// 4.
	// eslint-disable-next-line new-cap
	FOLLOW(t, pho, ['&E'], [')', eof]);
	// eslint-disable-next-line new-cap
	FOLLOW(t, pho, ["&E'"], [')', eof]);

	// 5.
	// eslint-disable-next-line new-cap
	FOLLOW(t, pho, ['&T'], ['+', ')', eof]);
	// eslint-disable-next-line new-cap
	FOLLOW(t, pho, ["&T'"], ['+', ')', eof]);

	// 6.
	// eslint-disable-next-line new-cap
	FOLLOW(t, pho, ['&F'], ['*', '+', ')', eof]);
});

test('Dragon Book (2006) page 71', (t) => {
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

	t.true(ll1.is(G));
});

test('chain', (t) => {
	const start = '0';
	const eof = '$';

	const productions = [
		[
			// 0 (start)
			['=w', 1],
		],
		[
			// 1
			['=x', 2],
			[2],
		],
		[
			// 2
			['=y', 3],
			[3],
		],
		[
			// 3
			['=z', 3],
			[],
		],
	];

	const G = grammar.from({start, eof, productions});

	t.true(ll1.is(G));

	// eslint-disable-next-line new-cap
	ALPHABET(t, G.alphabet(), ['w', 'x', 'y', 'z', EW]);

	const phi = _first(G.productions);
	_follow(phi, G.productions);

	// eslint-disable-next-line new-cap
	FIRST(t, phi, [0], ['w']);
	// eslint-disable-next-line new-cap
	FIRST(t, phi, [1], ['x', 'y', 'z', EW]);
	// eslint-disable-next-line new-cap
	FIRST(t, phi, [2], ['y', 'z', EW]);
	// eslint-disable-next-line new-cap
	FIRST(t, phi, [3], ['z', EW]);
});

test('Test all features of JSON encoding', (t) => {
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

	t.true(ll1.is(G));
});

// Function resolve ( rules ) {

// const n = rules.length ;

// const grammar = [] ;

// for ( let i = 0 ; i < n ; ++i ) {
// const rule = rules[i] ;
// grammar[i] = rule.map( p => p.map(x => (typeof x) === 'string' ? x : ((i-x)%n+n)%n ) ) ;
// }

// return grammar;

// }

// test( 'euh' , t => {

// const ra = op => [ 1 , op , 0 ];
// const la = op => [ 0 , op , 1 ];
// const pr = x => [ '(' , x , ')' ];
// const digits = '0123456789'.split('').map(x=>[x]);
// const mu = '*';
// const di = '/';
// const ad = '+';
// const su = '-';
// const eq = '=';

// const atom = x => x.concat([pr(1)]);
// const prec = ass => x => Array.prototype.map.call(x,ass).concat([[1]]);
// const left = prec(la);
// const right = prec(ra);

// const rules = [
// atom(digits.map(x => [0, x[0]]).concat(digits)),
// atom([[ 'n' ]]),
// [ [ '-' , 0 ] , [ '+' , 0 ] , [ 1 ] ],
// left(mu+di),
// left(ad+su),
// right(eq),
// ] ;

// const G = resolve(rules);

// });
