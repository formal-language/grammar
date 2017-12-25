import test from 'ava' ;

import * as stream from '@aureooms/js-stream' ;

import { sorted , list , map } from '@aureooms/js-itertools' ;

import { increasing } from '@aureooms/js-compare' ;

import { ll1 } from '../../src' ;

const {
	compile ,
	parse ,
	alphabet ,
	_first ,
	first ,
	follow ,
	EOF ,
	EW ,
} = ll1 ;

const ALPHABET = ( t , abc , e ) => t.deepEqual( sorted(increasing, abc) , sorted(increasing, e ) );
const FIRST = ( t , phi , i , e ) => t.deepEqual( sorted(increasing, first(phi, i)) , sorted(increasing, e) ) ;
const FOLLOW = ( t , pho , i , e) => t.deepEqual( sorted(increasing, pho[i]) , sorted(increasing, e) ) ;

test( 'Dragon Book (2006) page 62 & 65' , t => {

	const start = 0;

	const G = [ // page 62
		[ // stmt : 0 (start)
			[ 'expr' , ';' ] ,
			[ 'if' , '(' , 'expr' , ')' , 0 ] ,
			[ 'for' , '(' , 1 , ';' , 1 , ';' , 1 , ')' , 0 ] ,
			[ 'other' ] ,
		] ,
		[ // optexpr : 1
			[ ] ,
			[ 'expr' ] ,
		] ,
	] ;

	t.true(ll1.is(start, G));

	// page 65

	const abc = alphabet(G);

	ALPHABET( t , abc , ['expr' , ';' , 'if' , '(' , ')' , 'for' , 'other' , EW] ) ;

	const phi = _first(G);

	FIRST(t , phi , [0], [ 'expr', 'for', 'if', 'other' ]) ;
	FIRST(t , phi , [ 'expr', ';' ], [ 'expr' ]) ;

	// page 62

	const table = compile(start, G);

	const tokens = stream.fromiterable('for ( ; expr ; expr ) other'.split(' '));

	const tree = parse(start, G, table, tokens);

	t.deepEqual( tree ,
		{
			'nonterminal' : -1 ,
			'production' : {
				'id' : 0 ,
				'rule' : [ start , EOF ] ,
			} ,
			'children' : [
				{
					'nonterminal' : 0 ,
					'production': {
						'id' : 2 ,
						'rule' : G[0][2] ,
					} ,
					'children' : [
						"for" ,
						"(" ,
						{
							'nonterminal' : 1 ,
							'production' : {
								'id' : 0 ,
								'rule' : [] ,
							} ,
							'children' : [] ,
						} ,
						';' ,
						{
							'nonterminal' : 1 ,
							'production' : {
								'id' : 1 ,
								'rule' : G[1][1] ,
							} ,
							'children' : G[1][1] ,
						} ,
						';' ,
						{
							'nonterminal' : 1 ,
							'production' : {
								'id' : 1 ,
								'rule' : G[1][1] ,
							} ,
							'children' : G[1][1] ,
						} ,
						')' ,
						{
							'nonterminal' : 0 ,
							'production' : {
								'id' : 3 ,
								'rule' : G[0][3] ,
							} ,
							'children' : G[0][3] ,
						} ,
					]
				}
				, EOF
			]
		}
	) ;

}) ;

test( 'Dragon Book (2006) Example 4.30' , t => {

	const start = 0;

	const G = [
		[ // E : 0 (start)
			[ 2 , 1 ] ,
		] ,
		[ // E' : 1
			[ '+' , 2 , 1 ] ,
			[ ] ,
		] ,
		[ // T : 2
			[ 4 , 3 ] ,
		] ,
		[ // T' : 3
			[ '*' , 4 , 3 ] ,
			[ ] ,
		] ,
		[ // F : 4
			[ '(' , 0 , ')' ] ,
			[ 'id' ] ,
		] ,
	] ;

	t.true(ll1.is(start, G));

	const abc = alphabet(G);

	ALPHABET( t , abc , ['+' , '*' , '(' , ')' , 'id' , EW] ) ;

	const phi = _first(G);
	const pho = follow(phi, start, G);

	// 1.
	FIRST(t, phi, [4], ['(' , 'id']);
	FIRST(t, phi, [2], ['(' , 'id']);
	FIRST(t, phi, [0], ['(' , 'id']);

	// 2.
	FIRST(t, phi, [1], ['+' , EW]);

	// 3.
	FIRST(t, phi, [3], ['*' , EW]);

	// 4.
	FOLLOW(t, pho, [0], [')' , EOF]);
	FOLLOW(t, pho, [1], [')' , EOF]);

	// 5.
	FOLLOW(t, pho, [2], ['+' , ')' , EOF]);
	FOLLOW(t, pho, [3], ['+' , ')' , EOF]);

	// 6.
	FOLLOW(t, pho, [4], [ '*' , '+' , ')' , EOF]);

});

