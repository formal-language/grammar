import { list , map , filter , enumerate , range } from '@aureooms/js-itertools' ;

import { setaddall } from '../util' ;

import first from './first' ;

import EW from './EW' ;
import EOF from './EOF' ;

/**
 * Computes the FOLLOW table for all nonterminals.
 *
 * @param {Array} FIRST
 * @param {Number} start
 * @param {Array} grammar
 * @returns {Array}
 */
export default function _follow ( FIRST , start , grammar ) {

	const n = grammar.length ;

	const FOLLOW = list( map( i => new Set( i === start ? [EOF] : []) , range(n) ) ) ;

	const couldbelast = list( map ( _ => new Set() , grammar )) ;

	for (const [ A , rules ] of enumerate(grammar)) {
		for (const rule of rules) {
			for (const [ pos , B ] of enumerate(rule)) {
				if (typeof B === 'string') continue ;
				const fi = first(FIRST, rule.slice(pos+1));
				if (fi.has(EW)) couldbelast[A].add(B);
				setaddall(FOLLOW[B], filter( x => x !== EW , fi));
			}
		}
	}

	let updated = true;
	while (updated) {
		updated = false;
		for (const A of range(n)) {
			for (const B of couldbelast[A]) {
				updated |= setaddall(FOLLOW[B], FOLLOW[A]);
			}
		}
	}

	return FOLLOW;

}
