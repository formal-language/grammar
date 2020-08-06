import { chain , list , map , roundrobin , diagonal } from '@aureooms/js-itertools' ;

// generate AST instead (use flatten to generate word)
// use heap (parametrizable priority) to generate AST's in quasilexicographic order
// (first by number of derivation rules applied, then lexicographically on the
// terminals and nonterminals where terminals precede nonterminals)
// use persistent seq to represent children
// convert to CNF first then output is guaranteed
export default function* _generate ( productions , rule ) {

	if (rule.length === 0) {
		yield [ ] ;
		return ;
	}

	const part = rule[0];
	const rest = rule.slice(1);

	switch (part.type) {
		case 'node' :
			const nonterminal = part.nonterminal ;
			const lefts = map(list, roundrobin(list(map( production => _generate( productions , production ) , productions.get(nonterminal).values() )))) ;
			const rights = map(list, _generate( productions , rest )) ;
			for ( const parts of diagonal(lefts, rights) ) yield chain( parts ) ;
			break ;
		case 'leaf' :
			for ( const right of _generate( productions , rest) ) yield chain( [ [ part.terminal ] , right ] ) ;
			break ;
		default :
			throw new Error(`${part.type} is not a valid type`) ;
	}

}
