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
 * @param grammar
 * @param table
 * @param tape
 * @param token
 * @returns {Array}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NoaWxkcmVuX25leHRfbGF6eS5qcyJdLCJuYW1lcyI6WyJfY2hpbGRyZW5fbmV4dF9sYXp5IiwiZW9mIiwiZ3JhbW1hciIsInRhYmxlIiwidGFwZSIsImV4cGVjdGVkIiwicmVhZCIsImxvb2thaGVhZCIsInR5cGUiLCJ0ZXJtaW5hbCIsIlVuZXhwZWN0ZWRFbmRPZkZpbGVFcnJvciIsIkxvb2thaGVhZE1pc21hdGNoRXJyb3IiLCJ1bnJlYWQiLCJyb3V0ZXIiLCJnZXQiLCJub250ZXJtaW5hbCIsIm5leHQiLCJ1bmRlZmluZWQiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7O1NBUzhCQSxtQjs7Ozs7OzswQkFBZixpQkFBcUNDLEdBQXJDLEVBQTBDQyxPQUExQyxFQUFvREMsS0FBcEQsRUFBNERDLElBQTVELEVBQW1FQyxRQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVVRCxJQUFJLENBQUNFLElBQUwsRUFGVjs7QUFBQTtBQUVSQyxZQUFBQSxTQUZROztBQUFBLGtCQUlURixRQUFRLENBQUNHLElBQVQsS0FBa0IsTUFKVDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFLUkQsU0FBUyxLQUFLSCxJQUFJLENBQUNILEdBTFg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBTVBJLFFBQVEsQ0FBQ0ksUUFBVCxLQUFzQlIsR0FOZjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FNNEJJLFFBTjVCOztBQUFBO0FBQUEsa0JBT0QsSUFBSUssK0JBQUosQ0FBOEIsQ0FBQ0wsUUFBUSxDQUFDSSxRQUFWLENBQTlCLENBUEM7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsa0JBU0hGLFNBQVMsQ0FBQ0UsUUFBVixLQUF1QkosUUFBUSxDQUFDSSxRQVQ3QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FTK0NGLFNBVC9DOztBQUFBO0FBQUEsa0JBVUYsSUFBSUksNkJBQUosQ0FBMkJKLFNBQTNCLEVBQXNDLENBQUNGLFFBQVEsQ0FBQ0ksUUFBVixDQUF0QyxDQVZFOztBQUFBO0FBYWRMLFlBQUFBLElBQUksQ0FBQ1EsTUFBTCxDQUFZTCxTQUFaO0FBRU1NLFlBQUFBLE1BZlEsR0FlQ1YsS0FBSyxDQUFDVyxHQUFOLENBQVVULFFBQVEsQ0FBQ1UsV0FBbkIsQ0FmRDtBQWlCUkMsWUFBQUEsSUFqQlEsR0FpQkRILE1BQU0sQ0FBQ0MsR0FBUCxDQUFXUCxTQUFTLEtBQUtILElBQUksQ0FBQ0gsR0FBbkIsR0FBeUJBLEdBQXpCLEdBQStCTSxTQUFTLENBQUNFLFFBQXBELENBakJDOztBQUFBLGtCQW1CVE8sSUFBSSxLQUFLQyxTQW5CQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFvQlJWLFNBQVMsS0FBS0gsSUFBSSxDQUFDSCxHQXBCWDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFvQnVCLElBQUlTLCtCQUFKLG9CQUFrQ0csTUFBTSxDQUFDSyxJQUFQLEVBQWxDLEVBcEJ2Qjs7QUFBQTtBQUFBLGtCQXFCRixJQUFJUCw2QkFBSixDQUEyQkosU0FBM0IscUJBQTBDTSxNQUFNLENBQUNLLElBQVAsRUFBMUMsRUFyQkU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBd0JGLDBCQUFZakIsR0FBWixFQUFpQkMsT0FBakIsRUFBMEJDLEtBQTFCLEVBQWlDRCxPQUFPLENBQUNZLEdBQVIsQ0FBWVQsUUFBUSxDQUFDVSxXQUFyQixFQUFrQ0QsR0FBbEMsQ0FBc0NFLElBQXRDLENBQWpDLEVBQThFWixJQUE5RSxFQUFxRkMsUUFBUSxDQUFDVSxXQUE5RixFQUE0R0MsSUFBNUcsQ0F4QkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvb2thaGVhZE1pc21hdGNoRXJyb3IgLCBVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IgfSBmcm9tICcuLi9lcnJvcicgO1xuaW1wb3J0IF9wYXJzZV9sYXp5IGZyb20gJy4vX3BhcnNlX2xhenknIDtcblxuLyoqXG4gKiBHZXQgbmV4dCBjaGlsZCBvZiB0YWJsZS1kcml2ZW4gcHJlZGljdGl2ZSBsYXp5IHBhcnNpbmcuXG4gKlxuICogQHBhcmFtIGdyYW1tYXJcbiAqIEBwYXJhbSB0YWJsZVxuICogQHBhcmFtIHRhcGVcbiAqIEBwYXJhbSB0b2tlblxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBfY2hpbGRyZW5fbmV4dF9sYXp5ICggZW9mLCBncmFtbWFyICwgdGFibGUgLCB0YXBlICwgZXhwZWN0ZWQgKSB7XG5cblx0Y29uc3QgbG9va2FoZWFkID0gYXdhaXQgdGFwZS5yZWFkKCApIDtcblxuXHRpZiAoIGV4cGVjdGVkLnR5cGUgPT09ICdsZWFmJyApIHtcblx0XHRpZiAoIGxvb2thaGVhZCA9PT0gdGFwZS5lb2YgKSB7XG5cdFx0XHRpZiAoIGV4cGVjdGVkLnRlcm1pbmFsID09PSBlb2YgKSByZXR1cm4gZXhwZWN0ZWQgO1xuXHRcdFx0ZWxzZSB0aHJvdyBuZXcgVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yKCBbZXhwZWN0ZWQudGVybWluYWxdICkgO1xuXHRcdH1cblx0XHRlbHNlIGlmICggbG9va2FoZWFkLnRlcm1pbmFsID09PSBleHBlY3RlZC50ZXJtaW5hbCApIHJldHVybiBsb29rYWhlYWQgO1xuXHRcdGVsc2UgdGhyb3cgbmV3IExvb2thaGVhZE1pc21hdGNoRXJyb3IobG9va2FoZWFkLCBbZXhwZWN0ZWQudGVybWluYWxdKSA7XG5cdH1cblxuXHR0YXBlLnVucmVhZChsb29rYWhlYWQpO1xuXG5cdGNvbnN0IHJvdXRlciA9IHRhYmxlLmdldChleHBlY3RlZC5ub250ZXJtaW5hbCk7XG5cblx0Y29uc3QgbmV4dCA9IHJvdXRlci5nZXQobG9va2FoZWFkID09PSB0YXBlLmVvZiA/IGVvZiA6IGxvb2thaGVhZC50ZXJtaW5hbCkgO1xuXG5cdGlmICggbmV4dCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdGlmICggbG9va2FoZWFkID09PSB0YXBlLmVvZiApIHRocm93IG5ldyBVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IoIFsuLi5yb3V0ZXIua2V5cygpXSApIDtcblx0XHRlbHNlIHRocm93IG5ldyBMb29rYWhlYWRNaXNtYXRjaEVycm9yKGxvb2thaGVhZCwgWy4uLnJvdXRlci5rZXlzKCldKSA7XG5cdH1cblxuXHRlbHNlIHJldHVybiBfcGFyc2VfbGF6eShlb2YsIGdyYW1tYXIsIHRhYmxlLCBncmFtbWFyLmdldChleHBlY3RlZC5ub250ZXJtaW5hbCkuZ2V0KG5leHQpLCB0YXBlICwgZXhwZWN0ZWQubm9udGVybWluYWwgLCBuZXh0KTtcblxufVxuIl19