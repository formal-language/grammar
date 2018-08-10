import {
	map ,
	filter ,
	chain ,
	next ,
	iter ,
} from '@aureooms/js-itertools' ;

import first from './first' ;
import _first from './_first' ;
import _follow from './_follow' ;
import { alphabet , EW } from '../grammar' ;

/**
 * Generates the rows of the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param {Map} productions
 * @returns {Iterable}
 */
export default function* _compile ( productions ) {

	const abc = alphabet(productions);

	const phi = _first(productions);
	const pho = _follow(phi, productions);

	const FIRST = rule => first(phi, rule) ;

	const dflt = {}; // dummy object

	for (const [A, rules] of productions) {

		const m = map(
			a => [
				a ,
				next(
					iter(filter(r => rules.get(r).length === 0, rules.keys())),
					dflt,
				) ,
			] ,
			filter( a => pho.get(A).has(a) && !phi.get(A).has(a), abc)
		);

		const n = map(
			a => [
				a ,
				next(
					iter(filter(r => FIRST(rules.get(r)).has(a), rules.keys())),
					dflt,
				) ,
			] ,
			filter( a => a !== EW , abc )
		);

		yield [ A , new Map(filter(([k,v]) => v !== dflt, chain([m,n]))) ] ;

	}

}
