# Usage

> :warning: The code needs a ES2015+ polyfill to work (`regeneratorRuntime`),
> for instance [regenerator-runtime/runtime](https://babeljs.io/docs/usage/polyfill).

First, require the polyfill at the entry point of your application
```js
await import( 'regenerator-runtime/runtime.js' ) ;
// or
import 'regenerator-runtime/runtime.js' ;
```

Then, import the library where needed
```js
const grammarToolkit = await import( '@formal-language/grammar' ) ;
// or
import { ast , error , grammar , ll1 , util } from '@formal-language/grammar' ;
```
