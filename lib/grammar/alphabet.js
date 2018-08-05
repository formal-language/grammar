'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = alphabet;

var _EW = require('./EW');

var _EW2 = _interopRequireDefault(_EW);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alphabet(productions) {

	var abc = new Set();

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = productions.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var unit = _step.value;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = unit.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var rule = _step2.value;

					if (rule.length === 0) abc.add(_EW2.default);else {
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = rule[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var part = _step3.value;
								if (part.type === 'leaf') abc.add(part.terminal);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL2FscGhhYmV0LmpzIl0sIm5hbWVzIjpbImFscGhhYmV0IiwicHJvZHVjdGlvbnMiLCJhYmMiLCJTZXQiLCJ2YWx1ZXMiLCJ1bml0IiwicnVsZSIsImxlbmd0aCIsImFkZCIsIkVXIiwicGFydCIsInR5cGUiLCJ0ZXJtaW5hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxROztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsUUFBVCxDQUFvQkMsV0FBcEIsRUFBa0M7O0FBRWhELEtBQU1DLE1BQU0sSUFBSUMsR0FBSixFQUFaOztBQUZnRDtBQUFBO0FBQUE7O0FBQUE7QUFJaEQsdUJBQW1CRixZQUFZRyxNQUFaLEVBQW5CLDhIQUF5QztBQUFBLE9BQTlCQyxJQUE4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN4QywwQkFBbUJBLEtBQUtELE1BQUwsRUFBbkIsbUlBQWtDO0FBQUEsU0FBdkJFLElBQXVCOztBQUNqQyxTQUFJQSxLQUFLQyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCTCxJQUFJTSxHQUFKLENBQVFDLFlBQVIsRUFBdkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDSyw2QkFBb0JILElBQXBCO0FBQUEsWUFBWUksSUFBWjtBQUEyQixZQUFJQSxLQUFLQyxJQUFMLEtBQWMsTUFBbEIsRUFBMEJULElBQUlNLEdBQUosQ0FBU0UsS0FBS0UsUUFBZDtBQUFyRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSnVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLeEM7QUFUK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFXaEQsUUFBT1YsR0FBUDtBQUVBIiwiZmlsZSI6ImFscGhhYmV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVXIGZyb20gJy4vRVcnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxwaGFiZXQgKCBwcm9kdWN0aW9ucyApIHtcblxuXHRjb25zdCBhYmMgPSBuZXcgU2V0KCk7XG5cblx0Zm9yIChjb25zdCB1bml0IG9mIHByb2R1Y3Rpb25zLnZhbHVlcygpKSB7XG5cdFx0Zm9yIChjb25zdCBydWxlIG9mIHVuaXQudmFsdWVzKCkpIHtcblx0XHRcdGlmIChydWxlLmxlbmd0aCA9PT0gMCkgYWJjLmFkZChFVyk7XG5cdFx0XHRlbHNlIGZvciAoIGNvbnN0IHBhcnQgb2YgcnVsZSApIGlmIChwYXJ0LnR5cGUgPT09ICdsZWFmJykgYWJjLmFkZCggcGFydC50ZXJtaW5hbCApIDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYWJjO1xuXG59XG4iXX0=