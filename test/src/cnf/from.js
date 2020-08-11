import test from 'ava' ;

import { grammar , cnf } from '../../../src' ;

function transform ( t , input , output ) {

	const expected = grammar.from(output)
	t.true(cnf.is(expected));

	const _input = grammar.from(input);
	const result = cnf.from(_input);
	t.true(cnf.is(result));

	const _expected = expected.toJSON();
	const _result = grammar.toJSON(result);
	t.deepEqual(_expected, _result);

}

transform.title = (title, input, expected) => title || `cnf.from(${JSON.stringify(input)}) = ${JSON.stringify(expected)}` ;

const immutable = (t , input) => transform(t, input, input);
immutable.title = (title, input) => transform.title(title, input, input) ;

test('cnf.from empty non-root rule', transform, {
	"root": "S0",
	"start": 0,
	"eof": "$",
	"productions": {
		"S0": [
			[ "&A" , "&A" ] ,
		] ,
		"A" : [
			[ ] ,
		] ,
	}
}, {
	"root": "S0",
	"start": 0,
	"eof": "$",
	"productions": {
		"S0": {
			0: [ "&A" , "&A" ] ,
			"0.1": [ ] ,
		}
	}
});

test('cnf.from rule of length 2 with terminal (both)' , transform , {
	"root": "S0",
	"start": 0,
	"eof": "$",
	"productions": {
		"S0": [
			[ "=a" , "=b" ] ,
		]
	}
}, {
	"root": "S0",
	"start": 0,
	"eof": "$",
	"productions": {
		"S0": [
			[ "&N#a" , "&N#b" ] ,
		] ,
		"N#a": [
			[ "=a"]
		],
		"N#b": [
			[ "=b"]
		],
	}
});

test('cnf.from rule of length 3' , transform , {
	"root": "R",
	"start": 0,
	"eof": "$",
	"productions": {
		"R": [
			[ "=a" , "=b" , "=c" ]
		]
	}
}, {
	"root": "R",
	"start": 0,
	"eof": "$",
	"productions": {
		"R": [
			[ "&N#a" , "&R1" ]
		] ,
		"R1": [
			[ "&N#b" , "&N#c" ]
		] ,
		"N#a" : [ [ "=a" ] ] ,
		"N#b" : [ [ "=b" ] ] ,
		"N#c" : [ [ "=c" ] ] ,
	}
});

test('cnf.from rule of length 4' , transform , {
	"root": "R",
	"start": 0,
	"eof": "$",
	"productions": {
		"R": [
			[ "=a" , "=b" , "=c" , "=d" ]
		]
	}
}, {
	"root": "R",
	"start": 0,
	"eof": "$",
	"productions": {
		"R": [
			[ "&N#a" , "&R1" ]
		] ,
		"R1": [
			[ "&N#b" , "&R2" ]
		] ,
		"R2": [
			[ "&N#c" , "&N#d" ]
		] ,
		"N#a" : [ [ "=a" ] ] ,
		"N#b" : [ [ "=b" ] ] ,
		"N#c" : [ [ "=c" ] ] ,
		"N#d" : [ [ "=d" ] ] ,
	}
});

