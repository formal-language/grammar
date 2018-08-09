# Overview

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

