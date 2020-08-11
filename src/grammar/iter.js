import assert from 'assert';

export default function* iter ( productions ) {
	assert(productions instanceof Map);
	for ( const [ nonterminal , rules ] of productions.entries() ) {
		assert(rules instanceof Map);
		for ( const [key, rule] of rules.entries() ) {
			yield [ nonterminal , rule , key ] ;
		}
	}
}