test('cnf.from https://en.wikipedia.org/wiki/Chomsky_normal_form#Example' , immutable , {
	"root": "S0",
	"start": 0,
	"eof": "$",
	"productions": {
		"S0": [
			[ "=number" ] ,
			[ "=variable" ] ,
			[ "&Open" , "&Expr_Close" ] ,
			[ "&Factor" , "&PowOp_Primary" ] ,
			[ "&Term" , "&MulOp_Factor" ] ,
			[ "&Expr" , "&AddOp_Term" ] ,
			[ "&AddOp" , "&Term" ] ,
			[ ] , // Added for coverage
		] ,
		"Expr": [
			[ "=number" ] ,
			[ "=variable" ] ,
			[ "&Open" , "&Expr_Close" ] ,
			[ "&Factor" , "&PowOp_Primary" ] ,
			[ "&Term" , "&MulOp_Factor" ] ,
			[ "&Expr" , "&AddOp_Term" ] ,
			[ "&AddOp" , "&Term" ] ,
		] ,
		"Term": [
			[ "=number" ] ,
			[ "=variable" ] ,
			[ "&Open" , "&Expr_Close" ] ,
			[ "&Factor" , "&PowOp_Primary" ] ,
			[ "&Term" , "&MulOp_Factor" ] ,
		] ,
		"Factor": [
			[ "=number" ] ,
			[ "=variable" ] ,
			[ "&Open" , "&Expr_Close" ] ,
			[ "&Factor" , "&PowOp_Primary" ] ,
		] ,
		"Primary": [ [ "=number" ] , [ "=variable" ] , [ "&Open" , "&Expr_Close" ] ] ,
		"AddOp": [ [ "=+" ] , [ "=-" ] ] ,
		"MulOp": [ [ "=*" ] , [ "=/" ] ] ,
		"PowOp": [ [ "=^" ] ] ,
		"Open": [ [ "=(" ] ] ,
		"Close": [ [ "=)" ] ] ,
		"AddOp_Term": [ [ "&AddOp" , "&Term" ] ] ,
		"MulOp_Factor": [ [ "&MulOp" , "&Factor" ] ] ,
		"PowOp_Primary": [ [ "&PowOp" , "&Primary" ] ] ,
		"Expr_Close": [ [ "&Expr" , "&Close" ] ] ,
	}
}) ;

test('cnf.from root rule in RHS', transform, {
	"root": "R",
	"start": 0,
	"eof": "$",
	"productions": {
		"R": [
			[ "&A" , "&R" ] ,
			[ ]
		] ,
		"A" : [
			[ "=a" ] ,
		] ,
	}
}, {
	"root": "S0",
	"start": 0,
	"eof": "$",
	"productions": {
		"S0": {
			"R#0": [ "&A" , "&R" ] ,
			"A#0": [ "=a" ] ,
			0: [ ] ,
			"S0#0": [ ] ,
		} ,
		"R": {
			0: [ "&A" , "&R" ] ,
			"R#0": [ "&A" , "&R" ] ,
			"A#0": [ "=a" ] ,
		} ,
		"A" : [
			[ "=a" ] ,
		] ,
	}
});

test('cnf.from indirection A -> B -> C', transform, {
	"root": "A",
	"start": 0,
	"eof": "$",
	"productions": {
		"A": [ [ "&B" ] ] ,
		"B": [ [ "&C" ] ] ,
		"C": [ [ "=c" ] ] ,
	}
} , {
	"root": "A",
	"start": 0,
	"eof": "$",
	"productions": {
		"A": {
			"C#0": [ "=c" ]
		} ,
		"B": {
			"C#0": [ "=c" ]
		} ,
		"C": [
			[ "=c" ]
		] ,
	}
});

test('cnf.from indirections A -> B -> C + A -> C', transform, {
	"root": "A",
	"start": 0,
	"eof": "$",
	"productions": {
		"A": [ [ "&B" ] , [ "&C" ] ] ,
		"B": [ [ "&C" ] ] ,
		"C": [ [ "=c" ] ] ,
	}
} , {
	"root": "A",
	"start": 0,
	"eof": "$",
	"productions": {
		"A": {
			"C#0": [ "=c" ]
		} ,
		"B": {
			"C#0": [ "=c" ]
		} ,
		"C": [
			[ "=c" ]
		] ,
	}
});

test('cnf.from loop B -> C -> B', transform, {
	"root": "A",
	"start": 0,
	"eof": "$",
	"productions": {
		"A": [ [ "&B" ] ] ,
		"B": [ [ "&C" ] ] ,
		"C": [ [ "&B" ] , [ "=c" ] ] ,
	}
} , {
	"root": "A",
	"start": 0,
	"eof": "$",
	"productions": {
		"A": {
			"C#1": [ "=c" ]
		} ,
		"B": {
			"C#1": [ "=c" ]
		} ,
		"C": {
			1: [ "=c" ],
			"C#1": [ "=c" ]
		} ,
	}
});

test('cnf.from terminals only', immutable, {
	"root": 0,
	"start": 0,
	"eof": "$",
	"productions": [ [ [ "=0" ] ] ],
});
