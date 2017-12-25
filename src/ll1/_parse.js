/**
 * Table-driven predictive parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
export default function _parse ( grammar , table , rule , stream , nonterminal , production ) {

	const children = [];

	for (const x of rule) {

		const t = stream.read();

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
			'id' : production ,
			rule ,
		} ,
		children
	} ;

}
