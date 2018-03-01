export default function transform ( tree , match , ctx ) {
	// assert tree.type === 'node'
	const { nonterminal , production } = tree ;
	return match[nonterminal][production]( tree , match , ctx ) ;
}
