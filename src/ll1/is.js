import {
	any ,
	map ,
	list ,
	chain ,
	enumerate ,
	next ,
	iter ,
	filter ,
} from '@aureooms/js-itertools' ;

import _first from './_first' ;
import _follow from './_follow' ;
import first from './first' ;
import { EW } from '../grammar' ;

/**
 * Check if grammar is ll(1).
 *
 * @param {Grammar} grammar
 * @returns {Boolean}
 */
export default function is ( { start , eof , productions } ) {

	const phi = _first(productions);

	const FIRST = rule => first(phi, rule);

	// TODO this is stupid
	const containsduplicates = array => (new Set(array)).size !== array.length;

	// Dragon Book (2006) page 224: For every A, a, b such that A => a | b
	// ``... FIRST(a) and FIRST(b) are disjoint sets.''

	if ( any(
		map(
			rules => containsduplicates(
				list( chain( map( FIRST , rules.values() ) ) )
			) ,
			productions.values()
		)
	) ) return false ;

	//   and ``... if the empty
	//   word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets,
	//   and likewise if the empty word is in FIRST(a).''

	const pho = _follow(phi, start, eof, productions);

	const FOLLOW = A => pho.get(A);

	const dflt = {}; // dummy object

	for ( const [A, rules] of productions ) {

		const yieldsEW = next( iter( filter( rule => FIRST(rule).has(EW), rules.values() ) ) , dflt );

		if (yieldsEW === dflt) continue;

		if ( any (
			map (
				rule => containsduplicates(
					list( chain( [ FIRST(rule) , FOLLOW(A) ] ) )
				) ,
				filter(rule => rule !== yieldsEW, rules.values())
			)
		) ) return false ;

	}

	return true;

}
