import cmap from './cmap' ;

function _transform ( match ) {

	const t = function ( tree ) {
		const { nonterminal , production } = tree ;
		return match[nonterminal][production]( t , tree ) ;
	}

	return t ;

}

export default function transform ( tree , match ) {
	// assert tree.type === 'node'
	return _transform(match)(tree) ;
}
