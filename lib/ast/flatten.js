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
              children: (0, _util.anyIterator)(root.children)
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
              children: (0, _util.anyIterator)(child.children)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvZmxhdHRlbi5qcyJdLCJuYW1lcyI6WyJmbGF0dGVuIiwicm9vdCIsInN0YWNrIiwidHlwZSIsIm5vbnRlcm1pbmFsIiwicHJvZHVjdGlvbiIsImNoaWxkcmVuIiwibGVuZ3RoIiwidHJlZSIsInBvcCIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJwdXNoIiwiY2hpbGQiLCJuZXdjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFK0JBLE87Ozs7Ozs7MEJBQWhCLGlCQUEwQkMsSUFBMUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkO0FBRU1DLFlBQUFBLEtBSlEsR0FJQSxDQUNiO0FBQ0NDLGNBQUFBLElBQUksRUFBRyxNQURSO0FBRUNDLGNBQUFBLFdBQVcsRUFBR0gsSUFBSSxDQUFDRyxXQUZwQjtBQUdDQyxjQUFBQSxVQUFVLEVBQUdKLElBQUksQ0FBQ0ksVUFIbkI7QUFJQ0MsY0FBQUEsUUFBUSxFQUFHLHVCQUFZTCxJQUFJLENBQUNLLFFBQWpCO0FBSlosYUFEYSxDQUpBOztBQUFBO0FBQUEsa0JBYU5KLEtBQUssQ0FBQ0ssTUFBTixLQUFpQixDQWJYO0FBQUE7QUFBQTtBQUFBOztBQWVQQyxZQUFBQSxJQWZPLEdBZUFOLEtBQUssQ0FBQ08sR0FBTixFQWZBO0FBQUE7QUFBQSx3Q0FpQmtCRCxJQUFJLENBQUNGLFFBQUwsQ0FBY0ksSUFBZCxFQWpCbEI7O0FBQUE7QUFBQTtBQWlCTEMsWUFBQUEsSUFqQkssUUFpQkxBLElBakJLO0FBaUJFQyxZQUFBQSxLQWpCRixRQWlCRUEsS0FqQkY7O0FBQUEsZ0JBbUJQRCxJQW5CTztBQUFBO0FBQUE7QUFBQTs7QUFxQlpULFlBQUFBLEtBQUssQ0FBQ1csSUFBTixDQUFXTCxJQUFYO0FBRU1NLFlBQUFBLEtBdkJNLEdBdUJFRixLQXZCRjs7QUFBQSxrQkF5QlBFLEtBQUssQ0FBQ1gsSUFBTixLQUFlLE1BekJSO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBeUJpQixtQkFBTVcsS0FBTjs7QUF6QmpCO0FBQUE7QUFBQTs7QUFBQTtBQTZCTEMsWUFBQUEsUUE3QkssR0E2Qk07QUFDaEJaLGNBQUFBLElBQUksRUFBRyxNQURTO0FBRWhCQyxjQUFBQSxXQUFXLEVBQUdVLEtBQUssQ0FBQ1YsV0FGSjtBQUdoQkMsY0FBQUEsVUFBVSxFQUFHUyxLQUFLLENBQUNULFVBSEg7QUFJaEJDLGNBQUFBLFFBQVEsRUFBRyx1QkFBWVEsS0FBSyxDQUFDUixRQUFsQjtBQUpLLGFBN0JOO0FBb0NYSixZQUFBQSxLQUFLLENBQUNXLElBQU4sQ0FBV0UsUUFBWDs7QUFwQ1c7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbnlJdGVyYXRvciB9IGZyb20gJy4uL3V0aWwnIDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24qIGZsYXR0ZW4gKCByb290ICkge1xuXG5cdC8vIGFzc2VydCByb290LnR5cGUgPT09ICdub2RlJ1xuXG5cdGNvbnN0IHN0YWNrID0gW1xuXHRcdHtcblx0XHRcdHR5cGUgOiAnbm9kZScgLFxuXHRcdFx0bm9udGVybWluYWwgOiByb290Lm5vbnRlcm1pbmFsICxcblx0XHRcdHByb2R1Y3Rpb24gOiByb290LnByb2R1Y3Rpb24gLFxuXHRcdFx0Y2hpbGRyZW4gOiBhbnlJdGVyYXRvcihyb290LmNoaWxkcmVuKSAsXG5cdFx0fVxuXHRdIDtcblxuXHR3aGlsZSAoIHN0YWNrLmxlbmd0aCAhPT0gMCApIHtcblxuXHRcdGNvbnN0IHRyZWUgPSBzdGFjay5wb3AoKTtcblxuXHRcdGNvbnN0IHsgZG9uZSAsIHZhbHVlIH0gPSBhd2FpdCB0cmVlLmNoaWxkcmVuLm5leHQoKTtcblxuXHRcdGlmICggIWRvbmUgKSB7XG5cblx0XHRcdHN0YWNrLnB1c2godHJlZSk7XG5cblx0XHRcdGNvbnN0IGNoaWxkID0gdmFsdWUgO1xuXG5cdFx0XHRpZiAoIGNoaWxkLnR5cGUgPT09ICdsZWFmJyApIHlpZWxkIGNoaWxkIDtcblxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgbmV3Y2hpbGQgPSB7XG5cdFx0XHRcdFx0dHlwZSA6ICdub2RlJyAsXG5cdFx0XHRcdFx0bm9udGVybWluYWwgOiBjaGlsZC5ub250ZXJtaW5hbCAsXG5cdFx0XHRcdFx0cHJvZHVjdGlvbiA6IGNoaWxkLnByb2R1Y3Rpb24gLFxuXHRcdFx0XHRcdGNoaWxkcmVuIDogYW55SXRlcmF0b3IoY2hpbGQuY2hpbGRyZW4pICxcblx0XHRcdFx0fSA7XG5cblx0XHRcdFx0c3RhY2sucHVzaChuZXdjaGlsZCk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG59XG4iXX0=