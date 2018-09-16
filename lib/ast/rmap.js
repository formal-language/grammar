"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rmap;

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

//import _children_exhaust from './_children_exhaust' ;

/**
 * Applies a given callable to each part of a given grammar rule (given as an iterable).
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} rule - The input grammar rule.
 * @returns {AsyncIterator}
 */
function rmap(_x, _x2) {
  return _rmap.apply(this, arguments);
}

function _rmap() {
  _rmap = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(callable, rule) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, part, node;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 3;
            _iterator = rule[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 15;
              break;
            }

            part = _step.value;
            _context.next = 9;
            return _awaitAsyncGenerator(callable(part));

          case 9:
            node = _context.sent;
            _context.next = 12;
            return node;

          case 12:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 21:
            _context.prev = 21;
            _context.prev = 22;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 24:
            _context.prev = 24;

            if (!_didIteratorError) {
              _context.next = 27;
              break;
            }

            throw _iteratorError;

          case 27:
            return _context.finish(24);

          case 28:
            return _context.finish(21);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 17, 21, 29], [22,, 24, 28]]);
  }));
  return _rmap.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3Qvcm1hcC5qcyJdLCJuYW1lcyI6WyJybWFwIiwiY2FsbGFibGUiLCJydWxlIiwicGFydCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7U0FPK0JBLEk7Ozs7Ozs7MEJBQWhCLGlCQUF1QkMsUUFBdkIsRUFBa0NDLElBQWxDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUVNQSxJQUZOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUZDLFlBQUFBLElBRkU7QUFBQTtBQUFBLHdDQUdNRixRQUFRLENBQUVFLElBQUYsQ0FIZDs7QUFBQTtBQUdQQyxZQUFBQSxJQUhPO0FBQUE7QUFJYixtQkFBTUEsSUFBTjs7QUFKYTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBfY2hpbGRyZW5fZXhoYXVzdCBmcm9tICcuL19jaGlsZHJlbl9leGhhdXN0JyA7XG5cbi8qKlxuICogQXBwbGllcyBhIGdpdmVuIGNhbGxhYmxlIHRvIGVhY2ggcGFydCBvZiBhIGdpdmVuIGdyYW1tYXIgcnVsZSAoZ2l2ZW4gYXMgYW4gaXRlcmFibGUpLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IHJ1bGUgLSBUaGUgaW5wdXQgZ3JhbW1hciBydWxlLlxuICogQHJldHVybnMge0FzeW5jSXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKiBybWFwICggY2FsbGFibGUgLCBydWxlICkge1xuXG5cdGZvciAoIGNvbnN0IHBhcnQgb2YgcnVsZSApIHtcblx0XHRjb25zdCBub2RlID0gYXdhaXQgY2FsbGFibGUoIHBhcnQgKSA7XG5cdFx0eWllbGQgbm9kZSA7XG5cdFx0Ly9pZiAoIG5vZGUudHlwZSA9PT0gJ25vZGUnICkgYXdhaXQgX2NoaWxkcmVuX2V4aGF1c3QoIG5vZGUuY2hpbGRyZW4gKSA7XG5cdH1cblxufVxuIl19