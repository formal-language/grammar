import anyIterator from '../util/anyIterator.js';

function getCount(object) {
	if (object instanceof Function || object.length === undefined)
		return Number.POSITIVE_INFINITY;
	return object.length;
}

export default async function* flatten(root) {
	// Assert root.type === 'node'

	const stack = [
		{
			// No need to use the exhaustive iterator since flatten exhausts the whole subtree
			children: anyIterator(root.children),
			count: getCount(root.children),
		},
	];

	while (stack.length > 0) {
		const tree = stack.pop();

		// eslint-disable-next-line no-await-in-loop
		const {done, value} = await tree.children.next();

		if (!done) {
			if (--tree.count > 0)
				// Prunes left side of the tree
				stack.push(tree);

			const child = value;

			if (child.type === 'leaf') yield child;
			else {
				const it = {
					children: anyIterator(child.children),
					count: getCount(child.children),
				};

				stack.push(it);
			}
		}
	}
}
