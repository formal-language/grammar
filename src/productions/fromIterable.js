import assert from 'assert' ;

export default function fromIterable ( iterable ) {
	const productions = new Map();
	for ( const [ nonterminal , rule , key ] of iterable ) {
		assert(nonterminal !== undefined);
		assert(rule instanceof Array);
		assert(key !== undefined);
		if (productions.has(nonterminal)) {
			productions.get(nonterminal).set(key, rule);
		}
		else {
			productions.set(nonterminal, new Map([[key, rule]]));
		}
	}
	return productions;
}
