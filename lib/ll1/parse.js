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
	return (0, _parse3.default)(eof, productions, table, root, stream, -1, 0).children[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFibGUiLCJzdHJlYW0iLCJyb290IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsSzs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLEtBQVQsQ0FBaUJDLEtBQWpCLEVBQXlCQyxHQUF6QixFQUErQkMsV0FBL0IsRUFBNENDLEtBQTVDLEVBQW9EQyxNQUFwRCxFQUE2RDtBQUMzRSxLQUFNQyxPQUFPLENBQ1osRUFBRSxRQUFTLE1BQVgsRUFBb0IsZUFBZ0JMLEtBQXBDLEVBRFksRUFFWixFQUFFLFFBQVMsTUFBWCxFQUFvQixZQUFhQyxHQUFqQyxFQUZZLENBQWI7QUFJQSxRQUFPLHFCQUFRQSxHQUFSLEVBQWFDLFdBQWIsRUFBMEJDLEtBQTFCLEVBQWtDRSxJQUFsQyxFQUF5Q0QsTUFBekMsRUFBa0QsQ0FBQyxDQUFuRCxFQUF1RCxDQUF2RCxFQUEyREUsUUFBM0QsQ0FBb0UsQ0FBcEUsQ0FBUDtBQUNBIiwiZmlsZSI6InBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9wYXJzZSBmcm9tICcuL19wYXJzZScgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZSAoIHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMsIHRhYmxlICwgc3RyZWFtICkge1xuXHRjb25zdCByb290ID0gW1xuXHRcdHsgJ3R5cGUnIDogJ25vZGUnICwgJ25vbnRlcm1pbmFsJyA6IHN0YXJ0IH0gLFxuXHRcdHsgJ3R5cGUnIDogJ2xlYWYnICwgJ3Rlcm1pbmFsJyA6IGVvZiB9ICxcblx0XSA7XG5cdHJldHVybiBfcGFyc2UoIGVvZiwgcHJvZHVjdGlvbnMsIHRhYmxlICwgcm9vdCAsIHN0cmVhbSAsIC0xICwgMCApLmNoaWxkcmVuWzBdIDtcbn1cbiJdfQ==