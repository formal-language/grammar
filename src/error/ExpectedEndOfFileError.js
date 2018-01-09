import SyntaxError from './SyntaxError' ;

export default class ExpectedEndOfFileError extends SyntaxError {
	constructor ( lookahead ) {
		super( `Syntax error at ${lookahead.position} ('${lookahead.terminal}'), expected end of file.` ) ;
	}
}
