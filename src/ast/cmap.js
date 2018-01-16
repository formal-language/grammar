import _children_exhaust from './_children_exhaust' ;

/**
 * Applies a given callable to each of the child of a given children iterable.
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} children - The input children.
 * @returns {Iterator}
 */
export default function* cmap ( callable , children ) {

	for ( let child of children ) {
		const node = callable( child ) ;
		yield node ;
		if ( node.type === 'node' ) _children_exhaust( node.children ) ;
	}

}
