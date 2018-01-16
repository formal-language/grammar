'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parse;

var _jsItertools = require('@aureooms/js-itertools');

var _parse_lazy2 = require('./_parse_lazy');

var _parse_lazy3 = _interopRequireDefault(_parse_lazy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(start, eof, productions, table, stream) {
	var root = [{ 'type': 'node', 'nonterminal': start }, { 'type': 'leaf', 'terminal': eof }];
	return (0, _jsItertools.next)((0, _parse_lazy3.default)(eof, productions, table, root, stream, -1, 0).children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFibGUiLCJzdHJlYW0iLCJyb290IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUl3QkEsSzs7QUFKeEI7O0FBRUE7Ozs7OztBQUVlLFNBQVNBLEtBQVQsQ0FBaUJDLEtBQWpCLEVBQXlCQyxHQUF6QixFQUErQkMsV0FBL0IsRUFBNENDLEtBQTVDLEVBQW9EQyxNQUFwRCxFQUE2RDtBQUMzRSxLQUFNQyxPQUFPLENBQ1osRUFBRSxRQUFTLE1BQVgsRUFBb0IsZUFBZ0JMLEtBQXBDLEVBRFksRUFFWixFQUFFLFFBQVMsTUFBWCxFQUFvQixZQUFhQyxHQUFqQyxFQUZZLENBQWI7QUFJQSxRQUFPLHVCQUFNLDBCQUFhQSxHQUFiLEVBQWtCQyxXQUFsQixFQUErQkMsS0FBL0IsRUFBdUNFLElBQXZDLEVBQThDRCxNQUE5QyxFQUF1RCxDQUFDLENBQXhELEVBQTRELENBQTVELEVBQWdFRSxRQUF0RSxDQUFQO0FBQ0EiLCJmaWxlIjoicGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXh0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgX3BhcnNlX2xhenkgZnJvbSAnLi9fcGFyc2VfbGF6eScgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZSAoIHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMsIHRhYmxlICwgc3RyZWFtICkge1xuXHRjb25zdCByb290ID0gW1xuXHRcdHsgJ3R5cGUnIDogJ25vZGUnICwgJ25vbnRlcm1pbmFsJyA6IHN0YXJ0IH0gLFxuXHRcdHsgJ3R5cGUnIDogJ2xlYWYnICwgJ3Rlcm1pbmFsJyA6IGVvZiB9ICxcblx0XSA7XG5cdHJldHVybiBuZXh0KCBfcGFyc2VfbGF6eSggZW9mLCBwcm9kdWN0aW9ucywgdGFibGUgLCByb290ICwgc3RyZWFtICwgLTEgLCAwICkuY2hpbGRyZW4gKSA7XG59XG4iXX0=