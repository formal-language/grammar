import { list , map } from '@aureooms/js-itertools' ;

export default function materialize ( tree ) {
	if ( tree.type === 'leaf' ) return tree ;
	else return {
		'type' : 'node' ,
		'nonterminal' : tree.nonterminal ,
		'production' : tree.production ,
		'children' : list(map(materialize, children)) ,
	} ;
}
