export default function reachable ( pairs , start , cache = new Map() ) {
	// bfs from start
	const queue = [start];
	const marked = new Set(queue);
	while (queue.length !== 0) {
		const A = queue.pop();
		for ( const B of pairs.rightOf(A) ) {
			if (marked.has(B)) continue;
			marked.add(B);
			if (cache.has(B)) {
				for ( const C of cache.get(B) ) marked.add(C) ;
			}
			else {
				queue.push(B);
			}
		}
	}
	return marked;
}
