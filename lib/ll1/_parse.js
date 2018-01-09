'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _parse;

var _nextchild2 = require('./_nextchild');

var _nextchild3 = _interopRequireDefault(_nextchild2);

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
			children.push((0, _nextchild3.default)(eof, productions, table, stream, x));
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
		'production': {
			'id': productionid,
			rule: rule
		},
		children: children
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlLmpzIl0sIm5hbWVzIjpbIl9wYXJzZSIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFibGUiLCJydWxlIiwic3RyZWFtIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uaWQiLCJjaGlsZHJlbiIsIngiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFVd0JBLE07O0FBVnhCOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxNQUFULENBQWtCQyxHQUFsQixFQUF3QkMsV0FBeEIsRUFBc0NDLEtBQXRDLEVBQThDQyxJQUE5QyxFQUFxREMsTUFBckQsRUFBOERDLFdBQTlELEVBQTRFQyxZQUE1RSxFQUEyRjs7QUFFekcsS0FBTUMsV0FBVyxFQUFqQjs7QUFGeUc7QUFBQTtBQUFBOztBQUFBO0FBSXpHLHVCQUFnQkosSUFBaEI7QUFBQSxPQUFXSyxDQUFYO0FBQXNCRCxZQUFTRSxJQUFULENBQWMseUJBQVdULEdBQVgsRUFBZ0JDLFdBQWhCLEVBQTZCQyxLQUE3QixFQUFvQ0UsTUFBcEMsRUFBNENJLENBQTVDLENBQWQ7QUFBdEI7QUFKeUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNekcsUUFBTztBQUNOLFVBQVMsTUFESDtBQUVOSCwwQkFGTTtBQUdOLGdCQUFlO0FBQ2QsU0FBT0MsWUFETztBQUVkSDtBQUZjLEdBSFQ7QUFPTkk7QUFQTSxFQUFQO0FBVUEiLCJmaWxlIjoiX3BhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9uZXh0Y2hpbGQgZnJvbSAnLi9fbmV4dGNoaWxkJyA7XG5cbi8qKlxuICogVGFibGUtZHJpdmVuIHByZWRpY3RpdmUgcGFyc2luZy5cbiAqXG4gKiBAcGFyYW0gdGFibGVcbiAqIEBwYXJhbSBydWxlXG4gKiBAcGFyYW0gc3RyZWFtXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wYXJzZSAoIGVvZiAsIHByb2R1Y3Rpb25zICwgdGFibGUgLCBydWxlICwgc3RyZWFtICwgbm9udGVybWluYWwgLCBwcm9kdWN0aW9uaWQgKSB7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHggb2YgcnVsZSkgY2hpbGRyZW4ucHVzaChfbmV4dGNoaWxkKGVvZiwgcHJvZHVjdGlvbnMsIHRhYmxlLCBzdHJlYW0sIHgpKSA7XG5cblx0cmV0dXJuIHtcblx0XHQndHlwZScgOiAnbm9kZScgLFxuXHRcdG5vbnRlcm1pbmFsICxcblx0XHQncHJvZHVjdGlvbicgOiB7XG5cdFx0XHQnaWQnIDogcHJvZHVjdGlvbmlkICxcblx0XHRcdHJ1bGUgLFxuXHRcdH0gLFxuXHRcdGNoaWxkcmVuXG5cdH0gO1xuXG59XG4iXX0=