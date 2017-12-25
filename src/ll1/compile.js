import { list } from '@aureooms/js-itertools' ;

import _compile from './_compile' ;

/**
 * Compiles the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param grammar
 * @returns {undefined}
 */
export default function compile (start, grammar) {
	return list(_compile(start, grammar));
}
