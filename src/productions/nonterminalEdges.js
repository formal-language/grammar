export default function* nonterminalEdges ( productions ) {

	for ( const [ A , rule ] of productions ) {
		for ( const part of rule ) {
			if ( part.type === 'leaf' ) continue ;
			// A -> B
			const B = part.nonterminal ;
			yield [A, B];
		}
	}
}
