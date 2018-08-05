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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2ZpcnN0LmpzIl0sIm5hbWVzIjpbIl9maXJzdCIsInByb2R1Y3Rpb25zIiwiRklSU1QiLCJNYXAiLCJrZXkiLCJTZXQiLCJrZXlzIiwidXBkYXRlZCIsImkiLCJydWxlcyIsInZhbHVlcyIsInJ1bGUiLCJyZWFkIiwieCIsInR5cGUiLCJnZXQiLCJ0ZXJtaW5hbCIsInkiLCJFVyIsIm5vbnRlcm1pbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFZd0JBLE07O0FBWnhCOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNZSxTQUFTQSxNQUFULENBQWtCQyxXQUFsQixFQUFnQzs7QUFFOUMsS0FBTUMsUUFBUSxJQUFJQyxHQUFKLENBQVMsc0JBQUs7QUFBQSxTQUFPLENBQUVDLEdBQUYsRUFBUSxJQUFJQyxHQUFKLEVBQVIsQ0FBUDtBQUFBLEVBQUwsRUFBa0NKLFlBQVlLLElBQVosRUFBbEMsQ0FBVCxDQUFkOztBQUVBLEtBQUlDLFVBQVUsSUFBZDs7QUFFQSxRQUFPQSxPQUFQLEVBQWdCOztBQUVmQSxZQUFVLEtBQVY7O0FBRmU7QUFBQTtBQUFBOztBQUFBO0FBSWYsd0JBQXlCTixXQUF6Qiw4SEFBc0M7QUFBQTs7QUFBQTs7QUFBQSxRQUExQk8sQ0FBMEI7QUFBQSxRQUF2QkMsS0FBdUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRXJDLDJCQUFtQkEsTUFBTUMsTUFBTixFQUFuQixtSUFBbUM7QUFBQSxVQUF4QkMsSUFBd0I7OztBQUVsQyxVQUFJQyxPQUFPLElBQVg7O0FBRmtDO0FBQUE7QUFBQTs7QUFBQTtBQUlsQyw2QkFBaUJELElBQWpCLG1JQUF3QjtBQUFBLFlBQVpFLENBQVk7OztBQUV2QixZQUFJLENBQUNELElBQUwsRUFBVyxNQUFPQSxPQUFPLEtBQVA7O0FBRWxCLFlBQUtDLEVBQUVDLElBQUYsS0FBVyxNQUFoQixFQUF5QlAsV0FBVyxrQkFBUUwsTUFBTWEsR0FBTixDQUFVUCxDQUFWLENBQVIsRUFBc0JLLEVBQUVHLFFBQXhCLENBQVgsQ0FBekIsS0FDSztBQUNKVCxvQkFBVyxxQkFBVUwsTUFBTWEsR0FBTixDQUFVUCxDQUFWLENBQVYsRUFBd0IseUJBQU87QUFBQSxpQkFBS1MsTUFBTUMsV0FBWDtBQUFBLFVBQVAsRUFBc0JoQixNQUFNYSxHQUFOLENBQVVGLEVBQUVNLFdBQVosQ0FBdEIsQ0FBeEIsQ0FBWDtBQUNBUCxpQkFBUSxzQkFBSSxzQkFBSTtBQUFBLGlCQUFLSyxNQUFNQyxXQUFYO0FBQUEsVUFBSixFQUFtQmhCLE1BQU1hLEdBQU4sQ0FBVUYsRUFBRU0sV0FBWixDQUFuQixDQUFKLENBQVI7QUFDQTtBQUVEO0FBZGlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0JsQyxVQUFJUCxJQUFKLEVBQVVMLFdBQVcsa0JBQU9MLE1BQU1hLEdBQU4sQ0FBVVAsQ0FBVixDQUFQLEVBQXFCVSxXQUFyQixDQUFYO0FBQ1Y7QUFuQm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQnJDO0FBekJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQmY7O0FBRUQsUUFBT2hCLEtBQVA7QUFFQSIsImZpbGUiOiJfZmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgZmlsdGVyICwgYW55IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgeyBzZXRhZGQgLCBzZXRhZGRhbGwgfSBmcm9tICcuLi91dGlsJyA7XG5cbmltcG9ydCB7IEVXIH0gZnJvbSAnLi4vZ3JhbW1hcic7XG5cbi8qKlxuICogQ29tcHV0ZXMgRklSU1QgdGFibGUgZm9yIGdyYW1tYXIgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSBwcm9kdWN0aW9uc1xuICogQHJldHVybnMge01hcH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2ZpcnN0ICggcHJvZHVjdGlvbnMgKSB7XG5cblx0Y29uc3QgRklSU1QgPSBuZXcgTWFwKCBtYXAoIGtleSA9PiBbIGtleSAsIG5ldyBTZXQoKSBdICwgcHJvZHVjdGlvbnMua2V5cygpICkgKSA7XG5cblx0bGV0IHVwZGF0ZWQgPSB0cnVlO1xuXG5cdHdoaWxlICh1cGRhdGVkKSB7XG5cblx0XHR1cGRhdGVkID0gZmFsc2U7XG5cblx0XHRmb3IgKGNvbnN0IFtpLCBydWxlc10gb2YgcHJvZHVjdGlvbnMpIHtcblxuXHRcdFx0Zm9yIChjb25zdCBydWxlIG9mIHJ1bGVzLnZhbHVlcygpKSB7XG5cblx0XHRcdFx0bGV0IHJlYWQgPSB0cnVlO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IHggb2YgcnVsZSApIHtcblxuXHRcdFx0XHRcdGlmICghcmVhZCkgYnJlYWs7IHJlYWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggeC50eXBlID09PSAnbGVhZicgKSB1cGRhdGVkIHw9IHNldGFkZCggRklSU1QuZ2V0KGkpLCB4LnRlcm1pbmFsKTtcblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHVwZGF0ZWQgfD0gc2V0YWRkYWxsKEZJUlNULmdldChpKSwgZmlsdGVyKHkgPT4geSAhPT0gRVcsIEZJUlNULmdldCh4Lm5vbnRlcm1pbmFsKSkpO1xuXHRcdFx0XHRcdFx0cmVhZCB8PSBhbnkobWFwKHkgPT4geSA9PT0gRVcsIEZJUlNULmdldCh4Lm5vbnRlcm1pbmFsKSkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlYWQpIHVwZGF0ZWQgfD0gc2V0YWRkKEZJUlNULmdldChpKSwgRVcpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gRklSU1Q7XG5cbn1cbiJdfQ==