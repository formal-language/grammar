"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _children_exhaust;

var _util = require("../util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Exhausts the input children iterator.
 *
 * @param {Iterator} children - The input children iterator.
 *
 */
function _children_exhaust(_x) {
  return _children_exhaust2.apply(this, arguments);
}

function _children_exhaust2() {
  _children_exhaust2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(children) {
    var stack, it, _ref, done, value, child, grandchildren;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //for await ( const child of children ) {
            //if ( child.type === 'node' ) await _children_exhaust( child.children ) ;
            //}
            stack = [(0, _util.anyIterator)(children)];

          case 1:
            if (!(stack.length !== 0)) {
              _context.next = 11;
              break;
            }

            it = stack.pop();
            _context.next = 5;
            return it.next();

          case 5:
            _ref = _context.sent;
            done = _ref.done;
            value = _ref.value;

            if (!done) {
              stack.push(it);
              child = value;

              if (child.type === 'node') {
                grandchildren = (0, _util.anyIterator)(child.children);
                stack.push(grandchildren);
              }
            }

            _context.next = 1;
            break;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _children_exhaust2.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvX2NoaWxkcmVuX2V4aGF1c3QuanMiXSwibmFtZXMiOlsiX2NoaWxkcmVuX2V4aGF1c3QiLCJjaGlsZHJlbiIsInN0YWNrIiwibGVuZ3RoIiwiaXQiLCJwb3AiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwicHVzaCIsImNoaWxkIiwidHlwZSIsImdyYW5kY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7Ozs7OztTQU04QkEsaUI7Ozs7Ozs7MEJBQWYsaUJBQW1DQyxRQUFuQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWQ7QUFDQztBQUNEO0FBRU1DLFlBQUFBLEtBTlEsR0FNQSxDQUFFLHVCQUFZRCxRQUFaLENBQUYsQ0FOQTs7QUFBQTtBQUFBLGtCQVFOQyxLQUFLLENBQUNDLE1BQU4sS0FBaUIsQ0FSWDtBQUFBO0FBQUE7QUFBQTs7QUFVUEMsWUFBQUEsRUFWTyxHQVVGRixLQUFLLENBQUNHLEdBQU4sRUFWRTtBQUFBO0FBQUEsbUJBWWtCRCxFQUFFLENBQUNFLElBQUgsRUFabEI7O0FBQUE7QUFBQTtBQVlMQyxZQUFBQSxJQVpLLFFBWUxBLElBWks7QUFZRUMsWUFBQUEsS0FaRixRQVlFQSxLQVpGOztBQWNiLGdCQUFLLENBQUNELElBQU4sRUFBYTtBQUVaTCxjQUFBQSxLQUFLLENBQUNPLElBQU4sQ0FBV0wsRUFBWDtBQUVNTSxjQUFBQSxLQUpNLEdBSUVGLEtBSkY7O0FBTVosa0JBQUtFLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE1BQXBCLEVBQTZCO0FBQ3RCQyxnQkFBQUEsYUFEc0IsR0FDTix1QkFBWUYsS0FBSyxDQUFDVCxRQUFsQixDQURNO0FBRTVCQyxnQkFBQUEsS0FBSyxDQUFDTyxJQUFOLENBQVdHLGFBQVg7QUFDQTtBQUVEOztBQXpCWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbnlJdGVyYXRvciB9IGZyb20gJy4uL3V0aWwnIDtcblxuLyoqXG4gKiBFeGhhdXN0cyB0aGUgaW5wdXQgY2hpbGRyZW4gaXRlcmF0b3IuXG4gKlxuICogQHBhcmFtIHtJdGVyYXRvcn0gY2hpbGRyZW4gLSBUaGUgaW5wdXQgY2hpbGRyZW4gaXRlcmF0b3IuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBfY2hpbGRyZW5fZXhoYXVzdCAoIGNoaWxkcmVuICkge1xuXG5cdC8vZm9yIGF3YWl0ICggY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4gKSB7XG5cdFx0Ly9pZiAoIGNoaWxkLnR5cGUgPT09ICdub2RlJyApIGF3YWl0IF9jaGlsZHJlbl9leGhhdXN0KCBjaGlsZC5jaGlsZHJlbiApIDtcblx0Ly99XG5cblx0Y29uc3Qgc3RhY2sgPSBbIGFueUl0ZXJhdG9yKGNoaWxkcmVuKSBdIDtcblxuXHR3aGlsZSAoIHN0YWNrLmxlbmd0aCAhPT0gMCApIHtcblxuXHRcdGNvbnN0IGl0ID0gc3RhY2sucG9wKCk7XG5cblx0XHRjb25zdCB7IGRvbmUgLCB2YWx1ZSB9ID0gYXdhaXQgaXQubmV4dCgpO1xuXG5cdFx0aWYgKCAhZG9uZSApIHtcblxuXHRcdFx0c3RhY2sucHVzaChpdCk7XG5cblx0XHRcdGNvbnN0IGNoaWxkID0gdmFsdWUgO1xuXG5cdFx0XHRpZiAoIGNoaWxkLnR5cGUgPT09ICdub2RlJyApIHtcblx0XHRcdFx0Y29uc3QgZ3JhbmRjaGlsZHJlbiA9IGFueUl0ZXJhdG9yKGNoaWxkLmNoaWxkcmVuKSA7XG5cdFx0XHRcdHN0YWNrLnB1c2goZ3JhbmRjaGlsZHJlbik7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=