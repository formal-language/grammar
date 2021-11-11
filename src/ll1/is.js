import {any} from '@iterable-iterator/reduce';
import {map} from '@iterable-iterator/map';
import {list} from '@iterable-iterator/list';
import {_chain} from '@iterable-iterator/chain';
import {next} from '@iterable-iterator/next';
import {iter} from '@iterable-iterator/iter';
import {filter} from '@iterable-iterator/filter';

import EW from '../grammar/EW.js';
import _first from './_first.js';
import _follow from './_follow.js';
import first from './first.js';

/**
 * Check if grammar is ll(1).
 *
 * @param {Grammar} grammar
 * @returns {Boolean}
 */
export default function is({productions}) {
	const phi = _first(productions);

	const FIRST = (rule) => first(phi, rule);

	// TODO this is stupid
	const containsduplicates = (array) => new Set(array).size !== array.length;

	// Dragon Book (2006) page 224: For every A, a, b such that A => a | b
	// ``... FIRST(a) and FIRST(b) are disjoint sets.''

	if (
		any(
			map(
				(rules) => containsduplicates(list(_chain(map(FIRST, rules.values())))),
				productions.values(),
			),
		)
	)
		return false;

	//   And ``... if the empty
	//   word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets,
	//   and likewise if the empty word is in FIRST(a).''

	const pho = _follow(phi, productions);

	const FOLLOW = (A) => pho.get(A);

	const dflt = {}; // Dummy object

	for (const [A, rules] of productions) {
		const yieldsEW = next(
			// eslint-disable-next-line new-cap
			iter(filter((rule) => FIRST(rule).has(EW), rules.values())),
			dflt,
		);

		if (yieldsEW === dflt) continue;

		if (
			any(
				map(
					// eslint-disable-next-line new-cap
					(rule) => containsduplicates(list(_chain([FIRST(rule), FOLLOW(A)]))),
					filter((rule) => rule !== yieldsEW, rules.values()),
				),
			)
		)
			return false;
	}

	return true;
}
