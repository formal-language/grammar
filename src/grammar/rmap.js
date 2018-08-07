import { _children_exhaust } from '../ast' ;

/**
 * Applies a given callable to each part of a given grammar rule (given as an iterable).
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} rule - The input grammar rule.
 * @returns {AsyncIterator}
 */
export default async function* rmap ( callable , rule ) {

	for ( const part of rule ) {
		const node = await callable( part ) ;
		yield node ;
		if ( node.type === 'node' ) await _children_exhaust( node.children ) ;
	}

}
