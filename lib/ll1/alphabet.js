'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.alphabet = alphabet;

var _constants = require('./constants');

function alphabet(grammar) {

	var abc = new Set();

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = grammar[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var unit = _step.value;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = unit[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var rule = _step2.value;

					if (rule.length === 0) {
						abc.add(_constants.EW);
						continue;
					}
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = rule[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var part = _step3.value;

							if (typeof part === 'string') abc.add(part);
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
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

	return abc;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvYWxwaGFiZXQuanMiXSwibmFtZXMiOlsiYWxwaGFiZXQiLCJncmFtbWFyIiwiYWJjIiwiU2V0IiwidW5pdCIsInJ1bGUiLCJsZW5ndGgiLCJhZGQiLCJwYXJ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsUSxHQUFBQSxROztBQUZoQjs7QUFFTyxTQUFTQSxRQUFULENBQW9CQyxPQUFwQixFQUE4Qjs7QUFFcEMsS0FBTUMsTUFBTSxJQUFJQyxHQUFKLEVBQVo7O0FBRm9DO0FBQUE7QUFBQTs7QUFBQTtBQUlwQyx1QkFBbUJGLE9BQW5CLDhIQUE0QjtBQUFBLE9BQWpCRyxJQUFpQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUMzQiwwQkFBbUJBLElBQW5CLG1JQUF5QjtBQUFBLFNBQWRDLElBQWM7O0FBQ3hCLFNBQUlBLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDdEJKLFVBQUlLLEdBQUo7QUFDQTtBQUNBO0FBSnVCO0FBQUE7QUFBQTs7QUFBQTtBQUt4Qiw0QkFBbUJGLElBQW5CLG1JQUF5QjtBQUFBLFdBQWRHLElBQWM7O0FBQ3hCLFdBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4Qk4sSUFBSUssR0FBSixDQUFRQyxJQUFSO0FBQzlCO0FBUHVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFReEI7QUFUMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVUzQjtBQWRtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCcEMsUUFBT04sR0FBUDtBQUVBIiwiZmlsZSI6ImFscGhhYmV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVcgfSBmcm9tICcuL2NvbnN0YW50cycgO1xuXG5leHBvcnQgZnVuY3Rpb24gYWxwaGFiZXQgKCBncmFtbWFyICkge1xuXG5cdGNvbnN0IGFiYyA9IG5ldyBTZXQoKTtcblxuXHRmb3IgKGNvbnN0IHVuaXQgb2YgZ3JhbW1hcikge1xuXHRcdGZvciAoY29uc3QgcnVsZSBvZiB1bml0KSB7XG5cdFx0XHRpZiAocnVsZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0YWJjLmFkZChFVyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBwYXJ0IG9mIHJ1bGUpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBwYXJ0ID09PSAnc3RyaW5nJykgYWJjLmFkZChwYXJ0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYWJjO1xuXG59XG4iXX0=