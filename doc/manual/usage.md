# Usage

> :warning: The code needs a ES2015+ polyfill to work (`regeneratorRuntime`),
> for instance [@babel/polyfill](https://babeljs.io/docs/usage/polyfill).

First, require the polyfill at the entry point of your application
```js
require( '@babel/polyfill' ) ;
// or
import '@babel/polyfill' ;
```

Then, import the library where needed
```js
const grammarToolkit = require( '@aureooms/js-grammar' ) ;
// or
import { ast , error , grammar , ll1 , util } from '@aureooms/js-grammar' ;
```
