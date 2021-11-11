// Import _children_exhaust from './_children_exhaust' ;

/**
 * Applies a given callable to each of the child of a given children async iterable.
 *
 * @param {Function} callable - The callable to use.
 * @param {AsyncIterable} children - The input children.
 * @returns {AsyncIterator}
 */
export default async function* cmap(callable, children) {
	for await (const child of children) {
		const node = await callable(child);
		yield node;
	}
}
