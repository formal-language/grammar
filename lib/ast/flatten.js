'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = flatten;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(flatten);

function flatten(tree) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child;

	return regeneratorRuntime.wrap(function flatten$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!(tree.type === 'leaf')) {
						_context.next = 5;
						break;
					}

					_context.next = 3;
					return tree;

				case 3:
					_context.next = 30;
					break;

				case 5:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 8;
					_iterator = tree.children[Symbol.iterator]();

				case 10:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 16;
						break;
					}

					child = _step.value;
					return _context.delegateYield(flatten(child), 't0', 13);

				case 13:
					_iteratorNormalCompletion = true;
					_context.next = 10;
					break;

				case 16:
					_context.next = 22;
					break;

				case 18:
					_context.prev = 18;
					_context.t1 = _context['catch'](8);
					_didIteratorError = true;
					_iteratorError = _context.t1;

				case 22:
					_context.prev = 22;
					_context.prev = 23;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 25:
					_context.prev = 25;

					if (!_didIteratorError) {
						_context.next = 28;
						break;
					}

					throw _iteratorError;

				case 28:
					return _context.finish(25);

				case 29:
					return _context.finish(22);

				case 30:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this, [[8, 18, 22, 30], [23,, 25, 29]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvZmxhdHRlbi5qcyJdLCJuYW1lcyI6WyJmbGF0dGVuIiwidHJlZSIsInR5cGUiLCJjaGlsZHJlbiIsImNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBeUJBLE87O21EQUFBQSxPOztBQUFWLFNBQVVBLE9BQVYsQ0FBb0JDLElBQXBCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNUQSxLQUFLQyxJQUFMLEtBQWMsTUFETDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBQ29CRCxJQURwQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVZQSxLQUFLRSxRQUZqQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVHQyxVQUZIO0FBQUEsbUNBRW1DSixRQUFTSSxLQUFULENBRm5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiZmxhdHRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBmbGF0dGVuICggdHJlZSApIHtcblx0aWYgKCB0cmVlLnR5cGUgPT09ICdsZWFmJyApIHlpZWxkIHRyZWUgO1xuXHRlbHNlIGZvciAoIGNvbnN0IGNoaWxkIG9mIHRyZWUuY2hpbGRyZW4gKSB5aWVsZCogZmxhdHRlbiggY2hpbGQgKSA7XG59XG4iXX0=