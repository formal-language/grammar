[@aureooms/js-grammar](https://aureooms.github.io/js-grammar)
==

Grammar compilation toolkit for JavaScript. Served with asynchronous goodness.
See [docs](https://aureooms.github.io/js-grammar/index.html).

> :warning: The code needs a ES2015+ polyfill to work (`regeneratorRuntime`),
> for instance [@babel/polyfill](https://babeljs.io/docs/usage/polyfill).

```js
const G = grammar.from( { start , eof , productions } ) ;
const parser = ll1.from(G);
```

[![License](https://img.shields.io/github/license/aureooms/js-grammar.svg)](https://raw.githubusercontent.com/aureooms/js-grammar/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-grammar.svg)](https://www.npmjs.org/package/@aureooms/js-grammar)
[![Build](https://img.shields.io/travis/aureooms/js-grammar.svg)](https://travis-ci.org/aureooms/js-grammar)
[![Dependencies](https://img.shields.io/david/aureooms/js-grammar.svg)](https://david-dm.org/aureooms/js-grammar)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-grammar.svg)](https://david-dm.org/aureooms/js-grammar?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-grammar.svg)](https://github.com/aureooms/js-grammar/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-grammar.svg)](https://www.npmjs.org/package/@aureooms/js-grammar)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/github/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/github/aureooms/js-grammar.svg)](https://codecov.io/gh/aureooms/js-grammar)
[![Code coverage (clim)](https://img.shields.io/codeclimate/coverage-letter/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/trends/test_coverage_new_code)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-grammar.svg)](https://codeclimate.com/github/aureooms/js-grammar/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-grammar/badge.svg)](https://aureooms.github.io/js-grammar/source.html)
