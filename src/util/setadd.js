/**
 * Adds an element to a set and returns true if the set has changed.
 *
 * @param {Set} set - The set to add to.
 * @param {Object} element - The element to add to the set.
 * @returns {Boolean} Whether <code>set</code> has changed.
 */
export default function setadd ( set , element ) {
	if ( set.has(element) ) return false ;
	set.add(element);
	return true;
}
