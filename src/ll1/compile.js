import _compile from './_compile.js' ;

/**
 * Compiles the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param {Map} productions
 * @returns {Map}
 */
export default function compile (productions) {
	return new Map(_compile(productions));
}
