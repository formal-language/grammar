import alphabet from './alphabet.js';
import expandobject from './expandobject.js';

export default class Grammar {
	constructor({root, start, eof, productions}) {
		this.root = String(root);
		this.start = String(start);
		this.eof = eof;
		this.productions = expandobject(productions);
		this._alphabet = null;
	}

	alphabet() {
		if (this._alphabet === null) this._alphabet = alphabet(this.productions);
		return this._alphabet;
	}
}
