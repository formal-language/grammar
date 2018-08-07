"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _expandproduction;

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(_expandproduction);

function _makenode(typ, arg) {
  switch (typ) {
    case '&':
      return {
        "type": "node",
        "nonterminal": arg
      };

    case '=':
      return {
        "type": "leaf",
        "terminal": arg
      };

    default:
      throw new Error("".concat(typ, " is not a valid type"));
  }
}

function _expandproduction(production) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, part;

  return regeneratorRuntime.wrap(function _expandproduction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = production[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 22;
            break;
          }

          part = _step.value;

          if (!(typeof part === 'string')) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return _makenode(part[0], part.substr(1));

        case 10:
          _context.next = 19;
          break;

        case 12:
          if (!(typeof part === 'number')) {
            _context.next = 17;
            break;
          }

          _context.next = 15;
          return _makenode('&', '' + part);

        case 15:
          _context.next = 19;
          break;

        case 17:
          _context.next = 19;
          return part;

        case 19:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 22:
          _context.next = 28;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 28:
          _context.prev = 28;
          _context.prev = 29;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 31:
          _context.prev = 31;

          if (!_didIteratorError) {
            _context.next = 34;
            break;
          }

          throw _iteratorError;

        case 34:
          return _context.finish(31);

        case 35:
          return _context.finish(28);

        case 36:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 24, 28, 36], [29,, 31, 35]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL19leHBhbmRwcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIl9leHBhbmRwcm9kdWN0aW9uIiwiX21ha2Vub2RlIiwidHlwIiwiYXJnIiwiRXJyb3IiLCJwcm9kdWN0aW9uIiwicGFydCIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3dCQVd5QkEsaUI7O0FBWHpCLFNBQVNDLFNBQVQsQ0FBcUJDLEdBQXJCLEVBQTJCQyxHQUEzQixFQUFpQztBQUNoQyxVQUFTRCxHQUFUO0FBQ0MsU0FBSyxHQUFMO0FBQ0MsYUFBTztBQUFFLGdCQUFTLE1BQVg7QUFBb0IsdUJBQWdCQztBQUFwQyxPQUFQOztBQUNELFNBQUssR0FBTDtBQUNDLGFBQU87QUFBRSxnQkFBUyxNQUFYO0FBQW9CLG9CQUFhQTtBQUFqQyxPQUFQOztBQUNEO0FBQ0MsWUFBTSxJQUFJQyxLQUFKLFdBQWFGLEdBQWIsMEJBQU47QUFORjtBQVFBOztBQUVjLFNBQVVGLGlCQUFWLENBQThCSyxVQUE5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDTUEsVUFETjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNGQyxVQUFBQSxJQURFOztBQUFBLGdCQUVSLE9BQU9BLElBQVAsS0FBZ0IsUUFGUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVtQixpQkFBTUwsU0FBUyxDQUFFSyxJQUFJLENBQUMsQ0FBRCxDQUFOLEVBQVlBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosQ0FBWixDQUFmOztBQUZuQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnQkFHSCxPQUFPRCxJQUFQLEtBQWdCLFFBSGI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHd0IsaUJBQU1MLFNBQVMsQ0FBRSxHQUFGLEVBQVEsS0FBR0ssSUFBWCxDQUFmOztBQUh4QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUlSLGlCQUFNQSxJQUFOOztBQUpRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfbWFrZW5vZGUgKCB0eXAgLCBhcmcgKSB7XG5cdHN3aXRjaCAoIHR5cCApIHtcblx0XHRjYXNlICcmJyA6XG5cdFx0XHRyZXR1cm4geyBcInR5cGVcIiA6IFwibm9kZVwiICwgXCJub250ZXJtaW5hbFwiIDogYXJnIH0gO1xuXHRcdGNhc2UgJz0nIDpcblx0XHRcdHJldHVybiB7IFwidHlwZVwiIDogXCJsZWFmXCIgLCBcInRlcm1pbmFsXCIgOiBhcmcgfSA7XG5cdFx0ZGVmYXVsdCA6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7dHlwfSBpcyBub3QgYSB2YWxpZCB0eXBlYCkgO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBfZXhwYW5kcHJvZHVjdGlvbiAoIHByb2R1Y3Rpb24gKSB7XG5cdGZvciAoIGNvbnN0IHBhcnQgb2YgcHJvZHVjdGlvbiApIHtcblx0XHRpZiAoIHR5cGVvZiBwYXJ0ID09PSAnc3RyaW5nJyApIHlpZWxkIF9tYWtlbm9kZSggcGFydFswXSAsIHBhcnQuc3Vic3RyKDEpICkgO1xuXHRcdGVsc2UgaWYgKCB0eXBlb2YgcGFydCA9PT0gJ251bWJlcicgKSB5aWVsZCBfbWFrZW5vZGUoICcmJyAsICcnK3BhcnQgKSA7XG5cdFx0ZWxzZSB5aWVsZCBwYXJ0IDtcblx0fVxufVxuIl19