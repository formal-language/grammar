'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.compile = compile;
exports._compile = _compile;

var _jsItertools = require('@aureooms/js-itertools');

var _first2 = require('./first');

var _follow = require('./follow');

var _alphabet = require('./alphabet');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_compile);

/**
 * Compile the given grammar into a DFA.
 * TODO use js-dfa
 * TODO handle translation
 *
 * @param grammar
 * @returns {undefined}
 */
function compile(grammar, start) {
	return (0, _jsItertools.list)(_compile(grammar, start));
}

function _compile(grammar, start) {
	var _this = this;

	var abc, phi, pho, FIRST, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref, _ref2, A, rules;

	return regeneratorRuntime.wrap(function _compile$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					abc = (0, _alphabet.alphabet)(grammar);
					phi = (0, _first2._first)(grammar);
					pho = (0, _follow.follow)(phi, start, grammar);

					FIRST = function FIRST(rule) {
						return (0, _first2.first)(phi, rule);
					};

					_loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(A, rules) {
						var dflt, m, n, prog;
						return regeneratorRuntime.wrap(function _loop$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:

										console.log(A, rules);

										dflt = {};
										m = (0, _jsItertools.map)(function (a) {
											return (0, _jsItertools.next)((0, _jsItertools.filter)(function (rule) {
												return rule.length === 0;
											}, rules), dflt);
										}, (0, _jsItertools.filter)(function (a) {
											return pho[A].has(a) && !phi[A].has(a);
										}, abc));
										n = (0, _jsItertools.map)(function (a) {
											return (0, _jsItertools.next)((0, _jsItertools.filter)(function (rule) {
												return FIRST(rule).has(a);
											}, rules), dflt);
										}, abc);
										prog = new Map((0, _jsItertools.filter)(function (_ref3) {
											var _ref4 = _slicedToArray(_ref3, 2),
											    k = _ref4[0],
											    v = _ref4[1];

											return v !== dflt;
										}, (0, _jsItertools.chain)([m, n])));


										console.log(prog);

										_context.next = 8;
										return prog;

									case 8:
									case 'end':
										return _context.stop();
								}
							}
						}, _loop, _this);
					});
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context2.prev = 8;
					_iterator = (0, _jsItertools.enumerate)(grammar)[Symbol.iterator]();

				case 10:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context2.next = 19;
						break;
					}

					_ref = _step.value;
					_ref2 = _slicedToArray(_ref, 2);
					A = _ref2[0];
					rules = _ref2[1];
					return _context2.delegateYield(_loop(A, rules), 't0', 16);

				case 16:
					_iteratorNormalCompletion = true;
					_context2.next = 10;
					break;

				case 19:
					_context2.next = 25;
					break;

				case 21:
					_context2.prev = 21;
					_context2.t1 = _context2['catch'](8);
					_didIteratorError = true;
					_iteratorError = _context2.t1;

				case 25:
					_context2.prev = 25;
					_context2.prev = 26;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 28:
					_context2.prev = 28;

					if (!_didIteratorError) {
						_context2.next = 31;
						break;
					}

					throw _iteratorError;

				case 31:
					return _context2.finish(28);

				case 32:
					return _context2.finish(25);

				case 33:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked, this, [[8, 21, 25, 33], [26,, 28, 32]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwiX2NvbXBpbGUiLCJncmFtbWFyIiwic3RhcnQiLCJhYmMiLCJwaGkiLCJwaG8iLCJGSVJTVCIsInJ1bGUiLCJBIiwicnVsZXMiLCJjb25zb2xlIiwibG9nIiwiZGZsdCIsIm0iLCJsZW5ndGgiLCJoYXMiLCJhIiwibiIsInByb2ciLCJNYXAiLCJrIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFjZ0JBLE8sR0FBQUEsTztRQUlDQyxRLEdBQUFBLFE7O0FBbEJqQjs7QUFFQTs7QUFDQTs7QUFDQTs7bURBY2lCQSxROztBQVpqQjs7Ozs7Ozs7QUFRTyxTQUFTRCxPQUFULENBQWtCRSxPQUFsQixFQUEyQkMsS0FBM0IsRUFBa0M7QUFDeEMsUUFBTyx1QkFBS0YsU0FBU0MsT0FBVCxFQUFrQkMsS0FBbEIsQ0FBTCxDQUFQO0FBQ0E7O0FBRU0sU0FBVUYsUUFBVixDQUFxQkMsT0FBckIsRUFBK0JDLEtBQS9CO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUMsUUFGQSxHQUVNLHdCQUFTRixPQUFULENBRk47QUFJQUcsUUFKQSxHQUlNLG9CQUFPSCxPQUFQLENBSk47QUFLQUksUUFMQSxHQUtNLG9CQUFPRCxHQUFQLEVBQVlGLEtBQVosRUFBbUJELE9BQW5CLENBTE47O0FBT0FLLFVBUEEsR0FPUSxTQUFSQSxLQUFRO0FBQUEsYUFBUSxtQkFBTUYsR0FBTixFQUFXRyxJQUFYLENBQVI7QUFBQSxNQVBSOztBQUFBLGlFQVNNQyxDQVROLEVBU1NDLEtBVFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdMQyxrQkFBUUMsR0FBUixDQUFZSCxDQUFaLEVBQWVDLEtBQWY7O0FBRU1HLGNBYkQsR0FhUSxFQWJSO0FBZUNDLFdBZkQsR0FlSyxzQkFDVDtBQUFBLGtCQUFLLHVCQUFLLHlCQUFPO0FBQUEsbUJBQVFOLEtBQUtPLE1BQUwsS0FBZ0IsQ0FBeEI7QUFBQSxZQUFQLEVBQWtDTCxLQUFsQyxDQUFMLEVBQStDRyxJQUEvQyxDQUFMO0FBQUEsV0FEUyxFQUVULHlCQUFRO0FBQUEsa0JBQUtQLElBQUlHLENBQUosRUFBT08sR0FBUCxDQUFXQyxDQUFYLEtBQWlCLENBQUNaLElBQUlJLENBQUosRUFBT08sR0FBUCxDQUFXQyxDQUFYLENBQXZCO0FBQUEsV0FBUixFQUE4Q2IsR0FBOUMsQ0FGUyxDQWZMO0FBb0JDYyxXQXBCRCxHQW9CSyxzQkFDVDtBQUFBLGtCQUFLLHVCQUFLLHlCQUFPO0FBQUEsbUJBQVFYLE1BQU1DLElBQU4sRUFBWVEsR0FBWixDQUFnQkMsQ0FBaEIsQ0FBUjtBQUFBLFlBQVAsRUFBbUNQLEtBQW5DLENBQUwsRUFBZ0RHLElBQWhELENBQUw7QUFBQSxXQURTLEVBRVRULEdBRlMsQ0FwQkw7QUF5QkNlLGNBekJELEdBeUJRLElBQUlDLEdBQUosQ0FBUSx5QkFBTztBQUFBO0FBQUEsZUFBRUMsQ0FBRjtBQUFBLGVBQUlDLENBQUo7O0FBQUEsa0JBQVdBLE1BQU1ULElBQWpCO0FBQUEsV0FBUCxFQUE4Qix3QkFBTSxDQUFDQyxDQUFELEVBQUdJLENBQUgsQ0FBTixDQUE5QixDQUFSLENBekJSOzs7QUEyQkxQLGtCQUFRQyxHQUFSLENBQVlPLElBQVo7O0FBM0JLO0FBQUEsaUJBNkJDQSxJQTdCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBU21CLDRCQUFVakIsT0FBVixDQVRuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFTTU8sTUFUTjtBQVNTQyxVQVRUO0FBQUEsMENBU01ELENBVE4sRUFTU0MsS0FUVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNvbXBpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgZW51bWVyYXRlICwgbWFwICwgZmlsdGVyICwgY2hhaW4gLCBuZXh0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgeyBmaXJzdCAsIF9maXJzdCB9IGZyb20gJy4vZmlyc3QnIDtcbmltcG9ydCB7IGZvbGxvdyB9IGZyb20gJy4vZm9sbG93JyA7XG5pbXBvcnQgeyBhbHBoYWJldCB9IGZyb20gJy4vYWxwaGFiZXQnIDtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBnaXZlbiBncmFtbWFyIGludG8gYSBERkEuXG4gKiBUT0RPIHVzZSBqcy1kZmFcbiAqIFRPRE8gaGFuZGxlIHRyYW5zbGF0aW9uXG4gKlxuICogQHBhcmFtIGdyYW1tYXJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlIChncmFtbWFyLCBzdGFydCkge1xuXHRyZXR1cm4gbGlzdChfY29tcGlsZShncmFtbWFyLCBzdGFydCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIF9jb21waWxlICggZ3JhbW1hciAsIHN0YXJ0ICkge1xuXG5cdGNvbnN0IGFiYyA9IGFscGhhYmV0KGdyYW1tYXIpO1xuXG5cdGNvbnN0IHBoaSA9IF9maXJzdChncmFtbWFyKTtcblx0Y29uc3QgcGhvID0gZm9sbG93KHBoaSwgc3RhcnQsIGdyYW1tYXIpO1xuXG5cdGNvbnN0IEZJUlNUID0gcnVsZSA9PiBmaXJzdChwaGksIHJ1bGUpIDtcblxuXHRmb3IgKGNvbnN0IFtBLCBydWxlc10gb2YgZW51bWVyYXRlKGdyYW1tYXIpKSB7XG5cblx0XHRjb25zb2xlLmxvZyhBLCBydWxlcyk7XG5cblx0XHRjb25zdCBkZmx0ID0ge307XG5cblx0XHRjb25zdCBtID0gbWFwKFxuXHRcdFx0YSA9PiBuZXh0KGZpbHRlcihydWxlID0+IHJ1bGUubGVuZ3RoID09PSAwLCBydWxlcyksIGRmbHQpLFxuXHRcdFx0ZmlsdGVyKCBhID0+IHBob1tBXS5oYXMoYSkgJiYgIXBoaVtBXS5oYXMoYSksIGFiYylcblx0XHQpO1xuXG5cdFx0Y29uc3QgbiA9IG1hcChcblx0XHRcdGEgPT4gbmV4dChmaWx0ZXIocnVsZSA9PiBGSVJTVChydWxlKS5oYXMoYSksIHJ1bGVzKSwgZGZsdCksXG5cdFx0XHRhYmNcblx0XHQpO1xuXG5cdFx0Y29uc3QgcHJvZyA9IG5ldyBNYXAoZmlsdGVyKChbayx2XSkgPT4gdiAhPT0gZGZsdCwgY2hhaW4oW20sbl0pKSk7XG5cblx0XHRjb25zb2xlLmxvZyhwcm9nKTtcblxuXHRcdHlpZWxkIHByb2c7XG5cblx0fVxuXG59XG4iXX0=