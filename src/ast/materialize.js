import anyIterator from '../util/anyIterator.js';

export default async function materialize(root) {
	// Assert root.type === 'node'

	const parents = [
		{
			type: 'node',
			nonterminal: root.nonterminal,
			production: root.production,
			children: [],
		},
	];

	const children = [anyIterator(root.children)];

	while (true) {
		const todo = children.pop();

		// eslint-disable-next-line no-await-in-loop
		const {done, value} = await todo.next();

		if (done) {
			if (children.length === 0) return parents.pop();

			const tree = parents.pop();
			const parent = parents.pop();
			parent.children.push(tree);
			parents.push(parent);
		} else {
			const child = value;

			if (child.type === 'leaf') {
				const tree = parents.pop();
				tree.children.push(child);
				parents.push(tree);
				children.push(todo);
			} else {
				const grandchildren = anyIterator(child.children);

				const newchild = {
					type: 'node',
					nonterminal: child.nonterminal,
					production: child.production,
					children: [],
				};

				parents.push(newchild);
				children.push(todo, grandchildren);
			}
		}
	}
}
