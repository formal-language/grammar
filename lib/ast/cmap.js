"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cmap;

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

//import _children_exhaust from './_children_exhaust' ;

/**
 * Applies a given callable to each of the child of a given children async iterable.
 *
 * @param {Function} callable - The callable to use.
 * @param {AsyncIterable} children - The input children.
 * @returns {AsyncIterator}
 */
function cmap(_x, _x2) {
  return _cmap.apply(this, arguments);
}

function _cmap() {
  _cmap = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(callable, children) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, child, node;

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
            return _awaitAsyncGenerator(_iterator.next());

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _awaitAsyncGenerator(_step.value);

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 21;
              break;
            }

            child = _value;
            _context.next = 15;
            return _awaitAsyncGenerator(callable(child));

          case 15:
            node = _context.sent;
            _context.next = 18;
            return node;

          case 18:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 32;
              break;
            }

            _context.next = 32;
            return _awaitAsyncGenerator(_iterator.return());

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(27);

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 23, 27, 37], [28,, 32, 36]]);
  }));
  return _cmap.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvY21hcC5qcyJdLCJuYW1lcyI6WyJjbWFwIiwiY2FsbGFibGUiLCJjaGlsZHJlbiIsImNoaWxkIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7O1NBTytCQSxJOzs7Ozs7OzBCQUFoQixpQkFBdUJDLFFBQXZCLEVBQWtDQyxRQUFsQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBRWFBLFFBRmI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFSUMsWUFBQUEsS0FGSjtBQUFBO0FBQUEsd0NBR01GLFFBQVEsQ0FBRUUsS0FBRixDQUhkOztBQUFBO0FBR1BDLFlBQUFBLElBSE87QUFBQTtBQUliLG1CQUFNQSxJQUFOOztBQUphO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBfY2hpbGRyZW5fZXhoYXVzdCBmcm9tICcuL19jaGlsZHJlbl9leGhhdXN0JyA7XG5cbi8qKlxuICogQXBwbGllcyBhIGdpdmVuIGNhbGxhYmxlIHRvIGVhY2ggb2YgdGhlIGNoaWxkIG9mIGEgZ2l2ZW4gY2hpbGRyZW4gYXN5bmMgaXRlcmFibGUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gdXNlLlxuICogQHBhcmFtIHtBc3luY0l0ZXJhYmxlfSBjaGlsZHJlbiAtIFRoZSBpbnB1dCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtBc3luY0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiogY21hcCAoIGNhbGxhYmxlICwgY2hpbGRyZW4gKSB7XG5cblx0Zm9yIGF3YWl0ICggY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4gKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IGF3YWl0IGNhbGxhYmxlKCBjaGlsZCApIDtcblx0XHR5aWVsZCBub2RlIDtcblx0fVxuXG59XG4iXX0=