test( 'Dragon Book (2006) page 71' , t => {

	const start = 0;

	const G = [
		[ // expr : 0 (start)
			[ 2 , 1 ] ,
		],
		[ // rest : 1
			[ '+' , 2 , 1 ] ,
			[ '-' , 2 , 1 ] ,
			[ ] ,
		],
		list( map( list , '0123456789' ) ) , // term : 2
	] ;

	t.true(ll1.is(start, G));

	const table = compile(start, G);

	const tokens = stream.fromstring('9-5+2');

	const tree = parse(start, G, table, tokens);

	t.deepEqual( tree ,
		{
			'nonterminal' : -1 ,
			'production' : {
				'id' : 0 ,
				'rule' : [ start , EOF ] ,
			} ,
			'children' : [
				{
					'nonterminal' : 0 ,
					'production': {
						'id' : 0 ,
						'rule' : G[0][0] ,
					} ,
					'children' : [
						{
							'nonterminal' : 2 ,
							'production': {
								'id' : 9 ,
								'rule' : G[2][9] ,
							} ,
							'children' : ["9"]
						} ,
						{
							'nonterminal' : 1 ,
							'production': {
								'id' : 1 ,
								'rule' : G[1][1] ,
							} ,
							'children' : [
								"-",
								{
									'nonterminal' : 2 ,
									'production': {
										'id' : 5 ,
										'rule' : G[2][5] ,
									} ,
									'children' : ["5"]
								} ,
								{
									'nonterminal' : 1 ,
									'production': {
										'id' : 0 ,
										'rule' : G[1][0] ,
									} ,
									'children' : [
										"+",
										{
											'nonterminal' : 2 ,
											'production': {
												'id' : 2 ,
												'rule' : G[2][2] ,
											} ,
											'children' : ["2"]
										} ,
										{
											'nonterminal' : 1 ,
											'production': {
												'id' : 2 ,
												'rule' : G[1][2] ,
											} ,
											'children' : []
										}
									]
								}
							]
						}
					]
				}
				, EOF
			]
		}
	) ;

});

test( 'Dragon Book (2006) page 49' , t => {

	const start = 0;

	const G = [
		[ // right : 0 (start)
			[ 1 , '=' , 0 ] ,
			[ 1 ] ,
		] ,
		list( map( list , 'abcdefghijklmnopqrstuvwxyz' ) ) , // letter : 1
	] ;

	t.false(ll1.is(start, G));

	//const table = compile(start, G);

	//const tokens = stream.fromstring('a=b=c');

	//const tree = parse(start, G, table, tokens);

}) ;


//function resolve ( rules ) {

	//const n = rules.length ;

	//const grammar = [] ;

	//for ( let i = 0 ; i < n ; ++i ) {
		//const rule = rules[i] ;
		//grammar[i] = rule.map( p => p.map(x => (typeof x) === 'string' ? x : ((i-x)%n+n)%n ) ) ;
	//}

	//return grammar;

//}

//test( 'euh' , t => {

	//const ra = op => [ 1 , op , 0 ];
	//const la = op => [ 0 , op , 1 ];
	//const pr = x => [ '(' , x , ')' ];
	//const digits = '0123456789'.split('').map(x=>[x]);
	//const mu = '*';
	//const di = '/';
	//const ad = '+';
	//const su = '-';
	//const eq = '=';

	//const atom = x => x.concat([pr(1)]);
	//const prec = ass => x => Array.prototype.map.call(x,ass).concat([[1]]);
	//const left = prec(la);
	//const right = prec(ra);

	//const rules = [
		//atom(digits.map(x => [0, x[0]]).concat(digits)),
		//atom([[ 'n' ]]),
		//[ [ '-' , 0 ] , [ '+' , 0 ] , [ 1 ] ],
		//left(mu+di),
		//left(ad+su),
		//right(eq),
	//] ;


	//const G = resolve(rules);

//});
