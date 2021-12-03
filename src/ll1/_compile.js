import {map} from '@iterable-iterator/map';
import {filter} from '@iterable-iterator/filter';
import {_chain} from '@iterable-iterator/chain';
import {next} from '@iterable-iterator/next';
import {iter} from '@iterable-iterator/iter';

import alphabet from '../grammar/alphabet.js';
import EW from '../grammar/EW.js';

import first from './first.js';
import _first from './_first.js';
import _follow from './_follow.js';

/**
 * Generates the rows of the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param {Map} productions
 * @returns {Iterable}
 */
export default function* _compile(productions) {
	const abc = alphabet(productions);

	const phi = _first(productions);
	const pho = _follow(phi, productions);

	const FIRST = (rule) => first(phi, rule);

	const dflt = {}; // Dummy object

	for (const [A, rules] of productions) {
		const m = map(
			(a) => [
				a,
				next(
					// eslint-disable-next-line new-cap
					iter(filter((r) => FIRST(rules.get(r)).has(EW), rules.keys())),
					dflt,
				),
			],
			filter((a) => pho.get(A).has(a) && !phi.get(A).has(a), abc),
		);

		const n = map(
			(a) => [
				a,
				next(
					// eslint-disable-next-line new-cap
					iter(filter((r) => FIRST(rules.get(r)).has(a), rules.keys())),
					dflt,
				),
			],
			filter((a) => a !== EW, abc),
		);

		yield [A, new Map(filter(([_k, v]) => v !== dflt, _chain([m, n])))];
	}
}
