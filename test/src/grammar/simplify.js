import test from 'ava';

import { list } from '@aureooms/js-itertools' ;
import { grammar } from '../../../src' ;

function macro ( t , input , expected ) {

	const G = grammar.from(input);
	const S = grammar.simplify(G);
	const result = grammar.toJSON(S);

	t.deepEqual(expected, result);

}

macro.title = (title, input, expected) => title || `simplify(${JSON.stringify(input)}}) = ${JSON.stringify(expected)})` ;

test(macro, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ ],
		B: [ ],
	}
}, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ ],
	}
});

test(macro, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ ] , [ ] ],
	}
}, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ ] ],
	}
});

test(macro, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "=a" ] , [ "=a" ] , [ "&B" ] , [ "=c" ] , [ "&D" ] , [ "&D" ] , [ "&D" , "=e" ] , [ "=a" , "&B" ] ],
	}
}, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: {
			0: [ "=a" ] ,
			2: [ "&B" ] ,
			3: [ "=c" ] ,
			4: [ "&D" ] ,
			6: [ "&D" , "=e" ] ,
			7: [ "=a" , "&B" ] ,
		},
	}
});

test(macro, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "=a" ] , [ "=b" ] ],
	}
}, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "=a" ] , [ "=b" ] ],
	}
});

test(macro, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "=b" ] , [ "=a" ] ],
	}
}, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "=b" ] , [ "=a" ] ],
	}
});

test(macro, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "&a" ] , [ "&b" ] ],
	}
}, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "&a" ] , [ "&b" ] ],
	}
});

test(macro, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "&b" ] , [ "&a" ] ],
	}
}, {
	root: 'A',
	start: 0,
	eof: '$',
	productions: {
		A: [ [ "&b" ] , [ "&a" ] ],
	}
});
