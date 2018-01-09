'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _parse_lazy;

var _nextchild_lazy2 = require('./_nextchild_lazy');

var _nextchild_lazy3 = _interopRequireDefault(_nextchild_lazy2);

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

	var children = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;
			children.push((0, _nextchild_lazy3.default)(eof, grammar, table, stream, x));
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
		nonterminal: nonterminal,
		'production': {
			'id': productionid,
			rule: rule
		},
		children: children
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlX2xhenkuanMiXSwibmFtZXMiOlsiX3BhcnNlX2xhenkiLCJlb2YiLCJncmFtbWFyIiwidGFibGUiLCJydWxlIiwic3RyZWFtIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uaWQiLCJjaGlsZHJlbiIsIngiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFVd0JBLFc7O0FBVnhCOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxXQUFULENBQXVCQyxHQUF2QixFQUE2QkMsT0FBN0IsRUFBdUNDLEtBQXZDLEVBQStDQyxJQUEvQyxFQUFzREMsTUFBdEQsRUFBK0RDLFdBQS9ELEVBQTZFQyxZQUE3RSxFQUE0Rjs7QUFFMUcsS0FBTUMsV0FBVyxFQUFqQjs7QUFGMEc7QUFBQTtBQUFBOztBQUFBO0FBSTFHLHVCQUFnQkosSUFBaEI7QUFBQSxPQUFXSyxDQUFYO0FBQXNCRCxZQUFTRSxJQUFULENBQWMsOEJBQWdCVCxHQUFoQixFQUFxQkMsT0FBckIsRUFBOEJDLEtBQTlCLEVBQXFDRSxNQUFyQyxFQUE2Q0ksQ0FBN0MsQ0FBZDtBQUF0QjtBQUowRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU0xRyxRQUFPO0FBQ05ILDBCQURNO0FBRU4sZ0JBQWU7QUFDZCxTQUFPQyxZQURPO0FBRWRIO0FBRmMsR0FGVDtBQU1OSTtBQU5NLEVBQVA7QUFTQSIsImZpbGUiOiJfcGFyc2VfbGF6eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfbmV4dGNoaWxkX2xhenkgZnJvbSAnLi9fbmV4dGNoaWxkX2xhenknIDtcblxuLyoqXG4gKiBUYWJsZS1kcml2ZW4gcHJlZGljdGl2ZSBsYXp5IHBhcnNpbmcuXG4gKlxuICogQHBhcmFtIHRhYmxlXG4gKiBAcGFyYW0gcnVsZVxuICogQHBhcmFtIHN0cmVhbVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcGFyc2VfbGF6eSAoIGVvZiAsIGdyYW1tYXIgLCB0YWJsZSAsIHJ1bGUgLCBzdHJlYW0gLCBub250ZXJtaW5hbCAsIHByb2R1Y3Rpb25pZCApIHtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXG5cdGZvciAoY29uc3QgeCBvZiBydWxlKSBjaGlsZHJlbi5wdXNoKF9uZXh0Y2hpbGRfbGF6eShlb2YsIGdyYW1tYXIsIHRhYmxlLCBzdHJlYW0sIHgpKSA7XG5cblx0cmV0dXJuIHtcblx0XHRub250ZXJtaW5hbCAsXG5cdFx0J3Byb2R1Y3Rpb24nIDoge1xuXHRcdFx0J2lkJyA6IHByb2R1Y3Rpb25pZCAsXG5cdFx0XHRydWxlICxcblx0XHR9ICxcblx0XHRjaGlsZHJlblxuXHR9IDtcblxufVxuIl19