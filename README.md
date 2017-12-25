[@aureooms/js-grammar](https://aureooms.github.io/js-grammar)
==

Grammar compilation toolkit for JavaScript.
See [docs](https://aureooms.github.io/js-grammar/index.html).

```js
	import * as stream from '@aureooms/js-stream' ;
	import { ll1 } from '@aureooms/js-grammar' ;

	const G = [ [ [ '0' , '1' ] ] ] ;

	const table = ll1.compile(0, G);

	const tokens = stream.fromstring('010101');

	const tree = ll1.parse(0, G, table, tokens);
```

[![License](https://img.shields.io/github/license/aureooms/js-grammar.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-grammar/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-grammar.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-grammar)
[![Build status](https://img.shields.io/travis/aureooms/js-grammar.svg?style=flat)](https://travis-ci.org/aureooms/js-grammar)
[![Coverage status](https://img.shields.io/coveralls/aureooms/js-grammar.svg?style=flat)](https://coveralls.io/r/aureooms/js-grammar)
[![Dependencies status](https://img.shields.io/david/aureooms/js-grammar.svg?style=flat)](https://david-dm.org/aureooms/js-grammar)
[![Dev dependencies status](https://img.shields.io/david/dev/aureooms/js-grammar.svg?style=flat)](https://david-dm.org/aureooms/js-grammar?type=dev)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-grammar.svg?style=flat)](https://codeclimate.com/github/aureooms/js-grammar)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-grammar.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-grammar)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-grammar.svg?style=flat)](https://github.com/aureooms/js-grammar/issues)
[![Documentation](https://aureooms.github.io/js-grammar/badge.svg)](https://aureooms.github.io/js-grammar/source.html)
