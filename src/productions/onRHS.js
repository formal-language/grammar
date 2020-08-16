export default function* onRHS ( productions ) {
	for ( const [ _ , rule ] of productions ) yield* rule ;
}
