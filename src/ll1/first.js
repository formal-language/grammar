import {map} from '@iterable-iterator/map';
import {filter} from '@iterable-iterator/filter';
import {any} from '@iterable-iterator/reduce';

import { setaddall } from '../util/index.js' ;

import { EW } from '../grammar/index.js';

/**
 * Generate FIRST set for any rule given the FIRST sets for the nonterminals.
 *
 * @param {Map} FIRST
 * @param {Array} rule
 * @returns {Set}
 */
export default function first ( FIRST , rule ) {

	const terminals = new Set();
	let read = true;
	for (const x of rule) {
		if (!read) break; read = false;
		if (x.type === 'leaf') {
			terminals.add(x.terminal);
			break;
		}
		setaddall(terminals, filter(y => y !== EW, FIRST.get(x.nonterminal)));
		read |= any(map(y => y === EW, FIRST.get(x.nonterminal)));
	}

	if (read) terminals.add(EW);

	return terminals;

}

///**
// * Computes FIRST table for grammar entire rules. Needed?
// *
// * @param _FIRST
// * @param grammar
// * @returns {undefined}
// */
//function __first ( _FIRST , grammar ) {

	//const F = [];

	//for (const unit of grammar) {

		//const forrules = [];

		//for (const rule of unit) {
			//const f = first( _FIRST , rule);
			//forrules.push(f);
		//}

		//F.push(forrules);
	//}

	//return F;

//}


///**
//* Computes dependency graph for faster updates. Needed?
//*
//* @param grammar
//* @returns {undefined}
//*/
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
