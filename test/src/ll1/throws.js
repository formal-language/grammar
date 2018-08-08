import test from 'ava' ;

import { iter , map , chain , enumerate , list , range , nrepeat } from '@aureooms/js-itertools' ;
import tape , { asyncIterableToArray , asyncIterableMap } from '@aureooms/js-tape' ;
import { grammar , ast , ll1 , error } from '../../../src' ;

const {
	LookaheadMismatchError ,
} = error ;

async function throws ( t , n ) {

	const G = grammar.from( {
		"start" : "letters" ,
		"eof" : "$" ,
		"productions" : {
			"letters" : {
				"add" : [ "&letter" , "&letters" ] ,
				"end" : [ ] ,
			} ,
			"letter" : {
				"x" : [ "=x" ] ,
			} ,
		} ,
	} ) ;

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = tape.fromIterable(
		chain( [
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
					"terminal" : "y" ,
					"buffer" : "y" ,
					"position" : n+1 ,
				} ,
			] ,
		] )
	) ;


	if ( n === 0 ) {

		// THIS DOES NOT WORK
		//await t.throws( async () => parser.parse(tokens) , /at 1 \(y\)/ ) ;
		//await t.throws( async () => await parser.parse(tokens) ) ;

		// WHAT WORKS IS BELOW
		//try {
			//const tree = await parser.parse(tokens) ;
			//t.fail();
		//}
		//catch ( e ) {
			//console.debug(e);
			//t.pass();
		//}
		return parser.parse(tokens)
			.then( tree => t.fail() )
			.catch( error => {
				t.true(error instanceof LookaheadMismatchError) ;
				t.true(/at 1 \(y\)/.test(error.message)) ;
			} ) ;

	}

	else {

		const tree = await parser.parse(tokens);

		const flattened = ast.flatten( tree ) ;

		const chunks = asyncIterableMap( leaf => leaf.buffer , flattened ) ;

		const output = tape.fromAsyncIterable( chunks ) ;

		// AGAIN THIS DOES NOT WORK
		// await t.throws( () => tape.toString( output ) , new RegExp( `at ${n+1} \\(y\\)` ) ) ;

		return tape.toString( output )
			.then( string => t.fail() )
			.catch( error => {
				t.true(error instanceof LookaheadMismatchError) ;
				t.true(new RegExp(`at ${n+1} \\(y\\)`).test(error.message)) ;
			} ) ;

	}

}

throws.title = ( _ , n ) => `Lookahead mismatch at position ${n+1}.` ;

test( throws , 0 ) ;
test( throws , 1 ) ;
test( throws , 10 ) ;
test( throws , 100 ) ;
test( throws , 666 ) ;
