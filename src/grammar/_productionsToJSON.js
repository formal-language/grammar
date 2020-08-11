import { map , all , list } from '@aureooms/js-itertools' ;
import { _mostAppropriateKeyHolder , _arrayIndexOrObjectKey } from '../util' ;
import _packRule from './_packRule' ;

export default function _productionsToJSON ( productions ) {

	const _productions = _mostAppropriateKeyHolder(productions.keys());

	for ( const [ nonterminal , rules ] of productions.entries() ) {
		const _rules = _mostAppropriateKeyHolder(rules.keys());
		for ( const [ key , rule ] of rules.entries() ) {
			const _key = _arrayIndexOrObjectKey(key);
			_rules[_key] = list(_packRule(rule)) ;
		}
		const _nonterminal = _arrayIndexOrObjectKey(nonterminal);
		_productions[_nonterminal] = _rules;
	}

	return _productions ;
}
