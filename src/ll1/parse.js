import _parse_lazy from './_parse_lazy.js';

/**
 * Parse
 *
 * @param root
 * @param start
 * @param eof
 * @param productions
 * @param table
 * @param tape
 * @returns {Object}
 */
export default function parse(root, start, eof, productions, table, tape) {
	const startRule = productions.get(root).get(start);
	return _parse_lazy(eof, productions, table, startRule, tape, root, start);
}
