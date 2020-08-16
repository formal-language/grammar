import assert from 'assert' ;

export default function compareSymbols ( a , b ) {

	if ( a.type === 'node' ) {
		if ( b.type === 'node' ) {
			return a.nonterminal < b.nonterminal ? -1 : a.nonterminal > b.nonterminal ? 1 : 0 ;
		}
		else {
			assert(b.type === 'leaf');
			return -1 ;
		}
	}
	else {
		assert(a.type === 'leaf');
		if ( b.type === 'node' ) {
			return 1 ;
		}
		else {
			assert(b.type === 'leaf');
			return a.terminal < b.terminal ? -1 : a.terminal > b.terminal ? 1 : 0 ;
		}

	}
}
