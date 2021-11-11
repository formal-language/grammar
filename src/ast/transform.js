export default async function transform(tree, match, ctx) {
	// Assert tree.type === 'node'
	const {nonterminal, production} = tree;
	return match[nonterminal][production](tree, match, ctx);
}
