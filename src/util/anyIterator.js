import Children from '../ast/Children.js';

export default function anyIterator(object) {
	if (object instanceof Children) return object.iterator;
	if (object[Symbol.asyncIterator]) return object[Symbol.asyncIterator]();
	return object[Symbol.iterator]();
}
