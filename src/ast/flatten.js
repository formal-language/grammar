export default function* flatten ( tree ) {
	if ( tree.type === 'leaf' ) yield tree ;
	else for ( const child of tree.children ) yield* flatten( child ) ;
}
