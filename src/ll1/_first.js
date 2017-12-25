import { enumerate , list , map , filter , any } from '@aureooms/js-itertools' ;

import { setadd , setaddall } from '../util' ;

import EW from './EW';

/**
 * Computes FIRST table for grammar nonterminals.
 *
 * @param grammar
 * @returns {Array}
 */
export default function _first ( grammar ) {

	const FIRST = list( map( _ => new Set() , grammar ) ) ;

	let updated = true;

	while (updated) {

		updated = false;

		for (const [i, rules] of enumerate(grammar)) {

			for (const rule of rules) {

				let read = true;

				for ( const x of rule ) {

					if (!read) break; read = false;

					if ( typeof x === 'string' ) updated |= setadd( FIRST[i], x);
					else {
						updated |= setaddall(FIRST[i], filter(y => y !== EW, FIRST[x]));
						read |= any(map(y => y === EW, FIRST[x]));
					}

				}

				if (read) updated |= setadd(FIRST[i], EW);
			}

		}

	}

	return FIRST;

}
