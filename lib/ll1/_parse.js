'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _parse;

var _children_next2 = require('./_children_next');

var _children_next3 = _interopRequireDefault(_children_next2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Table-driven predictive parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
function _parse(eof, productions, table, rule, stream, nonterminal, productionid) {

	var children = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;
			children.push((0, _children_next3.default)(eof, productions, table, stream, x));
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return {
		'type': 'node',
		nonterminal: nonterminal,
		'production': productionid,
		children: children
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlLmpzIl0sIm5hbWVzIjpbIl9wYXJzZSIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFibGUiLCJydWxlIiwic3RyZWFtIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uaWQiLCJjaGlsZHJlbiIsIngiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFVd0JBLE07O0FBVnhCOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxNQUFULENBQWtCQyxHQUFsQixFQUF3QkMsV0FBeEIsRUFBc0NDLEtBQXRDLEVBQThDQyxJQUE5QyxFQUFxREMsTUFBckQsRUFBOERDLFdBQTlELEVBQTRFQyxZQUE1RSxFQUEyRjs7QUFFekcsS0FBTUMsV0FBVyxFQUFqQjs7QUFGeUc7QUFBQTtBQUFBOztBQUFBO0FBSXpHLHVCQUFnQkosSUFBaEI7QUFBQSxPQUFXSyxDQUFYO0FBQXNCRCxZQUFTRSxJQUFULENBQWMsNkJBQWVULEdBQWYsRUFBb0JDLFdBQXBCLEVBQWlDQyxLQUFqQyxFQUF3Q0UsTUFBeEMsRUFBZ0RJLENBQWhELENBQWQ7QUFBdEI7QUFKeUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNekcsUUFBTztBQUNOLFVBQVMsTUFESDtBQUVOSCwwQkFGTTtBQUdOLGdCQUFlQyxZQUhUO0FBSU5DO0FBSk0sRUFBUDtBQU9BIiwiZmlsZSI6Il9wYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfY2hpbGRyZW5fbmV4dCBmcm9tICcuL19jaGlsZHJlbl9uZXh0JyA7XG5cbi8qKlxuICogVGFibGUtZHJpdmVuIHByZWRpY3RpdmUgcGFyc2luZy5cbiAqXG4gKiBAcGFyYW0gdGFibGVcbiAqIEBwYXJhbSBydWxlXG4gKiBAcGFyYW0gc3RyZWFtXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wYXJzZSAoIGVvZiAsIHByb2R1Y3Rpb25zICwgdGFibGUgLCBydWxlICwgc3RyZWFtICwgbm9udGVybWluYWwgLCBwcm9kdWN0aW9uaWQgKSB7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHggb2YgcnVsZSkgY2hpbGRyZW4ucHVzaChfY2hpbGRyZW5fbmV4dChlb2YsIHByb2R1Y3Rpb25zLCB0YWJsZSwgc3RyZWFtLCB4KSkgO1xuXG5cdHJldHVybiB7XG5cdFx0J3R5cGUnIDogJ25vZGUnICxcblx0XHRub250ZXJtaW5hbCAsXG5cdFx0J3Byb2R1Y3Rpb24nIDogcHJvZHVjdGlvbmlkICxcblx0XHRjaGlsZHJlblxuXHR9IDtcblxufVxuIl19