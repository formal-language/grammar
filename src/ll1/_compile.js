import {
	enumerate ,
	map ,
	filter ,
	chain ,
	next ,
	iter ,
	range ,
} from '@aureooms/js-itertools' ;

import first from './first' ;
import _first from './_first' ;
import _follow from './_follow' ;
import alphabet from './alphabet' ;
import EW from './EW' ;
import EOF from './EOF' ;

/**
 * Generates the lines of the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * TODO handle translation
 *
 * @param grammar
 * @param start
 * @returns {undefined}
 */
export default function* _compile ( start , grammar ) {

	const abc = alphabet(grammar);

	const phi = _first(grammar);
	const pho = _follow(phi, start, grammar);

	const FIRST = rule => first(phi, rule) ;

	const dflt = {}; // dummy object

	for (const [A, rules] of enumerate(grammar)) {

		const m = map(
			a => [
				a ,
				next(
					iter(filter(r => rules[r].length === 0, range(rules.length))),
					dflt,
				) ,
			] ,
			filter( a => pho[A].has(a) && !phi[A].has(a), chain([abc,[EOF]]))
		);

		const n = map(
			a => [
				a ,
				next(
					iter(filter(r => FIRST(rules[r]).has(a), range(rules.length))),
					dflt,
				) ,
			] ,
			filter( a => a !== EW , abc )
		);

		yield new Map(filter(([k,v]) => v !== dflt, chain([m,n])));

	}

}
