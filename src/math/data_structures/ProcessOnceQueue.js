import assert from 'assert' ;

export default class ProcessOnceQueue {

	constructor ( iterable = [] ) {
		this._queue = [...iterable] ;
		this._done = new Set(this._queue) ;
	}

	push ( value ) {
		if (this._done.has(value)) return false ;
		// each true symbol is handled exactly once
		this._done.add(value) ;
		this._queue.push(value) ;
		return true ;
	}

	empty ( ) {
		return this._queue.length === 0 ;
	}

	pop ( ) {
		return this._queue.pop() ;
	}

	done ( ) {
		assert(this.empty()) ;
		return this._done ;
	}

}
