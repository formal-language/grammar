// requires to get rid of the eof symbol from the start production
export default function is ( { root , productions } ) {

	for ( const [ nonterminal , rules ] of productions.entries() ) {
		for ( const rule of rules.values() ) {
			switch (rule.length) {
				case 0:
					// S → ε
					if (nonterminal !== root) return false ;
					break;
				case 1:
					// A → a
					if (rule[0].type !== 'leaf') return false ;
					break;
				case 2:
					// A → BC
					if (rule[0].type !== 'node') return false ;
					if (rule[1].type !== 'node') return false ;
					break;
				default:
					return false;
			}

		}
	}

	return true;

}
