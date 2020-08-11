function _makenode ( part ) {
	switch ( part.type ) {
		case 'node' :
			return '&' + part.nonterminal ;
		case 'leaf' :
			return '=' + part.terminal ;
		default :
			throw new Error(`${typ} is not a valid type`) ;
	}
}

export default function* _packRule ( production ) {
	for ( const part of production ) {
		if ( part instanceof Object ) yield _makenode( part ) ;
		else yield part ;
	}
}
