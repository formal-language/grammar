export default function* unitrules ( productions ) {

	for ( const [A, rule] of productions ) {
		if ( rule.length === 1 && rule[0].type === 'node' ) {
			// A -> B
			const B = rule[0].nonterminal ;
			yield [A, B];
		}
	}

}
