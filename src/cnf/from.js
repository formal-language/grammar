import assert from 'assert' ;
import { any , map } from '@aureooms/js-itertools' ;
import { iter } from '../grammar' ;
import { nullable , unitrules } from '../cfg' ;
import { transitive_closure } from '../math/graphs' ;

// From Wikipedia, the free encyclopedia
// https://en.wikipedia.org/wiki/Chomsky_normal_form

/**
 * Converting a grammar to Chomsky normal form
 * ==
 *
 * To convert a grammar to Chomsky normal form, a sequence of simple
 * transformations is applied in a certain order; this is described in most
 * textbooks on automata theory.[2]:87–94[3][4][5] The presentation here
 * follows Hopcroft, Ullman (1979), but is adapted to use the transformation
 * names from Lange, Leiß (2009).[6][note 2] Each of the following
 * transformations establishes one of the properties required for Chomsky
 * normal form.
 */

/**
 * START: Eliminate the start symbol from right-hand sides
 * ==
 *
 * Introduce a new start symbol S0, and a new rule
 *
 *     S0 → S,
 *
 * where S is the previous start symbol. This does not change the grammar's
 * produced language, and S0 will not occur on any rule's right-hand side.
 */
export function cnf_START ( G ) {

	const { root , start , eof , productions } = G ;

	if ( notInRightHandSide( root , iter(productions) ) ) return G ;

	const newRoot = cnf_new_symbol(productions, 'S0') ;
	const newStart = 0 ;

	const newProductions = new Map([
		[ newRoot , new Map([[ newStart , [ { type: 'node' , nonterminal: root } ] ]]) ] ,
		...productions.entries()
	]) ;

	return {
		root: newRoot,
		start: newStart,
		eof,
		productions: newProductions,
	} ;

}

function* onTheRightHandSide ( productions ) {
	for ( const [ _ , rule ] of productions ) yield* rule ;
}

function notInRightHandSide ( nonterminal , productions ) {
	return !any(map(x => x.type === 'node' && x.nonterminal === nonterminal, onTheRightHandSide(productions) ));
}


/**
 * TERM: Eliminate rules with nonsolitary terminals
 * ==
 *
 * To eliminate each rule
 *
 *     A → X1 ... a ... Xn
 *
 * with a terminal symbol a being not the only symbol on the right-hand side, introduce, for every such terminal, a new nonterminal symbol Na, and a new rule
 *
 *     Na → a.
 *
 * Change every rule
 *
 *     A → X1 ... a ... Xn
 *
 * to
 *
 *     A → X1 ... Na ... Xn.
 *
 * If several terminal symbols occur on the right-hand side, simultaneously
 * replace each of them by its associated nonterminal symbol. This does not
 * change the grammar's produced language.[2]:92
 */
export function* cnf_TERM_gen ( existingNonterminals , productions ) {

	const mockedTerminals = new Map(); // terminal -> nonterminal

	for ( const [ nonterminal , rule , key ] of productions ) {

		if ( rule.length >= 2 ) {
			const newRule = [ ] ;
			for ( const part of rule ) {
				if (part.type === 'leaf') {
					if (!mockedTerminals.has(part.terminal)) {
						const newNonterminal = cnf_new_symbol(existingNonterminals, 'N', '#' + part.terminal);
						mockedTerminals.set(part.terminal, newNonterminal);
						yield [ newNonterminal , [ part ] , 0 ] ;
					}
					newRule.push({
						type: 'node' ,
						nonterminal: mockedTerminals.get(part.terminal) ,
					}) ;
				}
				else newRule.push(part) ;
			}
			yield [ nonterminal , newRule , key ] ;

		}

		else {
			yield [ nonterminal , rule , key ] ;
		}

	}

}

export function cnf_TERM ( { root , start , eof , productions } ) {

	const newProductions = cnf_pack(cnf_TERM_gen(productions, iter(productions)));

	return {
		root,
		start,
		eof,
		productions: newProductions,
	} ;
}

