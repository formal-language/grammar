import {filter} from '@iterable-iterator/filter';
import {map} from '@iterable-iterator/map';
import {any} from '@iterable-iterator/reduce';

import EW from '../grammar/EW.js';
import setadd from '../util/setadd.js';
import setaddall from '../util/setaddall.js';

/**
 * Computes FIRST table for grammar nonterminals.
 *
 * @param productions
 * @returns {Map}
 */
export default function _first(productions) {
	const FIRST = new Map(map((key) => [key, new Set()], productions.keys()));

	let updated = true;

	while (updated) {
		updated = false;

		for (const [i, rules] of productions) {
			for (const rule of rules.values()) {
				let read = true;

				for (const x of rule) {
					if (!read) break;
					read = false;

					if (x.type === 'leaf')
						updated = setadd(FIRST.get(i), x.terminal) || updated;
					else {
						updated =
							setaddall(
								FIRST.get(i),
								filter((y) => y !== EW, FIRST.get(x.nonterminal)),
							) || updated;
						read ||= any(map((y) => y === EW, FIRST.get(x.nonterminal)));
					}
				}

				if (read) updated = setadd(FIRST.get(i), EW) || updated;
			}
		}
	}

	return FIRST;
}
