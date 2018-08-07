"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _compile;

var _jsItertools = require("@aureooms/js-itertools");

var _first2 = _interopRequireDefault(require("./first"));

var _first3 = _interopRequireDefault(require("./_first"));

var _follow2 = _interopRequireDefault(require("./_follow"));

var _grammar = require("../grammar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(_compile);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var abc, phi, pho, FIRST, dflt, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

  return regeneratorRuntime.wrap(function _compile$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          abc = (0, _grammar.alphabet)(productions);
          phi = (0, _first3.default)(productions);
          pho = (0, _follow2.default)(phi, start, eof, productions);

          FIRST = function FIRST(rule) {
            return (0, _first2.default)(phi, rule);
          };

          dflt = {}; // dummy object

          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 8;
          _loop =
          /*#__PURE__*/
          regeneratorRuntime.mark(function _loop() {
            var _step$value, A, rules, m, n;

            return regeneratorRuntime.wrap(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _step$value = _slicedToArray(_step.value, 2), A = _step$value[0], rules = _step$value[1];
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
                    _context.next = 5;
                    return [A, new Map((0, _jsItertools.filter)(function (_ref) {
                      var _ref2 = _slicedToArray(_ref, 2),
                          k = _ref2[0],
                          v = _ref2[1];

                      return v !== dflt;
                    }, (0, _jsItertools.chain)([m, n])))];

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _loop, this);
          });
          _iterator = productions[Symbol.iterator]();

        case 11:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 16;
            break;
          }

          return _context2.delegateYield(_loop(), "t0", 13);

        case 13:
          _iteratorNormalCompletion = true;
          _context2.next = 11;
          break;

        case 16:
          _context2.next = 22;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t1 = _context2["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context2.t1;

        case 22:
          _context2.prev = 22;
          _context2.prev = 23;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 25:
          _context2.prev = 25;

          if (!_didIteratorError) {
            _context2.next = 28;
            break;
          }

          throw _iteratorError;

        case 28:
          return _context2.finish(25);

        case 29:
          return _context2.finish(22);

        case 30:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, this, [[8, 18, 22, 30], [23,, 25, 29]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NvbXBpbGUuanMiXSwibmFtZXMiOlsiX2NvbXBpbGUiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiYWJjIiwicGhpIiwicGhvIiwiRklSU1QiLCJydWxlIiwiZGZsdCIsIkEiLCJydWxlcyIsIm0iLCJhIiwiciIsImdldCIsImxlbmd0aCIsImtleXMiLCJoYXMiLCJuIiwiRVciLCJNYXAiLCJrIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7d0JBV3lCQSxROzs7Ozs7Ozs7O0FBVHpCOzs7Ozs7Ozs7QUFTZSxTQUFVQSxRQUFWLENBQXFCQyxLQUFyQixFQUE2QkMsR0FBN0IsRUFBbUNDLFdBQW5DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUkMsVUFBQUEsR0FGUSxHQUVGLHVCQUFTRCxXQUFULENBRkU7QUFJUkUsVUFBQUEsR0FKUSxHQUlGLHFCQUFPRixXQUFQLENBSkU7QUFLUkcsVUFBQUEsR0FMUSxHQUtGLHNCQUFRRCxHQUFSLEVBQWFKLEtBQWIsRUFBb0JDLEdBQXBCLEVBQXlCQyxXQUF6QixDQUxFOztBQU9SSSxVQUFBQSxLQVBRLEdBT0EsU0FBUkEsS0FBUSxDQUFBQyxJQUFJO0FBQUEsbUJBQUkscUJBQU1ILEdBQU4sRUFBV0csSUFBWCxDQUFKO0FBQUEsV0FQSjs7QUFTUkMsVUFBQUEsSUFUUSxHQVNELEVBVEMsRUFTRzs7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0VBV0ZDLENBWEUsbUJBV0NDLEtBWEQ7QUFhUEMsb0JBQUFBLENBYk8sR0FhSCxzQkFDVCxVQUFBQyxDQUFDO0FBQUEsNkJBQUksQ0FDSkEsQ0FESSxFQUVKLHVCQUNDLHVCQUFLLHlCQUFPLFVBQUFDLENBQUM7QUFBQSwrQkFBSUgsS0FBSyxDQUFDSSxHQUFOLENBQVVELENBQVYsRUFBYUUsTUFBYixLQUF3QixDQUE1QjtBQUFBLHVCQUFSLEVBQXVDTCxLQUFLLENBQUNNLElBQU4sRUFBdkMsQ0FBTCxDQURELEVBRUNSLElBRkQsQ0FGSSxDQUFKO0FBQUEscUJBRFEsRUFRVCx5QkFBUSxVQUFBSSxDQUFDO0FBQUEsNkJBQUlQLEdBQUcsQ0FBQ1MsR0FBSixDQUFRTCxDQUFSLEVBQVdRLEdBQVgsQ0FBZUwsQ0FBZixLQUFxQixDQUFDUixHQUFHLENBQUNVLEdBQUosQ0FBUUwsQ0FBUixFQUFXUSxHQUFYLENBQWVMLENBQWYsQ0FBMUI7QUFBQSxxQkFBVCxFQUFzRCx3QkFBTSxDQUFDVCxHQUFELEVBQUssQ0FBQ0YsR0FBRCxDQUFMLENBQU4sQ0FBdEQsQ0FSUyxDQWJHO0FBd0JQaUIsb0JBQUFBLENBeEJPLEdBd0JILHNCQUNULFVBQUFOLENBQUM7QUFBQSw2QkFBSSxDQUNKQSxDQURJLEVBRUosdUJBQ0MsdUJBQUsseUJBQU8sVUFBQUMsQ0FBQztBQUFBLCtCQUFJUCxLQUFLLENBQUNJLEtBQUssQ0FBQ0ksR0FBTixDQUFVRCxDQUFWLENBQUQsQ0FBTCxDQUFvQkksR0FBcEIsQ0FBd0JMLENBQXhCLENBQUo7QUFBQSx1QkFBUixFQUF3Q0YsS0FBSyxDQUFDTSxJQUFOLEVBQXhDLENBQUwsQ0FERCxFQUVDUixJQUZELENBRkksQ0FBSjtBQUFBLHFCQURRLEVBUVQseUJBQVEsVUFBQUksQ0FBQztBQUFBLDZCQUFJQSxDQUFDLEtBQUtPLFdBQVY7QUFBQSxxQkFBVCxFQUF3QmhCLEdBQXhCLENBUlMsQ0F4Qkc7QUFBQTtBQW1DYiwyQkFBTSxDQUFFTSxDQUFGLEVBQU0sSUFBSVcsR0FBSixDQUFRLHlCQUFPO0FBQUE7QUFBQSwwQkFBRUMsQ0FBRjtBQUFBLDBCQUFJQyxDQUFKOztBQUFBLDZCQUFXQSxDQUFDLEtBQUtkLElBQWpCO0FBQUEscUJBQVAsRUFBOEIsd0JBQU0sQ0FBQ0csQ0FBRCxFQUFHTyxDQUFILENBQU4sQ0FBOUIsQ0FBUixDQUFOLENBQU47O0FBbkNhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBV1doQixXQVhYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdG1hcCAsXG5cdGZpbHRlciAsXG5cdGNoYWluICxcblx0bmV4dCAsXG5cdGl0ZXIgLFxufSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCBmaXJzdCBmcm9tICcuL2ZpcnN0JyA7XG5pbXBvcnQgX2ZpcnN0IGZyb20gJy4vX2ZpcnN0JyA7XG5pbXBvcnQgX2ZvbGxvdyBmcm9tICcuL19mb2xsb3cnIDtcbmltcG9ydCB7IGFscGhhYmV0ICwgRVcgfSBmcm9tICcuLi9ncmFtbWFyJyA7XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSByb3dzIG9mIHRoZSBwcmVkaWN0aXZlIHBhcnNpbmcgdGFibGUgZm9yIGEgZ3JhbW1hci5cbiAqIENvcnJlc3BvbmRzIHRvIEFsZ29yaXRobSA0LjMxIGluIERyYWdvbiBCb29rICgyMDA2KSBvbiBwYWdlIDIyNC5cbiAqXG4gKiBAcGFyYW0gc3RhcnRcbiAqIEBwYXJhbSBlb2ZcbiAqIEBwYXJhbSBwcm9kdWN0aW9uc1xuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9jb21waWxlICggc3RhcnQgLCBlb2YgLCBwcm9kdWN0aW9ucyApIHtcblxuXHRjb25zdCBhYmMgPSBhbHBoYWJldChwcm9kdWN0aW9ucyk7XG5cblx0Y29uc3QgcGhpID0gX2ZpcnN0KHByb2R1Y3Rpb25zKTtcblx0Y29uc3QgcGhvID0gX2ZvbGxvdyhwaGksIHN0YXJ0LCBlb2YsIHByb2R1Y3Rpb25zKTtcblxuXHRjb25zdCBGSVJTVCA9IHJ1bGUgPT4gZmlyc3QocGhpLCBydWxlKSA7XG5cblx0Y29uc3QgZGZsdCA9IHt9OyAvLyBkdW1teSBvYmplY3RcblxuXHRmb3IgKGNvbnN0IFtBLCBydWxlc10gb2YgcHJvZHVjdGlvbnMpIHtcblxuXHRcdGNvbnN0IG0gPSBtYXAoXG5cdFx0XHRhID0+IFtcblx0XHRcdFx0YSAsXG5cdFx0XHRcdG5leHQoXG5cdFx0XHRcdFx0aXRlcihmaWx0ZXIociA9PiBydWxlcy5nZXQocikubGVuZ3RoID09PSAwLCBydWxlcy5rZXlzKCkpKSxcblx0XHRcdFx0XHRkZmx0LFxuXHRcdFx0XHQpICxcblx0XHRcdF0gLFxuXHRcdFx0ZmlsdGVyKCBhID0+IHBoby5nZXQoQSkuaGFzKGEpICYmICFwaGkuZ2V0KEEpLmhhcyhhKSwgY2hhaW4oW2FiYyxbZW9mXV0pKVxuXHRcdCk7XG5cblx0XHRjb25zdCBuID0gbWFwKFxuXHRcdFx0YSA9PiBbXG5cdFx0XHRcdGEgLFxuXHRcdFx0XHRuZXh0KFxuXHRcdFx0XHRcdGl0ZXIoZmlsdGVyKHIgPT4gRklSU1QocnVsZXMuZ2V0KHIpKS5oYXMoYSksIHJ1bGVzLmtleXMoKSkpLFxuXHRcdFx0XHRcdGRmbHQsXG5cdFx0XHRcdCkgLFxuXHRcdFx0XSAsXG5cdFx0XHRmaWx0ZXIoIGEgPT4gYSAhPT0gRVcgLCBhYmMgKVxuXHRcdCk7XG5cblx0XHR5aWVsZCBbIEEgLCBuZXcgTWFwKGZpbHRlcigoW2ssdl0pID0+IHYgIT09IGRmbHQsIGNoYWluKFttLG5dKSkpIF0gO1xuXG5cdH1cblxufVxuIl19