/**
 * BIN: Eliminate right-hand sides with more than 2 nonterminals
 * ==
 *
 * Replace each rule
 *
 *     A → X1 X2 ... Xn
 *
 * with more than 2 nonterminals X1,...,Xn by rules
 *
 *     A → X1 A1,
 *     A1 → X2 A2,
 *     ... ,
 *     An-2 → Xn-1 Xn,
 *
 * where Ai are new nonterminal symbols. Again, this does not change the
 * grammar's produced language.[2]:93
 */
export function* cnf_BIN_gen ( existingNonterminals , productions ) {

	for ( const [nonterminal, rule, key] of productions ) {
		if ( rule.length <= 2 ) yield [ nonterminal , rule , key ] ;
		else {
			let nextNonterminal = cnf_new_symbol(existingNonterminals, nonterminal + '1');
			yield [nonterminal, [rule[0], { type: 'node', nonterminal: nextNonterminal}], key] ;
			for ( let i = 1 ; i < rule.length - 2 ; ++i ) {
				const currentNonterminal = nextNonterminal ;
				nextNonterminal = cnf_new_symbol(existingNonterminals, nonterminal + (i+1).toString());
				yield [currentNonterminal, [rule[i], { type: 'node', nonterminal: nextNonterminal}], 0] ;
			}
			yield [nextNonterminal, [rule[rule.length-2], rule[rule.length-1]], 0] ;
		}
	}

}

export function cnf_BIN ( { root , start , eof , productions } ) {

	const newProductions = cnf_pack(cnf_BIN_gen(productions, iter(productions)));

	return {
		root,
		start,
		eof,
		productions: newProductions,
	} ;
}

/**
 * DEL: Eliminate ε-rules
 * ==
 *
 * An ε-rule is a rule of the form
 *
 *     A → ε,
 *
 * where A is not S0, the grammar's start symbol.
 *
 * To eliminate all rules of this form, first determine the set of all
 * nonterminals that derive ε. Hopcroft and Ullman (1979) call such
 * nonterminals nullable, and compute them as follows:
 *
 *     If a rule A → ε exists, then A is nullable.
 *     If a rule A → X1 ... Xn exists, and every single Xi is nullable, then A is nullable, too.
 *
 * Obtain an intermediate grammar by replacing each rule
 *
 *     A → X1 ... Xn
 *
 * by all versions with some nullable Xi omitted. By deleting in this grammar
 * each ε-rule, unless its left-hand side is the start symbol, the transformed
 * grammar is obtained.[2]:90
 *
 * For example, in the following grammar, with start symbol S0,
 *
 *     S0 → AbB | C
 *     B → AA | AC
 *     C → b | c
 *     A → a | ε
 *
 * the nonterminal A, and hence also B, is nullable, while neither C nor S0 is. Hence the following intermediate grammar is obtained:[note 3]
 *
 *     S0 → AbB | AbB | AbB | AbB   |   C
 *     B → AA | AA | AA | AεA   |   AC | AC
 *     C → b | c
 *     A → a | ε
 *
 * In this grammar, all ε-rules have been "inlined at the call site".[note 4] In the next step, they can hence be deleted, yielding the grammar:
 *
 *     S0 → AbB | Ab | bB | b   |   C
 *     B → AA | A   |   AC | C
 *     C → b | c
 *     A → a
 *
 * This grammar produces the same language as the original example grammar, viz. {ab,aba,abaa,abab,abac,abb,abc,b,bab,bac,bb,bc,c}, but has no ε-rules.
 */

export function* cnf_DEL_gen ( { root , productions } , nullableNonterminals ) {

	// Yield final output
	// Can simplify if rule.length <= 2 for all rules
	for ( const [ nonterminal , rule , key ] of iter(productions) ) {
		for ( const newRule of _expandNullables( nullableNonterminals , rule.slice() ) ) {
			const newKey = newRule.length === rule.length ? key : cnf_new_symbol(productions.get(nonterminal), key);
			// remove empty productions that are not from the root
			if (newRule.length === 0 && nonterminal !== root) continue ;
			yield [ nonterminal , newRule , newKey ] ;
		}
	}

}

