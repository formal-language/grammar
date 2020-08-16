import { list , map , any } from '@aureooms/js-itertools' ;

import _arrayIndexOrObjectKey from './_arrayIndexOrObjectKey' ;

export default function _mostAppropriateKeyHolder ( keys ) {
	const _keys = list(map(_arrayIndexOrObjectKey, keys));
	if (_keys.length === 0) return [];
	if (any(map(x => typeof x === 'string', _keys))) return {};
	_keys.sort();
	// check starts at 0
	if (_keys[0] !== 0) return {};
	// check for holes
	for ( let i = 1 ; i < _keys.length ; ++i ) {
		if (_keys[i] !== _keys[i-1] + 1) return {};
	}
	return [];
}
