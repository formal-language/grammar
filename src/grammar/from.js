import Grammar from './Grammar.js';

export default function from(object) {
	return new Grammar(object);
}
