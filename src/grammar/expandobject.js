import {list} from '@iterable-iterator/list';

import _expandproduction from './_expandproduction.js' ;

function* _expandproductions ( productions ) {
	for ( const key in productions ) yield [ key , list( _expandproduction( productions[key] ) ) ] ;
}

function* _expandobject ( object ) {
	for ( const nonterminal in object ) yield [ nonterminal , new Map( _expandproductions( object[nonterminal] ) ) ] ;
}

export default function expandobject ( object ) {
	return new Map( _expandobject( object ) ) ;
}
