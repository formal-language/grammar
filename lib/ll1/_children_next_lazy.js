"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _children_next_lazy;

var _error = require("../error");

var _parse_lazy2 = _interopRequireDefault(require("./_parse_lazy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Get next child of table-driven predictive lazy parsing.
 *
 * @param {Object} eof - The end-of-file symbol.
 * @param {Map} productions - The ll1 productions.
 * @param {Map} table - The symbol table.
 * @param {Tape} tape - The tape from which to read the symbols from.
 * @param {Object} expected - The expected node.
 * @returns {Object} A node.
 */
function _children_next_lazy(_x, _x2, _x3, _x4, _x5) {
  return _children_next_lazy2.apply(this, arguments);
}

function _children_next_lazy2() {
  _children_next_lazy2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(eof, productions, table, tape, expected) {
    var lookahead, router, next;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return tape.read();

          case 2:
            lookahead = _context.sent;

            if (!(expected.type === 'leaf')) {
              _context.next = 17;
              break;
            }

            if (!(lookahead === tape.eof)) {
              _context.next = 12;
              break;
            }

            if (!(expected.terminal === eof)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", expected);

          case 9:
            throw new _error.UnexpectedEndOfFileError([expected.terminal]);

          case 10:
            _context.next = 17;
            break;

          case 12:
            if (!(lookahead.terminal === expected.terminal)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", lookahead);

          case 16:
            throw new _error.LookaheadMismatchError(lookahead, [expected.terminal]);

          case 17:
            tape.unread(lookahead);
            router = table.get(expected.nonterminal);
            next = router.get(lookahead === tape.eof ? eof : lookahead.terminal);

            if (!(next === undefined)) {
              _context.next = 28;
              break;
            }

            if (!(lookahead === tape.eof)) {
              _context.next = 25;
              break;
            }

            throw new _error.UnexpectedEndOfFileError(_toConsumableArray(router.keys()));

          case 25:
            throw new _error.LookaheadMismatchError(lookahead, _toConsumableArray(router.keys()));

          case 26:
            _context.next = 29;
            break;

          case 28:
            return _context.abrupt("return", (0, _parse_lazy2.default)(eof, productions, table, productions.get(expected.nonterminal).get(next), tape, expected.nonterminal, next));

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _children_next_lazy2.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NoaWxkcmVuX25leHRfbGF6eS5qcyJdLCJuYW1lcyI6WyJfY2hpbGRyZW5fbmV4dF9sYXp5IiwiZW9mIiwicHJvZHVjdGlvbnMiLCJ0YWJsZSIsInRhcGUiLCJleHBlY3RlZCIsInJlYWQiLCJsb29rYWhlYWQiLCJ0eXBlIiwidGVybWluYWwiLCJVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IiLCJMb29rYWhlYWRNaXNtYXRjaEVycm9yIiwidW5yZWFkIiwicm91dGVyIiwiZ2V0Iiwibm9udGVybWluYWwiLCJuZXh0IiwidW5kZWZpbmVkIiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7U0FVOEJBLG1COzs7Ozs7OzBCQUFmLGlCQUFxQ0MsR0FBckMsRUFBMENDLFdBQTFDLEVBQXdEQyxLQUF4RCxFQUFnRUMsSUFBaEUsRUFBdUVDLFFBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVVELElBQUksQ0FBQ0UsSUFBTCxFQUZWOztBQUFBO0FBRVJDLFlBQUFBLFNBRlE7O0FBQUEsa0JBSVRGLFFBQVEsQ0FBQ0csSUFBVCxLQUFrQixNQUpUO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUtSRCxTQUFTLEtBQUtILElBQUksQ0FBQ0gsR0FMWDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFNUEksUUFBUSxDQUFDSSxRQUFULEtBQXNCUixHQU5mO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQU00QkksUUFONUI7O0FBQUE7QUFBQSxrQkFPRCxJQUFJSywrQkFBSixDQUE4QixDQUFDTCxRQUFRLENBQUNJLFFBQVYsQ0FBOUIsQ0FQQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrQkFTSEYsU0FBUyxDQUFDRSxRQUFWLEtBQXVCSixRQUFRLENBQUNJLFFBVDdCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVMrQ0YsU0FUL0M7O0FBQUE7QUFBQSxrQkFVRixJQUFJSSw2QkFBSixDQUEyQkosU0FBM0IsRUFBc0MsQ0FBQ0YsUUFBUSxDQUFDSSxRQUFWLENBQXRDLENBVkU7O0FBQUE7QUFhZEwsWUFBQUEsSUFBSSxDQUFDUSxNQUFMLENBQVlMLFNBQVo7QUFFTU0sWUFBQUEsTUFmUSxHQWVDVixLQUFLLENBQUNXLEdBQU4sQ0FBVVQsUUFBUSxDQUFDVSxXQUFuQixDQWZEO0FBaUJSQyxZQUFBQSxJQWpCUSxHQWlCREgsTUFBTSxDQUFDQyxHQUFQLENBQVdQLFNBQVMsS0FBS0gsSUFBSSxDQUFDSCxHQUFuQixHQUF5QkEsR0FBekIsR0FBK0JNLFNBQVMsQ0FBQ0UsUUFBcEQsQ0FqQkM7O0FBQUEsa0JBbUJUTyxJQUFJLEtBQUtDLFNBbkJBO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQW9CUlYsU0FBUyxLQUFLSCxJQUFJLENBQUNILEdBcEJYO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQW9CdUIsSUFBSVMsK0JBQUosb0JBQWtDRyxNQUFNLENBQUNLLElBQVAsRUFBbEMsRUFwQnZCOztBQUFBO0FBQUEsa0JBcUJGLElBQUlQLDZCQUFKLENBQTJCSixTQUEzQixxQkFBMENNLE1BQU0sQ0FBQ0ssSUFBUCxFQUExQyxFQXJCRTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0F3QkYsMEJBQVlqQixHQUFaLEVBQWlCQyxXQUFqQixFQUE4QkMsS0FBOUIsRUFBcUNELFdBQVcsQ0FBQ1ksR0FBWixDQUFnQlQsUUFBUSxDQUFDVSxXQUF6QixFQUFzQ0QsR0FBdEMsQ0FBMENFLElBQTFDLENBQXJDLEVBQXNGWixJQUF0RixFQUE2RkMsUUFBUSxDQUFDVSxXQUF0RyxFQUFvSEMsSUFBcEgsQ0F4QkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvb2thaGVhZE1pc21hdGNoRXJyb3IgLCBVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IgfSBmcm9tICcuLi9lcnJvcicgO1xuaW1wb3J0IF9wYXJzZV9sYXp5IGZyb20gJy4vX3BhcnNlX2xhenknIDtcblxuLyoqXG4gKiBHZXQgbmV4dCBjaGlsZCBvZiB0YWJsZS1kcml2ZW4gcHJlZGljdGl2ZSBsYXp5IHBhcnNpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVvZiAtIFRoZSBlbmQtb2YtZmlsZSBzeW1ib2wuXG4gKiBAcGFyYW0ge01hcH0gcHJvZHVjdGlvbnMgLSBUaGUgbGwxIHByb2R1Y3Rpb25zLlxuICogQHBhcmFtIHtNYXB9IHRhYmxlIC0gVGhlIHN5bWJvbCB0YWJsZS5cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSB0YXBlIGZyb20gd2hpY2ggdG8gcmVhZCB0aGUgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IGV4cGVjdGVkIC0gVGhlIGV4cGVjdGVkIG5vZGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG5vZGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIF9jaGlsZHJlbl9uZXh0X2xhenkgKCBlb2YsIHByb2R1Y3Rpb25zICwgdGFibGUgLCB0YXBlICwgZXhwZWN0ZWQgKSB7XG5cblx0Y29uc3QgbG9va2FoZWFkID0gYXdhaXQgdGFwZS5yZWFkKCApIDtcblxuXHRpZiAoIGV4cGVjdGVkLnR5cGUgPT09ICdsZWFmJyApIHtcblx0XHRpZiAoIGxvb2thaGVhZCA9PT0gdGFwZS5lb2YgKSB7XG5cdFx0XHRpZiAoIGV4cGVjdGVkLnRlcm1pbmFsID09PSBlb2YgKSByZXR1cm4gZXhwZWN0ZWQgO1xuXHRcdFx0ZWxzZSB0aHJvdyBuZXcgVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yKCBbZXhwZWN0ZWQudGVybWluYWxdICkgO1xuXHRcdH1cblx0XHRlbHNlIGlmICggbG9va2FoZWFkLnRlcm1pbmFsID09PSBleHBlY3RlZC50ZXJtaW5hbCApIHJldHVybiBsb29rYWhlYWQgO1xuXHRcdGVsc2UgdGhyb3cgbmV3IExvb2thaGVhZE1pc21hdGNoRXJyb3IobG9va2FoZWFkLCBbZXhwZWN0ZWQudGVybWluYWxdKSA7XG5cdH1cblxuXHR0YXBlLnVucmVhZChsb29rYWhlYWQpO1xuXG5cdGNvbnN0IHJvdXRlciA9IHRhYmxlLmdldChleHBlY3RlZC5ub250ZXJtaW5hbCk7XG5cblx0Y29uc3QgbmV4dCA9IHJvdXRlci5nZXQobG9va2FoZWFkID09PSB0YXBlLmVvZiA/IGVvZiA6IGxvb2thaGVhZC50ZXJtaW5hbCkgO1xuXG5cdGlmICggbmV4dCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdGlmICggbG9va2FoZWFkID09PSB0YXBlLmVvZiApIHRocm93IG5ldyBVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IoIFsuLi5yb3V0ZXIua2V5cygpXSApIDtcblx0XHRlbHNlIHRocm93IG5ldyBMb29rYWhlYWRNaXNtYXRjaEVycm9yKGxvb2thaGVhZCwgWy4uLnJvdXRlci5rZXlzKCldKSA7XG5cdH1cblxuXHRlbHNlIHJldHVybiBfcGFyc2VfbGF6eShlb2YsIHByb2R1Y3Rpb25zLCB0YWJsZSwgcHJvZHVjdGlvbnMuZ2V0KGV4cGVjdGVkLm5vbnRlcm1pbmFsKS5nZXQobmV4dCksIHRhcGUgLCBleHBlY3RlZC5ub250ZXJtaW5hbCAsIG5leHQpO1xuXG59XG4iXX0=