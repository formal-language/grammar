import {reversed} from '@iterable-iterator/reversed';

import first from './first.js';

/**
 * Generate FOLLOW set for any rule given the FOLLOW sets for the nonterminals.
 *
 * @param {Map} FOLLOW
 * @param {Array} rule
 * @returns {Set}
 */
export default function follow(FOLLOW, rule) {
	return first(FOLLOW, reversed(rule));
}
