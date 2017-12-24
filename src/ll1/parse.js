import { EOF } from './constants' ;

export function parse ( prog , start , stream ) {
	return _parse( prog , [ start , EOF ] , stream ) ;
}

export function _parse ( prog , rule , stream ) {

	const tree = [];

	for (const x of rule) {

		const t = stream.read();

		if (typeof x === 'string') {
			if (t === x) { tree.push(x); continue; }
			else throw new Error(`Syntax error at token '${t}', expected '${x}'.`) ;
		}

		stream.unread(t);

		const next = prog[x].get(t) ;

		if ( next === undefined ) throw new Error(`Syntax error at token '${t}', expected one of '${[...prog[x].keys()]}'.`) ;

		else tree.push(_parse(prog, next, stream));

	}

	return tree ;

}
