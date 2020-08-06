import test from 'ava' ;

import { grammar , cnf } from '../../../src' ;

test('cnf.is empty non-root rule' , t => {

	const root = 'S0' ;
	const start = Math.random() ; // don't care
	const eof = Math.random() ; // don't care

	const productions = {
		"S0": [
			[ "&A" , "&A" ] ,
		] ,
		"A" : [
			[ ] ,
		] ,
	} ;

	const G = grammar.from({root, start, eof, productions});

	t.false(cnf.is(G));

}) ;

test('cnf.is rule of length >= 3' , t => {

	const root = 'S0' ;
	const start = Math.random() ; // don't care
	const eof = Math.random() ; // don't care

	const productions = {
		"S0": [
			[ "&A" , "&B" , "&C" ] ,
		] ,
	} ;

	const G = grammar.from({root, start, eof, productions});

	t.false(cnf.is(G));

}) ;

test('cnf.is rule of length 1 with nonterminal' , t => {

	const root = 'S0' ;
	const start = Math.random() ; // don't care
	const eof = Math.random() ; // don't care

	const productions = {
		"S0": [
			[ "&A" ] ,
		] ,
	} ;

	const G = grammar.from({root, start, eof, productions});

	t.false(cnf.is(G));

}) ;

test('cnf.is rule of length 2 with terminal (left)' , t => {

	const root = 'S0' ;
	const start = Math.random() ; // don't care
	const eof = Math.random() ; // don't care

	const productions = {
		"S0": [
			[ "=a" , "&B" ] ,
		] ,
	} ;

	const G = grammar.from({root, start, eof, productions});

	t.false(cnf.is(G));

}) ;

test('cnf.is rule of length 2 with terminal (right)' , t => {

	const root = 'S0' ;
	const start = Math.random() ; // don't care
	const eof = Math.random() ; // don't care

	const productions = {
		"S0": [
			[ "&A" , "=b" ] ,
		] ,
	} ;

	const G = grammar.from({root, start, eof, productions});

	t.false(cnf.is(G));

}) ;

test('cnf.is rule of length 2 with terminal (both)' , t => {

	const root = 'S0' ;
	const start = Math.random() ; // don't care
	const eof = Math.random() ; // don't care

	const productions = {
		"S0": [
			[ "=a" , "=b" ] ,
		] ,
	} ;

	const G = grammar.from({root, start, eof, productions});

	t.false(cnf.is(G));

}) ;


test('cnf.is https://en.wikipedia.org/wiki/Chomsky_normal_form#Example' , t => {

	const root = 'S0' ;
	const start = Math.random() ; // don't care
	const eof = Math.random() ; // don't care

	const productions = {
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
	} ;

	const G = grammar.from({root, start, eof, productions});

	t.true(cnf.is(G));

}) ;

