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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL2FscGhhYmV0LmpzIl0sIm5hbWVzIjpbImFscGhhYmV0IiwicHJvZHVjdGlvbnMiLCJhYmMiLCJTZXQiLCJ2YWx1ZXMiLCJ1bml0IiwicnVsZSIsImxlbmd0aCIsImFkZCIsInBhcnQiLCJ0eXBlIiwidGVybWluYWwiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsUTs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLFFBQVQsQ0FBb0JDLFdBQXBCLEVBQWtDOztBQUVoRCxLQUFNQyxNQUFNLElBQUlDLEdBQUosRUFBWjs7QUFGZ0Q7QUFBQTtBQUFBOztBQUFBO0FBSWhELHVCQUFtQkYsWUFBWUcsTUFBWixFQUFuQiw4SEFBeUM7QUFBQSxPQUE5QkMsSUFBOEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDeEMsMEJBQW1CQSxLQUFLRCxNQUFMLEVBQW5CLG1JQUFrQztBQUFBLFNBQXZCRSxJQUF1Qjs7QUFDakMsU0FBSUEsS0FBS0MsTUFBTCxLQUFnQixDQUFwQixFQUF1QkwsSUFBSU0sR0FBSixlQUF2QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNLLDZCQUFvQkYsSUFBcEI7QUFBQSxZQUFZRyxJQUFaO0FBQTJCLFlBQUlBLEtBQUtDLElBQUwsS0FBYyxNQUFsQixFQUEwQlIsSUFBSU0sR0FBSixDQUFTQyxLQUFLRSxRQUFkO0FBQXJEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFKdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUt4QztBQVQrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdoRCxRQUFPVCxHQUFQO0FBRUEiLCJmaWxlIjoiYWxwaGFiZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRVcgZnJvbSAnLi9FVycgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbHBoYWJldCAoIHByb2R1Y3Rpb25zICkge1xuXG5cdGNvbnN0IGFiYyA9IG5ldyBTZXQoKTtcblxuXHRmb3IgKGNvbnN0IHVuaXQgb2YgcHJvZHVjdGlvbnMudmFsdWVzKCkpIHtcblx0XHRmb3IgKGNvbnN0IHJ1bGUgb2YgdW5pdC52YWx1ZXMoKSkge1xuXHRcdFx0aWYgKHJ1bGUubGVuZ3RoID09PSAwKSBhYmMuYWRkKEVXKTtcblx0XHRcdGVsc2UgZm9yICggY29uc3QgcGFydCBvZiBydWxlICkgaWYgKHBhcnQudHlwZSA9PT0gJ2xlYWYnKSBhYmMuYWRkKCBwYXJ0LnRlcm1pbmFsICkgO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhYmM7XG5cbn1cbiJdfQ==