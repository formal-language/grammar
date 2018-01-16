import { LookaheadMismatchError , ExpectedEndOfFileError } from '../error' ;
import _parse from './_parse' ;

/**
 * Get next child of table-driven predictive parsing.
 *
 * @param eof
 * @param productions
 * @param table
 * @param stream
 * @param expected
 * @returns {Array}
 */
export default function _children_next ( eof, productions , table , stream , expected ) {

	const lookahead = stream.read( ) ;

	if ( expected.terminal === eof ) {
		if ( lookahead === stream.eof ) return expected ;
		else throw new ExpectedEndOfFileError( lookahead.terminal ) ;
	}

	if ( expected.type === 'leaf' ) {
		if ( lookahead.terminal === expected.terminal ) return lookahead ;
		else throw new LookaheadMismatchError(lookahead.terminal, [expected.terminal]) ;
	}

	stream.unread(lookahead);

	const router = table.get(expected.nonterminal);

	const next = router.get(lookahead === stream.eof ? eof : lookahead.terminal) ;

	if ( next === undefined ) throw new LookaheadMismatchError(lookahead.terminal, [...router.keys()]) ;

	else return _parse(eof, productions, table, productions.get(expected.nonterminal).get(next), stream , expected.nonterminal , next);

}
