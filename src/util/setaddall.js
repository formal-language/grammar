import setadd from './setadd.js';

/**
 * Adds all elements of an iterable to a set and returns true if the set has
 * changed.
 *
 * @param {Set<any>} set - The set to add to.
 * @param {Iterable<any>} iterable - The iterable of elements to add to the set.
 * @returns {boolean} Whether <code>set</code> has changed.
 */
export default function setaddall(set, iterable) {
	let changed = false;
	for (const element of iterable) {
		changed = setadd(set, element) || changed;
	}

	return changed;
}
