import assert from 'assert' ;
import { any , map , all } from '@aureooms/js-itertools' ;

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

	const nullableNonterminals = new Set();
	const maybeNullableNonterminalsForRule = new WeakMap(); // rule -> nonterminal[]
	const ruleToProductionNonterminal = new WeakMap(); // rule -> nonterminal
	const rulesContainingGivenNonterminal = new Map(); // nonterminal -> rule[]

	const queue = [];

	for ( const [ nonterminal , rule ] of productions ) {
		assert(typeof nonterminal === 'string');
		assert(rule instanceof Array);
		// some element of the rule is a terminal hence rule is not nullable
		if (any(map(x => x.type === 'leaf', rule))) continue ;
		assert(all(map(x => x.type === 'node', rule))) ;
		if (rule.length === 0) {
			// nonterminal is nullable since rule is empty
			if (!nullableNonterminals.has(nonterminal)) {
				nullableNonterminals.add(nonterminal);
				queue.push(nonterminal);
			}
		}
		else {
			ruleToProductionNonterminal.set(rule, nonterminal);
			const nonterminals = new Set(map(x => x.nonterminal, rule));
			maybeNullableNonterminalsForRule.set(rule, nonterminals);

			for ( const { nonterminal } of rule ) {
				if (rulesContainingGivenNonterminal.has(nonterminal)) {
					rulesContainingGivenNonterminal.get(nonterminal).push(rule);
				}
				else {
					rulesContainingGivenNonterminal.set(nonterminal, [rule]);
				}
			}
		}
	}

	while (queue.length !== 0) {
		const nonterminal = queue.pop();

		if (!rulesContainingGivenNonterminal.has(nonterminal)) continue;
		for ( const rule of rulesContainingGivenNonterminal.get(nonterminal) ) {
			const nonterminals = maybeNullableNonterminalsForRule.get(rule);
			nonterminals.delete(nonterminal);
			if (nonterminals.size === 0) {
				const nullableNonterminal = ruleToProductionNonterminal.get(rule);
				if (!nullableNonterminals.has(nullableNonterminal)) {
					// each nullable nonterminal is handled exactly once
					nullableNonterminals.add(nullableNonterminal);
					queue.push(nullableNonterminal)
				}
				// maybeNullableNonterminalsForRule.delete(rule); // explicit GC
			}
		}

		// rulesContainingGivenNonterminal.delete(nonterminal); // explicit GC

	}

	return nullableNonterminals;

}
