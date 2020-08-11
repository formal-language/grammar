import { Pairs } from '../sets' ;

/**
 * TODO Make it run in O(OUTPUT).
 */
export default function transitive_closure ( edges ) {

	const pairs = Pairs.from(edges);

	const closure = new Map();

	for ( const start of pairs.left() ) { // bfs on each nonterminal
		const queue = [start];
		const marked = new Set(queue);
		while (queue.length !== 0) {
			const A = queue.pop();
			for ( const B of pairs.right(A) ) {
				if (marked.has(B)) continue;
				marked.add(B);
				if (closure.has(B)) {
					for ( const C of closure.get(B) ) marked.add(C) ;
				}
				else {
					queue.push(B);
				}
			}
		}
		closure.set(start, marked);
	}

	return new Pairs(closure) ;

}
