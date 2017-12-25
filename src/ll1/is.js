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

import follow from './follow' ;
import first from './first' ;
import _first from './_first' ;
import EW from './EW' ;

/**
 * Check if grammar is ll(1).
 *
 * @param {Array} grammar
 * @returns {Boolean}
 */
export default function is ( start , grammar ) {

	const phi = _first(grammar);

	const FIRST = rule => first(phi, rule);

	// TODO this is stupid
	const containsduplicates = array => (new Set(array)).size !== array.length;

	// Dragon Book (2006) page 224: For every A, a, b such that A => a | b
	// ``... FIRST(a) and FIRST(b) are disjoint sets.''

	if ( any(
		map(
			rules => containsduplicates(
				list( chain( map( FIRST , rules ) ) )
			) ,
			grammar
		)
	) ) return false ;

	//   and ``... if the empty
	//   word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets,
	//   and likewise if the empty word is in FIRST(a).''

	const pho = follow(phi, start, grammar);

	const FOLLOW = A => pho[A];

	const dflt = {}; // dummy object

	for ( const [A, rules] of enumerate(grammar) ) {

		const yieldsEW = next( iter( filter( rule => FIRST(rule).has(EW), rules ) ) , dflt );

		if (yieldsEW === dflt) continue;

		if ( any (
			map (
				rule => containsduplicates(
					list( chain( [ FIRST(rule) , FOLLOW(A) ] ) )
				) ,
				filter(rule => rule !== yieldsEW, rules)
			)
		) ) return false ;

	}

	return true;

}
