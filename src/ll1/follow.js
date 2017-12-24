import { list , map , filter , enumerate } from '@aureooms/js-itertools' ;

import { setaddall } from '../util' ;

import { first } from './first' ;

import { EW , EOF } from './constants' ;

/**
 * Computes the FOLLOW table for all nonterminals.
 *
 * @param {Array} FIRST
 * @param {Number} start
 * @param {Array} grammar
 * @returns {Array}
 */
export function follow ( FIRST , start , grammar ) {

	const FOLLOW = list( map( _ => new Set() , grammar ) ) ;

	FOLLOW[start].add(EOF);

	let updated = true;

	while (updated) {
		updated = false;
		for (const [ A , rules ] of enumerate(grammar)) {
			for (const rule of rules) {
				for (const [ pos , B ] of enumerate(rule)) {
					if (typeof B === 'string') continue ;
					const fi = first(FIRST, rule.slice(pos+1));
					if (fi.has(EW)) updated |= setaddall(FOLLOW[B], FOLLOW[A]);
					updated |= setaddall(FOLLOW[B], filter( x => x !== EW , fi));
				}
			}
		}
	}

	return FOLLOW;

}
