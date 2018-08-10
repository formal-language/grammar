import test from 'ava' ;

import tape from '@aureooms/js-tape' ;

import { map , enumerate } from '@aureooms/js-itertools' ;

import { grammar , ll1 } from '../../../src' ;

test( 'exhaust with parenthesis' , async t => {

	const root = 'root' ;
	const start = 0 ;
	const eof = '$' ;
	const productions = {
		"root" : [
			[ "&expr" , "=$" ] ,
		] ,
		"expr" : [
			[ '=(' , '&expr' , '=)' , '&expr' ] ,
			[ '=x' ] ,
			[ ] ,
		] ,
	} ;

	const G = grammar.from( { root , start , eof , productions } )

	t.true(ll1.is(G));

	const parser = ll1.from(G);

	const tokens = tape.fromIterable(
		map( ( [ i , a ] ) => ({
				type : "leaf" ,
				terminal : a ,
				buffer : a ,
				position : i ,
			}) ,
			enumerate( '(((()()))())x' )
		)
	) ;

	const { value: tree } = await parser.parse(tokens).children.next();

	await tree.children.next(); // (
	await tree.children.next(); // &expr
	await tree.children.next(); // )
	const { done , value } = await tree.children.next(); // x
	const x = await value.children.next();

	const got = x.value.buffer ;
	t.is(got, 'x') ;

}) ;
