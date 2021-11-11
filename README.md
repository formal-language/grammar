[@formal-language/grammar](https://formal-language.github.io/grammar)
==

Grammar compilation toolkit for JavaScript. Served with asynchronous goodness.
See [docs](https://formal-language.github.io/grammar/index.html).

> :warning: The code needs a ES2015+ polyfill to work (`regeneratorRuntime`),
> for instance [@babel/polyfill](https://babeljs.io/docs/usage/polyfill).

```js
const G = grammar.from( { root , start , eof , productions } ) ;
const parser = ll1.from(G);
```

[![License](https://img.shields.io/github/license/formal-language/grammar.svg)](https://raw.githubusercontent.com/formal-language/grammar/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@formal-language/grammar.svg)](https://www.npmjs.org/package/@formal-language/grammar)
[![Tests](https://img.shields.io/github/workflow/status/formal-language/grammar/ci:test?event=push&label=tests)](https://github.com/formal-language/grammar/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/formal-language/grammar.svg)](https://david-dm.org/formal-language/grammar)
[![Dev dependencies](https://img.shields.io/david/dev/formal-language/grammar.svg)](https://david-dm.org/formal-language/grammar?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/formal-language/grammar.svg)](https://github.com/formal-language/grammar/issues)
[![Downloads](https://img.shields.io/npm/dm/@formal-language/grammar.svg)](https://www.npmjs.org/package/@formal-language/grammar)

[![Code issues](https://img.shields.io/codeclimate/issues/formal-language/grammar.svg)](https://codeclimate.com/github/formal-language/grammar/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/formal-language/grammar.svg)](https://codeclimate.com/github/formal-language/grammar/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/formal-language/grammar/main.svg)](https://codecov.io/gh/formal-language/grammar)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/formal-language/grammar.svg)](https://codeclimate.com/github/formal-language/grammar/trends/technical_debt)
[![Documentation](https://formal-language.github.io/grammar/badge.svg)](https://formal-language.github.io/grammar/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@formal-language/grammar)](https://bundlephobia.com/result?p=@formal-language/grammar)
