import _children_next from './_children_next' ;

/**
 * Table-driven predictive parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
export default function _parse ( eof , productions , table , rule , stream , nonterminal , productionid ) {

	const children = [];

	for (const x of rule) children.push(_children_next(eof, productions, table, stream, x)) ;

	return {
		'type' : 'node' ,
		nonterminal ,
		'production' : productionid ,
		children
	} ;

}
