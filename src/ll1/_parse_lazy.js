import {
	rmap ,
	Children ,
} from '../ast' ;

import _children_next_lazy from './_children_next_lazy' ;

/**
 * Table-driven predictive lazy parsing.
 *
 * @param {Object} eof - The end-of-file symbol.
 * @param {Map} productions - The ll1 productions.
 * @param {Map} table - The symbol table.
 * @param {Array} rule - The production rule in use.
 * @param {Tape} tape - The tape from which to read the symbols from.
 * @param {String} nonterminal - The nonterminal that produced `rule`.
 * @param {String} production - The production that corresponds to `rule`.
 * @returns {Object} The root node of the parsed tree.
 */
export default function _parse_lazy ( eof , productions , table , rule , tape , nonterminal , production ) {

	const shallow_materialize = async expected => await _children_next_lazy(eof, productions, table, tape, expected) ;

	const iterator = rmap( shallow_materialize , rule )[Symbol.asyncIterator]() ;

	return {
		'type' : 'node' ,
		nonterminal ,
		production ,
		children : new Children( iterator , rule.length ) ,
	} ;

}
