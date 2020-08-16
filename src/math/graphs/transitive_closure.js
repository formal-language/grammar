import { Pairs } from '../sets' ;
import reachable from './reachable' ;

/**
 * TODO Make it run in O(OUTPUT).
 */
export default function transitive_closure ( edges ) {

	const pairs = Pairs.from(edges);

	const closure = new Map();

	for ( const start of pairs.left() ) {
		const marked = reachable(pairs, start, closure);
		closure.set(start, marked);
	}

	return new Pairs(closure) ;

}
