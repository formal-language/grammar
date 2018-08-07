import test from 'ava' ;

import stream from '@aureooms/js-stream' ;

import { list , map , enumerate } from '@aureooms/js-itertools' ;

import { grammar , ast , ll1 } from '../../../src' ;

const node = ( G , nonterminal , productionid , children ) => ({
	"type" : "node" ,
	"nonterminal" : ''+nonterminal , // needs to be a string
	"production" : ''+productionid , // needs to be a string
	children ,
}) ;

const leaf = terminal => ({ "type" : "leaf" , terminal , "buffer" : terminal }) ;

test( 'Dragon Book (2006) page 62' , async t => {

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

	// page 62

	const parser = ll1.from(G);

	const tokens = stream.fromIterable(
		map( ( [ i , a ] ) => ({
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
			}) ,
			enumerate( 'for ( ; expr ; expr ) other'.split(' ') )
		)
	) ;

	const tree = await parser.parse(tokens);

	t.deepEqual( await ast.materialize( tree ) ,
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


test( 'Dragon Book (2006) page 71' , async t => {

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

	const parser = ll1.from(G);

	const tokens = stream.fromIterable(
		map( ( [ i , a ] ) => ({
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
			}) ,
			enumerate( '9-5+2' )
		)
	) ;

	const tree = await parser.parse(tokens);

	t.deepEqual( await ast.materialize( tree ) ,
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

test( 'Test all features of JSON encoding' , async t => {

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

	const parser = ll1.from(G) ;

	const tokens = stream.fromIterable(
		map( ( [ i , a ] ) => ({
				"type" : "leaf" ,
				"terminal" : a ,
				"buffer" : a ,
				"position" : i
			}) ,
			enumerate( 'Bac.' )
		)
	);

	const tree = await parser.parse(tokens);

	t.deepEqual( await ast.materialize( tree ) ,
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
