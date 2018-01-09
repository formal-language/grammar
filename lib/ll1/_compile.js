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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NvbXBpbGUuanMiXSwibmFtZXMiOlsiX2NvbXBpbGUiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiYWJjIiwicGhpIiwicGhvIiwiRklSU1QiLCJydWxlIiwiZGZsdCIsIkEiLCJydWxlcyIsIm0iLCJhIiwiZ2V0IiwiciIsImxlbmd0aCIsImtleXMiLCJoYXMiLCJuIiwiTWFwIiwiayIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQXNCeUJBLFE7O0FBdEJ6Qjs7QUFRQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OzttREFXeUJBLFE7O0FBVHpCOzs7Ozs7Ozs7QUFTZSxTQUFVQSxRQUFWLENBQXFCQyxLQUFyQixFQUE2QkMsR0FBN0IsRUFBbUNDLFdBQW5DO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUkMsUUFGUSxHQUVGLHVCQUFTRCxXQUFULENBRkU7QUFJUkUsUUFKUSxHQUlGLHFCQUFPRixXQUFQLENBSkU7QUFLUkcsUUFMUSxHQUtGLHNCQUFRRCxHQUFSLEVBQWFKLEtBQWIsRUFBb0JDLEdBQXBCLEVBQXlCQyxXQUF6QixDQUxFOztBQU9SSSxVQVBRLEdBT0EsU0FBUkEsS0FBUTtBQUFBLGFBQVEscUJBQU1GLEdBQU4sRUFBV0csSUFBWCxDQUFSO0FBQUEsTUFQQTs7QUFTUkMsU0FUUSxHQVNELEVBVEMsRUFTRzs7QUFUSCxpRUFXRkMsQ0FYRSxFQVdDQyxLQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFQQyxXQWJPLEdBYUgsc0JBQ1Q7QUFBQSxrQkFBSyxDQUNKQyxDQURJLEVBRUosdUJBQ0MsdUJBQUsseUJBQU87QUFBQSxtQkFBS0YsTUFBTUcsR0FBTixDQUFVQyxDQUFWLEVBQWFDLE1BQWIsS0FBd0IsQ0FBN0I7QUFBQSxZQUFQLEVBQXVDTCxNQUFNTSxJQUFOLEVBQXZDLENBQUwsQ0FERCxFQUVDUixJQUZELENBRkksQ0FBTDtBQUFBLFdBRFMsRUFRVCx5QkFBUTtBQUFBLGtCQUFLSCxJQUFJUSxHQUFKLENBQVFKLENBQVIsRUFBV1EsR0FBWCxDQUFlTCxDQUFmLEtBQXFCLENBQUNSLElBQUlTLEdBQUosQ0FBUUosQ0FBUixFQUFXUSxHQUFYLENBQWVMLENBQWYsQ0FBM0I7QUFBQSxXQUFSLEVBQXNELHdCQUFNLENBQUNULEdBQUQsRUFBSyxDQUFDRixHQUFELENBQUwsQ0FBTixDQUF0RCxDQVJTLENBYkc7QUF3QlBpQixXQXhCTyxHQXdCSCxzQkFDVDtBQUFBLGtCQUFLLENBQ0pOLENBREksRUFFSix1QkFDQyx1QkFBSyx5QkFBTztBQUFBLG1CQUFLTixNQUFNSSxNQUFNRyxHQUFOLENBQVVDLENBQVYsQ0FBTixFQUFvQkcsR0FBcEIsQ0FBd0JMLENBQXhCLENBQUw7QUFBQSxZQUFQLEVBQXdDRixNQUFNTSxJQUFOLEVBQXhDLENBQUwsQ0FERCxFQUVDUixJQUZELENBRkksQ0FBTDtBQUFBLFdBRFMsRUFRVCx5QkFBUTtBQUFBLGtCQUFLSSxpQkFBTDtBQUFBLFdBQVIsRUFBd0JULEdBQXhCLENBUlMsQ0F4Qkc7QUFBQTtBQUFBLGlCQW1DUCxDQUFFTSxDQUFGLEVBQU0sSUFBSVUsR0FBSixDQUFRLHlCQUFPO0FBQUE7QUFBQSxlQUFFQyxDQUFGO0FBQUEsZUFBSUMsQ0FBSjs7QUFBQSxrQkFBV0EsTUFBTWIsSUFBakI7QUFBQSxXQUFQLEVBQThCLHdCQUFNLENBQUNHLENBQUQsRUFBR08sQ0FBSCxDQUFOLENBQTlCLENBQVIsQ0FBTixDQW5DTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBV1doQixXQVhYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVdGTyxNQVhFO0FBV0NDLFVBWEQ7QUFBQSwwQ0FXRkQsQ0FYRSxFQVdDQyxLQVhEOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiX2NvbXBpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRtYXAgLFxuXHRmaWx0ZXIgLFxuXHRjaGFpbiAsXG5cdG5leHQgLFxuXHRpdGVyICxcbn0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgZmlyc3QgZnJvbSAnLi9maXJzdCcgO1xuaW1wb3J0IF9maXJzdCBmcm9tICcuL19maXJzdCcgO1xuaW1wb3J0IF9mb2xsb3cgZnJvbSAnLi9fZm9sbG93JyA7XG5pbXBvcnQgeyBhbHBoYWJldCAsIEVXIH0gZnJvbSAnLi4vZ3JhbW1hcicgO1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgcm93cyBvZiB0aGUgcHJlZGljdGl2ZSBwYXJzaW5nIHRhYmxlIGZvciBhIGdyYW1tYXIuXG4gKiBDb3JyZXNwb25kcyB0byBBbGdvcml0aG0gNC4zMSBpbiBEcmFnb24gQm9vayAoMjAwNikgb24gcGFnZSAyMjQuXG4gKlxuICogQHBhcmFtIHN0YXJ0XG4gKiBAcGFyYW0gZW9mXG4gKiBAcGFyYW0gcHJvZHVjdGlvbnNcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfY29tcGlsZSAoIHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMgKSB7XG5cblx0Y29uc3QgYWJjID0gYWxwaGFiZXQocHJvZHVjdGlvbnMpO1xuXG5cdGNvbnN0IHBoaSA9IF9maXJzdChwcm9kdWN0aW9ucyk7XG5cdGNvbnN0IHBobyA9IF9mb2xsb3cocGhpLCBzdGFydCwgZW9mLCBwcm9kdWN0aW9ucyk7XG5cblx0Y29uc3QgRklSU1QgPSBydWxlID0+IGZpcnN0KHBoaSwgcnVsZSkgO1xuXG5cdGNvbnN0IGRmbHQgPSB7fTsgLy8gZHVtbXkgb2JqZWN0XG5cblx0Zm9yIChjb25zdCBbQSwgcnVsZXNdIG9mIHByb2R1Y3Rpb25zKSB7XG5cblx0XHRjb25zdCBtID0gbWFwKFxuXHRcdFx0YSA9PiBbXG5cdFx0XHRcdGEgLFxuXHRcdFx0XHRuZXh0KFxuXHRcdFx0XHRcdGl0ZXIoZmlsdGVyKHIgPT4gcnVsZXMuZ2V0KHIpLmxlbmd0aCA9PT0gMCwgcnVsZXMua2V5cygpKSksXG5cdFx0XHRcdFx0ZGZsdCxcblx0XHRcdFx0KSAsXG5cdFx0XHRdICxcblx0XHRcdGZpbHRlciggYSA9PiBwaG8uZ2V0KEEpLmhhcyhhKSAmJiAhcGhpLmdldChBKS5oYXMoYSksIGNoYWluKFthYmMsW2VvZl1dKSlcblx0XHQpO1xuXG5cdFx0Y29uc3QgbiA9IG1hcChcblx0XHRcdGEgPT4gW1xuXHRcdFx0XHRhICxcblx0XHRcdFx0bmV4dChcblx0XHRcdFx0XHRpdGVyKGZpbHRlcihyID0+IEZJUlNUKHJ1bGVzLmdldChyKSkuaGFzKGEpLCBydWxlcy5rZXlzKCkpKSxcblx0XHRcdFx0XHRkZmx0LFxuXHRcdFx0XHQpICxcblx0XHRcdF0gLFxuXHRcdFx0ZmlsdGVyKCBhID0+IGEgIT09IEVXICwgYWJjIClcblx0XHQpO1xuXG5cdFx0eWllbGQgWyBBICwgbmV3IE1hcChmaWx0ZXIoKFtrLHZdKSA9PiB2ICE9PSBkZmx0LCBjaGFpbihbbSxuXSkpKSBdIDtcblxuXHR9XG5cbn1cbiJdfQ==