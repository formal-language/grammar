import _children_exhaust from './_children_exhaust.js';

export default class Children {
	/**
	 * @param {AsyncIterableIterator} iterator
	 * @param {number} length
	 */
	constructor(iterator, length) {
		this.iterator = iterator;
		this.length = length;
	}

	async *[Symbol.asyncIterator]() {
		for await (const node of this.iterator) {
			yield node;
			if (node.type === 'node') await _children_exhaust(node.children);
		}
	}
}
