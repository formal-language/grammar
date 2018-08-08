[@aureooms/js-grammar](https://aureooms.github.io/js-grammar)
==

Grammar compilation toolkit for JavaScript. Served with asynchronous goodness.
See [docs](https://aureooms.github.io/js-grammar/index.html).

```js
import { grammar , ll1 } from '@aureooms/js-grammar' ;
import tape from '@aureooms/js-tape' ;

const start = 'start' ;
const eof = '$' ;
const productions = { 'start' : { ... } , ... } ;

const G = grammar.from( { start , eof , productions } ) ; // Grammar Object

ll1.is(G); // true

const parser = ll1.from(G); // Parser Object

const replace = async input => {

    const tokens = tape.fromString( ... ) ; // create tokens from string `input`

    const tree = await parser.parse( tokens ) ; // root of parsed tree

    const transformed = await ast.transform( tree , ... ) ; // root of transformed tree

    const flattened = ast.flatten( transformed ) ; // async generator of leaves

    const chunks = asyncIterableMap( leaf => leaf.buffer , flattened ) ; // async generator of strings

    const output = tape.fromAsyncIterable( chunks ) ; // tape of chunks

    return await tape.toString( output ) ; // chunks concatenation

} ;

replace('010101').then( output => console.log(output) ) ; // 'ababab'
```

> The code needs a ES2015+ polyfill to work (`regeneratorRuntime`), for example
> [babel-polyfill](https://babeljs.io/docs/usage/polyfill).

```js
import 'babel-polyfill' ;
```

[![License](https://img.shields.io/github/license/aureooms/js-grammar.svg)](https://raw.githubusercontent.com/aureooms/js-grammar/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-grammar.svg)](https://www.npmjs.org/package/@aureooms/js-grammar)
[![Build status](https://img.shields.io/travis/aureooms/js-grammar.svg)](https://travis-ci.org/aureooms/js-grammar)
[![Dependencies status](https://img.shields.io/david/aureooms/js-grammar.svg)](https://david-dm.org/aureooms/js-grammar)
[![Dev dependencies status](https://img.shields.io/david/dev/aureooms/js-grammar.svg)](https://david-dm.org/aureooms/js-grammar?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-grammar.svg)](https://github.com/aureooms/js-grammar/issues)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-grammar.svg)](https://www.npmjs.org/package/@aureooms/js-grammar)

[![Code Climate issues](https://img.shields.io/codeclimate/issues/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/issues)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/github/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/trends/churn)
[![Coverage status](https://img.shields.io/coveralls/aureooms/js-grammar.svg)](https://coveralls.io/r/aureooms/js-grammar)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage-letter/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/trends/test_coverage_new_code)
[![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-grammar/badge.svg)](https://aureooms.github.io/js-grammar/source.html)
