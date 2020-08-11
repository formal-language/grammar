import expandobject from './expandobject' ;
import alphabet from './alphabet' ;
import toJSON from './toJSON' ;

export default class Grammar {

	constructor ( { root , start , eof , productions } ) {
		this.root = ''+root ;
		this.start = ''+start ;
		this.eof = eof ;
		this.productions = expandobject( productions ) ;
		this._alphabet = null ;
	}

	alphabet ( ) {
		if ( this._alphabet === null ) this._alphabet = alphabet(this.productions);
		return this._alphabet;
	}

	toJSON ( ) {
		return toJSON(this);
	}

}
