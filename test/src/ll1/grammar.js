import test from 'ava' ;

import { sorted , list , map } from '@aureooms/js-itertools' ;

import { increasing } from '@aureooms/js-compare' ;

import { grammar , ll1 } from '../../../src' ;

const {
	_first ,
	_follow ,
	first ,
	follow ,
} = ll1 ;

const { EW , _expandproduction } = grammar ;

const ALPHABET = ( t , abc , e ) => t.deepEqual( sorted(increasing, abc) , sorted(increasing, e ) );
const FIRST = ( t , phi , i , e ) => t.deepEqual( sorted(increasing, first(phi, _expandproduction(i))) , sorted(increasing, e) ) ;
const FOLLOW = ( t , pho , i , e) => t.deepEqual( sorted(increasing, follow(pho, _expandproduction(i))) , sorted(increasing, e) ) ;

const node = ( G , nonterminal , productionid , children ) => ({
	"type" : "node" ,
	"nonterminal" : ''+nonterminal , // needs to be a string
	"production" : ''+productionid , // needs to be a string
	children ,
}) ;

const leaf = terminal => ({ "type" : "leaf" , terminal , "buffer" : terminal }) ;

test( 'Dragon Book (2006) page 62 & 65' , t => {

	const start = '0';
	const eof = '$';
	const productions = [ // page 62
		[ // stmt : 0 (start)
			[ '=expr' , '=;' ] ,
			[ '=if' , '=(' , '=expr' , '=)' , 0 ] ,
			[ '=for' , '=(' , 1 , '=;' , 1 , '=;' , 1 , '=)' , 0 ] ,
			[ '=other' ] ,
		] ,
		[ // optexpr : 1
			[ ] ,
			[ '=expr' ] ,
		] ,
	] ;

	const G = grammar.from( { start , eof , productions } )

	t.true(ll1.is(G));

	// page 65

	ALPHABET( t , G.alphabet() , ['expr' , ';' , 'if' , '(' , ')' , 'for' , 'other' , EW] ) ;

	const phi = _first(G.productions);

	FIRST(t , phi , [0], [ 'expr', 'for', 'if', 'other' ]) ;
	FIRST(t , phi , [ '=expr', '=;' ], [ 'expr' ]) ;

}) ;

test( 'Dragon Book (2006) Example 4.30' , t => {

	const start = '0';
	const eof = '$';

	const productions = [
		[ // E : 0 (start)
			[ 2 , 1 ] ,
		] ,
		[ // E' : 1
			[ '=+' , 2 , 1 ] ,
			[ ] ,
		] ,
		[ // T : 2
			[ 4 , 3 ] ,
		] ,
		[ // T' : 3
			[ '=*' , 4 , 3 ] ,
			[ ] ,
		] ,
		[ // F : 4
			[ '=(' , 0 , '=)' ] ,
			[ '=id' ] ,
		] ,
	] ;

	const G = grammar.from( { start , eof , productions } )

	t.true(ll1.is(G));

	ALPHABET( t , G.alphabet() , ['+' , '*' , '(' , ')' , 'id' , EW] ) ;

	const phi = _first(G.productions);
	const pho = _follow(phi, start, eof, G.productions);

	// 1.
	FIRST(t, phi, [4], ['(' , 'id']);
	FIRST(t, phi, [2], ['(' , 'id']);
	FIRST(t, phi, [0], ['(' , 'id']);

	// 2.
	FIRST(t, phi, [1], ['+' , EW]);

	// 3.
	FIRST(t, phi, [3], ['*' , EW]);

	// 4.
	FOLLOW(t, pho, [0], [')' , eof]);
	FOLLOW(t, pho, [1], [')' , eof]);

	// 5.
	FOLLOW(t, pho, [2], ['+' , ')' , eof]);
	FOLLOW(t, pho, [3], ['+' , ')' , eof]);

	// 6.
	FOLLOW(t, pho, [4], [ '*' , '+' , ')' , eof]);

});

test( 'Dragon Book (2006) page 71' , t => {

	const start = '0';
	const eof = '$';

	const productions = [
		[ // expr : 0 (start)
			[ 2 , 1 ] ,
		],
		[ // rest : 1
			[ '=+' , 2 , 1 ] ,
			[ '=-' , 2 , 1 ] ,
			[ ] ,
		],
		list( map( d => [ `=${d}` ] , '0123456789' ) ) , // term : 2
	] ;

	const G = grammar.from( { start , eof , productions } ) ;

	t.true(ll1.is(G));

});

test( 'chain' , t => {

	const start = '0';
	const eof = '$';

	const productions = [
		[ // 0 (start)
			[ '=w' , 1 ] ,
		] ,
		[ // 1
			[ '=x' , 2 ] ,
			[ 2 ] ,
		] ,
		[ // 2
			[ '=y' , 3 ] ,
			[ 3 ] ,
		] ,
		[ // 3
			[ '=z' , 3 ] ,
			[ ] ,
		] ,
	] ;

	const G = grammar.from( { start , eof , productions } )

	t.true(ll1.is(G));

	ALPHABET( t , G.alphabet() , ['w' , 'x' , 'y' , 'z' , EW] ) ;

	const phi = _first(G.productions);
	const pho = _follow(phi, start, eof, G.productions);

	FIRST(t, phi, [0], ['w']);
	FIRST(t, phi, [1], ['x', 'y', 'z', EW]);
	FIRST(t, phi, [2], ['y', 'z', EW]);
	FIRST(t, phi, [3], ['z', EW]);

});

test( 'Test all features of JSON encoding' , t => {

	const object = {
		"start" : "sentence" ,
		"eof" : "$" ,
		"productions" : {
			"sentence" : {
				"main" : [
					{
						"type" : "node" ,
						"nonterminal" : "beginning-of-sentence" ,
					} ,
					"&end-of-sentence" ,
				] ,
			} ,
			"beginning-of-sentence" : {
				"main" : [ "&Word" ] ,
			} ,
			"end-of-sentence" : {
				"add" : [ "= " , "&word" , "&end-of-sentence" ] ,
				"end" : [ "=." ] ,
			} ,
			"word" : {
				"main" : [ "&lowercase-letter" , "&lowercase-letters" ] ,
			} ,
			"Word" : {
				"main" : [ "&uppercase-letter" , "&lowercase-letters" ] ,
			} ,
			"lowercase-letters" : {
				"add" : [ "&lowercase-letter" , "&lowercase-letters" ] ,
				"end" : [ ] ,
			} ,
			"lowercase-letter" : [
				[ "=a" ] ,
				[ { "type" : "leaf" , "terminal" : "b" } ] ,
				[ "=c" ] ,
			] ,
			"uppercase-letter" : [
				[ "=A" ] ,
				[ "=B" ] ,
				[ "=C" ] ,
			] ,
		} ,
	} ;

	const G = grammar.from( object ) ;

	t.true(ll1.is(G));

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
