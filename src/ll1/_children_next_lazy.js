import LookaheadMismatchError from '../error/LookaheadMismatchError.js';
import UnexpectedEndOfFileError from '../error/UnexpectedEndOfFileError.js';
import _parse_lazy from './_parse_lazy.js';

/**
 * Get next child of table-driven predictive lazy parsing.
 *
 * @param {Object} eof - The end-of-file symbol.
 * @param {Map} productions - The ll1 productions.
 * @param {Map} table - The symbol table.
 * @param {Tape} tape - The tape from which to read the symbols from.
 * @param {Object} expected - The expected node.
 * @returns {Promise<object>} A node.
 */
export default async function _children_next_lazy(
	eof,
	productions,
	table,
	tape,
	expected,
) {
	const lookahead = await tape.read();

	if (expected.type === 'leaf') {
		if (lookahead === tape.eof) {
			if (expected.terminal === eof) return expected;
			throw new UnexpectedEndOfFileError([expected.terminal]);
		} else if (lookahead.terminal === expected.terminal) return lookahead;
		else throw new LookaheadMismatchError(lookahead, [expected.terminal]);
	}

	tape.unread(lookahead);

	const router = table.get(expected.nonterminal);

	const next = router.get(lookahead === tape.eof ? eof : lookahead.terminal);

	if (next === undefined) {
		const error =
			lookahead === tape.eof
				? new UnexpectedEndOfFileError([...router.keys()])
				: new LookaheadMismatchError(lookahead, [...router.keys()]);
		throw error;
	} else
		return _parse_lazy(
			eof,
			productions,
			table,
			productions.get(expected.nonterminal).get(next),
			tape,
			expected.nonterminal,
			next,
		);
}
