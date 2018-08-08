"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cmap;

var _children_exhaust2 = _interopRequireDefault(require("./_children_exhaust"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

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
              _context.next = 24;
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
            if (!(node.type === 'node')) {
              _context.next = 21;
              break;
            }

            _context.next = 21;
            return _awaitAsyncGenerator((0, _children_exhaust2.default)(node.children));

          case 21:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 24:
            _context.next = 30;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 30:
            _context.prev = 30;
            _context.prev = 31;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 35;
              break;
            }

            _context.next = 35;
            return _awaitAsyncGenerator(_iterator.return());

          case 35:
            _context.prev = 35;

            if (!_didIteratorError) {
              _context.next = 38;
              break;
            }

            throw _iteratorError;

          case 38:
            return _context.finish(35);

          case 39:
            return _context.finish(30);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 26, 30, 40], [31,, 35, 39]]);
  }));
  return _cmap.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvY21hcC5qcyJdLCJuYW1lcyI6WyJjbWFwIiwiY2FsbGFibGUiLCJjaGlsZHJlbiIsImNoaWxkIiwibm9kZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O1NBTytCQSxJOzs7Ozs7OzBCQUFoQixpQkFBdUJDLFFBQXZCLEVBQWtDQyxRQUFsQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBRWFBLFFBRmI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFSUMsWUFBQUEsS0FGSjtBQUFBO0FBQUEsd0NBR01GLFFBQVEsQ0FBRUUsS0FBRixDQUhkOztBQUFBO0FBR1BDLFlBQUFBLElBSE87QUFBQTtBQUliLG1CQUFNQSxJQUFOOztBQUphO0FBQUEsa0JBTVJBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLE1BTk47QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3Q0FNcUIsZ0NBQW1CRCxJQUFJLENBQUNGLFFBQXhCLENBTnJCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2NoaWxkcmVuX2V4aGF1c3QgZnJvbSAnLi9fY2hpbGRyZW5fZXhoYXVzdCcgO1xuXG4vKipcbiAqIEFwcGxpZXMgYSBnaXZlbiBjYWxsYWJsZSB0byBlYWNoIG9mIHRoZSBjaGlsZCBvZiBhIGdpdmVuIGNoaWxkcmVuIGFzeW5jIGl0ZXJhYmxlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxhYmxlIC0gVGhlIGNhbGxhYmxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7QXN5bmNJdGVyYWJsZX0gY2hpbGRyZW4gLSBUaGUgaW5wdXQgY2hpbGRyZW4uXG4gKiBAcmV0dXJucyB7QXN5bmNJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24qIGNtYXAgKCBjYWxsYWJsZSAsIGNoaWxkcmVuICkge1xuXG5cdGZvciBhd2FpdCAoIGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuICkge1xuXHRcdGNvbnN0IG5vZGUgPSBhd2FpdCBjYWxsYWJsZSggY2hpbGQgKSA7XG5cdFx0eWllbGQgbm9kZSA7XG5cdFx0Ly8gVE9ETyBleGhhdXN0IGNoaWxkLmNoaWxkcmVuIHRvbyA/XG5cdFx0aWYgKCBub2RlLnR5cGUgPT09ICdub2RlJyApIGF3YWl0IF9jaGlsZHJlbl9leGhhdXN0KCBub2RlLmNoaWxkcmVuICkgO1xuXHR9XG5cbn1cbiJdfQ==