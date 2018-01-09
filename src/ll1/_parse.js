import _nextchild from './_nextchild' ;

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

	for (const x of rule) children.push(_nextchild(eof, productions, table, stream, x)) ;

	return {
		'type' : 'node' ,
		nonterminal ,
		'production' : {
			'id' : productionid ,
			rule ,
		} ,
		children
	} ;

}
