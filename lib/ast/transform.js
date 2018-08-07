"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transform;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function transform(_x, _x2, _x3) {
  return _transform.apply(this, arguments);
}

function _transform() {
  _transform = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(tree, match, ctx) {
    var nonterminal, production;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // assert tree.type === 'node'
            nonterminal = tree.nonterminal, production = tree.production;
            _context.next = 3;
            return match[nonterminal][production](tree, match, ctx);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _transform.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbInRyYW5zZm9ybSIsInRyZWUiLCJtYXRjaCIsImN0eCIsIm5vbnRlcm1pbmFsIiwicHJvZHVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7U0FBOEJBLFM7Ozs7Ozs7MEJBQWYsaUJBQTJCQyxJQUEzQixFQUFrQ0MsS0FBbEMsRUFBMENDLEdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkO0FBQ1FDLFlBQUFBLFdBRk0sR0FFdUJILElBRnZCLENBRU5HLFdBRk0sRUFFUUMsVUFGUixHQUV1QkosSUFGdkIsQ0FFUUksVUFGUjtBQUFBO0FBQUEsbUJBR0RILEtBQUssQ0FBQ0UsV0FBRCxDQUFMLENBQW1CQyxVQUFuQixFQUFnQ0osSUFBaEMsRUFBdUNDLEtBQXZDLEVBQStDQyxHQUEvQyxDQUhDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHRyYW5zZm9ybSAoIHRyZWUgLCBtYXRjaCAsIGN0eCApIHtcblx0Ly8gYXNzZXJ0IHRyZWUudHlwZSA9PT0gJ25vZGUnXG5cdGNvbnN0IHsgbm9udGVybWluYWwgLCBwcm9kdWN0aW9uIH0gPSB0cmVlIDtcblx0cmV0dXJuIGF3YWl0IG1hdGNoW25vbnRlcm1pbmFsXVtwcm9kdWN0aW9uXSggdHJlZSAsIG1hdGNoICwgY3R4ICkgO1xufVxuIl19