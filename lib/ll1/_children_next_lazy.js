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
 * @param stream
 * @param token
 * @returns {Array}
 */
function _children_next_lazy(_x, _x2, _x3, _x4, _x5) {
  return _children_next_lazy2.apply(this, arguments);
}

function _children_next_lazy2() {
  _children_next_lazy2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(eof, grammar, table, stream, expected) {
    var lookahead, router, next;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return stream.read();

          case 2:
            lookahead = _context.sent;

            if (!(expected.type === 'leaf')) {
              _context.next = 17;
              break;
            }

            if (!(lookahead === stream.eof)) {
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
            stream.unread(lookahead);
            router = table.get(expected.nonterminal);
            next = router.get(lookahead === stream.eof ? eof : lookahead.terminal);

            if (!(next === undefined)) {
              _context.next = 24;
              break;
            }

            throw new _error.LookaheadMismatchError(lookahead, _toConsumableArray(router.keys()));

          case 24:
            return _context.abrupt("return", (0, _parse_lazy2.default)(eof, grammar, table, grammar.get(expected.nonterminal).get(next), stream, expected.nonterminal, next));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _children_next_lazy2.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2NoaWxkcmVuX25leHRfbGF6eS5qcyJdLCJuYW1lcyI6WyJfY2hpbGRyZW5fbmV4dF9sYXp5IiwiZW9mIiwiZ3JhbW1hciIsInRhYmxlIiwic3RyZWFtIiwiZXhwZWN0ZWQiLCJyZWFkIiwibG9va2FoZWFkIiwidHlwZSIsInRlcm1pbmFsIiwiVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIiwiTG9va2FoZWFkTWlzbWF0Y2hFcnJvciIsInVucmVhZCIsInJvdXRlciIsImdldCIsIm5vbnRlcm1pbmFsIiwibmV4dCIsInVuZGVmaW5lZCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7U0FTOEJBLG1COzs7Ozs7OzBCQUFmLGlCQUFxQ0MsR0FBckMsRUFBMENDLE9BQTFDLEVBQW9EQyxLQUFwRCxFQUE0REMsTUFBNUQsRUFBcUVDLFFBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVVELE1BQU0sQ0FBQ0UsSUFBUCxFQUZWOztBQUFBO0FBRVJDLFlBQUFBLFNBRlE7O0FBQUEsa0JBSVRGLFFBQVEsQ0FBQ0csSUFBVCxLQUFrQixNQUpUO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUtSRCxTQUFTLEtBQUtILE1BQU0sQ0FBQ0gsR0FMYjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFNUEksUUFBUSxDQUFDSSxRQUFULEtBQXNCUixHQU5mO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQU00QkksUUFONUI7O0FBQUE7QUFBQSxrQkFPRCxJQUFJSywrQkFBSixDQUE4QixDQUFDTCxRQUFRLENBQUNJLFFBQVYsQ0FBOUIsQ0FQQzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxrQkFTSEYsU0FBUyxDQUFDRSxRQUFWLEtBQXVCSixRQUFRLENBQUNJLFFBVDdCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQVMrQ0YsU0FUL0M7O0FBQUE7QUFBQSxrQkFVRixJQUFJSSw2QkFBSixDQUEyQkosU0FBM0IsRUFBc0MsQ0FBQ0YsUUFBUSxDQUFDSSxRQUFWLENBQXRDLENBVkU7O0FBQUE7QUFhZEwsWUFBQUEsTUFBTSxDQUFDUSxNQUFQLENBQWNMLFNBQWQ7QUFFTU0sWUFBQUEsTUFmUSxHQWVDVixLQUFLLENBQUNXLEdBQU4sQ0FBVVQsUUFBUSxDQUFDVSxXQUFuQixDQWZEO0FBaUJSQyxZQUFBQSxJQWpCUSxHQWlCREgsTUFBTSxDQUFDQyxHQUFQLENBQVdQLFNBQVMsS0FBS0gsTUFBTSxDQUFDSCxHQUFyQixHQUEyQkEsR0FBM0IsR0FBaUNNLFNBQVMsQ0FBQ0UsUUFBdEQsQ0FqQkM7O0FBQUEsa0JBbUJUTyxJQUFJLEtBQUtDLFNBbkJBO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQW1Ca0IsSUFBSU4sNkJBQUosQ0FBMkJKLFNBQTNCLHFCQUEwQ00sTUFBTSxDQUFDSyxJQUFQLEVBQTFDLEVBbkJsQjs7QUFBQTtBQUFBLDZDQXFCRiwwQkFBWWpCLEdBQVosRUFBaUJDLE9BQWpCLEVBQTBCQyxLQUExQixFQUFpQ0QsT0FBTyxDQUFDWSxHQUFSLENBQVlULFFBQVEsQ0FBQ1UsV0FBckIsRUFBa0NELEdBQWxDLENBQXNDRSxJQUF0QyxDQUFqQyxFQUE4RVosTUFBOUUsRUFBdUZDLFFBQVEsQ0FBQ1UsV0FBaEcsRUFBOEdDLElBQTlHLENBckJFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb29rYWhlYWRNaXNtYXRjaEVycm9yICwgVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIH0gZnJvbSAnLi4vZXJyb3InIDtcbmltcG9ydCBfcGFyc2VfbGF6eSBmcm9tICcuL19wYXJzZV9sYXp5JyA7XG5cbi8qKlxuICogR2V0IG5leHQgY2hpbGQgb2YgdGFibGUtZHJpdmVuIHByZWRpY3RpdmUgbGF6eSBwYXJzaW5nLlxuICpcbiAqIEBwYXJhbSBncmFtbWFyXG4gKiBAcGFyYW0gdGFibGVcbiAqIEBwYXJhbSBzdHJlYW1cbiAqIEBwYXJhbSB0b2tlblxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBfY2hpbGRyZW5fbmV4dF9sYXp5ICggZW9mLCBncmFtbWFyICwgdGFibGUgLCBzdHJlYW0gLCBleHBlY3RlZCApIHtcblxuXHRjb25zdCBsb29rYWhlYWQgPSBhd2FpdCBzdHJlYW0ucmVhZCggKSA7XG5cblx0aWYgKCBleHBlY3RlZC50eXBlID09PSAnbGVhZicgKSB7XG5cdFx0aWYgKCBsb29rYWhlYWQgPT09IHN0cmVhbS5lb2YgKSB7XG5cdFx0XHRpZiAoIGV4cGVjdGVkLnRlcm1pbmFsID09PSBlb2YgKSByZXR1cm4gZXhwZWN0ZWQgO1xuXHRcdFx0ZWxzZSB0aHJvdyBuZXcgVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yKCBbZXhwZWN0ZWQudGVybWluYWxdICkgO1xuXHRcdH1cblx0XHRlbHNlIGlmICggbG9va2FoZWFkLnRlcm1pbmFsID09PSBleHBlY3RlZC50ZXJtaW5hbCApIHJldHVybiBsb29rYWhlYWQgO1xuXHRcdGVsc2UgdGhyb3cgbmV3IExvb2thaGVhZE1pc21hdGNoRXJyb3IobG9va2FoZWFkLCBbZXhwZWN0ZWQudGVybWluYWxdKSA7XG5cdH1cblxuXHRzdHJlYW0udW5yZWFkKGxvb2thaGVhZCk7XG5cblx0Y29uc3Qgcm91dGVyID0gdGFibGUuZ2V0KGV4cGVjdGVkLm5vbnRlcm1pbmFsKTtcblxuXHRjb25zdCBuZXh0ID0gcm91dGVyLmdldChsb29rYWhlYWQgPT09IHN0cmVhbS5lb2YgPyBlb2YgOiBsb29rYWhlYWQudGVybWluYWwpIDtcblxuXHRpZiAoIG5leHQgPT09IHVuZGVmaW5lZCApIHRocm93IG5ldyBMb29rYWhlYWRNaXNtYXRjaEVycm9yKGxvb2thaGVhZCwgWy4uLnJvdXRlci5rZXlzKCldKSA7XG5cblx0ZWxzZSByZXR1cm4gX3BhcnNlX2xhenkoZW9mLCBncmFtbWFyLCB0YWJsZSwgZ3JhbW1hci5nZXQoZXhwZWN0ZWQubm9udGVybWluYWwpLmdldChuZXh0KSwgc3RyZWFtICwgZXhwZWN0ZWQubm9udGVybWluYWwgLCBuZXh0KTtcblxufVxuIl19