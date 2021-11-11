// Import _children_exhaust from './_children_exhaust' ;

/**
 * Applies a given callable to each part of a given grammar rule (given as an iterable).
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} rule - The input grammar rule.
 * @returns {AsyncIterator}
 */
export default async function* rmap(callable, rule) {
	for (const part of rule) {
		// eslint-disable-next-line no-await-in-loop
		const node = await callable(part);
		yield node;
		// If ( node.type === 'node' ) await _children_exhaust( node.children ) ;
	}
}
