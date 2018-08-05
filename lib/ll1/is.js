'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = is;

var _jsItertools = require('@aureooms/js-itertools');

var _first2 = require('./_first');

var _first3 = _interopRequireDefault(_first2);

var _follow2 = require('./_follow');

var _follow3 = _interopRequireDefault(_follow2);

var _first4 = require('./first');

var _first5 = _interopRequireDefault(_first4);

var _grammar = require('../grammar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if grammar is ll(1).
 *
 * @param {Grammar} grammar
 * @returns {Boolean}
 */
function is(_ref) {
	var start = _ref.start,
	    eof = _ref.eof,
	    productions = _ref.productions;


	var phi = (0, _first3.default)(productions);

	var FIRST = function FIRST(rule) {
		return (0, _first5.default)(phi, rule);
	};

	// TODO this is stupid
	var containsduplicates = function containsduplicates(array) {
		return new Set(array).size !== array.length;
	};

	// Dragon Book (2006) page 224: For every A, a, b such that A => a | b
	// ``... FIRST(a) and FIRST(b) are disjoint sets.''

	if ((0, _jsItertools.any)((0, _jsItertools.map)(function (rules) {
		return containsduplicates((0, _jsItertools.list)((0, _jsItertools.chain)((0, _jsItertools.map)(FIRST, rules.values()))));
	}, productions.values()))) return false;

	//   and ``... if the empty
	//   word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets,
	//   and likewise if the empty word is in FIRST(a).''

	var pho = (0, _follow3.default)(phi, start, eof, productions);

	var FOLLOW = function FOLLOW(A) {
		return pho.get(A);
	};

	var dflt = {}; // dummy object

	var _loop = function _loop(A, rules) {

		var yieldsEW = (0, _jsItertools.next)((0, _jsItertools.iter)((0, _jsItertools.filter)(function (rule) {
			return FIRST(rule).has(_grammar.EW);
		}, rules.values())), dflt);

		if (yieldsEW === dflt) return 'continue';

		if ((0, _jsItertools.any)((0, _jsItertools.map)(function (rule) {
			return containsduplicates((0, _jsItertools.list)((0, _jsItertools.chain)([FIRST(rule), FOLLOW(A)])));
		}, (0, _jsItertools.filter)(function (rule) {
			return rule !== yieldsEW;
		}, rules.values())))) return {
				v: false
			};
	};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = productions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref2 = _step.value;

			var _ref3 = _slicedToArray(_ref2, 2);

			var A = _ref3[0];
			var rules = _ref3[1];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvaXMuanMiXSwibmFtZXMiOlsiaXMiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwicGhpIiwiRklSU1QiLCJydWxlIiwiY29udGFpbnNkdXBsaWNhdGVzIiwiU2V0IiwiYXJyYXkiLCJzaXplIiwibGVuZ3RoIiwicnVsZXMiLCJ2YWx1ZXMiLCJwaG8iLCJGT0xMT1ciLCJnZXQiLCJBIiwiZGZsdCIsInlpZWxkc0VXIiwiaGFzIiwiRVciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBc0J3QkEsRTs7QUF0QnhCOztBQVdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQU1lLFNBQVNBLEVBQVQsT0FBOEM7QUFBQSxLQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsS0FBdEJDLEdBQXNCLFFBQXRCQSxHQUFzQjtBQUFBLEtBQWhCQyxXQUFnQixRQUFoQkEsV0FBZ0I7OztBQUU1RCxLQUFNQyxNQUFNLHFCQUFPRCxXQUFQLENBQVo7O0FBRUEsS0FBTUUsUUFBUSxTQUFSQSxLQUFRO0FBQUEsU0FBUSxxQkFBTUQsR0FBTixFQUFXRSxJQUFYLENBQVI7QUFBQSxFQUFkOztBQUVBO0FBQ0EsS0FBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFVLElBQUlDLEdBQUosQ0FBUUMsS0FBUixDQUFELENBQWlCQyxJQUFqQixLQUEwQkQsTUFBTUUsTUFBekM7QUFBQSxFQUEzQjs7QUFFQTtBQUNBOztBQUVBLEtBQUssc0JBQ0osc0JBQ0M7QUFBQSxTQUFTSixtQkFDUix1QkFBTSx3QkFBTyxzQkFBS0YsS0FBTCxFQUFhTyxNQUFNQyxNQUFOLEVBQWIsQ0FBUCxDQUFOLENBRFEsQ0FBVDtBQUFBLEVBREQsRUFJQ1YsWUFBWVUsTUFBWixFQUpELENBREksQ0FBTCxFQU9JLE9BQU8sS0FBUDs7QUFFSjtBQUNBO0FBQ0E7O0FBRUEsS0FBTUMsTUFBTSxzQkFBUVYsR0FBUixFQUFhSCxLQUFiLEVBQW9CQyxHQUFwQixFQUF5QkMsV0FBekIsQ0FBWjs7QUFFQSxLQUFNWSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFLRCxJQUFJRSxHQUFKLENBQVFDLENBQVIsQ0FBTDtBQUFBLEVBQWY7O0FBRUEsS0FBTUMsT0FBTyxFQUFiLENBN0I0RCxDQTZCM0M7O0FBN0IyQyw0QkErQi9DRCxDQS9CK0MsRUErQjVDTCxLQS9CNEM7O0FBaUMzRCxNQUFNTyxXQUFXLHVCQUFNLHVCQUFNLHlCQUFRO0FBQUEsVUFBUWQsTUFBTUMsSUFBTixFQUFZYyxHQUFaLENBQWdCQyxXQUFoQixDQUFSO0FBQUEsR0FBUixFQUFxQ1QsTUFBTUMsTUFBTixFQUFyQyxDQUFOLENBQU4sRUFBc0VLLElBQXRFLENBQWpCOztBQUVBLE1BQUlDLGFBQWFELElBQWpCLEVBQXVCOztBQUV2QixNQUFLLHNCQUNKLHNCQUNDO0FBQUEsVUFBUVgsbUJBQ1AsdUJBQU0sd0JBQU8sQ0FBRUYsTUFBTUMsSUFBTixDQUFGLEVBQWdCUyxPQUFPRSxDQUFQLENBQWhCLENBQVAsQ0FBTixDQURPLENBQVI7QUFBQSxHQURELEVBSUMseUJBQU87QUFBQSxVQUFRWCxTQUFTYSxRQUFqQjtBQUFBLEdBQVAsRUFBa0NQLE1BQU1DLE1BQU4sRUFBbEMsQ0FKRCxDQURJLENBQUwsRUFPSTtBQUFBLE9BQU87QUFBUDtBQTVDdUQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBK0I1RCx1QkFBMEJWLFdBQTFCLDhIQUF3QztBQUFBOztBQUFBOztBQUFBLE9BQTNCYyxDQUEyQjtBQUFBLE9BQXhCTCxLQUF3Qjs7QUFBQSxvQkFBM0JLLENBQTJCLEVBQXhCTCxLQUF3Qjs7QUFBQTtBQUFBO0FBSWhCOztBQUpnQjtBQUFBO0FBQUE7QUFldkM7QUE5QzJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0Q1RCxRQUFPLElBQVA7QUFFQSIsImZpbGUiOiJpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGFueSAsXG5cdG1hcCAsXG5cdGxpc3QgLFxuXHRjaGFpbiAsXG5cdGVudW1lcmF0ZSAsXG5cdG5leHQgLFxuXHRpdGVyICxcblx0ZmlsdGVyICxcbn0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgX2ZpcnN0IGZyb20gJy4vX2ZpcnN0JyA7XG5pbXBvcnQgX2ZvbGxvdyBmcm9tICcuL19mb2xsb3cnIDtcbmltcG9ydCBmaXJzdCBmcm9tICcuL2ZpcnN0JyA7XG5pbXBvcnQgeyBFVyB9IGZyb20gJy4uL2dyYW1tYXInIDtcblxuLyoqXG4gKiBDaGVjayBpZiBncmFtbWFyIGlzIGxsKDEpLlxuICpcbiAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzICggeyBzdGFydCAsIGVvZiAsIHByb2R1Y3Rpb25zIH0gKSB7XG5cblx0Y29uc3QgcGhpID0gX2ZpcnN0KHByb2R1Y3Rpb25zKTtcblxuXHRjb25zdCBGSVJTVCA9IHJ1bGUgPT4gZmlyc3QocGhpLCBydWxlKTtcblxuXHQvLyBUT0RPIHRoaXMgaXMgc3R1cGlkXG5cdGNvbnN0IGNvbnRhaW5zZHVwbGljYXRlcyA9IGFycmF5ID0+IChuZXcgU2V0KGFycmF5KSkuc2l6ZSAhPT0gYXJyYXkubGVuZ3RoO1xuXG5cdC8vIERyYWdvbiBCb29rICgyMDA2KSBwYWdlIDIyNDogRm9yIGV2ZXJ5IEEsIGEsIGIgc3VjaCB0aGF0IEEgPT4gYSB8IGJcblx0Ly8gYGAuLi4gRklSU1QoYSkgYW5kIEZJUlNUKGIpIGFyZSBkaXNqb2ludCBzZXRzLicnXG5cblx0aWYgKCBhbnkoXG5cdFx0bWFwKFxuXHRcdFx0cnVsZXMgPT4gY29udGFpbnNkdXBsaWNhdGVzKFxuXHRcdFx0XHRsaXN0KCBjaGFpbiggbWFwKCBGSVJTVCAsIHJ1bGVzLnZhbHVlcygpICkgKSApXG5cdFx0XHQpICxcblx0XHRcdHByb2R1Y3Rpb25zLnZhbHVlcygpXG5cdFx0KVxuXHQpICkgcmV0dXJuIGZhbHNlIDtcblxuXHQvLyAgIGFuZCBgYC4uLiBpZiB0aGUgZW1wdHlcblx0Ly8gICB3b3JkIGlzIGluIEZJUlNUKGIpLCB0aGVuIEZJUlNUKGEpIGFuZCBGT0xMT1coQSkgYXJlIGRpc2pvaW50IHNldHMsXG5cdC8vICAgYW5kIGxpa2V3aXNlIGlmIHRoZSBlbXB0eSB3b3JkIGlzIGluIEZJUlNUKGEpLicnXG5cblx0Y29uc3QgcGhvID0gX2ZvbGxvdyhwaGksIHN0YXJ0LCBlb2YsIHByb2R1Y3Rpb25zKTtcblxuXHRjb25zdCBGT0xMT1cgPSBBID0+IHBoby5nZXQoQSk7XG5cblx0Y29uc3QgZGZsdCA9IHt9OyAvLyBkdW1teSBvYmplY3RcblxuXHRmb3IgKCBjb25zdCBbQSwgcnVsZXNdIG9mIHByb2R1Y3Rpb25zICkge1xuXG5cdFx0Y29uc3QgeWllbGRzRVcgPSBuZXh0KCBpdGVyKCBmaWx0ZXIoIHJ1bGUgPT4gRklSU1QocnVsZSkuaGFzKEVXKSwgcnVsZXMudmFsdWVzKCkgKSApICwgZGZsdCApO1xuXG5cdFx0aWYgKHlpZWxkc0VXID09PSBkZmx0KSBjb250aW51ZTtcblxuXHRcdGlmICggYW55IChcblx0XHRcdG1hcCAoXG5cdFx0XHRcdHJ1bGUgPT4gY29udGFpbnNkdXBsaWNhdGVzKFxuXHRcdFx0XHRcdGxpc3QoIGNoYWluKCBbIEZJUlNUKHJ1bGUpICwgRk9MTE9XKEEpIF0gKSApXG5cdFx0XHRcdCkgLFxuXHRcdFx0XHRmaWx0ZXIocnVsZSA9PiBydWxlICE9PSB5aWVsZHNFVywgcnVsZXMudmFsdWVzKCkpXG5cdFx0XHQpXG5cdFx0KSApIHJldHVybiBmYWxzZSA7XG5cblx0fVxuXG5cdHJldHVybiB0cnVlO1xuXG59XG4iXX0=