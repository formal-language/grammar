import { any , map } from '@aureooms/js-itertools' ;

import onRHS from './onRHS' ;

export default function nonterminalNotOnRHS ( nonterminal , productions ) {
	return !any(map(x => x.type === 'node' && x.nonterminal === nonterminal, onRHS(productions) ));
}

