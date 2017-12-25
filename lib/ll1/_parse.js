'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _parse;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Table-driven predictive parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
function _parse(grammar, table, rule, stream, nonterminal, production) {

	var children = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;


			var t = stream.read();

			if (typeof x === 'string') {
				if (t === x) {
					children.push(x);continue;
				} else throw new Error('Syntax error at token \'' + t + '\', expected \'' + x + '\'.');
			}

			stream.unread(t);

			var next = table[x].get(t);

			if (next === undefined) throw new Error('Syntax error at token \'' + t + '\', expected one of \'' + [].concat(_toConsumableArray(table[x].keys())) + '\'.');else children.push(_parse(grammar, table, grammar[x][next], stream, x, next));
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

	return {
		nonterminal: nonterminal,
		'production': {
			'id': production,
			rule: rule
		},
		children: children
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlLmpzIl0sIm5hbWVzIjpbIl9wYXJzZSIsImdyYW1tYXIiLCJ0YWJsZSIsInJ1bGUiLCJzdHJlYW0iLCJub250ZXJtaW5hbCIsInByb2R1Y3Rpb24iLCJjaGlsZHJlbiIsIngiLCJ0IiwicmVhZCIsInB1c2giLCJFcnJvciIsInVucmVhZCIsIm5leHQiLCJnZXQiLCJ1bmRlZmluZWQiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFRd0JBLE07Ozs7QUFSeEI7Ozs7Ozs7O0FBUWUsU0FBU0EsTUFBVCxDQUFrQkMsT0FBbEIsRUFBNEJDLEtBQTVCLEVBQW9DQyxJQUFwQyxFQUEyQ0MsTUFBM0MsRUFBb0RDLFdBQXBELEVBQWtFQyxVQUFsRSxFQUErRTs7QUFFN0YsS0FBTUMsV0FBVyxFQUFqQjs7QUFGNkY7QUFBQTtBQUFBOztBQUFBO0FBSTdGLHVCQUFnQkosSUFBaEIsOEhBQXNCO0FBQUEsT0FBWEssQ0FBVzs7O0FBRXJCLE9BQU1DLElBQUlMLE9BQU9NLElBQVAsRUFBVjs7QUFFQSxPQUFJLE9BQU9GLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUMxQixRQUFJQyxNQUFNRCxDQUFWLEVBQWE7QUFBRUQsY0FBU0ksSUFBVCxDQUFjSCxDQUFkLEVBQWtCO0FBQVcsS0FBNUMsTUFDSyxNQUFNLElBQUlJLEtBQUosOEJBQW9DSCxDQUFwQyx1QkFBcURELENBQXJELFNBQU47QUFDTDs7QUFFREosVUFBT1MsTUFBUCxDQUFjSixDQUFkOztBQUVBLE9BQU1LLE9BQU9aLE1BQU1NLENBQU4sRUFBU08sR0FBVCxDQUFhTixDQUFiLENBQWI7O0FBRUEsT0FBS0ssU0FBU0UsU0FBZCxFQUEwQixNQUFNLElBQUlKLEtBQUosOEJBQW9DSCxDQUFwQywyREFBZ0VQLE1BQU1NLENBQU4sRUFBU1MsSUFBVCxFQUFoRSxXQUFOLENBQTFCLEtBRUtWLFNBQVNJLElBQVQsQ0FBY1gsT0FBT0MsT0FBUCxFQUFnQkMsS0FBaEIsRUFBdUJELFFBQVFPLENBQVIsRUFBV00sSUFBWCxDQUF2QixFQUF5Q1YsTUFBekMsRUFBa0RJLENBQWxELEVBQXNETSxJQUF0RCxDQUFkO0FBRUw7QUFyQjRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBdUI3RixRQUFPO0FBQ05ULDBCQURNO0FBRU4sZ0JBQWU7QUFDZCxTQUFPQyxVQURPO0FBRWRIO0FBRmMsR0FGVDtBQU1OSTtBQU5NLEVBQVA7QUFTQSIsImZpbGUiOiJfcGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRhYmxlLWRyaXZlbiBwcmVkaWN0aXZlIHBhcnNpbmcuXG4gKlxuICogQHBhcmFtIHRhYmxlXG4gKiBAcGFyYW0gcnVsZVxuICogQHBhcmFtIHN0cmVhbVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcGFyc2UgKCBncmFtbWFyICwgdGFibGUgLCBydWxlICwgc3RyZWFtICwgbm9udGVybWluYWwgLCBwcm9kdWN0aW9uICkge1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gW107XG5cblx0Zm9yIChjb25zdCB4IG9mIHJ1bGUpIHtcblxuXHRcdGNvbnN0IHQgPSBzdHJlYW0ucmVhZCgpO1xuXG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0aWYgKHQgPT09IHgpIHsgY2hpbGRyZW4ucHVzaCh4KTsgY29udGludWU7IH1cblx0XHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKGBTeW50YXggZXJyb3IgYXQgdG9rZW4gJyR7dH0nLCBleHBlY3RlZCAnJHt4fScuYCkgO1xuXHRcdH1cblxuXHRcdHN0cmVhbS51bnJlYWQodCk7XG5cblx0XHRjb25zdCBuZXh0ID0gdGFibGVbeF0uZ2V0KHQpIDtcblxuXHRcdGlmICggbmV4dCA9PT0gdW5kZWZpbmVkICkgdGhyb3cgbmV3IEVycm9yKGBTeW50YXggZXJyb3IgYXQgdG9rZW4gJyR7dH0nLCBleHBlY3RlZCBvbmUgb2YgJyR7Wy4uLnRhYmxlW3hdLmtleXMoKV19Jy5gKSA7XG5cblx0XHRlbHNlIGNoaWxkcmVuLnB1c2goX3BhcnNlKGdyYW1tYXIsIHRhYmxlLCBncmFtbWFyW3hdW25leHRdLCBzdHJlYW0gLCB4ICwgbmV4dCkpO1xuXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5vbnRlcm1pbmFsICxcblx0XHQncHJvZHVjdGlvbicgOiB7XG5cdFx0XHQnaWQnIDogcHJvZHVjdGlvbiAsXG5cdFx0XHRydWxlICxcblx0XHR9ICxcblx0XHRjaGlsZHJlblxuXHR9IDtcblxufVxuIl19