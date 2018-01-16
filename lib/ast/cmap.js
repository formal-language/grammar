'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cmap;

var _children_exhaust2 = require('./_children_exhaust');

var _children_exhaust3 = _interopRequireDefault(_children_exhaust2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(cmap);

/**
 * Applies a given callable to each of the child of a given children iterable.
 *
 * @param {Function} callable - The callable to use.
 * @param {Iterable} children - The input children.
 * @returns {Iterator}
 */
function cmap(callable, children) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, node;

  return regeneratorRuntime.wrap(function cmap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = children[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 14;
            break;
          }

          child = _step.value;
          node = callable(child);
          _context.next = 10;
          return node;

        case 10:
          if (node.type === 'node') (0, _children_exhaust3.default)(node.children);

        case 11:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context['catch'](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 20:
          _context.prev = 20;
          _context.prev = 21;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 23:
          _context.prev = 23;

          if (!_didIteratorError) {
            _context.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context.finish(23);

        case 27:
          return _context.finish(20);

        case 28:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 16, 20, 28], [21,, 23, 27]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvY21hcC5qcyJdLCJuYW1lcyI6WyJjbWFwIiwiY2FsbGFibGUiLCJjaGlsZHJlbiIsImNoaWxkIiwibm9kZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVN5QkEsSTs7QUFUekI7Ozs7OzttREFTeUJBLEk7O0FBUHpCOzs7Ozs7O0FBT2UsU0FBVUEsSUFBVixDQUFpQkMsUUFBakIsRUFBNEJDLFFBQTVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVLQSxRQUZMOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUpDLGVBRkk7QUFHUEMsY0FITyxHQUdBSCxTQUFVRSxLQUFWLENBSEE7QUFBQTtBQUFBLGlCQUlQQyxJQUpPOztBQUFBO0FBS2IsY0FBS0EsS0FBS0MsSUFBTCxLQUFjLE1BQW5CLEVBQTRCLGdDQUFtQkQsS0FBS0YsUUFBeEI7O0FBTGY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9jaGlsZHJlbl9leGhhdXN0IGZyb20gJy4vX2NoaWxkcmVuX2V4aGF1c3QnIDtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gY2FsbGFibGUgdG8gZWFjaCBvZiB0aGUgY2hpbGQgb2YgYSBnaXZlbiBjaGlsZHJlbiBpdGVyYWJsZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBjaGlsZHJlbiAtIFRoZSBpbnB1dCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtJdGVyYXRvcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGNtYXAgKCBjYWxsYWJsZSAsIGNoaWxkcmVuICkge1xuXG5cdGZvciAoIGxldCBjaGlsZCBvZiBjaGlsZHJlbiApIHtcblx0XHRjb25zdCBub2RlID0gY2FsbGFibGUoIGNoaWxkICkgO1xuXHRcdHlpZWxkIG5vZGUgO1xuXHRcdGlmICggbm9kZS50eXBlID09PSAnbm9kZScgKSBfY2hpbGRyZW5fZXhoYXVzdCggbm9kZS5jaGlsZHJlbiApIDtcblx0fVxuXG59XG4iXX0=