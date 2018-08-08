import { LookaheadMismatchError , UnexpectedEndOfFileError } from '../error' ;
import _parse_lazy from './_parse_lazy' ;

/**
 * Get next child of table-driven predictive lazy parsing.
 *
 * @param grammar
 * @param table
 * @param tape
 * @param token
 * @returns {Array}
 */
export default async function _children_next_lazy ( eof, grammar , table , tape , expected ) {

	const lookahead = await tape.read( ) ;

	if ( expected.type === 'leaf' ) {
		if ( lookahead === tape.eof ) {
			if ( expected.terminal === eof ) return expected ;
			else throw new UnexpectedEndOfFileError( [expected.terminal] ) ;
		}
		else if ( lookahead.terminal === expected.terminal ) return lookahead ;
		else throw new LookaheadMismatchError(lookahead, [expected.terminal]) ;
	}

	tape.unread(lookahead);

	const router = table.get(expected.nonterminal);

	const next = router.get(lookahead === tape.eof ? eof : lookahead.terminal) ;

	if ( next === undefined ) throw new LookaheadMismatchError(lookahead, [...router.keys()]) ;

	else return _parse_lazy(eof, grammar, table, grammar.get(expected.nonterminal).get(next), tape , expected.nonterminal , next);

}
