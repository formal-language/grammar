"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _parse_lazy;

var _ast = require("../ast");

var _children_next_lazy2 = _interopRequireDefault(require("./_children_next_lazy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Table-driven predictive lazy parsing.
 *
 * @param {Object} eof - The end-of-file symbol.
 * @param {Map} productions - The ll1 productions.
 * @param {Map} table - The symbol table.
 * @param {Array} rule - The production rule in use.
 * @param {Tape} tape - The tape from which to read the symbols from.
 * @param {String} nonterminal - The nonterminal that produced `rule`.
 * @param {String} production - The production that corresponds to `rule`.
 * @returns {Object} The root node of the parsed tree.
 */
function _parse_lazy(eof, productions, table, rule, tape, nonterminal, production) {
  var shallow_materialize =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(expected) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _children_next_lazy2.default)(eof, productions, table, tape, expected);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
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

  var iterator = (0, _ast.rmap)(shallow_materialize, rule)[Symbol.asyncIterator]();
  return {
    'type': 'node',
    nonterminal: nonterminal,
    production: production,
    children: new _ast.Children(iterator, rule.length)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlX2xhenkuanMiXSwibmFtZXMiOlsiX3BhcnNlX2xhenkiLCJlb2YiLCJwcm9kdWN0aW9ucyIsInRhYmxlIiwicnVsZSIsInRhcGUiLCJub250ZXJtaW5hbCIsInByb2R1Y3Rpb24iLCJzaGFsbG93X21hdGVyaWFsaXplIiwiZXhwZWN0ZWQiLCJpdGVyYXRvciIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVllLFNBQVNBLFdBQVQsQ0FBdUJDLEdBQXZCLEVBQTZCQyxXQUE3QixFQUEyQ0MsS0FBM0MsRUFBbURDLElBQW5ELEVBQTBEQyxJQUExRCxFQUFpRUMsV0FBakUsRUFBK0VDLFVBQS9FLEVBQTRGO0FBRTFHLE1BQU1DLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUcsaUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXdCLGtDQUFvQlIsR0FBcEIsRUFBeUJDLFdBQXpCLEVBQXNDQyxLQUF0QyxFQUE2Q0UsSUFBN0MsRUFBbURJLFFBQW5ELENBQXhCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJELG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFFQSxNQUFNRSxRQUFRLEdBQUcsZUFBTUYsbUJBQU4sRUFBNEJKLElBQTVCLEVBQW1DTyxNQUFNLENBQUNDLGFBQTFDLEdBQWpCO0FBRUEsU0FBTztBQUNOLFlBQVMsTUFESDtBQUVOTixJQUFBQSxXQUFXLEVBQVhBLFdBRk07QUFHTkMsSUFBQUEsVUFBVSxFQUFWQSxVQUhNO0FBSU5NLElBQUFBLFFBQVEsRUFBRyxJQUFJQyxhQUFKLENBQWNKLFFBQWQsRUFBeUJOLElBQUksQ0FBQ1csTUFBOUI7QUFKTCxHQUFQO0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRybWFwICxcblx0Q2hpbGRyZW4gLFxufSBmcm9tICcuLi9hc3QnIDtcblxuaW1wb3J0IF9jaGlsZHJlbl9uZXh0X2xhenkgZnJvbSAnLi9fY2hpbGRyZW5fbmV4dF9sYXp5JyA7XG5cbi8qKlxuICogVGFibGUtZHJpdmVuIHByZWRpY3RpdmUgbGF6eSBwYXJzaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlb2YgLSBUaGUgZW5kLW9mLWZpbGUgc3ltYm9sLlxuICogQHBhcmFtIHtNYXB9IHByb2R1Y3Rpb25zIC0gVGhlIGxsMSBwcm9kdWN0aW9ucy5cbiAqIEBwYXJhbSB7TWFwfSB0YWJsZSAtIFRoZSBzeW1ib2wgdGFibGUuXG4gKiBAcGFyYW0ge0FycmF5fSBydWxlIC0gVGhlIHByb2R1Y3Rpb24gcnVsZSBpbiB1c2UuXG4gKiBAcGFyYW0ge1RhcGV9IHRhcGUgLSBUaGUgdGFwZSBmcm9tIHdoaWNoIHRvIHJlYWQgdGhlIHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBub250ZXJtaW5hbCAtIFRoZSBub250ZXJtaW5hbCB0aGF0IHByb2R1Y2VkIGBydWxlYC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9kdWN0aW9uIC0gVGhlIHByb2R1Y3Rpb24gdGhhdCBjb3JyZXNwb25kcyB0byBgcnVsZWAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcm9vdCBub2RlIG9mIHRoZSBwYXJzZWQgdHJlZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3BhcnNlX2xhenkgKCBlb2YgLCBwcm9kdWN0aW9ucyAsIHRhYmxlICwgcnVsZSAsIHRhcGUgLCBub250ZXJtaW5hbCAsIHByb2R1Y3Rpb24gKSB7XG5cblx0Y29uc3Qgc2hhbGxvd19tYXRlcmlhbGl6ZSA9IGFzeW5jIGV4cGVjdGVkID0+IGF3YWl0IF9jaGlsZHJlbl9uZXh0X2xhenkoZW9mLCBwcm9kdWN0aW9ucywgdGFibGUsIHRhcGUsIGV4cGVjdGVkKSA7XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBybWFwKCBzaGFsbG93X21hdGVyaWFsaXplICwgcnVsZSApW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDtcblxuXHRyZXR1cm4ge1xuXHRcdCd0eXBlJyA6ICdub2RlJyAsXG5cdFx0bm9udGVybWluYWwgLFxuXHRcdHByb2R1Y3Rpb24gLFxuXHRcdGNoaWxkcmVuIDogbmV3IENoaWxkcmVuKCBpdGVyYXRvciAsIHJ1bGUubGVuZ3RoICkgLFxuXHR9IDtcblxufVxuIl19