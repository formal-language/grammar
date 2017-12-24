import {
	list ,
	enumerate ,
	map ,
	filter ,
	chain ,
	next ,
	iter ,
} from '@aureooms/js-itertools' ;

import { first , _first } from './first' ;
import { follow } from './follow' ;
import { alphabet } from './alphabet' ;
import { EW , EOF } from './constants' ;

/**
 * Compile the given grammar into a DFA.
 * TODO use js-dfa
 * TODO handle translation
 *
 * @param grammar
 * @returns {undefined}
 */
export function compile (grammar, start) {
	return list(_compile(grammar, start));
}

export function* _compile ( grammar , start ) {

	const abc = alphabet(grammar);

	const phi = _first(grammar);
	const pho = follow(phi, start, grammar);

	const FIRST = rule => first(phi, rule) ;

	const dflt = [];

	for (const [A, rules] of enumerate(grammar)) {

		const m = map(
			a => [
				a ,
				next(
					iter(filter(rule => rule.length === 0, rules)),
					dflt,
				) ,
			] ,
			filter( a => pho[A].has(a) && !phi[A].has(a), chain([abc,[EOF]]))
		);

		const n = map(
			a => [
				a ,
				next(
					iter(filter(rule => FIRST(rule).has(a), rules)),
					dflt,
				) ,
			] ,
			filter( a => a != EW , abc )
		);

		const prog = new Map(filter(([k,v]) => v !== dflt, chain([m,n])));

		yield prog;

	}

}
