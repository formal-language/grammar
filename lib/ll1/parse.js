'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parse;

var _parse2 = require('./_parse');

var _parse3 = _interopRequireDefault(_parse2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(start, eof, productions, table, stream) {
	var root = [{ 'type': 'node', 'nonterminal': start }, { 'type': 'leaf', 'terminal': eof }];
	return (0, _parse3.default)(eof, productions, table, root, stream, -1, 0);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFibGUiLCJzdHJlYW0iLCJyb290Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLEs7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxLQUFULENBQWlCQyxLQUFqQixFQUF5QkMsR0FBekIsRUFBK0JDLFdBQS9CLEVBQTRDQyxLQUE1QyxFQUFvREMsTUFBcEQsRUFBNkQ7QUFDM0UsS0FBTUMsT0FBTyxDQUNaLEVBQUUsUUFBUyxNQUFYLEVBQW9CLGVBQWdCTCxLQUFwQyxFQURZLEVBRVosRUFBRSxRQUFTLE1BQVgsRUFBb0IsWUFBYUMsR0FBakMsRUFGWSxDQUFiO0FBSUEsUUFBTyxxQkFBUUEsR0FBUixFQUFhQyxXQUFiLEVBQTBCQyxLQUExQixFQUFrQ0UsSUFBbEMsRUFBeUNELE1BQXpDLEVBQWtELENBQUMsQ0FBbkQsRUFBdUQsQ0FBdkQsQ0FBUDtBQUNBIiwiZmlsZSI6InBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9wYXJzZSBmcm9tICcuL19wYXJzZScgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZSAoIHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMsIHRhYmxlICwgc3RyZWFtICkge1xuXHRjb25zdCByb290ID0gW1xuXHRcdHsgJ3R5cGUnIDogJ25vZGUnICwgJ25vbnRlcm1pbmFsJyA6IHN0YXJ0IH0gLFxuXHRcdHsgJ3R5cGUnIDogJ2xlYWYnICwgJ3Rlcm1pbmFsJyA6IGVvZiB9ICxcblx0XSA7XG5cdHJldHVybiBfcGFyc2UoIGVvZiwgcHJvZHVjdGlvbnMsIHRhYmxlICwgcm9vdCAsIHN0cmVhbSAsIC0xICwgMCApIDtcbn1cbiJdfQ==