import test from 'ava' ;

import { list , map } from '@aureooms/js-itertools' ;

import { grammar , ll1 } from '../../../src' ;

test( 'invalid node type in _expandproduction (_makenode)' , t => {

	const root = 'R' ;
	const start = 0 ;
	const eof = '$';

	const productions = {
		"R" : [
			[ "&S" , '=$' ]
		] ,
		"S" : [
			[ "&A" , "+x" ]
		] ,
		"A" : [
			[ "=x" ] ,
			[ ]
		]
	} ;

	t.throws( () => grammar.from( { root , start , eof , productions } ) , /\+ is not a valid type/ ) ;

}) ;
