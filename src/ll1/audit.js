import {filter} from '@iterable-iterator/filter';
import {iter} from '@iterable-iterator/iter';
import {map} from '@iterable-iterator/map';
import {next} from '@iterable-iterator/next';

import EW from '../grammar/EW.js';

import _first from './_first.js';
import _follow from './_follow.js';
import first from './first.js';

const mapDuplicates = (rules) => {
	const candidates = new Map();
	for (const [key, first] of rules) {
		for (const f of first) {
			if (candidates.has(f)) candidates.get(f).push(key);
			else candidates.set(f, [key]);
		}
	}

	return candidates;
};

const reportDuplicates = function* (collisions) {
	for (const [f, rules] of collisions.entries()) {
		if (rules.length >= 2) {
			yield {f, rules};
		}
	}
};

const duplicates = (rules) => reportDuplicates(mapDuplicates(rules));

const REASON_FIRST = 0;
const REASON_FOLLOW = 1;

class Reason {
	constructor(reason, A, what) {
		this.reason = reason;
		this.A = A;
		this.what = what;
	}
}

/**
 * List all reasons why a given grammar is not ll(1).
 *
 * @param {Grammar} grammar
 * @returns {IterableIterator<any>}
 */
export default function* audit({productions}) {
	const phi = _first(productions);

	const FIRST = (rule) => first(phi, rule);

	// Dragon Book (2006) page 224: For every A, a, b such that A => a | b
	// ``... FIRST(a) and FIRST(b) are disjoint sets.''
	for (const [A, rules] of productions.entries()) {
		const firsts = map(
			// eslint-disable-next-line new-cap
			([key, rule]) => [key, FIRST(rule)],
			rules.entries(),
		);
		for (const hit of duplicates(firsts)) {
			yield new Reason(REASON_FIRST, A, hit);
		}
	}

	//   And ``... if the empty
	//   word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets,
	//   and likewise if the empty word is in FIRST(a).''

	const pho = _follow(phi, productions);

	const FOLLOW = (A) => pho.get(A);

	const dflt = {}; // Dummy object

	for (const [A, rules] of productions) {
		const found = next(
			// eslint-disable-next-line new-cap
			iter(filter(([_key, rule]) => FIRST(rule).has(EW), rules.entries())),
			dflt,
		);

		if (found === dflt) continue;

		const [yieldsEWkey, yieldsEW] = found;

		for (const [key, rule] of rules.entries()) {
			if (rule === yieldsEW) continue;

			const firsts = [
				// eslint-disable-next-line new-cap
				[yieldsEWkey, FOLLOW(A)],
				// eslint-disable-next-line new-cap
				[key, FIRST(rule)],
			];
			for (const hit of duplicates(firsts)) {
				yield new Reason(REASON_FOLLOW, A, hit);
			}
		}
	}
}
