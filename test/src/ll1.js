import test from 'ava' ;

import {
	StreamFromIterable ,
	compile ,
	parse ,
	alphabet ,
	_first ,
	first ,
	follow ,
	EOF ,
	EW ,
} from '../../src' ;

import { sorted } from '@aureooms/js-itertools' ;

import { increasing } from '@aureooms/js-compare' ;


const ALPHABET = ( t , abc , e ) => t.deepEqual( sorted(increasing, abc) , sorted(increasing, e ) );
const FIRST = ( t , phi , i , e ) => t.deepEqual( sorted(increasing, first(phi, i)) , sorted(increasing, e) ) ;
const FOLLOW = ( t , pho , i , e) => t.deepEqual( sorted(increasing, pho[i]) , sorted(increasing, e) ) ;


test( 'Dragon Book (2006) page 65' , t => {

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

	const abc = alphabet(G);

	ALPHABET( t , abc , ['expr' , ';' , 'if' , '(' , ')' , 'for' , 'other' , EW] ) ;

	const phi = _first(G);

	FIRST(t , phi , [0], [ 'expr', 'for', 'if', 'other' ]) ;
	FIRST(t , phi , [ 'expr', ';' ], [ 'expr' ]) ;

}) ;

test( 'Dragon Book (2006) Example 4.30' , t => {

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

	const abc = alphabet(G);

	ALPHABET( t , abc , ['+' , '*' , '(' , ')' , 'id' , EW] ) ;

	const phi = _first(G);
	const pho = follow(phi, 0, G);

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

	const G = [
		[ // expr : 0 (start)
			[ 2 , 1 ] ,
		],
		[ // rest : 1
			[ '+' , 2 , 1 ] ,
			[ '-' , 2 , 1 ] ,
			[ ] ,
		],
		[ // term : 2
			[ '0' ] ,
			[ '1' ] ,
			[ '2' ] ,
			[ '3' ] ,
			[ '4' ] ,
			[ '5' ] ,
			[ '6' ] ,
			[ '7' ] ,
			[ '8' ] ,
			[ '9' ] ,
		],
	] ;

	const start = 0;

	const prog = compile(G, start);

	const stream = new StreamFromIterable('9-5+2');

	const tree = parse(prog, start, stream);

	t.deepEqual( tree ,
		[
			[
				["9"],
				[
					"-",
					["5"],
					[
						"+",
						["2"],
						[]
					]
				]
			],
			EOF
		]
	) ;

});


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

	//console.log('GRAMMAR' , G);

	//const _FIRST = _first(G);
	//const FI = first(_FIRST, G);

	//console.log('_FIRST' , _FIRST);
	//console.log('FIRST' , FI);

	//const FO = follow(_FIRST, G.length - 1, G);

	//console.log('GRAMMAR' , G);
	//console.log('FOLLOW', FO);

//});
