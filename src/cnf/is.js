// From Wikipedia, the free encyclopedia
// https://en.wikipedia.org/wiki/Chomsky_normal_form

/**
 * Chomsky normal form
 * ==
 *
 * In formal language theory, a context-free grammar, G, is said to be in
 * Chomsky normal form (first described by Noam Chomsky)[1] if all of its
 * production rules are of the form:[2]:92–93,106
 *
 *     A → BC,   or
 *     A → a,   or
 *     S → ε,
 *
 * where A, B, and C are nonterminal symbols, the letter a is a terminal symbol
 * (a symbol that represents a constant value), S is the start symbol, and ε
 * denotes the empty string. Also, neither B nor C may be the start symbol, and
 * the third production rule can only appear if ε is in L(G), the language
 * produced by the context-free grammar G.
 *
 * Every grammar in Chomsky normal form is context-free, and conversely, every
 * context-free grammar can be transformed into an equivalent one[note 1] which
 * is in Chomsky normal form and has a size no larger than the square of the
 * original grammar's size.
 */
export default function is ( { root , productions } ) {
	// TODO requires to get rid of the eof symbol from the start production

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
