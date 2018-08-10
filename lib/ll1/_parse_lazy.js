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

  var children = (0, _grammar.rmap)(shallow_materialize, rule)[Symbol.asyncIterator]();
  return {
    'type': 'node',
    nonterminal: nonterminal,
    production: production,
    children: children
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlX2xhenkuanMiXSwibmFtZXMiOlsiX3BhcnNlX2xhenkiLCJlb2YiLCJwcm9kdWN0aW9ucyIsInRhYmxlIiwicnVsZSIsInRhcGUiLCJub250ZXJtaW5hbCIsInByb2R1Y3Rpb24iLCJzaGFsbG93X21hdGVyaWFsaXplIiwiZXhwZWN0ZWQiLCJjaGlsZHJlbiIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWWUsU0FBU0EsV0FBVCxDQUF1QkMsR0FBdkIsRUFBNkJDLFdBQTdCLEVBQTJDQyxLQUEzQyxFQUFtREMsSUFBbkQsRUFBMERDLElBQTFELEVBQWlFQyxXQUFqRSxFQUErRUMsVUFBL0UsRUFBNEY7QUFFMUcsTUFBTUMsbUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBRyxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBd0Isa0NBQW9CUixHQUFwQixFQUF5QkMsV0FBekIsRUFBc0NDLEtBQXRDLEVBQTZDRSxJQUE3QyxFQUFtREksUUFBbkQsQ0FBeEI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQkQsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQUVBLE1BQU1FLFFBQVEsR0FBRyxtQkFBTUYsbUJBQU4sRUFBNEJKLElBQTVCLEVBQW1DTyxNQUFNLENBQUNDLGFBQTFDLEdBQWpCO0FBRUEsU0FBTztBQUNOLFlBQVMsTUFESDtBQUVOTixJQUFBQSxXQUFXLEVBQVhBLFdBRk07QUFHTkMsSUFBQUEsVUFBVSxFQUFWQSxVQUhNO0FBSU5HLElBQUFBLFFBQVEsRUFBUkE7QUFKTSxHQUFQO0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBybWFwIH0gZnJvbSAnLi4vZ3JhbW1hcicgO1xuXG5pbXBvcnQgX2NoaWxkcmVuX25leHRfbGF6eSBmcm9tICcuL19jaGlsZHJlbl9uZXh0X2xhenknIDtcblxuLyoqXG4gKiBUYWJsZS1kcml2ZW4gcHJlZGljdGl2ZSBsYXp5IHBhcnNpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVvZiAtIFRoZSBlbmQtb2YtZmlsZSBzeW1ib2wuXG4gKiBAcGFyYW0ge01hcH0gcHJvZHVjdGlvbnMgLSBUaGUgbGwxIHByb2R1Y3Rpb25zLlxuICogQHBhcmFtIHtNYXB9IHRhYmxlIC0gVGhlIHN5bWJvbCB0YWJsZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHJ1bGUgLSBUaGUgcHJvZHVjdGlvbiBydWxlIGluIHVzZS5cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSB0YXBlIGZyb20gd2hpY2ggdG8gcmVhZCB0aGUgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtTdHJpbmd9IG5vbnRlcm1pbmFsIC0gVGhlIG5vbnRlcm1pbmFsIHRoYXQgcHJvZHVjZWQgYHJ1bGVgLlxuICogQHBhcmFtIHtTdHJpbmd9IHByb2R1Y3Rpb24gLSBUaGUgcHJvZHVjdGlvbiB0aGF0IGNvcnJlc3BvbmRzIHRvIGBydWxlYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByb290IG5vZGUgb2YgdGhlIHBhcnNlZCB0cmVlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcGFyc2VfbGF6eSAoIGVvZiAsIHByb2R1Y3Rpb25zICwgdGFibGUgLCBydWxlICwgdGFwZSAsIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbiApIHtcblxuXHRjb25zdCBzaGFsbG93X21hdGVyaWFsaXplID0gYXN5bmMgZXhwZWN0ZWQgPT4gYXdhaXQgX2NoaWxkcmVuX25leHRfbGF6eShlb2YsIHByb2R1Y3Rpb25zLCB0YWJsZSwgdGFwZSwgZXhwZWN0ZWQpIDtcblxuXHRjb25zdCBjaGlsZHJlbiA9IHJtYXAoIHNoYWxsb3dfbWF0ZXJpYWxpemUgLCBydWxlIClbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgO1xuXG5cdHJldHVybiB7XG5cdFx0J3R5cGUnIDogJ25vZGUnICxcblx0XHRub250ZXJtaW5hbCAsXG5cdFx0cHJvZHVjdGlvbiAsXG5cdFx0Y2hpbGRyZW4gLFxuXHR9IDtcblxufVxuIl19