"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _parse_lazy;

var _grammar = require("../grammar");

var _children_next_lazy2 = _interopRequireDefault(require("./_children_next_lazy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Table-driven predictive lazy parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
function _parse_lazy(eof, grammar, table, rule, stream, nonterminal, productionid) {
  var shallow_materialize =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(x) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", (0, _children_next_lazy2.default)(eof, grammar, table, stream, x));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function shallow_materialize(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var children = (0, _grammar.rmap)(shallow_materialize, rule)[Symbol.asyncIterator]();
  return {
    'type': 'node',
    nonterminal: nonterminal,
    'production': productionid,
    children: children
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlX2xhenkuanMiXSwibmFtZXMiOlsiX3BhcnNlX2xhenkiLCJlb2YiLCJncmFtbWFyIiwidGFibGUiLCJydWxlIiwic3RyZWFtIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uaWQiLCJzaGFsbG93X21hdGVyaWFsaXplIiwieCIsImNoaWxkcmVuIiwiU3ltYm9sIiwiYXN5bmNJdGVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7OztBQUVBOzs7Ozs7OztBQVFlLFNBQVNBLFdBQVQsQ0FBdUJDLEdBQXZCLEVBQTZCQyxPQUE3QixFQUF1Q0MsS0FBdkMsRUFBK0NDLElBQS9DLEVBQXNEQyxNQUF0RCxFQUErREMsV0FBL0QsRUFBNkVDLFlBQTdFLEVBQTRGO0FBRTFHLE1BQU1DLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUFXLGtDQUFvQlIsR0FBcEIsRUFBeUJDLE9BQXpCLEVBQWtDQyxLQUFsQyxFQUF5Q0UsTUFBekMsRUFBaURJLENBQWpELENBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJELG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFFQSxNQUFNRSxRQUFRLEdBQUcsbUJBQU1GLG1CQUFOLEVBQTRCSixJQUE1QixFQUFtQ08sTUFBTSxDQUFDQyxhQUExQyxHQUFqQjtBQUVBLFNBQU87QUFDTixZQUFTLE1BREg7QUFFTk4sSUFBQUEsV0FBVyxFQUFYQSxXQUZNO0FBR04sa0JBQWVDLFlBSFQ7QUFJTkcsSUFBQUEsUUFBUSxFQUFSQTtBQUpNLEdBQVA7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJtYXAgfSBmcm9tICcuLi9ncmFtbWFyJyA7XG5cbmltcG9ydCBfY2hpbGRyZW5fbmV4dF9sYXp5IGZyb20gJy4vX2NoaWxkcmVuX25leHRfbGF6eScgO1xuXG4vKipcbiAqIFRhYmxlLWRyaXZlbiBwcmVkaWN0aXZlIGxhenkgcGFyc2luZy5cbiAqXG4gKiBAcGFyYW0gdGFibGVcbiAqIEBwYXJhbSBydWxlXG4gKiBAcGFyYW0gc3RyZWFtXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wYXJzZV9sYXp5ICggZW9mICwgZ3JhbW1hciAsIHRhYmxlICwgcnVsZSAsIHN0cmVhbSAsIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbmlkICkge1xuXG5cdGNvbnN0IHNoYWxsb3dfbWF0ZXJpYWxpemUgPSBhc3luYyB4ID0+IF9jaGlsZHJlbl9uZXh0X2xhenkoZW9mLCBncmFtbWFyLCB0YWJsZSwgc3RyZWFtLCB4KSA7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSBybWFwKCBzaGFsbG93X21hdGVyaWFsaXplICwgcnVsZSApW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDtcblxuXHRyZXR1cm4ge1xuXHRcdCd0eXBlJyA6ICdub2RlJyAsXG5cdFx0bm9udGVybWluYWwgLFxuXHRcdCdwcm9kdWN0aW9uJyA6IHByb2R1Y3Rpb25pZCAsXG5cdFx0Y2hpbGRyZW4gLFxuXHR9IDtcblxufVxuIl19