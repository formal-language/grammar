import assert from 'assert' ;

export default function _arrayIndexOrObjectKey ( x ) {
	if (typeof x === 'number') return x;
	assert(typeof x === 'string');
	if (x !== '0' && !/^[1-9][0-9]*$/.test(x)) return x;
	const n = parseInt(x, 10);
	return Number.isNaN(n) ? x : n;
}
