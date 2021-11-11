function _makenode(typ, arg) {
	switch (typ) {
		case '&':
			return {type: 'node', nonterminal: arg};
		case '=':
			return {type: 'leaf', terminal: arg};
		default:
			throw new Error(`${typ} is not a valid type`);
	}
}

export default function* _expandproduction(production) {
	for (const part of production) {
		if (typeof part === 'string') yield _makenode(part[0], part.slice(1));
		else if (typeof part === 'number') yield _makenode('&', String(part));
		else yield part;
	}
}
