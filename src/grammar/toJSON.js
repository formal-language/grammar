import { _arrayIndexOrObjectKey } from '../util' ;
import _productionsToJSON from './_productionsToJSON' ;

export default function toJSON ( { root , start , eof , productions } ) {

	const _root = _arrayIndexOrObjectKey(root);
	const _start = _arrayIndexOrObjectKey(start);
	const _productions = _productionsToJSON(productions);

	return {
		root: _root,
		start: _start,
		eof,
		productions: _productions,
	} ;

}
