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

var _follow = require('./follow');

var _follow2 = _interopRequireDefault(_follow);

var _alphabet = require('./alphabet');

var _alphabet2 = _interopRequireDefault(_alphabet);

var _EW = require('./EW');

var _EW2 = _interopRequireDefault(_EW);

var _EOF = require('./EOF');

var _EOF2 = _interopRequireDefault(_EOF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_compile);

/**
 * Generates the lines of the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * TODO handle translation
 *
 * @param grammar
 * @param start
 * @returns {undefined}
 */
function _compile(start, grammar) {
	var _this = this;

	var abc, phi, pho, FIRST, dflt, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, A, rules;

	return regeneratorRuntime.wrap(function _compile$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					abc = (0, _alphabet2.default)(grammar);
					phi = (0, _first5.default)(grammar);
					pho = (0, _follow2.default)(phi, start, grammar);

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
												return rules[r].length === 0;
											}, (0, _jsItertools.range)(rules.length))), dflt)];
										}, (0, _jsItertools.filter)(function (a) {
											return pho[A].has(a) && !phi[A].has(a);
										}, (0, _jsItertools.chain)([abc, [_EOF2.default]])));
										n = (0, _jsItertools.map)(function (a) {
											return [a, (0, _jsItertools.next)((0, _jsItertools.iter)((0, _jsItertools.filter)(function (r) {
												return FIRST(rules[r]).has(a);
											}, (0, _jsItertools.range)(rules.length))), dflt)];
										}, (0, _jsItertools.filter)(function (a) {
											return a != _EW2.default;
										}, abc));
										_context.next = 4;
										return new Map((0, _jsItertools.filter)(function (_ref3) {
											var _ref4 = _slicedToArray(_ref3, 2),
											    k = _ref4[0],
											    v = _ref4[1];

											return v !== dflt;
										}, (0, _jsItertools.chain)([m, n])));

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
					_iterator = (0, _jsItertools.enumerate)(grammar)[Symbol.iterator]();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NvbXBpbGUuanMiXSwibmFtZXMiOlsiX2NvbXBpbGUiLCJzdGFydCIsImdyYW1tYXIiLCJhYmMiLCJwaGkiLCJwaG8iLCJGSVJTVCIsInJ1bGUiLCJkZmx0IiwiQSIsInJ1bGVzIiwibSIsImEiLCJyIiwibGVuZ3RoIiwiaGFzIiwibiIsIk1hcCIsImsiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkEyQnlCQSxROztBQTNCekI7O0FBVUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7bURBWXlCQSxROztBQVZ6Qjs7Ozs7Ozs7OztBQVVlLFNBQVVBLFFBQVYsQ0FBcUJDLEtBQXJCLEVBQTZCQyxPQUE3QjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVJDLFFBRlEsR0FFRix3QkFBU0QsT0FBVCxDQUZFO0FBSVJFLFFBSlEsR0FJRixxQkFBT0YsT0FBUCxDQUpFO0FBS1JHLFFBTFEsR0FLRixzQkFBT0QsR0FBUCxFQUFZSCxLQUFaLEVBQW1CQyxPQUFuQixDQUxFOztBQU9SSSxVQVBRLEdBT0EsU0FBUkEsS0FBUTtBQUFBLGFBQVEscUJBQU1GLEdBQU4sRUFBV0csSUFBWCxDQUFSO0FBQUEsTUFQQTs7QUFTUkMsU0FUUSxHQVNELEVBVEMsRUFTRzs7QUFUSCxpRUFXRkMsQ0FYRSxFQVdDQyxLQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFQQyxXQWJPLEdBYUgsc0JBQ1Q7QUFBQSxrQkFBSyxDQUNKQyxDQURJLEVBRUosdUJBQ0MsdUJBQUsseUJBQU87QUFBQSxtQkFBS0YsTUFBTUcsQ0FBTixFQUFTQyxNQUFULEtBQW9CLENBQXpCO0FBQUEsWUFBUCxFQUFtQyx3QkFBTUosTUFBTUksTUFBWixDQUFuQyxDQUFMLENBREQsRUFFQ04sSUFGRCxDQUZJLENBQUw7QUFBQSxXQURTLEVBUVQseUJBQVE7QUFBQSxrQkFBS0gsSUFBSUksQ0FBSixFQUFPTSxHQUFQLENBQVdILENBQVgsS0FBaUIsQ0FBQ1IsSUFBSUssQ0FBSixFQUFPTSxHQUFQLENBQVdILENBQVgsQ0FBdkI7QUFBQSxXQUFSLEVBQThDLHdCQUFNLENBQUNULEdBQUQsRUFBSyxlQUFMLENBQU4sQ0FBOUMsQ0FSUyxDQWJHO0FBd0JQYSxXQXhCTyxHQXdCSCxzQkFDVDtBQUFBLGtCQUFLLENBQ0pKLENBREksRUFFSix1QkFDQyx1QkFBSyx5QkFBTztBQUFBLG1CQUFLTixNQUFNSSxNQUFNRyxDQUFOLENBQU4sRUFBZ0JFLEdBQWhCLENBQW9CSCxDQUFwQixDQUFMO0FBQUEsWUFBUCxFQUFvQyx3QkFBTUYsTUFBTUksTUFBWixDQUFwQyxDQUFMLENBREQsRUFFQ04sSUFGRCxDQUZJLENBQUw7QUFBQSxXQURTLEVBUVQseUJBQVE7QUFBQSxrQkFBS0ksaUJBQUw7QUFBQSxXQUFSLEVBQXVCVCxHQUF2QixDQVJTLENBeEJHO0FBQUE7QUFBQSxpQkFtQ1AsSUFBSWMsR0FBSixDQUFRLHlCQUFPO0FBQUE7QUFBQSxlQUFFQyxDQUFGO0FBQUEsZUFBSUMsQ0FBSjs7QUFBQSxrQkFBV0EsTUFBTVgsSUFBakI7QUFBQSxXQUFQLEVBQThCLHdCQUFNLENBQUNHLENBQUQsRUFBR0ssQ0FBSCxDQUFOLENBQTlCLENBQVIsQ0FuQ087O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVdXLDRCQUFVZCxPQUFWLENBWFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBV0ZPLE1BWEU7QUFXQ0MsVUFYRDtBQUFBLDBDQVdGRCxDQVhFLEVBV0NDLEtBWEQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfY29tcGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGVudW1lcmF0ZSAsXG5cdG1hcCAsXG5cdGZpbHRlciAsXG5cdGNoYWluICxcblx0bmV4dCAsXG5cdGl0ZXIgLFxuXHRyYW5nZSAsXG59IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IGZpcnN0IGZyb20gJy4vZmlyc3QnIDtcbmltcG9ydCBfZmlyc3QgZnJvbSAnLi9fZmlyc3QnIDtcbmltcG9ydCBmb2xsb3cgZnJvbSAnLi9mb2xsb3cnIDtcbmltcG9ydCBhbHBoYWJldCBmcm9tICcuL2FscGhhYmV0JyA7XG5pbXBvcnQgRVcgZnJvbSAnLi9FVycgO1xuaW1wb3J0IEVPRiBmcm9tICcuL0VPRicgO1xuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgbGluZXMgb2YgdGhlIHByZWRpY3RpdmUgcGFyc2luZyB0YWJsZSBmb3IgYSBncmFtbWFyLlxuICogQ29ycmVzcG9uZHMgdG8gQWxnb3JpdGhtIDQuMzEgaW4gRHJhZ29uIEJvb2sgKDIwMDYpIG9uIHBhZ2UgMjI0LlxuICpcbiAqIFRPRE8gaGFuZGxlIHRyYW5zbGF0aW9uXG4gKlxuICogQHBhcmFtIGdyYW1tYXJcbiAqIEBwYXJhbSBzdGFydFxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9jb21waWxlICggc3RhcnQgLCBncmFtbWFyICkge1xuXG5cdGNvbnN0IGFiYyA9IGFscGhhYmV0KGdyYW1tYXIpO1xuXG5cdGNvbnN0IHBoaSA9IF9maXJzdChncmFtbWFyKTtcblx0Y29uc3QgcGhvID0gZm9sbG93KHBoaSwgc3RhcnQsIGdyYW1tYXIpO1xuXG5cdGNvbnN0IEZJUlNUID0gcnVsZSA9PiBmaXJzdChwaGksIHJ1bGUpIDtcblxuXHRjb25zdCBkZmx0ID0ge307IC8vIGR1bW15IG9iamVjdFxuXG5cdGZvciAoY29uc3QgW0EsIHJ1bGVzXSBvZiBlbnVtZXJhdGUoZ3JhbW1hcikpIHtcblxuXHRcdGNvbnN0IG0gPSBtYXAoXG5cdFx0XHRhID0+IFtcblx0XHRcdFx0YSAsXG5cdFx0XHRcdG5leHQoXG5cdFx0XHRcdFx0aXRlcihmaWx0ZXIociA9PiBydWxlc1tyXS5sZW5ndGggPT09IDAsIHJhbmdlKHJ1bGVzLmxlbmd0aCkpKSxcblx0XHRcdFx0XHRkZmx0LFxuXHRcdFx0XHQpICxcblx0XHRcdF0gLFxuXHRcdFx0ZmlsdGVyKCBhID0+IHBob1tBXS5oYXMoYSkgJiYgIXBoaVtBXS5oYXMoYSksIGNoYWluKFthYmMsW0VPRl1dKSlcblx0XHQpO1xuXG5cdFx0Y29uc3QgbiA9IG1hcChcblx0XHRcdGEgPT4gW1xuXHRcdFx0XHRhICxcblx0XHRcdFx0bmV4dChcblx0XHRcdFx0XHRpdGVyKGZpbHRlcihyID0+IEZJUlNUKHJ1bGVzW3JdKS5oYXMoYSksIHJhbmdlKHJ1bGVzLmxlbmd0aCkpKSxcblx0XHRcdFx0XHRkZmx0LFxuXHRcdFx0XHQpICxcblx0XHRcdF0gLFxuXHRcdFx0ZmlsdGVyKCBhID0+IGEgIT0gRVcgLCBhYmMgKVxuXHRcdCk7XG5cblx0XHR5aWVsZCBuZXcgTWFwKGZpbHRlcigoW2ssdl0pID0+IHYgIT09IGRmbHQsIGNoYWluKFttLG5dKSkpO1xuXG5cdH1cblxufVxuIl19