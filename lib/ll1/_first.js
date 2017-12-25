'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _first;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _EW = require('./EW');

var _EW2 = _interopRequireDefault(_EW);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes FIRST table for grammar nonterminals.
 *
 * @param grammar
 * @returns {Array}
 */
function _first(grammar) {

	var FIRST = (0, _jsItertools.list)((0, _jsItertools.map)(function (_) {
		return new Set();
	}, grammar));

	var updated = true;

	while (updated) {

		updated = false;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _jsItertools.enumerate)(grammar)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _ref = _step.value;

				var _ref2 = _slicedToArray(_ref, 2);

				var i = _ref2[0];
				var rules = _ref2[1];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {

					for (var _iterator2 = rules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var rule = _step2.value;


						var read = true;

						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = rule[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var x = _step3.value;


								if (!read) break;read = false;

								if (typeof x === 'string') updated |= (0, _util.setadd)(FIRST[i], x);else {
									updated |= (0, _util.setaddall)(FIRST[i], (0, _jsItertools.filter)(function (y) {
										return y !== _EW2.default;
									}, FIRST[x]));
									read |= (0, _jsItertools.any)((0, _jsItertools.map)(function (y) {
										return y === _EW2.default;
									}, FIRST[x]));
								}
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

						if (read) updated |= (0, _util.setadd)(FIRST[i], _EW2.default);
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
	}

	return FIRST;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2ZpcnN0LmpzIl0sIm5hbWVzIjpbIl9maXJzdCIsImdyYW1tYXIiLCJGSVJTVCIsIlNldCIsInVwZGF0ZWQiLCJpIiwicnVsZXMiLCJydWxlIiwicmVhZCIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFZd0JBLE07O0FBWnhCOztBQUVBOztBQUVBOzs7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsTUFBVCxDQUFrQkMsT0FBbEIsRUFBNEI7O0FBRTFDLEtBQU1DLFFBQVEsdUJBQU0sc0JBQUs7QUFBQSxTQUFLLElBQUlDLEdBQUosRUFBTDtBQUFBLEVBQUwsRUFBc0JGLE9BQXRCLENBQU4sQ0FBZDs7QUFFQSxLQUFJRyxVQUFVLElBQWQ7O0FBRUEsUUFBT0EsT0FBUCxFQUFnQjs7QUFFZkEsWUFBVSxLQUFWOztBQUZlO0FBQUE7QUFBQTs7QUFBQTtBQUlmLHdCQUF5Qiw0QkFBVUgsT0FBVixDQUF6Qiw4SEFBNkM7QUFBQTs7QUFBQTs7QUFBQSxRQUFqQ0ksQ0FBaUM7QUFBQSxRQUE5QkMsS0FBOEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRTVDLDJCQUFtQkEsS0FBbkIsbUlBQTBCO0FBQUEsVUFBZkMsSUFBZTs7O0FBRXpCLFVBQUlDLE9BQU8sSUFBWDs7QUFGeUI7QUFBQTtBQUFBOztBQUFBO0FBSXpCLDZCQUFpQkQsSUFBakIsbUlBQXdCO0FBQUEsWUFBWkUsQ0FBWTs7O0FBRXZCLFlBQUksQ0FBQ0QsSUFBTCxFQUFXLE1BQU9BLE9BQU8sS0FBUDs7QUFFbEIsWUFBSyxPQUFPQyxDQUFQLEtBQWEsUUFBbEIsRUFBNkJMLFdBQVcsa0JBQVFGLE1BQU1HLENBQU4sQ0FBUixFQUFrQkksQ0FBbEIsQ0FBWCxDQUE3QixLQUNLO0FBQ0pMLG9CQUFXLHFCQUFVRixNQUFNRyxDQUFOLENBQVYsRUFBb0IseUJBQU87QUFBQSxpQkFBS0ssa0JBQUw7QUFBQSxVQUFQLEVBQXNCUixNQUFNTyxDQUFOLENBQXRCLENBQXBCLENBQVg7QUFDQUQsaUJBQVEsc0JBQUksc0JBQUk7QUFBQSxpQkFBS0Usa0JBQUw7QUFBQSxVQUFKLEVBQW1CUixNQUFNTyxDQUFOLENBQW5CLENBQUosQ0FBUjtBQUNBO0FBRUQ7QUFkd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQnpCLFVBQUlELElBQUosRUFBVUosV0FBVyxrQkFBT0YsTUFBTUcsQ0FBTixDQUFQLGVBQVg7QUFDVjtBQW5CMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCNUM7QUF6QmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCZjs7QUFFRCxRQUFPSCxLQUFQO0FBRUEiLCJmaWxlIjoiX2ZpcnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW51bWVyYXRlICwgbGlzdCAsIG1hcCAsIGZpbHRlciAsIGFueSB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IHsgc2V0YWRkICwgc2V0YWRkYWxsIH0gZnJvbSAnLi4vdXRpbCcgO1xuXG5pbXBvcnQgRVcgZnJvbSAnLi9FVyc7XG5cbi8qKlxuICogQ29tcHV0ZXMgRklSU1QgdGFibGUgZm9yIGdyYW1tYXIgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSBncmFtbWFyXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9maXJzdCAoIGdyYW1tYXIgKSB7XG5cblx0Y29uc3QgRklSU1QgPSBsaXN0KCBtYXAoIF8gPT4gbmV3IFNldCgpICwgZ3JhbW1hciApICkgO1xuXG5cdGxldCB1cGRhdGVkID0gdHJ1ZTtcblxuXHR3aGlsZSAodXBkYXRlZCkge1xuXG5cdFx0dXBkYXRlZCA9IGZhbHNlO1xuXG5cdFx0Zm9yIChjb25zdCBbaSwgcnVsZXNdIG9mIGVudW1lcmF0ZShncmFtbWFyKSkge1xuXG5cdFx0XHRmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcblxuXHRcdFx0XHRsZXQgcmVhZCA9IHRydWU7XG5cblx0XHRcdFx0Zm9yICggY29uc3QgeCBvZiBydWxlICkge1xuXG5cdFx0XHRcdFx0aWYgKCFyZWFkKSBicmVhazsgcmVhZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgeCA9PT0gJ3N0cmluZycgKSB1cGRhdGVkIHw9IHNldGFkZCggRklSU1RbaV0sIHgpO1xuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dXBkYXRlZCB8PSBzZXRhZGRhbGwoRklSU1RbaV0sIGZpbHRlcih5ID0+IHkgIT09IEVXLCBGSVJTVFt4XSkpO1xuXHRcdFx0XHRcdFx0cmVhZCB8PSBhbnkobWFwKHkgPT4geSA9PT0gRVcsIEZJUlNUW3hdKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVhZCkgdXBkYXRlZCB8PSBzZXRhZGQoRklSU1RbaV0sIEVXKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIEZJUlNUO1xuXG59XG4iXX0=