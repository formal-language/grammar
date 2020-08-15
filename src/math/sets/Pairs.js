import { map } from '@aureooms/js-itertools' ;

export default class Pairs {

	static from ( pairs ) {
		const set = new Pairs(new Map());
		return set.update(pairs);
	}

	// Set-like

	constructor ( map ) {
		this._map = map;
	}

	add ( [ A , B ] )  {
		if ( this._map.has(A) ) {
			this._map.get(A).add(B);
		}
		else {
			this._map.set(A, new Set([B]));
		}
		return this ;
	}

	clear ( ) {
		return this._map.clear();
	}

	delete ( [ A , B ] ) {
		if ( this._map.has(A) ) {
			return this._map.get(A).delete(B);
		}
		else {
			return false ;
		}
	}

	has ( [ A , B ] ) {
		return this._map.has(A) && this._map.get(A).has(B) ;
	}

	*values ( ) {
		for ( const [ A , others ] of this._map.entries() ) {
			for ( const B of others.values() ) yield [ A , B ] ;
		}
	}

	*entries ( ) {
		for ( const value of this.values() ) yield [ value , value ] ;
	}

	keys ( ) {
		return this.values();
	}

	[Symbol.iterator] ( ) {
		return this.values();
	}

	forEach ( callbackFn , thisArg = this ) {
		for ( const value of this.values() ) callbackFn.call(thisArg, value);
	}

	// Custom

	update ( pairs ) {
		for ( const pair of pairs ) this.add(pair) ;
		return this;
	}

	left ( ) {
		return this._map.keys();
	}

	*rightOf ( A ) {
		if ( this._map.has(A) ) yield* this._map.get(A);
	}


	invert ( ) {
		return Pairs.from(map(([A,B]) => [B,A], this.values()));
	}


}
