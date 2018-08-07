export default async function materialize ( root ) {

	// assert root.type === 'node'

	const parents = [
		{
			type : 'node' ,
			nonterminal : root.nonterminal ,
			production : root.production ,
			children : [ ] ,
		}
	] ;

	const children = [ root.children[Symbol.asyncIterator]() ] ;

	while ( true ) {

		const todo = children.pop();

		const { done , value } = await todo.next();

		if ( done ) {
			if ( children.length === 0 ) return parents.pop() ;
			else {
				const tree = parents.pop();
				const parent = parents.pop();
				parent.children.push(tree);
				parents.push(parent);
			}
		}

		else {

			const child = value;

			if ( child.type === 'leaf' ) {
				const tree = parents.pop();
				tree.children.push(child);
				parents.push(tree);
				children.push(todo);
			}

			else {

				const grandchildren = child.children[Symbol.asyncIterator]() ;

				const newchild = {
					type : 'node' ,
					nonterminal : child.nonterminal ,
					production : child.production ,
					children : [ ] ,
				} ;

				parents.push(newchild);
				children.push(todo);
				children.push(grandchildren);

			}

		}

	}

}
