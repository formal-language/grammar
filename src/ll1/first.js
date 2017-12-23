import { enumerate , list , map , filter , any } from '@aureooms/js-itertools' ;

import { setadd , setaddall } from '../util' ;

import { EW } from './constants';

/**
 * Computes FIRST table for grammar nonterminals.
 *
 * @param grammar
 * @returns {Array}
 */
export function _first ( grammar ) {

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

/**
 * Computes FIRST table for grammar entire rules. Needed?
 *
 * @param _FIRST
 * @param grammar
 * @returns {undefined}
 */
//function first ( _FIRST , grammar ) {

	//const F = [];

	//for (const unit of grammar) {

		//const forrules = [];

		//for (const rule of unit) {
			//const f = FIRST( _FIRST , rule);
			//forrules.push(f);
		//}

		//F.push(forrules);
	//}

	//return F;

//}

/**
 * Generate FIRST set for any rule given the FIRST sets for the nonterminals.
 *
 * @param {Array} FIRST
 * @param {Array} rule
 * @returns {Set}
 */
export function first ( FIRST , rule ) {

	const terminals = new Set();
	let read = true;
	for (const x of rule) {
		if (!read) break; read = false;
		if (typeof x === 'string') {
			terminals.add(x);
			break;
		}
		setaddall(terminals, filter(y => y !== EW, FIRST[x]));
		read |= any(map(y => y === EW, FIRST[x]));
	}

	if (read) terminals.add(EW);

	return terminals;

}

//function getfirstgraph ( grammar ) {

	//const n = grammar.length;

	//const graph = [];

	//for (let i = 0; i < n; ++i) graph.push(new Set());

	//for (let i = 0; i < n; ++i) {
		//const rules = grammar[i];
		//for ( const rule of rules ) {
			//for ( const x of rule ) {
				//if (typeof x === 'string') break;
				//graph[x].add(i);
			//}
		//}
	//}

	//return graph;

//}
