import test from 'ava' ;

import {map} from '@iterable-iterator/map';
import {chain} from '@iterable-iterator/chain';
import {range} from '@iterable-iterator/range';
import * as tape from '@async-abstraction/tape' ;
import {asyncIterableMap} from '@async-abstraction/tape';
import { grammar , ast , ll1 } from '../../../src/index.js' ;

async function throws ( t , G , n ) {

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = tape.fromIterable(
		chain(
			map(
				i => ({
					"type" : "leaf" ,
					"terminal" : "x" ,
					"buffer" : "x" ,
					"position" : i ,
				}) ,
				range(n)
			) ,
			[
				{
					"type" : "leaf" ,
					"terminal" : ")" ,
					"buffer" : ")" ,
					"position" : n+1 ,
				} ,
			] ,
		)
	) ;

	const expectedError = {
		message: new RegExp( `Syntax error at ${n+1} \\(\\)\\)` ),
	};

	const tree = parser.parse(tokens);

	const flattened = ast.flatten( tree ) ;

	const chunks = asyncIterableMap( leaf => leaf.buffer , flattened ) ;

	const output = tape.fromAsyncIterable( chunks ) ;

	for ( const _ of range(n) ) t.is( await output.read(), 'x') ;
	await t.throwsAsync( output.read() , expectedError ) ;
}

throws.title = ( which , G , n ) => `Lookahead mismatch error at position ${n+1} (follow case).` ;

const G1 = grammar.from( {
	"root" : "root" ,
	"start" : "start" ,
	"eof" : "$" ,
	"productions" : {
		"root" : {
			"start" : [ "&expr" , "=$" ]
		} ,
		"expr" : {
			"prn" : [ "=(" , "&expr" , "=)"  ] ,
			"add" : [ "=x" , "&expr" ] ,
			"end" : [ ]
		}
	}
} ) ;


test( throws , G1 , 0 ) ;
test( throws , G1 , 1 ) ;
test( throws , G1 , 10 ) ;
test( throws , G1 , 100 ) ;
test( throws , G1 , 666 ) ;
