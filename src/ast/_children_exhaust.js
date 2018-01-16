/**
 * Exhausts the input children iterator.
 *
 * @param {Iterator} children - The input children iterator.
 *
 */
export default function _children_exhaust ( children ) {

	for ( let child of children ) {
		if ( child.type === 'node' ) _children_exhaust( child.children ) ;
	}

}
