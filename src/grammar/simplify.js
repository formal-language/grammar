import { map , filter } from '@aureooms/js-itertools' ;
import { RedBlackTree } from '@aureooms/js-red-black-tree' ;
import { MemoryEfficientPairs as Pairs } from '@aureooms/js-pairs' ;
import { reachable } from '../math/graphs' ;
import { compareKeyedRules } from '../util' ;
import { nonterminalEdges } from '../productions' ;

import iter from './iter' ;

export default function simplify ( { root , start , eof , productions } ) {

	const newProductions = new Map();

	// 1. Remove duplicate productions

	for ( const [ nonterminal , productions ] of productions.entries() ) {
		const set = new RedBlackTree(compareKeyedRules) ;
		for ( const production of productions.entries() ) {
			if (!set.has(production)) set.add(production);
		}

		newProductions.set(nonterminal, new Map(set));
	}

	// 2. Remove unreachable nonterminals
	const unreachableTerminals = new Set(productions.keys());
	const edges = nonterminalEdges(iter(productions));
	const pairs = Pairs.from(edges);
	for ( const nonterminal of reachable(pairs, root) ) {
		unreachableTerminals.delete(nonterminal);
	}
	for ( const nonterminal of unreachableTerminals ) {
		newProductions.delete(nonterminal);
	}

	return {
		root ,
		start ,
		eof ,
		productions: newProductions,
	} ;

}
