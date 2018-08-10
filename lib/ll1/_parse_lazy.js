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
 * @param {Object} eof - The end-of-file symbol.
 * @param {Grammar} grammar - The ll1 grammar.
 * @param {Map} table - The symbol table.
 * @param {Array} rule - The production rule in use.
 * @param {Tape} tape - The tape from which to read the symbols from.
 * @param {String} nonterminal - The nonterminal that produced `rule`.
 * @param {String} production - The production that corresponds to `rule`.
 * @returns {Object} The root node of the parsed tree.
 */
function _parse_lazy(eof, grammar, table, rule, tape, nonterminal, production) {
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
              _context.next = 2;
              return (0, _children_next_lazy2.default)(eof, grammar, table, tape, x);

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

  var children = (0, _grammar.rmap)(shallow_materialize, rule)[Symbol.asyncIterator]();
  return {
    'type': 'node',
    nonterminal: nonterminal,
    production: production,
    children: children
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlX2xhenkuanMiXSwibmFtZXMiOlsiX3BhcnNlX2xhenkiLCJlb2YiLCJncmFtbWFyIiwidGFibGUiLCJydWxlIiwidGFwZSIsIm5vbnRlcm1pbmFsIiwicHJvZHVjdGlvbiIsInNoYWxsb3dfbWF0ZXJpYWxpemUiLCJ4IiwiY2hpbGRyZW4iLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVllLFNBQVNBLFdBQVQsQ0FBdUJDLEdBQXZCLEVBQTZCQyxPQUE3QixFQUF1Q0MsS0FBdkMsRUFBK0NDLElBQS9DLEVBQXNEQyxJQUF0RCxFQUE2REMsV0FBN0QsRUFBMkVDLFVBQTNFLEVBQXdGO0FBRXRHLE1BQU1DLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWlCLGtDQUFvQlIsR0FBcEIsRUFBeUJDLE9BQXpCLEVBQWtDQyxLQUFsQyxFQUF5Q0UsSUFBekMsRUFBK0NJLENBQS9DLENBQWpCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJELG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFFQSxNQUFNRSxRQUFRLEdBQUcsbUJBQU1GLG1CQUFOLEVBQTRCSixJQUE1QixFQUFtQ08sTUFBTSxDQUFDQyxhQUExQyxHQUFqQjtBQUVBLFNBQU87QUFDTixZQUFTLE1BREg7QUFFTk4sSUFBQUEsV0FBVyxFQUFYQSxXQUZNO0FBR05DLElBQUFBLFVBQVUsRUFBVkEsVUFITTtBQUlORyxJQUFBQSxRQUFRLEVBQVJBO0FBSk0sR0FBUDtBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm1hcCB9IGZyb20gJy4uL2dyYW1tYXInIDtcblxuaW1wb3J0IF9jaGlsZHJlbl9uZXh0X2xhenkgZnJvbSAnLi9fY2hpbGRyZW5fbmV4dF9sYXp5JyA7XG5cbi8qKlxuICogVGFibGUtZHJpdmVuIHByZWRpY3RpdmUgbGF6eSBwYXJzaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlb2YgLSBUaGUgZW5kLW9mLWZpbGUgc3ltYm9sLlxuICogQHBhcmFtIHtHcmFtbWFyfSBncmFtbWFyIC0gVGhlIGxsMSBncmFtbWFyLlxuICogQHBhcmFtIHtNYXB9IHRhYmxlIC0gVGhlIHN5bWJvbCB0YWJsZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHJ1bGUgLSBUaGUgcHJvZHVjdGlvbiBydWxlIGluIHVzZS5cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSB0YXBlIGZyb20gd2hpY2ggdG8gcmVhZCB0aGUgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtTdHJpbmd9IG5vbnRlcm1pbmFsIC0gVGhlIG5vbnRlcm1pbmFsIHRoYXQgcHJvZHVjZWQgYHJ1bGVgLlxuICogQHBhcmFtIHtTdHJpbmd9IHByb2R1Y3Rpb24gLSBUaGUgcHJvZHVjdGlvbiB0aGF0IGNvcnJlc3BvbmRzIHRvIGBydWxlYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByb290IG5vZGUgb2YgdGhlIHBhcnNlZCB0cmVlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcGFyc2VfbGF6eSAoIGVvZiAsIGdyYW1tYXIgLCB0YWJsZSAsIHJ1bGUgLCB0YXBlICwgbm9udGVybWluYWwgLCBwcm9kdWN0aW9uICkge1xuXG5cdGNvbnN0IHNoYWxsb3dfbWF0ZXJpYWxpemUgPSBhc3luYyB4ID0+IGF3YWl0IF9jaGlsZHJlbl9uZXh0X2xhenkoZW9mLCBncmFtbWFyLCB0YWJsZSwgdGFwZSwgeCkgO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gcm1hcCggc2hhbGxvd19tYXRlcmlhbGl6ZSAsIHJ1bGUgKVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA7XG5cblx0cmV0dXJuIHtcblx0XHQndHlwZScgOiAnbm9kZScgLFxuXHRcdG5vbnRlcm1pbmFsICxcblx0XHRwcm9kdWN0aW9uICxcblx0XHRjaGlsZHJlbiAsXG5cdH0gO1xuXG59XG4iXX0=