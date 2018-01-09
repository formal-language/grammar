import _compile from './_compile' ;

/**
 * Compiles the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param start
 * @param eof
 * @param productions
 * @returns {Map}
 */
export default function compile (start, eof, productions) {
	return new Map(_compile(start, eof, productions));
}
