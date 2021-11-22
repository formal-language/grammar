/**
 * Adds an element to a set and returns true if the set has changed.
 *
 * @param {Set<any>} set - The set to add to.
 * @param {any} element - The element to add to the set.
 * @returns {boolean} Whether <code>set</code> has changed.
 */
export default function setadd(set, element) {
	if (set.has(element)) return false;
	set.add(element);
	return true;
}
