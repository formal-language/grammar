"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _children_exhaust;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

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
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, child;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = _asyncIterator(children);

          case 4:
            _context.next = 6;
            return _iterator.next();

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _step.value;

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 19;
              break;
            }

            child = _value;

            if (!(child.type === 'node')) {
              _context.next = 16;
              break;
            }

            _context.next = 16;
            return _children_exhaust(child.children);

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 30;
              break;
            }

            _context.next = 30;
            return _iterator.return();

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(25);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 21, 25, 35], [26,, 30, 34]]);
  }));
  return _children_exhaust2.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvX2NoaWxkcmVuX2V4aGF1c3QuanMiXSwibmFtZXMiOlsiX2NoaWxkcmVuX2V4aGF1c3QiLCJjaGlsZHJlbiIsImNoaWxkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7U0FNOEJBLGlCOzs7Ozs7OzBCQUFmLGlCQUFtQ0MsUUFBbkM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUVhQSxRQUZiOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUlDLFlBQUFBLEtBRko7O0FBQUEsa0JBR1JBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE1BSFA7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHc0JILGlCQUFpQixDQUFFRSxLQUFLLENBQUNELFFBQVIsQ0FIdkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXhoYXVzdHMgdGhlIGlucHV0IGNoaWxkcmVuIGl0ZXJhdG9yLlxuICpcbiAqIEBwYXJhbSB7SXRlcmF0b3J9IGNoaWxkcmVuIC0gVGhlIGlucHV0IGNoaWxkcmVuIGl0ZXJhdG9yLlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gX2NoaWxkcmVuX2V4aGF1c3QgKCBjaGlsZHJlbiApIHtcblxuXHRmb3IgYXdhaXQgKCBjb25zdCBjaGlsZCBvZiBjaGlsZHJlbiApIHtcblx0XHRpZiAoIGNoaWxkLnR5cGUgPT09ICdub2RlJyApIGF3YWl0IF9jaGlsZHJlbl9leGhhdXN0KCBjaGlsZC5jaGlsZHJlbiApIDtcblx0fVxuXG59XG4iXX0=