import {isEmpty} from '@iterable-iterator/cardinality';

import audit from './audit.js';

/**
 * Check if grammar is ll(1).
 *
 * @param {Grammar} grammar
 * @returns {Boolean}
 */
export default function is(grammar) {
	return isEmpty(audit(grammar));
}
