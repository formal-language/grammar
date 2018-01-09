import SyntaxError from './SyntaxError' ;

export default class LookaheadMismatchError extends SyntaxError {
	constructor ( lookahead , expected ) {
		super( `Syntax error at ${lookahead.position} (${lookahead.terminal}), expected one of ${JSON.stringify(expected)}.` ) ;
	}
}
