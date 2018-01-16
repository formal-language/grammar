import test from 'ava' ;

import * as stream from '@aureooms/js-stream' ;

import { sorted , list , map , enumerate } from '@aureooms/js-itertools' ;

import { increasing } from '@aureooms/js-compare' ;

import { grammar , ast , ll1 } from '../../../src' ;

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

const node = ( G , nonterminal , productionid , children ) => { return {
	"type" : "node" ,
	"nonterminal" : ''+nonterminal , // needs to be a string
	"production" : ''+productionid , // needs to be a string
	children ,
} ; } ;

const leaf = terminal => { return { "type" : "leaf" , terminal , "buffer" : terminal } ; } ;

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

	// page 62

	const parser = ll1.from(G);

	const tokens = stream.fromiterable(
		map( ( [ i , a ] ) => { return {
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
			} ; } ,
			enumerate( 'for ( ; expr ; expr ) other'.split(' ') )
		)
	) ;

	const tree = parser.parse(tokens);

	t.deepEqual( ast.materialize( tree ) ,
		node( G , 0 , 2 , [
			leaf( "for" ) ,
			leaf( "(" ) ,
			node( G , 1 , 0 , [ ] ) ,
			leaf( ";" ) ,
			node( G , 1 , 1 , [ leaf("expr") ] ) ,
			leaf( ";" ) ,
			node( G , 1 , 1 , [ leaf("expr") ] ) ,
			leaf( ")" ) ,
			node( G , 0 , 3 , [ leaf("other") ] ) ,
		] )
	) ;

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

	const parser = ll1.from(G);

	const tokens = stream.fromiterable(
		map( ( [ i , a ] ) => { return {
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
			} ; } ,
			enumerate( '9-5+2' )
		)
	) ;

	const tree = parser.parse(tokens);

	t.deepEqual( ast.materialize( tree ) ,
		node( G , 0 , 0 , [
			node( G , 2 , 9 , [ leaf( "9" ) ] ) ,
			node( G , 1 , 1 , [
				leaf( "-" ) ,
				node( G , 2 , 5 , [ leaf( "5" ) ] ) ,
				node( G , 1 , 0 , [
					leaf( "+" ) ,
					node( G , 2 , 2 , [ leaf( "2" ) ] ) ,
					node( G , 1 , 2 , [ ] ) ,
				]) ,
			]) ,
		])
	) ;

});

test( 'Dragon Book (2006) page 49' , t => {

	const start = '0';
	const eof = '$';

	const productions = [
		[ // right : 0 (start)
			[ 1 , '==' , 0 ] ,
			[ 1 ] ,
		] ,
		list( map( l => [ `=${l}` ] , 'abcdefghijklmnopqrstuvwxyz' ) ) , // letter : 1
	] ;

	const G = grammar.from( { start , eof , productions } ) ;

	t.false(ll1.is(G));

	//const table = compile(start, eof, G);

	//const tokens = stream.fromstring('a=b=c');

	//const tree = parse(start, eof, G, table, tokens);

}) ;

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

	const parser = ll1.from(G) ;

	const tokens = stream.fromiterable(
		map( ( [ i , a ] ) => { return {
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
				"position" : i
			} ; } ,
			enumerate( 'Bac.' )
		)
	);

	const tree = parser.parse(tokens);

	t.deepEqual( ast.materialize( tree ) ,
		node( G , "sentence" , "main" , [
			node( G , "beginning-of-sentence" , "main" , [
				node( G , "Word" , "main" , [
					node( G , "uppercase-letter" , "1" , [
						{
							"type" : "leaf" ,
							"position" : 0 ,
							"terminal" : "B" ,
							"buffer" : "B" ,
						} ,
					] ,
					) ,
					node( G , "lowercase-letters" , "add" , [
						node( G , "lowercase-letter" , "0" , [
							{
								"type" : "leaf" ,
								"position" : 1 ,
								"terminal" : "a" ,
								"buffer" : "a" ,
							} ,
						] ,
						) ,
						node( G , "lowercase-letters" , "add" , [
							node( G , "lowercase-letter" , "2" , [
								{
									"type" : "leaf" ,
									"position" : 2 ,
									"terminal" : "c" ,
									"buffer" : "c" ,
								} ,
							]
							) ,
							node( G , "lowercase-letters" , "end" , [] ) ,
						]
						)
					] ,
					) ,
				] ,
				)
			] ,
			) ,
			node( G , "end-of-sentence" , "end" , [
				{
					"type" : "leaf" ,
					"position" : 3 ,
					"terminal" : "." ,
					"buffer" : "." ,
				}
			] ,
			) ,
		]
		)
	) ;

	//stream.fromstring('Cbba aba.')
	//stream.fromstring('Acc bcbb ccaaaaa.')
	//stream.fromstring('Ab cbcc baaaa cbc.')

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
