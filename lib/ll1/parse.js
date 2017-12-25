'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parse;

var _EOF = require('./EOF');

var _EOF2 = _interopRequireDefault(_EOF);

var _parse2 = require('./_parse');

var _parse3 = _interopRequireDefault(_parse2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(grammar, table, start, stream) {
	return (0, _parse3.default)(grammar, table, [start, _EOF2.default], stream, -1, 0);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJncmFtbWFyIiwidGFibGUiLCJzdGFydCIsInN0cmVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxLOztBQUh4Qjs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxLQUFULENBQWlCQyxPQUFqQixFQUEwQkMsS0FBMUIsRUFBa0NDLEtBQWxDLEVBQTBDQyxNQUExQyxFQUFtRDtBQUNqRSxRQUFPLHFCQUFRSCxPQUFSLEVBQWlCQyxLQUFqQixFQUF5QixDQUFFQyxLQUFGLGdCQUF6QixFQUEyQ0MsTUFBM0MsRUFBb0QsQ0FBQyxDQUFyRCxFQUF5RCxDQUF6RCxDQUFQO0FBQ0EiLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRU9GIGZyb20gJy4vRU9GJyA7XG5pbXBvcnQgX3BhcnNlIGZyb20gJy4vX3BhcnNlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlICggZ3JhbW1hciwgdGFibGUgLCBzdGFydCAsIHN0cmVhbSApIHtcblx0cmV0dXJuIF9wYXJzZSggZ3JhbW1hciwgdGFibGUgLCBbIHN0YXJ0ICwgRU9GIF0gLCBzdHJlYW0gLCAtMSAsIDAgKSA7XG59XG4iXX0=