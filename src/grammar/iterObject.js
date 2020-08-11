import assert from 'assert';

import { list } from '@aureooms/js-itertools' ;
import _expandproduction from './_expandproduction' ;

export default function* iterObject ( productions ) {
	assert(productions instanceof Object);
	for ( const [ nonterminal , rules ] of Object.entries(productions) ) {
		assert(rules instanceof Object);
		for ( const [ key , rule ] of Object.entries(rules) ) {
			const expandedRule = list(_expandproduction(rule)) ;
			yield [ nonterminal , expandedRule , key ] ;
		}
	}
}
