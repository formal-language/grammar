'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _first;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _grammar = require('../grammar');

/**
 * Computes FIRST table for grammar nonterminals.
 *
 * @param productions
 * @returns {Map}
 */
function _first(productions) {

	var FIRST = new Map((0, _jsItertools.map)(function (key) {
		return [key, new Set()];
	}, productions.keys()));

	var updated = true;

	while (updated) {

		updated = false;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = productions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _ref = _step.value;

				var _ref2 = _slicedToArray(_ref, 2);

				var i = _ref2[0];
				var rules = _ref2[1];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {

					for (var _iterator2 = rules.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var rule = _step2.value;


						var read = true;

						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = rule[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var x = _step3.value;


								if (!read) break;read = false;

								if (x.type === 'leaf') updated |= (0, _util.setadd)(FIRST.get(i), x.terminal);else {
									updated |= (0, _util.setaddall)(FIRST.get(i), (0, _jsItertools.filter)(function (y) {
										return y !== _grammar.EW;
									}, FIRST.get(x.nonterminal)));
									read |= (0, _jsItertools.any)((0, _jsItertools.map)(function (y) {
										return y === _grammar.EW;
									}, FIRST.get(x.nonterminal)));
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

						if (read) updated |= (0, _util.setadd)(FIRST.get(i), _grammar.EW);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2ZpcnN0LmpzIl0sIm5hbWVzIjpbIl9maXJzdCIsInByb2R1Y3Rpb25zIiwiRklSU1QiLCJNYXAiLCJrZXkiLCJTZXQiLCJrZXlzIiwidXBkYXRlZCIsImkiLCJydWxlcyIsInZhbHVlcyIsInJ1bGUiLCJyZWFkIiwieCIsInR5cGUiLCJnZXQiLCJ0ZXJtaW5hbCIsInkiLCJub250ZXJtaW5hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBWXdCQSxNOztBQVp4Qjs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsTUFBVCxDQUFrQkMsV0FBbEIsRUFBZ0M7O0FBRTlDLEtBQU1DLFFBQVEsSUFBSUMsR0FBSixDQUFTLHNCQUFLO0FBQUEsU0FBTyxDQUFFQyxHQUFGLEVBQVEsSUFBSUMsR0FBSixFQUFSLENBQVA7QUFBQSxFQUFMLEVBQWtDSixZQUFZSyxJQUFaLEVBQWxDLENBQVQsQ0FBZDs7QUFFQSxLQUFJQyxVQUFVLElBQWQ7O0FBRUEsUUFBT0EsT0FBUCxFQUFnQjs7QUFFZkEsWUFBVSxLQUFWOztBQUZlO0FBQUE7QUFBQTs7QUFBQTtBQUlmLHdCQUF5Qk4sV0FBekIsOEhBQXNDO0FBQUE7O0FBQUE7O0FBQUEsUUFBMUJPLENBQTBCO0FBQUEsUUFBdkJDLEtBQXVCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUVyQywyQkFBbUJBLE1BQU1DLE1BQU4sRUFBbkIsbUlBQW1DO0FBQUEsVUFBeEJDLElBQXdCOzs7QUFFbEMsVUFBSUMsT0FBTyxJQUFYOztBQUZrQztBQUFBO0FBQUE7O0FBQUE7QUFJbEMsNkJBQWlCRCxJQUFqQixtSUFBd0I7QUFBQSxZQUFaRSxDQUFZOzs7QUFFdkIsWUFBSSxDQUFDRCxJQUFMLEVBQVcsTUFBT0EsT0FBTyxLQUFQOztBQUVsQixZQUFLQyxFQUFFQyxJQUFGLEtBQVcsTUFBaEIsRUFBeUJQLFdBQVcsa0JBQVFMLE1BQU1hLEdBQU4sQ0FBVVAsQ0FBVixDQUFSLEVBQXNCSyxFQUFFRyxRQUF4QixDQUFYLENBQXpCLEtBQ0s7QUFDSlQsb0JBQVcscUJBQVVMLE1BQU1hLEdBQU4sQ0FBVVAsQ0FBVixDQUFWLEVBQXdCLHlCQUFPO0FBQUEsaUJBQUtTLGlCQUFMO0FBQUEsVUFBUCxFQUFzQmYsTUFBTWEsR0FBTixDQUFVRixFQUFFSyxXQUFaLENBQXRCLENBQXhCLENBQVg7QUFDQU4saUJBQVEsc0JBQUksc0JBQUk7QUFBQSxpQkFBS0ssaUJBQUw7QUFBQSxVQUFKLEVBQW1CZixNQUFNYSxHQUFOLENBQVVGLEVBQUVLLFdBQVosQ0FBbkIsQ0FBSixDQUFSO0FBQ0E7QUFFRDtBQWRpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCbEMsVUFBSU4sSUFBSixFQUFVTCxXQUFXLGtCQUFPTCxNQUFNYSxHQUFOLENBQVVQLENBQVYsQ0FBUCxjQUFYO0FBQ1Y7QUFuQm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQnJDO0FBekJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQmY7O0FBRUQsUUFBT04sS0FBUDtBQUVBIiwiZmlsZSI6Il9maXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBtYXAgLCBmaWx0ZXIgLCBhbnkgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCB7IHNldGFkZCAsIHNldGFkZGFsbCB9IGZyb20gJy4uL3V0aWwnIDtcblxuaW1wb3J0IHsgRVcgfSBmcm9tICcuLi9ncmFtbWFyJztcblxuLyoqXG4gKiBDb21wdXRlcyBGSVJTVCB0YWJsZSBmb3IgZ3JhbW1hciBub250ZXJtaW5hbHMuXG4gKlxuICogQHBhcmFtIHByb2R1Y3Rpb25zXG4gKiBAcmV0dXJucyB7TWFwfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZmlyc3QgKCBwcm9kdWN0aW9ucyApIHtcblxuXHRjb25zdCBGSVJTVCA9IG5ldyBNYXAoIG1hcCgga2V5ID0+IFsga2V5ICwgbmV3IFNldCgpIF0gLCBwcm9kdWN0aW9ucy5rZXlzKCkgKSApIDtcblxuXHRsZXQgdXBkYXRlZCA9IHRydWU7XG5cblx0d2hpbGUgKHVwZGF0ZWQpIHtcblxuXHRcdHVwZGF0ZWQgPSBmYWxzZTtcblxuXHRcdGZvciAoY29uc3QgW2ksIHJ1bGVzXSBvZiBwcm9kdWN0aW9ucykge1xuXG5cdFx0XHRmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMudmFsdWVzKCkpIHtcblxuXHRcdFx0XHRsZXQgcmVhZCA9IHRydWU7XG5cblx0XHRcdFx0Zm9yICggY29uc3QgeCBvZiBydWxlICkge1xuXG5cdFx0XHRcdFx0aWYgKCFyZWFkKSBicmVhazsgcmVhZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCB4LnR5cGUgPT09ICdsZWFmJyApIHVwZGF0ZWQgfD0gc2V0YWRkKCBGSVJTVC5nZXQoaSksIHgudGVybWluYWwpO1xuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dXBkYXRlZCB8PSBzZXRhZGRhbGwoRklSU1QuZ2V0KGkpLCBmaWx0ZXIoeSA9PiB5ICE9PSBFVywgRklSU1QuZ2V0KHgubm9udGVybWluYWwpKSk7XG5cdFx0XHRcdFx0XHRyZWFkIHw9IGFueShtYXAoeSA9PiB5ID09PSBFVywgRklSU1QuZ2V0KHgubm9udGVybWluYWwpKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVhZCkgdXBkYXRlZCB8PSBzZXRhZGQoRklSU1QuZ2V0KGkpLCBFVyk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBGSVJTVDtcblxufVxuIl19