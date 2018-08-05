'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _compile;

var _jsItertools = require('@aureooms/js-itertools');

var _first2 = require('./first');

var _first3 = _interopRequireDefault(_first2);

var _first4 = require('./_first');

var _first5 = _interopRequireDefault(_first4);

var _follow2 = require('./_follow');

var _follow3 = _interopRequireDefault(_follow2);

var _grammar = require('../grammar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_compile);

/**
 * Generates the rows of the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param start
 * @param eof
 * @param productions
 * @returns {undefined}
 */
function _compile(start, eof, productions) {
	var _this = this;

	var abc, phi, pho, FIRST, dflt, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, A, rules;

	return regeneratorRuntime.wrap(function _compile$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					abc = (0, _grammar.alphabet)(productions);
					phi = (0, _first5.default)(productions);
					pho = (0, _follow3.default)(phi, start, eof, productions);

					FIRST = function FIRST(rule) {
						return (0, _first3.default)(phi, rule);
					};

					dflt = {}; // dummy object

					_loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(A, rules) {
						var m, n;
						return regeneratorRuntime.wrap(function _loop$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										m = (0, _jsItertools.map)(function (a) {
											return [a, (0, _jsItertools.next)((0, _jsItertools.iter)((0, _jsItertools.filter)(function (r) {
												return rules.get(r).length === 0;
											}, rules.keys())), dflt)];
										}, (0, _jsItertools.filter)(function (a) {
											return pho.get(A).has(a) && !phi.get(A).has(a);
										}, (0, _jsItertools.chain)([abc, [eof]])));
										n = (0, _jsItertools.map)(function (a) {
											return [a, (0, _jsItertools.next)((0, _jsItertools.iter)((0, _jsItertools.filter)(function (r) {
												return FIRST(rules.get(r)).has(a);
											}, rules.keys())), dflt)];
										}, (0, _jsItertools.filter)(function (a) {
											return a !== _grammar.EW;
										}, abc));
										_context.next = 4;
										return [A, new Map((0, _jsItertools.filter)(function (_ref3) {
											var _ref4 = _slicedToArray(_ref3, 2),
											    k = _ref4[0],
											    v = _ref4[1];

											return v !== dflt;
										}, (0, _jsItertools.chain)([m, n])))];

									case 4:
									case 'end':
										return _context.stop();
								}
							}
						}, _loop, _this);
					});
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context2.prev = 9;
					_iterator = productions[Symbol.iterator]();

				case 11:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context2.next = 20;
						break;
					}

					_ref = _step.value;
					_ref2 = _slicedToArray(_ref, 2);
					A = _ref2[0];
					rules = _ref2[1];
					return _context2.delegateYield(_loop(A, rules), 't0', 17);

				case 17:
					_iteratorNormalCompletion = true;
					_context2.next = 11;
					break;

				case 20:
					_context2.next = 26;
					break;

				case 22:
					_context2.prev = 22;
					_context2.t1 = _context2['catch'](9);
					_didIteratorError = true;
					_iteratorError = _context2.t1;

				case 26:
					_context2.prev = 26;
					_context2.prev = 27;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 29:
					_context2.prev = 29;

					if (!_didIteratorError) {
						_context2.next = 32;
						break;
					}

					throw _iteratorError;

				case 32:
					return _context2.finish(29);

				case 33:
					return _context2.finish(26);

				case 34:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked, this, [[9, 22, 26, 34], [27,, 29, 33]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NvbXBpbGUuanMiXSwibmFtZXMiOlsiX2NvbXBpbGUiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiYWJjIiwicGhpIiwicGhvIiwiRklSU1QiLCJydWxlIiwiZGZsdCIsIkEiLCJydWxlcyIsIm0iLCJhIiwiZ2V0IiwiciIsImxlbmd0aCIsImtleXMiLCJoYXMiLCJuIiwiRVciLCJNYXAiLCJrIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBc0J5QkEsUTs7QUF0QnpCOztBQVFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O21EQVd5QkEsUTs7QUFUekI7Ozs7Ozs7OztBQVNlLFNBQVVBLFFBQVYsQ0FBcUJDLEtBQXJCLEVBQTZCQyxHQUE3QixFQUFtQ0MsV0FBbkM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVSQyxRQUZRLEdBRUYsdUJBQVNELFdBQVQsQ0FGRTtBQUlSRSxRQUpRLEdBSUYscUJBQU9GLFdBQVAsQ0FKRTtBQUtSRyxRQUxRLEdBS0Ysc0JBQVFELEdBQVIsRUFBYUosS0FBYixFQUFvQkMsR0FBcEIsRUFBeUJDLFdBQXpCLENBTEU7O0FBT1JJLFVBUFEsR0FPQSxTQUFSQSxLQUFRO0FBQUEsYUFBUSxxQkFBTUYsR0FBTixFQUFXRyxJQUFYLENBQVI7QUFBQSxNQVBBOztBQVNSQyxTQVRRLEdBU0QsRUFUQyxFQVNHOztBQVRILGlFQVdGQyxDQVhFLEVBV0NDLEtBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYVBDLFdBYk8sR0FhSCxzQkFDVDtBQUFBLGtCQUFLLENBQ0pDLENBREksRUFFSix1QkFDQyx1QkFBSyx5QkFBTztBQUFBLG1CQUFLRixNQUFNRyxHQUFOLENBQVVDLENBQVYsRUFBYUMsTUFBYixLQUF3QixDQUE3QjtBQUFBLFlBQVAsRUFBdUNMLE1BQU1NLElBQU4sRUFBdkMsQ0FBTCxDQURELEVBRUNSLElBRkQsQ0FGSSxDQUFMO0FBQUEsV0FEUyxFQVFULHlCQUFRO0FBQUEsa0JBQUtILElBQUlRLEdBQUosQ0FBUUosQ0FBUixFQUFXUSxHQUFYLENBQWVMLENBQWYsS0FBcUIsQ0FBQ1IsSUFBSVMsR0FBSixDQUFRSixDQUFSLEVBQVdRLEdBQVgsQ0FBZUwsQ0FBZixDQUEzQjtBQUFBLFdBQVIsRUFBc0Qsd0JBQU0sQ0FBQ1QsR0FBRCxFQUFLLENBQUNGLEdBQUQsQ0FBTCxDQUFOLENBQXRELENBUlMsQ0FiRztBQXdCUGlCLFdBeEJPLEdBd0JILHNCQUNUO0FBQUEsa0JBQUssQ0FDSk4sQ0FESSxFQUVKLHVCQUNDLHVCQUFLLHlCQUFPO0FBQUEsbUJBQUtOLE1BQU1JLE1BQU1HLEdBQU4sQ0FBVUMsQ0FBVixDQUFOLEVBQW9CRyxHQUFwQixDQUF3QkwsQ0FBeEIsQ0FBTDtBQUFBLFlBQVAsRUFBd0NGLE1BQU1NLElBQU4sRUFBeEMsQ0FBTCxDQURELEVBRUNSLElBRkQsQ0FGSSxDQUFMO0FBQUEsV0FEUyxFQVFULHlCQUFRO0FBQUEsa0JBQUtJLE1BQU1PLFdBQVg7QUFBQSxXQUFSLEVBQXdCaEIsR0FBeEIsQ0FSUyxDQXhCRztBQUFBO0FBQUEsaUJBbUNQLENBQUVNLENBQUYsRUFBTSxJQUFJVyxHQUFKLENBQVEseUJBQU87QUFBQTtBQUFBLGVBQUVDLENBQUY7QUFBQSxlQUFJQyxDQUFKOztBQUFBLGtCQUFXQSxNQUFNZCxJQUFqQjtBQUFBLFdBQVAsRUFBOEIsd0JBQU0sQ0FBQ0csQ0FBRCxFQUFHTyxDQUFILENBQU4sQ0FBOUIsQ0FBUixDQUFOLENBbkNPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFXV2hCLFdBWFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBV0ZPLE1BWEU7QUFXQ0MsVUFYRDtBQUFBLDBDQVdGRCxDQVhFLEVBV0NDLEtBWEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfY29tcGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdG1hcCAsXG5cdGZpbHRlciAsXG5cdGNoYWluICxcblx0bmV4dCAsXG5cdGl0ZXIgLFxufSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCBmaXJzdCBmcm9tICcuL2ZpcnN0JyA7XG5pbXBvcnQgX2ZpcnN0IGZyb20gJy4vX2ZpcnN0JyA7XG5pbXBvcnQgX2ZvbGxvdyBmcm9tICcuL19mb2xsb3cnIDtcbmltcG9ydCB7IGFscGhhYmV0ICwgRVcgfSBmcm9tICcuLi9ncmFtbWFyJyA7XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSByb3dzIG9mIHRoZSBwcmVkaWN0aXZlIHBhcnNpbmcgdGFibGUgZm9yIGEgZ3JhbW1hci5cbiAqIENvcnJlc3BvbmRzIHRvIEFsZ29yaXRobSA0LjMxIGluIERyYWdvbiBCb29rICgyMDA2KSBvbiBwYWdlIDIyNC5cbiAqXG4gKiBAcGFyYW0gc3RhcnRcbiAqIEBwYXJhbSBlb2ZcbiAqIEBwYXJhbSBwcm9kdWN0aW9uc1xuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9jb21waWxlICggc3RhcnQgLCBlb2YgLCBwcm9kdWN0aW9ucyApIHtcblxuXHRjb25zdCBhYmMgPSBhbHBoYWJldChwcm9kdWN0aW9ucyk7XG5cblx0Y29uc3QgcGhpID0gX2ZpcnN0KHByb2R1Y3Rpb25zKTtcblx0Y29uc3QgcGhvID0gX2ZvbGxvdyhwaGksIHN0YXJ0LCBlb2YsIHByb2R1Y3Rpb25zKTtcblxuXHRjb25zdCBGSVJTVCA9IHJ1bGUgPT4gZmlyc3QocGhpLCBydWxlKSA7XG5cblx0Y29uc3QgZGZsdCA9IHt9OyAvLyBkdW1teSBvYmplY3RcblxuXHRmb3IgKGNvbnN0IFtBLCBydWxlc10gb2YgcHJvZHVjdGlvbnMpIHtcblxuXHRcdGNvbnN0IG0gPSBtYXAoXG5cdFx0XHRhID0+IFtcblx0XHRcdFx0YSAsXG5cdFx0XHRcdG5leHQoXG5cdFx0XHRcdFx0aXRlcihmaWx0ZXIociA9PiBydWxlcy5nZXQocikubGVuZ3RoID09PSAwLCBydWxlcy5rZXlzKCkpKSxcblx0XHRcdFx0XHRkZmx0LFxuXHRcdFx0XHQpICxcblx0XHRcdF0gLFxuXHRcdFx0ZmlsdGVyKCBhID0+IHBoby5nZXQoQSkuaGFzKGEpICYmICFwaGkuZ2V0KEEpLmhhcyhhKSwgY2hhaW4oW2FiYyxbZW9mXV0pKVxuXHRcdCk7XG5cblx0XHRjb25zdCBuID0gbWFwKFxuXHRcdFx0YSA9PiBbXG5cdFx0XHRcdGEgLFxuXHRcdFx0XHRuZXh0KFxuXHRcdFx0XHRcdGl0ZXIoZmlsdGVyKHIgPT4gRklSU1QocnVsZXMuZ2V0KHIpKS5oYXMoYSksIHJ1bGVzLmtleXMoKSkpLFxuXHRcdFx0XHRcdGRmbHQsXG5cdFx0XHRcdCkgLFxuXHRcdFx0XSAsXG5cdFx0XHRmaWx0ZXIoIGEgPT4gYSAhPT0gRVcgLCBhYmMgKVxuXHRcdCk7XG5cblx0XHR5aWVsZCBbIEEgLCBuZXcgTWFwKGZpbHRlcigoW2ssdl0pID0+IHYgIT09IGRmbHQsIGNoYWluKFttLG5dKSkpIF0gO1xuXG5cdH1cblxufVxuIl19