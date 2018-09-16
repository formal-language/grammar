import Children from './Children' ;
import cmap from './cmap' ;

/**
 * Applies a given callable to each of the child of a given children async iterable.
 *
 * @param {Function} callable - The callable to use.
 * @param {AsyncIterable} children - The input children.
 * @returns {AsyncIterator}
 */
export default function map ( callable , children ) {

	const iterator = cmap( callable , children )[Symbol.asyncIterator]() ;

	return new Children( iterator , undefined ) ;

}
