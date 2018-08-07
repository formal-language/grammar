/**
 * Exhausts the input children iterator.
 *
 * @param {Iterator} children - The input children iterator.
 *
 */
export default async function _children_exhaust ( children ) {

	for await ( const child of children ) {
		if ( child.type === 'node' ) await _children_exhaust( child.children ) ;
	}

}
