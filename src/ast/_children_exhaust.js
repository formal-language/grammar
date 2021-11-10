import { anyIterator } from '../util/index.js' ;

/**
 * Exhausts the input children iterator.
 *
 * @param {Iterator} children - The input children iterator.
 *
 */
export default async function _children_exhaust ( children ) {

	//for await ( const child of children ) {
		//if ( child.type === 'node' ) await _children_exhaust( child.children ) ;
	//}

	const stack = [ anyIterator(children) ] ;

	while ( stack.length !== 0 ) {

		const it = stack.pop();

		const { done , value } = await it.next();

		if ( !done ) {

			stack.push(it);

			const child = value ;

			if ( child.type === 'node' ) {
				const grandchildren = anyIterator(child.children) ;
				stack.push(grandchildren);
			}

		}

	}

}
