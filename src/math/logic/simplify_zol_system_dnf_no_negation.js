import assert from 'assert' ;
import { ProcessOnceQueue } from '../data_structures' ;

/**
 * Given the following system of equations
 *
 *     A = B or (B and B) or C
 *     B = (C and C) or FALSE
 *     C = C or TRUE
 *
 * The solution for this example is
 *
 *     A = B = C = TRUE
 *
 * If some symbol is not defined then it is FALSE (empty
 * disjunction).
 *
 * @param {Iterable} equations - A sequence of (symbol, dnf formula) pairs.
 * @return {Set} The set of true symbols.
 */
export default function simplify_zol_system_dnf_no_negation ( equations ) {

	const maybeTrueSymbols = new WeakMap(); // expression -> symbol[]
	const expressionToEquationSymbol = new WeakMap(); // expression -> symbol
	const expressionsContainingGivenSymbol = new Map(); // symbol -> expression[]

	const stack = new ProcessOnceQueue();

	for ( const [ symbol , expression ] of equations ) {
		assert(typeof symbol === 'string');
		assert(expression instanceof Array);
		if (expression.length === 0) {
			// symbol is true since expression is empty
			stack.push(symbol);
		}
		else {
			expressionToEquationSymbol.set(expression, symbol);
			const symbols = new Set(expression);
			maybeTrueSymbols.set(expression, symbols);

			for ( const symbol of expression ) {
				if (expressionsContainingGivenSymbol.has(symbol)) {
					expressionsContainingGivenSymbol.get(symbol).push(expression);
				}
				else {
					expressionsContainingGivenSymbol.set(symbol, [expression]);
				}
			}
		}
	}

	while (!stack.empty()) {
		const symbol = stack.pop();

		if (!expressionsContainingGivenSymbol.has(symbol)) continue;
		for ( const expression of expressionsContainingGivenSymbol.get(symbol) ) {
			const symbols = maybeTrueSymbols.get(expression);
			symbols.delete(symbol);
			if (symbols.size === 0) {
				const trueSymbol = expressionToEquationSymbol.get(expression);
				// each true symbol is handled exactly once
				stack.push(trueSymbol)
				// maybeTrueSymbols.delete(expression); // explicit GC
			}
		}

		// expressionsContainingGivenSymbol.delete(symbol); // explicit GC

	}

	return stack.done();

}
