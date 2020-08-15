import assert from 'assert' ;
import { list , any , map , all } from '@aureooms/js-itertools' ;
import { simplify_zol_system_dnf_no_negation } from '../math/logic' ;

/**
 * Compute the set of nullable terminals from a list of productions.
 *
 * NB: this corresponds to computing the set of variables that are true given a
 * system of equations in disjunctive normal form. Given the grammar
 *
 *     A -> B | BB | C
 *     B -> CC | b
 *     C -> C | ε
 *
 * we get the following system of equations
 *
 *     A = B or (B and B) or C
 *     B = (C and C) or FALSE
 *     C = C or TRUE
 *
 * where terminals have been replaced by FALSE and the empty word has been
 * replaced by TRUE.
 *
 * The solution for this example is
 *
 *     A = B = C = TRUE
 *
 * If some symbol is not defined (has no productions) then it is FALSE (empty
 * disjunction).
 *
 * TODO Use solver for this kind of system instead of ad-hoc code.
 *
 * @param {Iterable} productions - A sequence of (nonterminal, rule) pairs.
 * @return {Set} The set of nullable terminals.
 */
export default function nullable ( productions ) {

	const system = nullable_zol_system_dnf_no_negation(productions);
	return simplify_zol_system_dnf_no_negation(system);

}

function* nullable_zol_system_dnf_no_negation ( productions ) {

	for ( const [ nonterminal , rule ] of productions ) {
		assert(typeof nonterminal === 'string');
		assert(rule instanceof Array);
		if (any(map(x => x.type === 'leaf', rule))) continue ;
		assert(all(map(x => x.type === 'node', rule))) ;
		yield [ nonterminal , list(map(x => x.nonterminal, rule)) ] ;
	}

}
