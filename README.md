:fountain_pen: [@formal-language/grammar](https://formal-language.github.io/grammar)
==

Grammar compilation toolkit for JavaScript. Served with asynchronous goodness.
See [docs](https://formal-language.github.io/grammar/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
const G = grammar.from( { root , start , eof , productions } ) ;
const parser = ll1.from(G);
```

[![License](https://img.shields.io/github/license/formal-language/grammar.svg)](https://raw.githubusercontent.com/formal-language/grammar/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@formal-language/grammar.svg)](https://www.npmjs.org/package/@formal-language/grammar)
[![Tests](https://img.shields.io/github/workflow/status/formal-language/grammar/ci?event=push&label=tests)](https://github.com/formal-language/grammar/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/formal-language/grammar)](https://github.com/formal-language/grammar/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/formal-language/grammar.svg)](https://github.com/formal-language/grammar/issues)
[![Downloads](https://img.shields.io/npm/dm/@formal-language/grammar.svg)](https://www.npmjs.org/package/@formal-language/grammar)

[![Code issues](https://img.shields.io/codeclimate/issues/formal-language/grammar.svg)](https://codeclimate.com/github/formal-language/grammar/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/formal-language/grammar.svg)](https://codeclimate.com/github/formal-language/grammar/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/formal-language/grammar/main.svg)](https://codecov.io/gh/formal-language/grammar)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/formal-language/grammar.svg)](https://codeclimate.com/github/formal-language/grammar/trends/technical_debt)
[![Documentation](https://formal-language.github.io/grammar/badge.svg)](https://formal-language.github.io/grammar/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@formal-language/grammar)](https://bundlephobia.com/result?p=@formal-language/grammar)