function* _expandNullables ( nullable , rule ) {
	if ( rule.length === 0 ) yield [ ] ;
	else {
		const last = rule.pop() ;
		for ( const subRule of _expandNullables( nullable , rule ) ) {
			yield subRule.slice().concat([last]) ;
			if ( last.type === 'node' && nullable.has(last.nonterminal) ) yield subRule ;
		}
	}
}

export function cnf_DEL ( { root , start , eof , productions } ) {

	const nullableNonterminals = nullable(iter(productions));
	const newProductions = cnf_pack(cnf_DEL_gen({root, productions}, nullableNonterminals));

	return {
		root,
		start,
		eof,
		productions: newProductions,
	} ;
}


/**
 * UNIT: Eliminate unit rules
 *
 * A unit rule is a rule of the form
 *
 *     A → B,
 *
 * where A, B are nonterminal symbols. To remove it, for each rule
 *
 *     B → X1 ... Xn,
 *
 * where X1 ... Xn is a string of nonterminals and terminals, add rule
 *
 *     A → X1 ... Xn
 *
 * unless this is a unit rule which has already been (or is being) removed.
 */
export function* cnf_UNIT_gen ( { productions } , nonterminalAliases ) {

	// if nonterminalAliases.has([B,A]) then there is a chain A -> ... -> B

	for ( const [nonterminal, rule, key] of iter(productions) ) {
		if ( rule.length === 1 && rule[0].type === 'node' ) continue ;
		yield [ nonterminal , rule , key ] ;
		for ( const alias of nonterminalAliases.rightOf(nonterminal) ) {
			const newKey = cnf_new_symbol(productions.get(alias), nonterminal + '#' + key);
			yield [ alias , rule , newKey ] ;
		}
	}

}

export function cnf_UNIT ( { root , start , eof , productions } ) {

	const edges = unitrules(iter(productions));
	const nonterminalAliases = aliases(edges);
	const newProductions = cnf_pack(cnf_UNIT_gen({productions}, nonterminalAliases));

	return {
		root,
		start,
		eof,
		productions: newProductions,
	} ;
}


function aliases ( edges ) {
	const closure = transitive_closure(edges);
	return closure.invert();
}

/**
 * Order of transformations
 * ==
 *
 * When choosing the order in which the above transformations are to be applied,
 * it has to be considered that some transformations may destroy the
 * result achieved by other ones. For example, START will re-introduce a unit
 * rule if it is applied after UNIT. The table shows which orderings are
 * admitted.
 *
 * Moreover, the worst-case bloat in grammar size[note 5] depends on the
 * transformation order. Using |G| to denote the size of the original grammar
 * G, the size blow-up in the worst case may range from |G|^2 to 2^2^|G|,
 * depending on the transformation algorithm used.[6]:7 The blow-up in
 * grammar size depends on the order between DEL and BIN. It may be
 * exponential when DEL is done first, but is linear otherwise. UNIT can incur
 * a quadratic blow-up in the size of the grammar.[6]:5 The orderings
 * START,TERM,BIN,DEL,UNIT and START,BIN,DEL,UNIT,TERM lead to the least (i.e.
 * quadratic) blow-up.
 */
export default function from ( G ) {
	// TODO composition is more complex than that
	// generate a mapping to translate from new grammar to old ?

	// START,TERM,BIN,DEL,UNIT
	return cnf_UNIT(cnf_DEL(cnf_BIN(cnf_TERM(cnf_START(G)))));

	// START,BIN,DEL,UNIT,TERM
	// return cnf_TERM(cnf_UNIT(cnf_DEL(cnf_BIN(cnf_START(G)))));
}

function cnf_pack ( iterable ) {
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

//function cnf_copy ( { root , start , eof , productions } ) {
	//return {
		//root,
		//start,
		//eof,
		//productions: cnf_pack(iter(productions)),
	//};
//}

function cnf_new_symbol ( existingSymbols , prefix = '' , suffix = '' ) {
	let newSymbol = prefix + suffix ;
	let i = 1;
	while ( existingSymbols.has(newSymbol) ) {
		const rand = '.' + i ;
		newSymbol = prefix + rand + suffix ;
		++i ;
	}
	return newSymbol ;
}
