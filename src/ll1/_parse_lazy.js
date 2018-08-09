import { rmap } from '../grammar' ;

import _children_next_lazy from './_children_next_lazy' ;

/**
 * Table-driven predictive lazy parsing.
 *
 * @param {Object} eof - The end-of-file symbol.
 * @param {Grammar} grammar - The ll1 grammar.
 * @param {Map} table - The symbol table.
 * @param {Array} rule - The production rule in use.
 * @param {Tape} tape - The tape from which to read the symbols from.
 * @param {String} nonterminal - The nonterminal that produced `rule`.
 * @param {String} production - The production that corresponds to `rule`.
 * @returns {Object} The root node of the parsed tree.
 */
export default function _parse_lazy ( eof , grammar , table , rule , tape , nonterminal , production ) {

	const shallow_materialize = async x => await _children_next_lazy(eof, grammar, table, tape, x) ;

	const children = rmap( shallow_materialize , rule )[Symbol.asyncIterator]() ;

	return {
		'type' : 'node' ,
		nonterminal ,
		production ,
		children ,
	} ;

}
