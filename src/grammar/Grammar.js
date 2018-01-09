import expandobject from './expandobject' ;
import alphabet from './alphabet' ;

export default class Grammar {

	constructor ( { start , eof , productions } ) {
		this.start = start ;
		this.eof = eof ;
		this.productions = expandobject( productions ) ;
		this._alphabet = null ;
	}

	alphabet ( ) {
		if ( this._alphabet === null ) this._alphabet = alphabet(this.productions);
		return this._alphabet;
	}

}
