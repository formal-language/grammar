import EOF from './EOF' ;

/**
 * Table-driven predictive parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
export default function _parse ( grammar , table , rule , stream , nonterminal , productionid ) {

	const children = [];

	for (const x of rule) {

		const lookahead = stream.read();

		const t = lookahead === stream.eof ? EOF : lookahead ;

		if (typeof x === 'string') {
			if (t === x) { children.push(x); continue; }
			else throw new Error(`Syntax error at token '${t}', expected '${x}'.`) ;
		}

		stream.unread(t);

		const next = table[x].get(t) ;

		if ( next === undefined ) throw new Error(`Syntax error at token '${t}', expected one of '${[...table[x].keys()]}'.`) ;

		else children.push(_parse(grammar, table, grammar[x][next], stream , x , next));

	}

	return {
		nonterminal ,
		'production' : {
			'id' : productionid ,
			rule ,
		} ,
		children
	} ;

}
