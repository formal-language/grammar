import SyntaxError from './SyntaxError' ;

export default class UnexpectedEndOfFileError extends SyntaxError {
	constructor ( expected ) {
		super( `Syntax error because of unexpected end of file, expected one of ${JSON.stringify(expected)}.` ) ;
	}
}
