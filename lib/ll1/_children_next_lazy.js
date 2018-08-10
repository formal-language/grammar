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
 * @param {Grammar} grammar - The ll1 grammar.
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
  regeneratorRuntime.mark(function _callee(eof, grammar, table, tape, expected) {
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
            return _context.abrupt("return", (0, _parse_lazy2.default)(eof, grammar, table, grammar.get(expected.nonterminal).get(next), tape, expected.nonterminal, next));

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _children_next_lazy2.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NoaWxkcmVuX25leHRfbGF6eS5qcyJdLCJuYW1lcyI6WyJfY2hpbGRyZW5fbmV4dF9sYXp5IiwiZW9mIiwiZ3JhbW1hciIsInRhYmxlIiwidGFwZSIsImV4cGVjdGVkIiwicmVhZCIsImxvb2thaGVhZCIsInR5cGUiLCJ0ZXJtaW5hbCIsIlVuZXhwZWN0ZWRFbmRPZkZpbGVFcnJvciIsIkxvb2thaGVhZE1pc21hdGNoRXJyb3IiLCJ1bnJlYWQiLCJyb3V0ZXIiLCJnZXQiLCJub250ZXJtaW5hbCIsIm5leHQiLCJ1bmRlZmluZWQiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztTQVU4QkEsbUI7Ozs7Ozs7MEJBQWYsaUJBQXFDQyxHQUFyQyxFQUEwQ0MsT0FBMUMsRUFBb0RDLEtBQXBELEVBQTREQyxJQUE1RCxFQUFtRUMsUUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVUQsSUFBSSxDQUFDRSxJQUFMLEVBRlY7O0FBQUE7QUFFUkMsWUFBQUEsU0FGUTs7QUFBQSxrQkFJVEYsUUFBUSxDQUFDRyxJQUFULEtBQWtCLE1BSlQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBS1JELFNBQVMsS0FBS0gsSUFBSSxDQUFDSCxHQUxYO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQU1QSSxRQUFRLENBQUNJLFFBQVQsS0FBc0JSLEdBTmY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBTTRCSSxRQU41Qjs7QUFBQTtBQUFBLGtCQU9ELElBQUlLLCtCQUFKLENBQThCLENBQUNMLFFBQVEsQ0FBQ0ksUUFBVixDQUE5QixDQVBDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtCQVNIRixTQUFTLENBQUNFLFFBQVYsS0FBdUJKLFFBQVEsQ0FBQ0ksUUFUN0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBUytDRixTQVQvQzs7QUFBQTtBQUFBLGtCQVVGLElBQUlJLDZCQUFKLENBQTJCSixTQUEzQixFQUFzQyxDQUFDRixRQUFRLENBQUNJLFFBQVYsQ0FBdEMsQ0FWRTs7QUFBQTtBQWFkTCxZQUFBQSxJQUFJLENBQUNRLE1BQUwsQ0FBWUwsU0FBWjtBQUVNTSxZQUFBQSxNQWZRLEdBZUNWLEtBQUssQ0FBQ1csR0FBTixDQUFVVCxRQUFRLENBQUNVLFdBQW5CLENBZkQ7QUFpQlJDLFlBQUFBLElBakJRLEdBaUJESCxNQUFNLENBQUNDLEdBQVAsQ0FBV1AsU0FBUyxLQUFLSCxJQUFJLENBQUNILEdBQW5CLEdBQXlCQSxHQUF6QixHQUErQk0sU0FBUyxDQUFDRSxRQUFwRCxDQWpCQzs7QUFBQSxrQkFtQlRPLElBQUksS0FBS0MsU0FuQkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBb0JSVixTQUFTLEtBQUtILElBQUksQ0FBQ0gsR0FwQlg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBb0J1QixJQUFJUywrQkFBSixvQkFBa0NHLE1BQU0sQ0FBQ0ssSUFBUCxFQUFsQyxFQXBCdkI7O0FBQUE7QUFBQSxrQkFxQkYsSUFBSVAsNkJBQUosQ0FBMkJKLFNBQTNCLHFCQUEwQ00sTUFBTSxDQUFDSyxJQUFQLEVBQTFDLEVBckJFOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZDQXdCRiwwQkFBWWpCLEdBQVosRUFBaUJDLE9BQWpCLEVBQTBCQyxLQUExQixFQUFpQ0QsT0FBTyxDQUFDWSxHQUFSLENBQVlULFFBQVEsQ0FBQ1UsV0FBckIsRUFBa0NELEdBQWxDLENBQXNDRSxJQUF0QyxDQUFqQyxFQUE4RVosSUFBOUUsRUFBcUZDLFFBQVEsQ0FBQ1UsV0FBOUYsRUFBNEdDLElBQTVHLENBeEJFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb29rYWhlYWRNaXNtYXRjaEVycm9yICwgVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIH0gZnJvbSAnLi4vZXJyb3InIDtcbmltcG9ydCBfcGFyc2VfbGF6eSBmcm9tICcuL19wYXJzZV9sYXp5JyA7XG5cbi8qKlxuICogR2V0IG5leHQgY2hpbGQgb2YgdGFibGUtZHJpdmVuIHByZWRpY3RpdmUgbGF6eSBwYXJzaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlb2YgLSBUaGUgZW5kLW9mLWZpbGUgc3ltYm9sLlxuICogQHBhcmFtIHtHcmFtbWFyfSBncmFtbWFyIC0gVGhlIGxsMSBncmFtbWFyLlxuICogQHBhcmFtIHtNYXB9IHRhYmxlIC0gVGhlIHN5bWJvbCB0YWJsZS5cbiAqIEBwYXJhbSB7VGFwZX0gdGFwZSAtIFRoZSB0YXBlIGZyb20gd2hpY2ggdG8gcmVhZCB0aGUgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IGV4cGVjdGVkIC0gVGhlIGV4cGVjdGVkIG5vZGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG5vZGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIF9jaGlsZHJlbl9uZXh0X2xhenkgKCBlb2YsIGdyYW1tYXIgLCB0YWJsZSAsIHRhcGUgLCBleHBlY3RlZCApIHtcblxuXHRjb25zdCBsb29rYWhlYWQgPSBhd2FpdCB0YXBlLnJlYWQoICkgO1xuXG5cdGlmICggZXhwZWN0ZWQudHlwZSA9PT0gJ2xlYWYnICkge1xuXHRcdGlmICggbG9va2FoZWFkID09PSB0YXBlLmVvZiApIHtcblx0XHRcdGlmICggZXhwZWN0ZWQudGVybWluYWwgPT09IGVvZiApIHJldHVybiBleHBlY3RlZCA7XG5cdFx0XHRlbHNlIHRocm93IG5ldyBVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IoIFtleHBlY3RlZC50ZXJtaW5hbF0gKSA7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBsb29rYWhlYWQudGVybWluYWwgPT09IGV4cGVjdGVkLnRlcm1pbmFsICkgcmV0dXJuIGxvb2thaGVhZCA7XG5cdFx0ZWxzZSB0aHJvdyBuZXcgTG9va2FoZWFkTWlzbWF0Y2hFcnJvcihsb29rYWhlYWQsIFtleHBlY3RlZC50ZXJtaW5hbF0pIDtcblx0fVxuXG5cdHRhcGUudW5yZWFkKGxvb2thaGVhZCk7XG5cblx0Y29uc3Qgcm91dGVyID0gdGFibGUuZ2V0KGV4cGVjdGVkLm5vbnRlcm1pbmFsKTtcblxuXHRjb25zdCBuZXh0ID0gcm91dGVyLmdldChsb29rYWhlYWQgPT09IHRhcGUuZW9mID8gZW9mIDogbG9va2FoZWFkLnRlcm1pbmFsKSA7XG5cblx0aWYgKCBuZXh0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0aWYgKCBsb29rYWhlYWQgPT09IHRhcGUuZW9mICkgdGhyb3cgbmV3IFVuZXhwZWN0ZWRFbmRPZkZpbGVFcnJvciggWy4uLnJvdXRlci5rZXlzKCldICkgO1xuXHRcdGVsc2UgdGhyb3cgbmV3IExvb2thaGVhZE1pc21hdGNoRXJyb3IobG9va2FoZWFkLCBbLi4ucm91dGVyLmtleXMoKV0pIDtcblx0fVxuXG5cdGVsc2UgcmV0dXJuIF9wYXJzZV9sYXp5KGVvZiwgZ3JhbW1hciwgdGFibGUsIGdyYW1tYXIuZ2V0KGV4cGVjdGVkLm5vbnRlcm1pbmFsKS5nZXQobmV4dCksIHRhcGUgLCBleHBlY3RlZC5ub250ZXJtaW5hbCAsIG5leHQpO1xuXG59XG4iXX0=