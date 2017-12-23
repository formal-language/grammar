import test from 'ava' ;

import { _first , first , follow } from '../../src' ;

import { sorted } from '@aureooms/js-itertools' ;

import { increasing } from '@aureooms/js-compare' ;

test( 'Dragon Book (2006) page 65' , t => {

	const G = [ // page 62
		[ // stmt : 0
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

	const phi = _first(G);

	t.deepEqual( sorted(increasing, first(phi, [0])) , [ 'expr', 'for', 'if', 'other' ] ) ;
	t.deepEqual( sorted(increasing, first(phi, [ 'expr', ';' ])) , [ 'expr' ] ) ;

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

	//console.log('GRAMMAR' , G);

	//const _FIRST = _first(G);
	//const FI = first(_FIRST, G);

	//console.log('_FIRST' , _FIRST);
	//console.log('FIRST' , FI);

	//const FO = follow(_FIRST, G.length - 1, G);

	//console.log('GRAMMAR' , G);
	//console.log('FOLLOW', FO);

//});
