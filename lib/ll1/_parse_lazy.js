'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _parse_lazy;

var _jsItertools = require('@aureooms/js-itertools');

var _ast = require('../ast');

var _children_next_lazy2 = require('./_children_next_lazy');

var _children_next_lazy3 = _interopRequireDefault(_children_next_lazy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Table-driven predictive lazy parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
function _parse_lazy(eof, grammar, table, rule, stream, nonterminal, productionid) {

	var shallow_materialize = function shallow_materialize(x) {
		return (0, _children_next_lazy3.default)(eof, grammar, table, stream, x);
	};

	var children = (0, _jsItertools.iter)((0, _ast.cmap)(shallow_materialize, rule));

	return {
		'type': 'node',
		nonterminal: nonterminal,
		'production': productionid,
		children: children
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlX2xhenkuanMiXSwibmFtZXMiOlsiX3BhcnNlX2xhenkiLCJlb2YiLCJncmFtbWFyIiwidGFibGUiLCJydWxlIiwic3RyZWFtIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uaWQiLCJzaGFsbG93X21hdGVyaWFsaXplIiwieCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFhd0JBLFc7O0FBYnhCOztBQUNBOztBQUVBOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxXQUFULENBQXVCQyxHQUF2QixFQUE2QkMsT0FBN0IsRUFBdUNDLEtBQXZDLEVBQStDQyxJQUEvQyxFQUFzREMsTUFBdEQsRUFBK0RDLFdBQS9ELEVBQTZFQyxZQUE3RSxFQUE0Rjs7QUFFMUcsS0FBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0I7QUFBQSxTQUFLLGtDQUFvQlAsR0FBcEIsRUFBeUJDLE9BQXpCLEVBQWtDQyxLQUFsQyxFQUF5Q0UsTUFBekMsRUFBaURJLENBQWpELENBQUw7QUFBQSxFQUE1Qjs7QUFFQSxLQUFNQyxXQUFXLHVCQUFNLGVBQU1GLG1CQUFOLEVBQTRCSixJQUE1QixDQUFOLENBQWpCOztBQUVBLFFBQU87QUFDTixVQUFTLE1BREg7QUFFTkUsMEJBRk07QUFHTixnQkFBZUMsWUFIVDtBQUlORztBQUpNLEVBQVA7QUFPQSIsImZpbGUiOiJfcGFyc2VfbGF6eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBjbWFwIH0gZnJvbSAnLi4vYXN0JyA7XG5cbmltcG9ydCBfY2hpbGRyZW5fbmV4dF9sYXp5IGZyb20gJy4vX2NoaWxkcmVuX25leHRfbGF6eScgO1xuXG4vKipcbiAqIFRhYmxlLWRyaXZlbiBwcmVkaWN0aXZlIGxhenkgcGFyc2luZy5cbiAqXG4gKiBAcGFyYW0gdGFibGVcbiAqIEBwYXJhbSBydWxlXG4gKiBAcGFyYW0gc3RyZWFtXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wYXJzZV9sYXp5ICggZW9mICwgZ3JhbW1hciAsIHRhYmxlICwgcnVsZSAsIHN0cmVhbSAsIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbmlkICkge1xuXG5cdGNvbnN0IHNoYWxsb3dfbWF0ZXJpYWxpemUgPSB4ID0+IF9jaGlsZHJlbl9uZXh0X2xhenkoZW9mLCBncmFtbWFyLCB0YWJsZSwgc3RyZWFtLCB4KSA7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSBpdGVyKCBjbWFwKCBzaGFsbG93X21hdGVyaWFsaXplICwgcnVsZSApICkgO1xuXG5cdHJldHVybiB7XG5cdFx0J3R5cGUnIDogJ25vZGUnICxcblx0XHRub250ZXJtaW5hbCAsXG5cdFx0J3Byb2R1Y3Rpb24nIDogcHJvZHVjdGlvbmlkICxcblx0XHRjaGlsZHJlbiAsXG5cdH0gO1xuXG59XG4iXX0=