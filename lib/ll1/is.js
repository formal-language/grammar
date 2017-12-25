'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = is;

var _jsItertools = require('@aureooms/js-itertools');

var _follow = require('./follow');

var _follow2 = _interopRequireDefault(_follow);

var _first2 = require('./first');

var _first3 = _interopRequireDefault(_first2);

var _first4 = require('./_first');

var _first5 = _interopRequireDefault(_first4);

var _EW = require('./EW');

var _EW2 = _interopRequireDefault(_EW);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if grammar is ll(1).
 *
 * @param {Array} grammar
 * @returns {Boolean}
 */
function is(start, grammar) {

	var phi = (0, _first5.default)(grammar);

	var FIRST = function FIRST(rule) {
		return (0, _first3.default)(phi, rule);
	};

	// TODO this is stupid
	var containsduplicates = function containsduplicates(array) {
		return new Set(array).size !== array.length;
	};

	// Dragon Book (2006) page 224: For every A, a, b such that A => a | b
	// ``... FIRST(a) and FIRST(b) are disjoint sets.''

	if ((0, _jsItertools.any)((0, _jsItertools.map)(function (rules) {
		return containsduplicates((0, _jsItertools.list)((0, _jsItertools.chain)((0, _jsItertools.map)(FIRST, rules))));
	}, grammar))) return false;

	//   and ``... if the empty
	//   word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets,
	//   and likewise if the empty word is in FIRST(a).''

	var pho = (0, _follow2.default)(phi, start, grammar);

	var FOLLOW = function FOLLOW(A) {
		return pho[A];
	};

	var dflt = {}; // dummy object

	var _loop = function _loop(A, rules) {

		var yieldsEW = (0, _jsItertools.next)((0, _jsItertools.iter)((0, _jsItertools.filter)(function (rule) {
			return FIRST(rule).has(_EW2.default);
		}, rules)), dflt);

		if (yieldsEW === dflt) return 'continue';

		if ((0, _jsItertools.any)((0, _jsItertools.map)(function (rule) {
			return containsduplicates((0, _jsItertools.list)((0, _jsItertools.chain)([FIRST(rule), FOLLOW(A)])));
		}, (0, _jsItertools.filter)(function (rule) {
			return rule !== yieldsEW;
		}, rules)))) return {
				v: false
			};
	};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = (0, _jsItertools.enumerate)(grammar)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref = _step.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var A = _ref2[0];
			var rules = _ref2[1];

			var _ret = _loop(A, rules);

			switch (_ret) {
				case 'continue':
					continue;

				default:
					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
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

	return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvaXMuanMiXSwibmFtZXMiOlsiaXMiLCJzdGFydCIsImdyYW1tYXIiLCJwaGkiLCJGSVJTVCIsInJ1bGUiLCJjb250YWluc2R1cGxpY2F0ZXMiLCJTZXQiLCJhcnJheSIsInNpemUiLCJsZW5ndGgiLCJydWxlcyIsInBobyIsIkZPTExPVyIsIkEiLCJkZmx0IiwieWllbGRzRVciLCJoYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBc0J3QkEsRTs7QUF0QnhCOztBQVdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsRUFBVCxDQUFjQyxLQUFkLEVBQXNCQyxPQUF0QixFQUFnQzs7QUFFOUMsS0FBTUMsTUFBTSxxQkFBT0QsT0FBUCxDQUFaOztBQUVBLEtBQU1FLFFBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQVEscUJBQU1ELEdBQU4sRUFBV0UsSUFBWCxDQUFSO0FBQUEsRUFBZDs7QUFFQTtBQUNBLEtBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FBVSxJQUFJQyxHQUFKLENBQVFDLEtBQVIsQ0FBRCxDQUFpQkMsSUFBakIsS0FBMEJELE1BQU1FLE1BQXpDO0FBQUEsRUFBM0I7O0FBRUE7QUFDQTs7QUFFQSxLQUFLLHNCQUNKLHNCQUNDO0FBQUEsU0FBU0osbUJBQ1IsdUJBQU0sd0JBQU8sc0JBQUtGLEtBQUwsRUFBYU8sS0FBYixDQUFQLENBQU4sQ0FEUSxDQUFUO0FBQUEsRUFERCxFQUlDVCxPQUpELENBREksQ0FBTCxFQU9JLE9BQU8sS0FBUDs7QUFFSjtBQUNBO0FBQ0E7O0FBRUEsS0FBTVUsTUFBTSxzQkFBT1QsR0FBUCxFQUFZRixLQUFaLEVBQW1CQyxPQUFuQixDQUFaOztBQUVBLEtBQU1XLFNBQVMsU0FBVEEsTUFBUztBQUFBLFNBQUtELElBQUlFLENBQUosQ0FBTDtBQUFBLEVBQWY7O0FBRUEsS0FBTUMsT0FBTyxFQUFiLENBN0I4QyxDQTZCN0I7O0FBN0I2Qiw0QkErQmpDRCxDQS9CaUMsRUErQjlCSCxLQS9COEI7O0FBaUM3QyxNQUFNSyxXQUFXLHVCQUFNLHVCQUFNLHlCQUFRO0FBQUEsVUFBUVosTUFBTUMsSUFBTixFQUFZWSxHQUFaLGNBQVI7QUFBQSxHQUFSLEVBQXFDTixLQUFyQyxDQUFOLENBQU4sRUFBNkRJLElBQTdELENBQWpCOztBQUVBLE1BQUlDLGFBQWFELElBQWpCLEVBQXVCOztBQUV2QixNQUFLLHNCQUNKLHNCQUNDO0FBQUEsVUFBUVQsbUJBQ1AsdUJBQU0sd0JBQU8sQ0FBRUYsTUFBTUMsSUFBTixDQUFGLEVBQWdCUSxPQUFPQyxDQUFQLENBQWhCLENBQVAsQ0FBTixDQURPLENBQVI7QUFBQSxHQURELEVBSUMseUJBQU87QUFBQSxVQUFRVCxTQUFTVyxRQUFqQjtBQUFBLEdBQVAsRUFBa0NMLEtBQWxDLENBSkQsQ0FESSxDQUFMLEVBT0k7QUFBQSxPQUFPO0FBQVA7QUE1Q3lDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQStCOUMsdUJBQTBCLDRCQUFVVCxPQUFWLENBQTFCLDhIQUErQztBQUFBOztBQUFBOztBQUFBLE9BQWxDWSxDQUFrQztBQUFBLE9BQS9CSCxLQUErQjs7QUFBQSxvQkFBbENHLENBQWtDLEVBQS9CSCxLQUErQjs7QUFBQTtBQUFBO0FBSXZCOztBQUp1QjtBQUFBO0FBQUE7QUFlOUM7QUE5QzZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0Q5QyxRQUFPLElBQVA7QUFFQSIsImZpbGUiOiJpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGFueSAsXG5cdG1hcCAsXG5cdGxpc3QgLFxuXHRjaGFpbiAsXG5cdGVudW1lcmF0ZSAsXG5cdG5leHQgLFxuXHRpdGVyICxcblx0ZmlsdGVyICxcbn0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgZm9sbG93IGZyb20gJy4vZm9sbG93JyA7XG5pbXBvcnQgZmlyc3QgZnJvbSAnLi9maXJzdCcgO1xuaW1wb3J0IF9maXJzdCBmcm9tICcuL19maXJzdCcgO1xuaW1wb3J0IEVXIGZyb20gJy4vRVcnIDtcblxuLyoqXG4gKiBDaGVjayBpZiBncmFtbWFyIGlzIGxsKDEpLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGdyYW1tYXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpcyAoIHN0YXJ0ICwgZ3JhbW1hciApIHtcblxuXHRjb25zdCBwaGkgPSBfZmlyc3QoZ3JhbW1hcik7XG5cblx0Y29uc3QgRklSU1QgPSBydWxlID0+IGZpcnN0KHBoaSwgcnVsZSk7XG5cblx0Ly8gVE9ETyB0aGlzIGlzIHN0dXBpZFxuXHRjb25zdCBjb250YWluc2R1cGxpY2F0ZXMgPSBhcnJheSA9PiAobmV3IFNldChhcnJheSkpLnNpemUgIT09IGFycmF5Lmxlbmd0aDtcblxuXHQvLyBEcmFnb24gQm9vayAoMjAwNikgcGFnZSAyMjQ6IEZvciBldmVyeSBBLCBhLCBiIHN1Y2ggdGhhdCBBID0+IGEgfCBiXG5cdC8vIGBgLi4uIEZJUlNUKGEpIGFuZCBGSVJTVChiKSBhcmUgZGlzam9pbnQgc2V0cy4nJ1xuXG5cdGlmICggYW55KFxuXHRcdG1hcChcblx0XHRcdHJ1bGVzID0+IGNvbnRhaW5zZHVwbGljYXRlcyhcblx0XHRcdFx0bGlzdCggY2hhaW4oIG1hcCggRklSU1QgLCBydWxlcyApICkgKVxuXHRcdFx0KSAsXG5cdFx0XHRncmFtbWFyXG5cdFx0KVxuXHQpICkgcmV0dXJuIGZhbHNlIDtcblxuXHQvLyAgIGFuZCBgYC4uLiBpZiB0aGUgZW1wdHlcblx0Ly8gICB3b3JkIGlzIGluIEZJUlNUKGIpLCB0aGVuIEZJUlNUKGEpIGFuZCBGT0xMT1coQSkgYXJlIGRpc2pvaW50IHNldHMsXG5cdC8vICAgYW5kIGxpa2V3aXNlIGlmIHRoZSBlbXB0eSB3b3JkIGlzIGluIEZJUlNUKGEpLicnXG5cblx0Y29uc3QgcGhvID0gZm9sbG93KHBoaSwgc3RhcnQsIGdyYW1tYXIpO1xuXG5cdGNvbnN0IEZPTExPVyA9IEEgPT4gcGhvW0FdO1xuXG5cdGNvbnN0IGRmbHQgPSB7fTsgLy8gZHVtbXkgb2JqZWN0XG5cblx0Zm9yICggY29uc3QgW0EsIHJ1bGVzXSBvZiBlbnVtZXJhdGUoZ3JhbW1hcikgKSB7XG5cblx0XHRjb25zdCB5aWVsZHNFVyA9IG5leHQoIGl0ZXIoIGZpbHRlciggcnVsZSA9PiBGSVJTVChydWxlKS5oYXMoRVcpLCBydWxlcyApICkgLCBkZmx0ICk7XG5cblx0XHRpZiAoeWllbGRzRVcgPT09IGRmbHQpIGNvbnRpbnVlO1xuXG5cdFx0aWYgKCBhbnkgKFxuXHRcdFx0bWFwIChcblx0XHRcdFx0cnVsZSA9PiBjb250YWluc2R1cGxpY2F0ZXMoXG5cdFx0XHRcdFx0bGlzdCggY2hhaW4oIFsgRklSU1QocnVsZSkgLCBGT0xMT1coQSkgXSApIClcblx0XHRcdFx0KSAsXG5cdFx0XHRcdGZpbHRlcihydWxlID0+IHJ1bGUgIT09IHlpZWxkc0VXLCBydWxlcylcblx0XHRcdClcblx0XHQpICkgcmV0dXJuIGZhbHNlIDtcblxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG5cbn1cbiJdfQ==