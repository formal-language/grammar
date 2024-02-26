import {list} from '@iterable-iterator/list';

import _expandproduction from './_expandproduction.js';

/**
 * @param {Record<string,any>} productions
 * @return {IterableIterator<[any,Map<any,any>]>}
 */
function* _expandproductions(productions) {
	for (const key in productions) {
		// eslint-disable-next-line no-use-extend-native/no-use-extend-native
		if (Object.hasOwn(productions, key)) {
			yield [key, list(_expandproduction(productions[key]))];
		}
	}
}

/**
 * @param {object} object
 * @return {IterableIterator<[any,Map<any,any>]>}
 */
function* _expandobject(object) {
	for (const nonterminal in object) {
		// eslint-disable-next-line no-use-extend-native/no-use-extend-native
		if (Object.hasOwn(object, nonterminal)) {
			yield [nonterminal, new Map(_expandproductions(object[nonterminal]))];
		}
	}
}

export default function expandobject(object) {
	return new Map(_expandobject(object));
}
