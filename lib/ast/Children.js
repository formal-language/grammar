"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rmap = _interopRequireDefault(require("./rmap"));

var _children_exhaust2 = _interopRequireDefault(require("./_children_exhaust"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

var Children =
/*#__PURE__*/
function () {
  function Children(iterator, length) {
    _classCallCheck(this, Children);

    this.iterator = iterator;
    this.length = length;
  }

  _createClass(Children, [{
    key: Symbol.asyncIterator,
    value: function value() {
      var _this = this;

      return _wrapAsyncGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, node;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context.prev = 2;
                _iterator = _asyncIterator(_this.iterator);

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

                node = _value;
                _context.next = 15;
                return node;

              case 15:
                if (!(node.type === 'node')) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return _awaitAsyncGenerator((0, _children_exhaust2.default)(node.children));

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
      }))();
    }
  }]);

  return Children;
}();

exports.default = Children;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvQ2hpbGRyZW4uanMiXSwibmFtZXMiOlsiQ2hpbGRyZW4iLCJpdGVyYXRvciIsImxlbmd0aCIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJub2RlIiwidHlwZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUVwQixvQkFBY0MsUUFBZCxFQUF3QkMsTUFBeEIsRUFBaUM7QUFBQTs7QUFDaEMsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQTs7O1NBRU9DLE1BQU0sQ0FBQ0MsYTs0QkFBaUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUNMLEtBQUksQ0FBQ0gsUUFEQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNiSSxnQkFBQUEsSUFEYTtBQUFBO0FBRTlCLHVCQUFNQSxJQUFOOztBQUY4QjtBQUFBLHNCQUd6QkEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsTUFIVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRDQUdJLGdDQUFtQkQsSUFBSSxDQUFDRSxRQUF4QixDQUhKOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJtYXAgZnJvbSAnLi9ybWFwJyA7XG5pbXBvcnQgX2NoaWxkcmVuX2V4aGF1c3QgZnJvbSAnLi9fY2hpbGRyZW5fZXhoYXVzdCcgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZHJlbiB7XG5cblx0Y29uc3RydWN0b3IgKCBpdGVyYXRvciwgbGVuZ3RoICkge1xuXHRcdHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvciA7XG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGggO1xuXHR9XG5cblx0YXN5bmMqIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG5cdFx0Zm9yIGF3YWl0ICggY29uc3Qgbm9kZSBvZiB0aGlzLml0ZXJhdG9yICkge1xuXHRcdFx0eWllbGQgbm9kZSA7XG5cdFx0XHRpZiAoIG5vZGUudHlwZSA9PT0gJ25vZGUnICkgYXdhaXQgX2NoaWxkcmVuX2V4aGF1c3QoIG5vZGUuY2hpbGRyZW4gKSA7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==