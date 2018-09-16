"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;

var _util = require("../util");

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function getCount(object) {
  if (object instanceof Function || object.length === undefined) return Infinity;else return object.length;
}

function flatten(_x) {
  return _flatten.apply(this, arguments);
}

function _flatten() {
  _flatten = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(root) {
    var stack, tree, _ref, done, value, child, it;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // assert root.type === 'node'
            stack = [{
              // no need to use the exhaustive iterator since flatten exhausts the whole subtree
              children: (0, _util.anyIterator)(root.children),
              count: getCount(root.children)
            }];

          case 1:
            if (!(stack.length !== 0)) {
              _context.next = 20;
              break;
            }

            tree = stack.pop();
            _context.next = 5;
            return _awaitAsyncGenerator(tree.children.next());

          case 5:
            _ref = _context.sent;
            done = _ref.done;
            value = _ref.value;

            if (done) {
              _context.next = 18;
              break;
            }

            if (--tree.count > 0) // prunes left side of the tree
              stack.push(tree);
            child = value;

            if (!(child.type === 'leaf')) {
              _context.next = 16;
              break;
            }

            _context.next = 14;
            return child;

          case 14:
            _context.next = 18;
            break;

          case 16:
            it = {
              children: (0, _util.anyIterator)(child.children),
              count: getCount(child.children)
            };
            stack.push(it);

          case 18:
            _context.next = 1;
            break;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _flatten.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvZmxhdHRlbi5qcyJdLCJuYW1lcyI6WyJnZXRDb3VudCIsIm9iamVjdCIsIkZ1bmN0aW9uIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiSW5maW5pdHkiLCJmbGF0dGVuIiwicm9vdCIsInN0YWNrIiwiY2hpbGRyZW4iLCJjb3VudCIsInRyZWUiLCJwb3AiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwicHVzaCIsImNoaWxkIiwidHlwZSIsIml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFFBQVQsQ0FBb0JDLE1BQXBCLEVBQTZCO0FBQzVCLE1BQUtBLE1BQU0sWUFBWUMsUUFBbEIsSUFBOEJELE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQkMsU0FBckQsRUFBaUUsT0FBT0MsUUFBUCxDQUFqRSxLQUNLLE9BQU9KLE1BQU0sQ0FBQ0UsTUFBZDtBQUNMOztTQUU4QkcsTzs7Ozs7OzswQkFBaEIsaUJBQTBCQyxJQUExQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWQ7QUFFTUMsWUFBQUEsS0FKUSxHQUlBLENBQ2I7QUFBRTtBQUNEQyxjQUFBQSxRQUFRLEVBQUcsdUJBQVlGLElBQUksQ0FBQ0UsUUFBakIsQ0FEWjtBQUVDQyxjQUFBQSxLQUFLLEVBQUdWLFFBQVEsQ0FBQ08sSUFBSSxDQUFDRSxRQUFOO0FBRmpCLGFBRGEsQ0FKQTs7QUFBQTtBQUFBLGtCQVdORCxLQUFLLENBQUNMLE1BQU4sS0FBaUIsQ0FYWDtBQUFBO0FBQUE7QUFBQTs7QUFhUFEsWUFBQUEsSUFiTyxHQWFBSCxLQUFLLENBQUNJLEdBQU4sRUFiQTtBQUFBO0FBQUEsd0NBZWtCRCxJQUFJLENBQUNGLFFBQUwsQ0FBY0ksSUFBZCxFQWZsQjs7QUFBQTtBQUFBO0FBZUxDLFlBQUFBLElBZkssUUFlTEEsSUFmSztBQWVFQyxZQUFBQSxLQWZGLFFBZUVBLEtBZkY7O0FBQUEsZ0JBaUJQRCxJQWpCTztBQUFBO0FBQUE7QUFBQTs7QUFtQlosZ0JBQUssRUFBRUgsSUFBSSxDQUFDRCxLQUFQLEdBQWUsQ0FBcEIsRUFBd0I7QUFDeEJGLGNBQUFBLEtBQUssQ0FBQ1EsSUFBTixDQUFXTCxJQUFYO0FBRU1NLFlBQUFBLEtBdEJNLEdBc0JFRixLQXRCRjs7QUFBQSxrQkF3QlBFLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE1BeEJSO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBd0JpQixtQkFBTUQsS0FBTjs7QUF4QmpCO0FBQUE7QUFBQTs7QUFBQTtBQTRCTEUsWUFBQUEsRUE1QkssR0E0QkE7QUFDVlYsY0FBQUEsUUFBUSxFQUFHLHVCQUFZUSxLQUFLLENBQUNSLFFBQWxCLENBREQ7QUFFVkMsY0FBQUEsS0FBSyxFQUFHVixRQUFRLENBQUNpQixLQUFLLENBQUNSLFFBQVA7QUFGTixhQTVCQTtBQWlDWEQsWUFBQUEsS0FBSyxDQUFDUSxJQUFOLENBQVdHLEVBQVg7O0FBakNXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW55SXRlcmF0b3IgfSBmcm9tICcuLi91dGlsJyA7XG5cbmZ1bmN0aW9uIGdldENvdW50ICggb2JqZWN0ICkge1xuXHRpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8IG9iamVjdC5sZW5ndGggPT09IHVuZGVmaW5lZCApIHJldHVybiBJbmZpbml0eSA7XG5cdGVsc2UgcmV0dXJuIG9iamVjdC5sZW5ndGggO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiogZmxhdHRlbiAoIHJvb3QgKSB7XG5cblx0Ly8gYXNzZXJ0IHJvb3QudHlwZSA9PT0gJ25vZGUnXG5cblx0Y29uc3Qgc3RhY2sgPSBbXG5cdFx0eyAvLyBubyBuZWVkIHRvIHVzZSB0aGUgZXhoYXVzdGl2ZSBpdGVyYXRvciBzaW5jZSBmbGF0dGVuIGV4aGF1c3RzIHRoZSB3aG9sZSBzdWJ0cmVlXG5cdFx0XHRjaGlsZHJlbiA6IGFueUl0ZXJhdG9yKHJvb3QuY2hpbGRyZW4pICxcblx0XHRcdGNvdW50IDogZ2V0Q291bnQocm9vdC5jaGlsZHJlbikgLFxuXHRcdH1cblx0XSA7XG5cblx0d2hpbGUgKCBzdGFjay5sZW5ndGggIT09IDAgKSB7XG5cblx0XHRjb25zdCB0cmVlID0gc3RhY2sucG9wKCkgO1xuXG5cdFx0Y29uc3QgeyBkb25lICwgdmFsdWUgfSA9IGF3YWl0IHRyZWUuY2hpbGRyZW4ubmV4dCgpIDtcblxuXHRcdGlmICggIWRvbmUgKSB7XG5cblx0XHRcdGlmICggLS10cmVlLmNvdW50ID4gMCApIC8vIHBydW5lcyBsZWZ0IHNpZGUgb2YgdGhlIHRyZWVcblx0XHRcdHN0YWNrLnB1c2godHJlZSk7XG5cblx0XHRcdGNvbnN0IGNoaWxkID0gdmFsdWUgO1xuXG5cdFx0XHRpZiAoIGNoaWxkLnR5cGUgPT09ICdsZWFmJyApIHlpZWxkIGNoaWxkIDtcblxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgaXQgPSB7XG5cdFx0XHRcdFx0Y2hpbGRyZW4gOiBhbnlJdGVyYXRvcihjaGlsZC5jaGlsZHJlbikgLFxuXHRcdFx0XHRcdGNvdW50IDogZ2V0Q291bnQoY2hpbGQuY2hpbGRyZW4pICxcblx0XHRcdFx0fSA7XG5cblx0XHRcdFx0c3RhY2sucHVzaChpdCk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==