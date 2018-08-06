'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = flatten;

var _jsItertools = require('@aureooms/js-itertools');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(flatten);

function flatten(root) {
	var stack, tree, _tree$children$next, done, value, child, newchild;

	return regeneratorRuntime.wrap(function flatten$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:

					// assert root.type === 'node'

					stack = [{
						type: 'node',
						nonterminal: root.nonterminal,
						production: root.production,
						children: (0, _jsItertools.iter)(root.children)
					}];

				case 1:
					if (!(stack.length !== 0)) {
						_context.next = 16;
						break;
					}

					tree = stack.pop();
					_tree$children$next = tree.children.next(), done = _tree$children$next.done, value = _tree$children$next.value;

					if (done) {
						_context.next = 14;
						break;
					}

					stack.push(tree);

					child = value;

					if (!(child.type === 'leaf')) {
						_context.next = 12;
						break;
					}

					_context.next = 10;
					return child;

				case 10:
					_context.next = 14;
					break;

				case 12:
					newchild = {
						type: 'node',
						nonterminal: child.nonterminal,
						production: child.production,
						children: (0, _jsItertools.iter)(child.children)
					};


					stack.push(newchild);

				case 14:
					_context.next = 1;
					break;

				case 16:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvZmxhdHRlbi5qcyJdLCJuYW1lcyI6WyJmbGF0dGVuIiwicm9vdCIsInN0YWNrIiwidHlwZSIsIm5vbnRlcm1pbmFsIiwicHJvZHVjdGlvbiIsImNoaWxkcmVuIiwibGVuZ3RoIiwidHJlZSIsInBvcCIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJwdXNoIiwiY2hpbGQiLCJuZXdjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXlCQSxPOztBQUZ6Qjs7bURBRXlCQSxPOztBQUFWLFNBQVVBLE9BQVYsQ0FBb0JDLElBQXBCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWQ7O0FBRU1DLFVBSlEsR0FJQSxDQUNiO0FBQ0NDLFlBQU8sTUFEUjtBQUVDQyxtQkFBY0gsS0FBS0csV0FGcEI7QUFHQ0Msa0JBQWFKLEtBQUtJLFVBSG5CO0FBSUNDLGdCQUFXLHVCQUFNTCxLQUFLSyxRQUFYO0FBSlosTUFEYSxDQUpBOztBQUFBO0FBQUEsV0FhTkosTUFBTUssTUFBTixLQUFpQixDQWJYO0FBQUE7QUFBQTtBQUFBOztBQWVQQyxTQWZPLEdBZUFOLE1BQU1PLEdBQU4sRUFmQTtBQUFBLDJCQWlCWUQsS0FBS0YsUUFBTCxDQUFjSSxJQUFkLEVBakJaLEVBaUJMQyxJQWpCSyx1QkFpQkxBLElBakJLLEVBaUJFQyxLQWpCRix1QkFpQkVBLEtBakJGOztBQUFBLFNBbUJQRCxJQW5CTztBQUFBO0FBQUE7QUFBQTs7QUFxQlpULFdBQU1XLElBQU4sQ0FBV0wsSUFBWDs7QUFFTU0sVUF2Qk0sR0F1QkVGLEtBdkJGOztBQUFBLFdBeUJQRSxNQUFNWCxJQUFOLEtBQWUsTUF6QlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQXlCdUJXLEtBekJ2Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUE2QkxDLGFBN0JLLEdBNkJNO0FBQ2hCWixZQUFPLE1BRFM7QUFFaEJDLG1CQUFjVSxNQUFNVixXQUZKO0FBR2hCQyxrQkFBYVMsTUFBTVQsVUFISDtBQUloQkMsZ0JBQVcsdUJBQUtRLE1BQU1SLFFBQVg7QUFKSyxNQTdCTjs7O0FBb0NYSixXQUFNVyxJQUFOLENBQVdFLFFBQVg7O0FBcENXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJmbGF0dGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGZsYXR0ZW4gKCByb290ICkge1xuXG5cdC8vIGFzc2VydCByb290LnR5cGUgPT09ICdub2RlJ1xuXG5cdGNvbnN0IHN0YWNrID0gW1xuXHRcdHtcblx0XHRcdHR5cGUgOiAnbm9kZScgLFxuXHRcdFx0bm9udGVybWluYWwgOiByb290Lm5vbnRlcm1pbmFsICxcblx0XHRcdHByb2R1Y3Rpb24gOiByb290LnByb2R1Y3Rpb24gLFxuXHRcdFx0Y2hpbGRyZW4gOiBpdGVyKCByb290LmNoaWxkcmVuICkgLFxuXHRcdH1cblx0XSA7XG5cblx0d2hpbGUgKCBzdGFjay5sZW5ndGggIT09IDAgKSB7XG5cblx0XHRjb25zdCB0cmVlID0gc3RhY2sucG9wKCk7XG5cblx0XHRjb25zdCB7IGRvbmUgLCB2YWx1ZSB9ID0gdHJlZS5jaGlsZHJlbi5uZXh0KCk7XG5cblx0XHRpZiAoICFkb25lICkge1xuXG5cdFx0XHRzdGFjay5wdXNoKHRyZWUpO1xuXG5cdFx0XHRjb25zdCBjaGlsZCA9IHZhbHVlIDtcblxuXHRcdFx0aWYgKCBjaGlsZC50eXBlID09PSAnbGVhZicgKSB5aWVsZCBjaGlsZCA7XG5cblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IG5ld2NoaWxkID0ge1xuXHRcdFx0XHRcdHR5cGUgOiAnbm9kZScgLFxuXHRcdFx0XHRcdG5vbnRlcm1pbmFsIDogY2hpbGQubm9udGVybWluYWwgLFxuXHRcdFx0XHRcdHByb2R1Y3Rpb24gOiBjaGlsZC5wcm9kdWN0aW9uICxcblx0XHRcdFx0XHRjaGlsZHJlbiA6IGl0ZXIoY2hpbGQuY2hpbGRyZW4pICxcblx0XHRcdFx0fSA7XG5cblx0XHRcdFx0c3RhY2sucHVzaChuZXdjaGlsZCk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG59XG4iXX0=