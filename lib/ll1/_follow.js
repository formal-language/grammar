'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _follow;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _first = require('./first');

var _first2 = _interopRequireDefault(_first);

var _grammar = require('../grammar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes the FOLLOW table for all nonterminals.
 *
 * @param {Array} FIRST
 * @param {Number} start
 * @param {Map} productions
 * @returns {Array}
 */
function _follow(FIRST, start, eof, productions) {

	var FOLLOW = new Map((0, _jsItertools.map)(function (i) {
		return [i, new Set(i === start ? [eof] : [])];
	}, productions.keys()));

	var couldbelast = new Map((0, _jsItertools.map)(function (i) {
		return [i, new Set()];
	}, productions.keys()));

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = productions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref = _step.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var A = _ref2[0];
			var rules = _ref2[1];
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = rules.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var rule = _step4.value;
					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = (0, _jsItertools.enumerate)(rule)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var _ref3 = _step5.value;

							var _ref4 = _slicedToArray(_ref3, 2);

							var pos = _ref4[0];
							var _B = _ref4[1];

							if (_B.type === 'leaf') continue;
							var fi = (0, _first2.default)(FIRST, rule.slice(pos + 1));
							if (fi.has(_grammar.EW)) couldbelast.get(A).add(_B.nonterminal);
							(0, _util.setaddall)(FOLLOW.get(_B.nonterminal), (0, _jsItertools.filter)(function (x) {
								return x !== _grammar.EW;
							}, fi));
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
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

	var updated = true;
	while (updated) {
		updated = false;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = productions.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _A = _step2.value;
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = couldbelast.get(_A)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var B = _step3.value;

						updated |= (0, _util.setaddall)(FOLLOW.get(B), FOLLOW.get(_A));
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

	return FOLLOW;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2ZvbGxvdy5qcyJdLCJuYW1lcyI6WyJfZm9sbG93IiwiRklSU1QiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiRk9MTE9XIiwiTWFwIiwiaSIsIlNldCIsImtleXMiLCJjb3VsZGJlbGFzdCIsIkEiLCJydWxlcyIsInZhbHVlcyIsInJ1bGUiLCJwb3MiLCJCIiwidHlwZSIsImZpIiwic2xpY2UiLCJoYXMiLCJnZXQiLCJhZGQiLCJub250ZXJtaW5hbCIsIngiLCJ1cGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFnQndCQSxPOztBQWhCeEI7O0FBRUE7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7OztBQVFlLFNBQVNBLE9BQVQsQ0FBbUJDLEtBQW5CLEVBQTJCQyxLQUEzQixFQUFtQ0MsR0FBbkMsRUFBeUNDLFdBQXpDLEVBQXVEOztBQUVyRSxLQUFNQyxTQUFTLElBQUlDLEdBQUosQ0FBUyxzQkFBSztBQUFBLFNBQUssQ0FBRUMsQ0FBRixFQUFNLElBQUlDLEdBQUosQ0FBU0QsTUFBTUwsS0FBTixHQUFjLENBQUNDLEdBQUQsQ0FBZCxHQUFzQixFQUEvQixDQUFOLENBQUw7QUFBQSxFQUFMLEVBQXVEQyxZQUFZSyxJQUFaLEVBQXZELENBQVQsQ0FBZjs7QUFFQSxLQUFNQyxjQUFjLElBQUlKLEdBQUosQ0FBUyxzQkFBSztBQUFBLFNBQUssQ0FBRUMsQ0FBRixFQUFNLElBQUlDLEdBQUosRUFBTixDQUFMO0FBQUEsRUFBTCxFQUE4QkosWUFBWUssSUFBWixFQUE5QixDQUFULENBQXBCOztBQUpxRTtBQUFBO0FBQUE7O0FBQUE7QUFNckUsdUJBQTRCTCxXQUE1Qiw4SEFBeUM7QUFBQTs7QUFBQTs7QUFBQSxPQUE1Qk8sQ0FBNEI7QUFBQSxPQUF4QkMsS0FBd0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDeEMsMEJBQW1CQSxNQUFNQyxNQUFOLEVBQW5CLG1JQUFtQztBQUFBLFNBQXhCQyxJQUF3QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNsQyw0QkFBMEIsNEJBQVVBLElBQVYsQ0FBMUIsbUlBQTJDO0FBQUE7O0FBQUE7O0FBQUEsV0FBOUJDLEdBQThCO0FBQUEsV0FBeEJDLEVBQXdCOztBQUMxQyxXQUFJQSxHQUFFQyxJQUFGLEtBQVcsTUFBZixFQUF1QjtBQUN2QixXQUFNQyxLQUFLLHFCQUFNakIsS0FBTixFQUFhYSxLQUFLSyxLQUFMLENBQVdKLE1BQUksQ0FBZixDQUFiLENBQVg7QUFDQSxXQUFJRyxHQUFHRSxHQUFILGFBQUosRUFBZ0JWLFlBQVlXLEdBQVosQ0FBZ0JWLENBQWhCLEVBQW1CVyxHQUFuQixDQUF1Qk4sR0FBRU8sV0FBekI7QUFDaEIsNEJBQVVsQixPQUFPZ0IsR0FBUCxDQUFXTCxHQUFFTyxXQUFiLENBQVYsRUFBcUMseUJBQVE7QUFBQSxlQUFLQyxpQkFBTDtBQUFBLFFBQVIsRUFBd0JOLEVBQXhCLENBQXJDO0FBQ0E7QUFOaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9sQztBQVJ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3hDO0FBZm9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJyRSxLQUFJTyxVQUFVLElBQWQ7QUFDQSxRQUFPQSxPQUFQLEVBQWdCO0FBQ2ZBLFlBQVUsS0FBVjtBQURlO0FBQUE7QUFBQTs7QUFBQTtBQUVmLHlCQUFnQnJCLFlBQVlLLElBQVosRUFBaEIsbUlBQW9DO0FBQUEsUUFBekJFLEVBQXlCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ25DLDJCQUFnQkQsWUFBWVcsR0FBWixDQUFnQlYsRUFBaEIsQ0FBaEIsbUlBQW9DO0FBQUEsVUFBekJLLENBQXlCOztBQUNuQ1MsaUJBQVcscUJBQVVwQixPQUFPZ0IsR0FBUCxDQUFXTCxDQUFYLENBQVYsRUFBeUJYLE9BQU9nQixHQUFQLENBQVdWLEVBQVgsQ0FBekIsQ0FBWDtBQUNBO0FBSGtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJbkM7QUFOYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT2Y7O0FBRUQsUUFBT04sTUFBUDtBQUVBIiwiZmlsZSI6Il9mb2xsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgZmlsdGVyICwgZW51bWVyYXRlICwgcmFuZ2UgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCB7IHNldGFkZGFsbCB9IGZyb20gJy4uL3V0aWwnIDtcblxuaW1wb3J0IGZpcnN0IGZyb20gJy4vZmlyc3QnIDtcblxuaW1wb3J0IHsgRVcgfSBmcm9tICcuLi9ncmFtbWFyJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgRk9MTE9XIHRhYmxlIGZvciBhbGwgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IEZJUlNUXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSB7TWFwfSBwcm9kdWN0aW9uc1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZm9sbG93ICggRklSU1QgLCBzdGFydCAsIGVvZiAsIHByb2R1Y3Rpb25zICkge1xuXG5cdGNvbnN0IEZPTExPVyA9IG5ldyBNYXAoIG1hcCggaSA9PiBbIGkgLCBuZXcgU2V0KCBpID09PSBzdGFydCA/IFtlb2ZdIDogW10pIF0gLCBwcm9kdWN0aW9ucy5rZXlzKCkgKSApIDtcblxuXHRjb25zdCBjb3VsZGJlbGFzdCA9IG5ldyBNYXAoIG1hcCggaSA9PiBbIGkgLCBuZXcgU2V0KCkgXSAsIHByb2R1Y3Rpb25zLmtleXMoKSApKSA7XG5cblx0Zm9yIChjb25zdCBbIEEgLCBydWxlcyBdIG9mIHByb2R1Y3Rpb25zKSB7XG5cdFx0Zm9yIChjb25zdCBydWxlIG9mIHJ1bGVzLnZhbHVlcygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFsgcG9zICwgQiBdIG9mIGVudW1lcmF0ZShydWxlKSkge1xuXHRcdFx0XHRpZiAoQi50eXBlID09PSAnbGVhZicpIGNvbnRpbnVlIDtcblx0XHRcdFx0Y29uc3QgZmkgPSBmaXJzdChGSVJTVCwgcnVsZS5zbGljZShwb3MrMSkpO1xuXHRcdFx0XHRpZiAoZmkuaGFzKEVXKSkgY291bGRiZWxhc3QuZ2V0KEEpLmFkZChCLm5vbnRlcm1pbmFsKTtcblx0XHRcdFx0c2V0YWRkYWxsKEZPTExPVy5nZXQoQi5ub250ZXJtaW5hbCksIGZpbHRlciggeCA9PiB4ICE9PSBFVyAsIGZpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bGV0IHVwZGF0ZWQgPSB0cnVlO1xuXHR3aGlsZSAodXBkYXRlZCkge1xuXHRcdHVwZGF0ZWQgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IEEgb2YgcHJvZHVjdGlvbnMua2V5cygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IEIgb2YgY291bGRiZWxhc3QuZ2V0KEEpKSB7XG5cdFx0XHRcdHVwZGF0ZWQgfD0gc2V0YWRkYWxsKEZPTExPVy5nZXQoQiksIEZPTExPVy5nZXQoQSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBGT0xMT1c7XG5cbn1cbiJdfQ==