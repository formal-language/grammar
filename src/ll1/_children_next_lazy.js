import { LookaheadMismatchError , UnexpectedEndOfFileError } from '../error' ;
import _parse_lazy from './_parse_lazy' ;

/**
 * Get next child of table-driven predictive lazy parsing.
 *
 * @param grammar
 * @param table
 * @param stream
 * @param token
 * @returns {Array}
 */
export default async function _children_next_lazy ( eof, grammar , table , stream , expected ) {

	const lookahead = await stream.read( ) ;

	if ( expected.type === 'leaf' ) {
		if ( lookahead === stream.eof ) {
			if ( expected.terminal === eof ) return expected ;
			else throw new UnexpectedEndOfFileError( [expected.terminal] ) ;
		}
		else if ( lookahead.terminal === expected.terminal ) return lookahead ;
		else throw new LookaheadMismatchError(lookahead, [expected.terminal]) ;
	}

	stream.unread(lookahead);

	const router = table.get(expected.nonterminal);

	const next = router.get(lookahead === stream.eof ? eof : lookahead.terminal) ;

	if ( next === undefined ) throw new LookaheadMismatchError(lookahead, [...router.keys()]) ;

	else return _parse_lazy(eof, grammar, table, grammar.get(expected.nonterminal).get(next), stream , expected.nonterminal , next);

}
