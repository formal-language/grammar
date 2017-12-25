'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = follow;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _first = require('./first');

var _first2 = _interopRequireDefault(_first);

var _EW = require('./EW');

var _EW2 = _interopRequireDefault(_EW);

var _EOF = require('./EOF');

var _EOF2 = _interopRequireDefault(_EOF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes the FOLLOW table for all nonterminals.
 *
 * @param {Array} FIRST
 * @param {Number} start
 * @param {Array} grammar
 * @returns {Array}
 */
function follow(FIRST, start, grammar) {

	var FOLLOW = (0, _jsItertools.list)((0, _jsItertools.map)(function (_) {
		return new Set();
	}, grammar));

	FOLLOW[start].add(_EOF2.default);

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

				var A = _ref2[0];
				var rules = _ref2[1];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = rules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var rule = _step2.value;
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = (0, _jsItertools.enumerate)(rule)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var _ref3 = _step3.value;

								var _ref4 = _slicedToArray(_ref3, 2);

								var pos = _ref4[0];
								var B = _ref4[1];

								if (typeof B === 'string') continue;
								var fi = (0, _first2.default)(FIRST, rule.slice(pos + 1));
								if (fi.has(_EW2.default)) updated |= (0, _util.setaddall)(FOLLOW[B], FOLLOW[A]);
								updated |= (0, _util.setaddall)(FOLLOW[B], (0, _jsItertools.filter)(function (x) {
									return x !== _EW2.default;
								}, fi));
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
	}

	return FOLLOW;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZm9sbG93LmpzIl0sIm5hbWVzIjpbImZvbGxvdyIsIkZJUlNUIiwic3RhcnQiLCJncmFtbWFyIiwiRk9MTE9XIiwiU2V0IiwiYWRkIiwidXBkYXRlZCIsIkEiLCJydWxlcyIsInJ1bGUiLCJwb3MiLCJCIiwiZmkiLCJzbGljZSIsImhhcyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQWlCd0JBLE07O0FBakJ4Qjs7QUFFQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7OztBQVFlLFNBQVNBLE1BQVQsQ0FBa0JDLEtBQWxCLEVBQTBCQyxLQUExQixFQUFrQ0MsT0FBbEMsRUFBNEM7O0FBRTFELEtBQU1DLFNBQVMsdUJBQU0sc0JBQUs7QUFBQSxTQUFLLElBQUlDLEdBQUosRUFBTDtBQUFBLEVBQUwsRUFBc0JGLE9BQXRCLENBQU4sQ0FBZjs7QUFFQUMsUUFBT0YsS0FBUCxFQUFjSSxHQUFkOztBQUVBLEtBQUlDLFVBQVUsSUFBZDs7QUFFQSxRQUFPQSxPQUFQLEVBQWdCO0FBQ2ZBLFlBQVUsS0FBVjtBQURlO0FBQUE7QUFBQTs7QUFBQTtBQUVmLHdCQUE0Qiw0QkFBVUosT0FBVixDQUE1Qiw4SEFBZ0Q7QUFBQTs7QUFBQTs7QUFBQSxRQUFuQ0ssQ0FBbUM7QUFBQSxRQUEvQkMsS0FBK0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDL0MsMkJBQW1CQSxLQUFuQixtSUFBMEI7QUFBQSxVQUFmQyxJQUFlO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3pCLDZCQUEwQiw0QkFBVUEsSUFBVixDQUExQixtSUFBMkM7QUFBQTs7QUFBQTs7QUFBQSxZQUE5QkMsR0FBOEI7QUFBQSxZQUF4QkMsQ0FBd0I7O0FBQzFDLFlBQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQzNCLFlBQU1DLEtBQUsscUJBQU1aLEtBQU4sRUFBYVMsS0FBS0ksS0FBTCxDQUFXSCxNQUFJLENBQWYsQ0FBYixDQUFYO0FBQ0EsWUFBSUUsR0FBR0UsR0FBSCxjQUFKLEVBQWdCUixXQUFXLHFCQUFVSCxPQUFPUSxDQUFQLENBQVYsRUFBcUJSLE9BQU9JLENBQVAsQ0FBckIsQ0FBWDtBQUNoQkQsbUJBQVcscUJBQVVILE9BQU9RLENBQVAsQ0FBVixFQUFxQix5QkFBUTtBQUFBLGdCQUFLSSxrQkFBTDtBQUFBLFNBQVIsRUFBd0JILEVBQXhCLENBQXJCLENBQVg7QUFDQTtBQU53QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT3pCO0FBUjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTL0M7QUFYYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWY7O0FBRUQsUUFBT1QsTUFBUDtBQUVBIiwiZmlsZSI6ImZvbGxvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBtYXAgLCBmaWx0ZXIgLCBlbnVtZXJhdGUgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCB7IHNldGFkZGFsbCB9IGZyb20gJy4uL3V0aWwnIDtcblxuaW1wb3J0IGZpcnN0IGZyb20gJy4vZmlyc3QnIDtcblxuaW1wb3J0IEVXIGZyb20gJy4vRVcnIDtcbmltcG9ydCBFT0YgZnJvbSAnLi9FT0YnIDtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgRk9MTE9XIHRhYmxlIGZvciBhbGwgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IEZJUlNUXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSB7QXJyYXl9IGdyYW1tYXJcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9sbG93ICggRklSU1QgLCBzdGFydCAsIGdyYW1tYXIgKSB7XG5cblx0Y29uc3QgRk9MTE9XID0gbGlzdCggbWFwKCBfID0+IG5ldyBTZXQoKSAsIGdyYW1tYXIgKSApIDtcblxuXHRGT0xMT1dbc3RhcnRdLmFkZChFT0YpO1xuXG5cdGxldCB1cGRhdGVkID0gdHJ1ZTtcblxuXHR3aGlsZSAodXBkYXRlZCkge1xuXHRcdHVwZGF0ZWQgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IFsgQSAsIHJ1bGVzIF0gb2YgZW51bWVyYXRlKGdyYW1tYXIpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbIHBvcyAsIEIgXSBvZiBlbnVtZXJhdGUocnVsZSkpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIEIgPT09ICdzdHJpbmcnKSBjb250aW51ZSA7XG5cdFx0XHRcdFx0Y29uc3QgZmkgPSBmaXJzdChGSVJTVCwgcnVsZS5zbGljZShwb3MrMSkpO1xuXHRcdFx0XHRcdGlmIChmaS5oYXMoRVcpKSB1cGRhdGVkIHw9IHNldGFkZGFsbChGT0xMT1dbQl0sIEZPTExPV1tBXSk7XG5cdFx0XHRcdFx0dXBkYXRlZCB8PSBzZXRhZGRhbGwoRk9MTE9XW0JdLCBmaWx0ZXIoIHggPT4geCAhPT0gRVcgLCBmaSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIEZPTExPVztcblxufVxuIl19