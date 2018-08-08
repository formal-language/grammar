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
 * @param tape
 * @returns {Array}
 */
function _parse_lazy(eof, grammar, table, rule, tape, nonterminal, productionid) {
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
              return _context.abrupt("return", (0, _children_next_lazy2.default)(eof, grammar, table, tape, x));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlX2xhenkuanMiXSwibmFtZXMiOlsiX3BhcnNlX2xhenkiLCJlb2YiLCJncmFtbWFyIiwidGFibGUiLCJydWxlIiwidGFwZSIsIm5vbnRlcm1pbmFsIiwicHJvZHVjdGlvbmlkIiwic2hhbGxvd19tYXRlcmlhbGl6ZSIsIngiLCJjaGlsZHJlbiIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxXQUFULENBQXVCQyxHQUF2QixFQUE2QkMsT0FBN0IsRUFBdUNDLEtBQXZDLEVBQStDQyxJQUEvQyxFQUFzREMsSUFBdEQsRUFBNkRDLFdBQTdELEVBQTJFQyxZQUEzRSxFQUEwRjtBQUV4RyxNQUFNQyxtQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFHLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FBVyxrQ0FBb0JSLEdBQXBCLEVBQXlCQyxPQUF6QixFQUFrQ0MsS0FBbEMsRUFBeUNFLElBQXpDLEVBQStDSSxDQUEvQyxDQUFYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CRCxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBRUEsTUFBTUUsUUFBUSxHQUFHLG1CQUFNRixtQkFBTixFQUE0QkosSUFBNUIsRUFBbUNPLE1BQU0sQ0FBQ0MsYUFBMUMsR0FBakI7QUFFQSxTQUFPO0FBQ04sWUFBUyxNQURIO0FBRU5OLElBQUFBLFdBQVcsRUFBWEEsV0FGTTtBQUdOLGtCQUFlQyxZQUhUO0FBSU5HLElBQUFBLFFBQVEsRUFBUkE7QUFKTSxHQUFQO0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBybWFwIH0gZnJvbSAnLi4vZ3JhbW1hcicgO1xuXG5pbXBvcnQgX2NoaWxkcmVuX25leHRfbGF6eSBmcm9tICcuL19jaGlsZHJlbl9uZXh0X2xhenknIDtcblxuLyoqXG4gKiBUYWJsZS1kcml2ZW4gcHJlZGljdGl2ZSBsYXp5IHBhcnNpbmcuXG4gKlxuICogQHBhcmFtIHRhYmxlXG4gKiBAcGFyYW0gcnVsZVxuICogQHBhcmFtIHRhcGVcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3BhcnNlX2xhenkgKCBlb2YgLCBncmFtbWFyICwgdGFibGUgLCBydWxlICwgdGFwZSAsIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbmlkICkge1xuXG5cdGNvbnN0IHNoYWxsb3dfbWF0ZXJpYWxpemUgPSBhc3luYyB4ID0+IF9jaGlsZHJlbl9uZXh0X2xhenkoZW9mLCBncmFtbWFyLCB0YWJsZSwgdGFwZSwgeCkgO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gcm1hcCggc2hhbGxvd19tYXRlcmlhbGl6ZSAsIHJ1bGUgKVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA7XG5cblx0cmV0dXJuIHtcblx0XHQndHlwZScgOiAnbm9kZScgLFxuXHRcdG5vbnRlcm1pbmFsICxcblx0XHQncHJvZHVjdGlvbicgOiBwcm9kdWN0aW9uaWQgLFxuXHRcdGNoaWxkcmVuICxcblx0fSA7XG5cbn1cbiJdfQ==