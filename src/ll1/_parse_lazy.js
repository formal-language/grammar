import { rmap } from '../grammar' ;

import _children_next_lazy from './_children_next_lazy' ;

/**
 * Table-driven predictive lazy parsing.
 *
 * @param table
 * @param rule
 * @param tape
 * @returns {Array}
 */
export default function _parse_lazy ( eof , grammar , table , rule , tape , nonterminal , productionid ) {

	const shallow_materialize = async x => await _children_next_lazy(eof, grammar, table, tape, x) ;

	const children = rmap( shallow_materialize , rule )[Symbol.asyncIterator]() ;

	return {
		'type' : 'node' ,
		nonterminal ,
		'production' : productionid ,
		children ,
	} ;

}
