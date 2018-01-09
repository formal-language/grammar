import _nextchild_lazy from './_nextchild_lazy' ;

/**
 * Table-driven predictive lazy parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
export default function _parse_lazy ( eof , grammar , table , rule , stream , nonterminal , productionid ) {

	const children = [];

	for (const x of rule) children.push(_nextchild_lazy(eof, grammar, table, stream, x)) ;

	return {
		nonterminal ,
		'production' : {
			'id' : productionid ,
			rule ,
		} ,
		children
	} ;

}
