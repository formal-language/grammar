import test from 'ava' ;

import {fromIterable} from '@async-abstraction/tape';

import {map} from '@iterable-iterator/map';
import {enumerate} from '@iterable-iterator/zip';

import { grammar , ll1 } from '../../../src/index.js' ;

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

	const tokens = fromIterable(
		map( ( [ i , a ] ) => ({
				type : "leaf" ,
				terminal : a ,
				buffer : a ,
				position : i ,
			}) ,
			enumerate( '(((()()))())x' )
		)
	) ;

	const { value: tree } = await parser.parse(tokens).children[Symbol.asyncIterator]().next();

	const it = tree.children[Symbol.asyncIterator]();

	await it.next(); // (
	await it.next(); // &expr
	await it.next(); // )
	const { done , value } = await it.next(); // x
	const x = await value.children[Symbol.asyncIterator]().next();

	const got = x.value.buffer ;
	t.is(got, 'x') ;

}) ;
