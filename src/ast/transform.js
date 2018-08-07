export default async function transform ( tree , match , ctx ) {
	// assert tree.type === 'node'
	const { nonterminal , production } = tree ;
	return await match[nonterminal][production]( tree , match , ctx ) ;
}
