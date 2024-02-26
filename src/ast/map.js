import assert from 'assert';

import Children from './Children.js';
import cmap from './cmap.js';

/**
 * Applies a given callable to each of the child of a given children async iterable.
 *
 * @param {Function} callable - The callable to use.
 * @param {AsyncIterable} children - The input children.
 * @returns {AsyncIterable}
 */
export default function map(callable, children) {
	assert(children !== undefined);
	const iterator = cmap(callable, children)[Symbol.asyncIterator]();

	return new Children(iterator, undefined);
}
