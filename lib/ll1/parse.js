'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parse = parse;
exports._parse = _parse;

var _constants = require('./constants');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function parse(prog, start, stream) {
	return _parse(prog, [start, _constants.EOF], stream);
}

function _parse(prog, rule, stream) {

	var tree = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;


			var t = stream.read();

			if (x === 'string') {
				if (t === x) {
					tree.push(x);continue;
				} else throw new Error('Syntax error at token \'' + t + '\', expected \'' + x + '\'.');
			}

			stream.unread(t);

			var next = prog[x].get(t);

			if (next === undefined) throw new Error('Syntax error at token \'' + t + '\', expected one of \'' + [].concat(_toConsumableArray(prog[x].keys())) + '\'.');else tree.push(_parse(prog, next, stream));
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return tree;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJfcGFyc2UiLCJwcm9nIiwic3RhcnQiLCJzdHJlYW0iLCJydWxlIiwidHJlZSIsIngiLCJ0IiwicmVhZCIsInB1c2giLCJFcnJvciIsInVucmVhZCIsIm5leHQiLCJnZXQiLCJ1bmRlZmluZWQiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsSyxHQUFBQSxLO1FBSUFDLE0sR0FBQUEsTTs7QUFOaEI7Ozs7QUFFTyxTQUFTRCxLQUFULENBQWlCRSxJQUFqQixFQUF3QkMsS0FBeEIsRUFBZ0NDLE1BQWhDLEVBQXlDO0FBQy9DLFFBQU9ILE9BQVFDLElBQVIsRUFBZSxDQUFFQyxLQUFGLGlCQUFmLEVBQWlDQyxNQUFqQyxDQUFQO0FBQ0E7O0FBRU0sU0FBU0gsTUFBVCxDQUFrQkMsSUFBbEIsRUFBeUJHLElBQXpCLEVBQWdDRCxNQUFoQyxFQUF5Qzs7QUFFL0MsS0FBTUUsT0FBTyxFQUFiOztBQUYrQztBQUFBO0FBQUE7O0FBQUE7QUFJL0MsdUJBQWdCRCxJQUFoQiw4SEFBc0I7QUFBQSxPQUFYRSxDQUFXOzs7QUFFckIsT0FBTUMsSUFBSUosT0FBT0ssSUFBUCxFQUFWOztBQUVBLE9BQUlGLE1BQU0sUUFBVixFQUFvQjtBQUNuQixRQUFJQyxNQUFNRCxDQUFWLEVBQWE7QUFBRUQsVUFBS0ksSUFBTCxDQUFVSCxDQUFWLEVBQWM7QUFBVyxLQUF4QyxNQUNLLE1BQU0sSUFBSUksS0FBSiw4QkFBb0NILENBQXBDLHVCQUFxREQsQ0FBckQsU0FBTjtBQUNMOztBQUVESCxVQUFPUSxNQUFQLENBQWNKLENBQWQ7O0FBRUEsT0FBTUssT0FBT1gsS0FBS0ssQ0FBTCxFQUFRTyxHQUFSLENBQVlOLENBQVosQ0FBYjs7QUFFQSxPQUFLSyxTQUFTRSxTQUFkLEVBQTBCLE1BQU0sSUFBSUosS0FBSiw4QkFBb0NILENBQXBDLDJEQUFnRU4sS0FBS0ssQ0FBTCxFQUFRUyxJQUFSLEVBQWhFLFdBQU4sQ0FBMUIsS0FFS1YsS0FBS0ksSUFBTCxDQUFVVCxPQUFPQyxJQUFQLEVBQWFXLElBQWIsRUFBbUJULE1BQW5CLENBQVY7QUFFTDtBQXJCOEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1Qi9DLFFBQU9FLElBQVA7QUFFQSIsImZpbGUiOiJwYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVPRiB9IGZyb20gJy4vY29uc3RhbnRzJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSAoIHByb2cgLCBzdGFydCAsIHN0cmVhbSApIHtcblx0cmV0dXJuIF9wYXJzZSggcHJvZyAsIFsgc3RhcnQgLCBFT0YgXSAsIHN0cmVhbSApIDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9wYXJzZSAoIHByb2cgLCBydWxlICwgc3RyZWFtICkge1xuXG5cdGNvbnN0IHRyZWUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHggb2YgcnVsZSkge1xuXG5cdFx0Y29uc3QgdCA9IHN0cmVhbS5yZWFkKCk7XG5cblx0XHRpZiAoeCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmICh0ID09PSB4KSB7IHRyZWUucHVzaCh4KTsgY29udGludWU7IH1cblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKGBTeW50YXggZXJyb3IgYXQgdG9rZW4gJyR7dH0nLCBleHBlY3RlZCAnJHt4fScuYCkgO1xuXHRcdH1cblxuXHRcdHN0cmVhbS51bnJlYWQodCk7XG5cblx0XHRjb25zdCBuZXh0ID0gcHJvZ1t4XS5nZXQodCkgO1xuXG5cdFx0aWYgKCBuZXh0ID09PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgRXJyb3IoYFN5bnRheCBlcnJvciBhdCB0b2tlbiAnJHt0fScsIGV4cGVjdGVkIG9uZSBvZiAnJHtbLi4ucHJvZ1t4XS5rZXlzKCldfScuYCkgO1xuXG5cdFx0ZWxzZSB0cmVlLnB1c2goX3BhcnNlKHByb2csIG5leHQsIHN0cmVhbSkpO1xuXG5cdH1cblxuXHRyZXR1cm4gdHJlZSA7XG5cbn1cbiJdfQ==