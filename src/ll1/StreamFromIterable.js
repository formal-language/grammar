import { iter , next } from '@aureooms/js-itertools' ;
import EOF from './EOF' ;

export default class StreamFromIterable {

	constructor ( iterable ) {

		this.buffer = [];
		this.iterator = iter( iterable );

	}

	read ( ) {
		if (this.buffer.length > 0) return this.buffer.pop();
		return next( this.iterator , EOF );
	}

	unread ( t ) {
		this.buffer.push(t);
	}

}
