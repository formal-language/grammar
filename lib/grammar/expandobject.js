'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = expandobject;

var _jsItertools = require('@aureooms/js-itertools');

var _expandproduction2 = require('./_expandproduction');

var _expandproduction3 = _interopRequireDefault(_expandproduction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_expandproductions),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(_expandobject);

function _expandproductions(productions) {
	var key;
	return regeneratorRuntime.wrap(function _expandproductions$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.t0 = regeneratorRuntime.keys(productions);

				case 1:
					if ((_context.t1 = _context.t0()).done) {
						_context.next = 7;
						break;
					}

					key = _context.t1.value;
					_context.next = 5;
					return [key, (0, _jsItertools.list)((0, _expandproduction3.default)(productions[key]))];

				case 5:
					_context.next = 1;
					break;

				case 7:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}

function _expandobject(object) {
	var nonterminal;
	return regeneratorRuntime.wrap(function _expandobject$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.t0 = regeneratorRuntime.keys(object);

				case 1:
					if ((_context2.t1 = _context2.t0()).done) {
						_context2.next = 7;
						break;
					}

					nonterminal = _context2.t1.value;
					_context2.next = 5;
					return [nonterminal, new Map(_expandproductions(object[nonterminal]))];

				case 5:
					_context2.next = 1;
					break;

				case 7:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

function expandobject(object) {
	return new Map(_expandobject(object));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL2V4cGFuZG9iamVjdC5qcyJdLCJuYW1lcyI6WyJleHBhbmRvYmplY3QiLCJfZXhwYW5kcHJvZHVjdGlvbnMiLCJfZXhwYW5kb2JqZWN0IiwicHJvZHVjdGlvbnMiLCJrZXkiLCJvYmplY3QiLCJub250ZXJtaW5hbCIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxZOztBQVp4Qjs7QUFFQTs7Ozs7O21EQUVVQyxrQjtvREFJQUMsYTs7QUFKVixTQUFVRCxrQkFBVixDQUErQkUsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQ29CQSxXQURwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNhQyxRQURiO0FBQUE7QUFBQSxZQUN3QyxDQUFFQSxHQUFGLEVBQVEsdUJBQU0sZ0NBQW1CRCxZQUFZQyxHQUFaLENBQW5CLENBQU4sQ0FBUixDQUR4Qzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUYsYUFBVixDQUEwQkcsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBQzRCQSxNQUQ1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNhQyxnQkFEYjtBQUFBO0FBQUEsWUFDMkMsQ0FBRUEsV0FBRixFQUFnQixJQUFJQyxHQUFKLENBQVNOLG1CQUFvQkksT0FBT0MsV0FBUCxDQUFwQixDQUFULENBQWhCLENBRDNDOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFTTixZQUFULENBQXdCSyxNQUF4QixFQUFpQztBQUMvQyxRQUFPLElBQUlFLEdBQUosQ0FBU0wsY0FBZUcsTUFBZixDQUFULENBQVA7QUFDQSIsImZpbGUiOiJleHBhbmRvYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgLCBsaXN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgX2V4cGFuZHByb2R1Y3Rpb24gZnJvbSAnLi9fZXhwYW5kcHJvZHVjdGlvbicgO1xuXG5mdW5jdGlvbiogX2V4cGFuZHByb2R1Y3Rpb25zICggcHJvZHVjdGlvbnMgKSB7XG5cdGZvciAoIGNvbnN0IGtleSBpbiBwcm9kdWN0aW9ucyApIHlpZWxkIFsga2V5ICwgbGlzdCggX2V4cGFuZHByb2R1Y3Rpb24oIHByb2R1Y3Rpb25zW2tleV0gKSApIF0gO1xufVxuXG5mdW5jdGlvbiogX2V4cGFuZG9iamVjdCAoIG9iamVjdCApIHtcblx0Zm9yICggY29uc3Qgbm9udGVybWluYWwgaW4gb2JqZWN0ICkgeWllbGQgWyBub250ZXJtaW5hbCAsIG5ldyBNYXAoIF9leHBhbmRwcm9kdWN0aW9ucyggb2JqZWN0W25vbnRlcm1pbmFsXSApICkgXSA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZG9iamVjdCAoIG9iamVjdCApIHtcblx0cmV0dXJuIG5ldyBNYXAoIF9leHBhbmRvYmplY3QoIG9iamVjdCApICkgO1xufVxuIl19