import test from 'ava' ;

import { list , map } from '@aureooms/js-itertools' ;

import { grammar , ll1 } from '../../../src' ;

test( 'invalid node type in _expandproduction (_makenode)' , t => {

	const start = 'S';
	const eof = '$';

	const productions = {
		"S" : [
			[ "&A" , "+x" ]
		] ,
		"A" : [
			[ "=x" ] ,
			[ ]
		]
	} ;

	t.throws( () => grammar.from( { start , eof , productions } , /\+ is not a valid type/ ) ) ;

}) ;
