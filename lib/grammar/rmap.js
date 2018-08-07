"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rmap;

var _ast = require("../ast");

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

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
              _context.next = 18;
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
            if (!(node.type === 'node')) {
              _context.next = 15;
              break;
            }

            _context.next = 15;
            return _awaitAsyncGenerator((0, _ast._children_exhaust)(node.children));

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 27:
            _context.prev = 27;

            if (!_didIteratorError) {
              _context.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context.finish(27);

          case 31:
            return _context.finish(24);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 20, 24, 32], [25,, 27, 31]]);
  }));
  return _rmap.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL3JtYXAuanMiXSwibmFtZXMiOlsicm1hcCIsImNhbGxhYmxlIiwicnVsZSIsInBhcnQiLCJub2RlIiwidHlwZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O1NBTytCQSxJOzs7Ozs7OzBCQUFoQixpQkFBdUJDLFFBQXZCLEVBQWtDQyxJQUFsQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFFTUEsSUFGTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVGQyxZQUFBQSxJQUZFO0FBQUE7QUFBQSx3Q0FHTUYsUUFBUSxDQUFFRSxJQUFGLENBSGQ7O0FBQUE7QUFHUEMsWUFBQUEsSUFITztBQUFBO0FBSWIsbUJBQU1BLElBQU47O0FBSmE7QUFBQSxrQkFLUkEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsTUFMTjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdDQUtxQiw0QkFBbUJELElBQUksQ0FBQ0UsUUFBeEIsQ0FMckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2NoaWxkcmVuX2V4aGF1c3QgfSBmcm9tICcuLi9hc3QnIDtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gY2FsbGFibGUgdG8gZWFjaCBwYXJ0IG9mIGEgZ2l2ZW4gZ3JhbW1hciBydWxlIChnaXZlbiBhcyBhbiBpdGVyYWJsZSkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gdXNlLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gcnVsZSAtIFRoZSBpbnB1dCBncmFtbWFyIHJ1bGUuXG4gKiBAcmV0dXJucyB7QXN5bmNJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24qIHJtYXAgKCBjYWxsYWJsZSAsIHJ1bGUgKSB7XG5cblx0Zm9yICggY29uc3QgcGFydCBvZiBydWxlICkge1xuXHRcdGNvbnN0IG5vZGUgPSBhd2FpdCBjYWxsYWJsZSggcGFydCApIDtcblx0XHR5aWVsZCBub2RlIDtcblx0XHRpZiAoIG5vZGUudHlwZSA9PT0gJ25vZGUnICkgYXdhaXQgX2NoaWxkcmVuX2V4aGF1c3QoIG5vZGUuY2hpbGRyZW4gKSA7XG5cdH1cblxufVxuIl19