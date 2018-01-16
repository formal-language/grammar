import { iter } from '@aureooms/js-itertools' ;
import { cmap } from '../ast' ;

import _children_next_lazy from './_children_next_lazy' ;

/**
 * Table-driven predictive lazy parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
export default function _parse_lazy ( eof , grammar , table , rule , stream , nonterminal , productionid ) {

	const shallow_materialize = x => _children_next_lazy(eof, grammar, table, stream, x) ;

	const children = iter( cmap( shallow_materialize , rule ) ) ;

	return {
		'type' : 'node' ,
		nonterminal ,
		'production' : productionid ,
		children ,
	} ;

}
