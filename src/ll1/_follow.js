import { list , map , filter , enumerate , range } from '@aureooms/js-itertools' ;

import { setaddall } from '../util' ;

import first from './first' ;

import { EW } from '../grammar';

/**
 * Computes the FOLLOW table for all nonterminals.
 *
 * @param {Map} FIRST - The FIRST table as computed by {@link ll1#_first}
 * @param {Map} productions - The productions map.
 * @returns {Map} The FOLLOW table.
 */
export default function _follow ( FIRST , productions ) {

	const FOLLOW = new Map( map( i => [ i , new Set() ] , productions.keys() ) ) ;

	const couldbelast = new Map( map( i => [ i , new Set() ] , productions.keys() )) ;

	for (const [ A , rules ] of productions) {
		for (const rule of rules.values()) {
			for (const [ pos , B ] of enumerate(rule)) {
				if (B.type === 'leaf') continue ;
				const fi = first(FIRST, rule.slice(pos+1));
				if (fi.has(EW)) couldbelast.get(A).add(B.nonterminal);
				setaddall(FOLLOW.get(B.nonterminal), filter( x => x !== EW , fi));
			}
		}
	}

	let updated = true;
	while (updated) {
		updated = false;
		for (const A of productions.keys()) {
			for (const B of couldbelast.get(A)) {
				updated |= setaddall(FOLLOW.get(B), FOLLOW.get(A));
			}
		}
	}

	return FOLLOW;

}
