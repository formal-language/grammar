import { next } from '@aureooms/js-itertools' ;

import _parse_lazy from './_parse_lazy' ;

export default function parse ( start , eof , productions, table , stream ) {
	const root = [
		{ 'type' : 'node' , 'nonterminal' : start } ,
		{ 'type' : 'leaf' , 'terminal' : eof } ,
	] ;
	return next( _parse_lazy( eof, productions, table , root , stream , -1 , 0 ).children ) ;
}
