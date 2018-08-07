"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function anyIterator(object) {
  if (object[Symbol.asyncIterator]) return object[Symbol.asyncIterator]();else return object[Symbol.iterator]();
}

function flatten(_x) {
  return _flatten.apply(this, arguments);
}

function _flatten() {
  _flatten = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(root) {
    var stack, tree, _ref, done, value, child, newchild;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // assert root.type === 'node'
            stack = [{
              type: 'node',
              nonterminal: root.nonterminal,
              production: root.production,
              children: anyIterator(root.children)
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
            newchild = {
              type: 'node',
              nonterminal: child.nonterminal,
              production: child.production,
              children: anyIterator(child.children)
            };
            stack.push(newchild);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvZmxhdHRlbi5qcyJdLCJuYW1lcyI6WyJhbnlJdGVyYXRvciIsIm9iamVjdCIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJpdGVyYXRvciIsImZsYXR0ZW4iLCJyb290Iiwic3RhY2siLCJ0eXBlIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJ0cmVlIiwicG9wIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsInB1c2giLCJjaGlsZCIsIm5ld2NoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVQsQ0FBdUJDLE1BQXZCLEVBQWdDO0FBQy9CLE1BQUtBLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxhQUFSLENBQVgsRUFBb0MsT0FBT0YsTUFBTSxDQUFDQyxNQUFNLENBQUNDLGFBQVIsQ0FBTixFQUFQLENBQXBDLEtBQ0ssT0FBT0YsTUFBTSxDQUFDQyxNQUFNLENBQUNFLFFBQVIsQ0FBTixFQUFQO0FBQ0w7O1NBRThCQyxPOzs7Ozs7OzBCQUFoQixpQkFBMEJDLElBQTFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZDtBQUVNQyxZQUFBQSxLQUpRLEdBSUEsQ0FDYjtBQUNDQyxjQUFBQSxJQUFJLEVBQUcsTUFEUjtBQUVDQyxjQUFBQSxXQUFXLEVBQUdILElBQUksQ0FBQ0csV0FGcEI7QUFHQ0MsY0FBQUEsVUFBVSxFQUFHSixJQUFJLENBQUNJLFVBSG5CO0FBSUNDLGNBQUFBLFFBQVEsRUFBR1gsV0FBVyxDQUFDTSxJQUFJLENBQUNLLFFBQU47QUFKdkIsYUFEYSxDQUpBOztBQUFBO0FBQUEsa0JBYU5KLEtBQUssQ0FBQ0ssTUFBTixLQUFpQixDQWJYO0FBQUE7QUFBQTtBQUFBOztBQWVQQyxZQUFBQSxJQWZPLEdBZUFOLEtBQUssQ0FBQ08sR0FBTixFQWZBO0FBQUE7QUFBQSx3Q0FpQmtCRCxJQUFJLENBQUNGLFFBQUwsQ0FBY0ksSUFBZCxFQWpCbEI7O0FBQUE7QUFBQTtBQWlCTEMsWUFBQUEsSUFqQkssUUFpQkxBLElBakJLO0FBaUJFQyxZQUFBQSxLQWpCRixRQWlCRUEsS0FqQkY7O0FBQUEsZ0JBbUJQRCxJQW5CTztBQUFBO0FBQUE7QUFBQTs7QUFxQlpULFlBQUFBLEtBQUssQ0FBQ1csSUFBTixDQUFXTCxJQUFYO0FBRU1NLFlBQUFBLEtBdkJNLEdBdUJFRixLQXZCRjs7QUFBQSxrQkF5QlBFLEtBQUssQ0FBQ1gsSUFBTixLQUFlLE1BekJSO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBeUJpQixtQkFBTVcsS0FBTjs7QUF6QmpCO0FBQUE7QUFBQTs7QUFBQTtBQTZCTEMsWUFBQUEsUUE3QkssR0E2Qk07QUFDaEJaLGNBQUFBLElBQUksRUFBRyxNQURTO0FBRWhCQyxjQUFBQSxXQUFXLEVBQUdVLEtBQUssQ0FBQ1YsV0FGSjtBQUdoQkMsY0FBQUEsVUFBVSxFQUFHUyxLQUFLLENBQUNULFVBSEg7QUFJaEJDLGNBQUFBLFFBQVEsRUFBR1gsV0FBVyxDQUFDbUIsS0FBSyxDQUFDUixRQUFQO0FBSk4sYUE3Qk47QUFvQ1hKLFlBQUFBLEtBQUssQ0FBQ1csSUFBTixDQUFXRSxRQUFYOztBQXBDVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFueUl0ZXJhdG9yICggb2JqZWN0ICkge1xuXHRpZiAoIG9iamVjdFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gKSByZXR1cm4gb2JqZWN0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDtcblx0ZWxzZSByZXR1cm4gb2JqZWN0W1N5bWJvbC5pdGVyYXRvcl0oKSA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKiBmbGF0dGVuICggcm9vdCApIHtcblxuXHQvLyBhc3NlcnQgcm9vdC50eXBlID09PSAnbm9kZSdcblxuXHRjb25zdCBzdGFjayA9IFtcblx0XHR7XG5cdFx0XHR0eXBlIDogJ25vZGUnICxcblx0XHRcdG5vbnRlcm1pbmFsIDogcm9vdC5ub250ZXJtaW5hbCAsXG5cdFx0XHRwcm9kdWN0aW9uIDogcm9vdC5wcm9kdWN0aW9uICxcblx0XHRcdGNoaWxkcmVuIDogYW55SXRlcmF0b3Iocm9vdC5jaGlsZHJlbikgLFxuXHRcdH1cblx0XSA7XG5cblx0d2hpbGUgKCBzdGFjay5sZW5ndGggIT09IDAgKSB7XG5cblx0XHRjb25zdCB0cmVlID0gc3RhY2sucG9wKCk7XG5cblx0XHRjb25zdCB7IGRvbmUgLCB2YWx1ZSB9ID0gYXdhaXQgdHJlZS5jaGlsZHJlbi5uZXh0KCk7XG5cblx0XHRpZiAoICFkb25lICkge1xuXG5cdFx0XHRzdGFjay5wdXNoKHRyZWUpO1xuXG5cdFx0XHRjb25zdCBjaGlsZCA9IHZhbHVlIDtcblxuXHRcdFx0aWYgKCBjaGlsZC50eXBlID09PSAnbGVhZicgKSB5aWVsZCBjaGlsZCA7XG5cblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IG5ld2NoaWxkID0ge1xuXHRcdFx0XHRcdHR5cGUgOiAnbm9kZScgLFxuXHRcdFx0XHRcdG5vbnRlcm1pbmFsIDogY2hpbGQubm9udGVybWluYWwgLFxuXHRcdFx0XHRcdHByb2R1Y3Rpb24gOiBjaGlsZC5wcm9kdWN0aW9uICxcblx0XHRcdFx0XHRjaGlsZHJlbiA6IGFueUl0ZXJhdG9yKGNoaWxkLmNoaWxkcmVuKSAsXG5cdFx0XHRcdH0gO1xuXG5cdFx0XHRcdHN0YWNrLnB1c2gobmV3Y2hpbGQpO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxufVxuIl19