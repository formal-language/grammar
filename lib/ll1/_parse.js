'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _parse;

var _EOF = require('./EOF');

var _EOF2 = _interopRequireDefault(_EOF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Table-driven predictive parsing.
 *
 * @param table
 * @param rule
 * @param stream
 * @returns {Array}
 */
function _parse(grammar, table, rule, stream, nonterminal, productionid) {

	var children = [];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;


			var lookahead = stream.read();

			var t = lookahead === stream.eof ? _EOF2.default : lookahead;

			if (typeof x === 'string') {
				if (t === x) {
					children.push(x);continue;
				} else throw new Error('Syntax error at token \'' + t + '\', expected \'' + x + '\'.');
			}

			stream.unread(t);

			var next = table[x].get(t);

			if (next === undefined) throw new Error('Syntax error at token \'' + t + '\', expected one of \'' + [].concat(_toConsumableArray(table[x].keys())) + '\'.');else children.push(_parse(grammar, table, grammar[x][next], stream, x, next));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX3BhcnNlLmpzIl0sIm5hbWVzIjpbIl9wYXJzZSIsImdyYW1tYXIiLCJ0YWJsZSIsInJ1bGUiLCJzdHJlYW0iLCJub250ZXJtaW5hbCIsInByb2R1Y3Rpb25pZCIsImNoaWxkcmVuIiwieCIsImxvb2thaGVhZCIsInJlYWQiLCJ0IiwiZW9mIiwicHVzaCIsIkVycm9yIiwidW5yZWFkIiwibmV4dCIsImdldCIsInVuZGVmaW5lZCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVV3QkEsTTs7QUFWeEI7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUWUsU0FBU0EsTUFBVCxDQUFrQkMsT0FBbEIsRUFBNEJDLEtBQTVCLEVBQW9DQyxJQUFwQyxFQUEyQ0MsTUFBM0MsRUFBb0RDLFdBQXBELEVBQWtFQyxZQUFsRSxFQUFpRjs7QUFFL0YsS0FBTUMsV0FBVyxFQUFqQjs7QUFGK0Y7QUFBQTtBQUFBOztBQUFBO0FBSS9GLHVCQUFnQkosSUFBaEIsOEhBQXNCO0FBQUEsT0FBWEssQ0FBVzs7O0FBRXJCLE9BQU1DLFlBQVlMLE9BQU9NLElBQVAsRUFBbEI7O0FBRUEsT0FBTUMsSUFBSUYsY0FBY0wsT0FBT1EsR0FBckIsbUJBQWlDSCxTQUEzQzs7QUFFQSxPQUFJLE9BQU9ELENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUMxQixRQUFJRyxNQUFNSCxDQUFWLEVBQWE7QUFBRUQsY0FBU00sSUFBVCxDQUFjTCxDQUFkLEVBQWtCO0FBQVcsS0FBNUMsTUFDSyxNQUFNLElBQUlNLEtBQUosOEJBQW9DSCxDQUFwQyx1QkFBcURILENBQXJELFNBQU47QUFDTDs7QUFFREosVUFBT1csTUFBUCxDQUFjSixDQUFkOztBQUVBLE9BQU1LLE9BQU9kLE1BQU1NLENBQU4sRUFBU1MsR0FBVCxDQUFhTixDQUFiLENBQWI7O0FBRUEsT0FBS0ssU0FBU0UsU0FBZCxFQUEwQixNQUFNLElBQUlKLEtBQUosOEJBQW9DSCxDQUFwQywyREFBZ0VULE1BQU1NLENBQU4sRUFBU1csSUFBVCxFQUFoRSxXQUFOLENBQTFCLEtBRUtaLFNBQVNNLElBQVQsQ0FBY2IsT0FBT0MsT0FBUCxFQUFnQkMsS0FBaEIsRUFBdUJELFFBQVFPLENBQVIsRUFBV1EsSUFBWCxDQUF2QixFQUF5Q1osTUFBekMsRUFBa0RJLENBQWxELEVBQXNEUSxJQUF0RCxDQUFkO0FBRUw7QUF2QjhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeUIvRixRQUFPO0FBQ05YLDBCQURNO0FBRU4sZ0JBQWU7QUFDZCxTQUFPQyxZQURPO0FBRWRIO0FBRmMsR0FGVDtBQU1OSTtBQU5NLEVBQVA7QUFTQSIsImZpbGUiOiJfcGFyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRU9GIGZyb20gJy4vRU9GJyA7XG5cbi8qKlxuICogVGFibGUtZHJpdmVuIHByZWRpY3RpdmUgcGFyc2luZy5cbiAqXG4gKiBAcGFyYW0gdGFibGVcbiAqIEBwYXJhbSBydWxlXG4gKiBAcGFyYW0gc3RyZWFtXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wYXJzZSAoIGdyYW1tYXIgLCB0YWJsZSAsIHJ1bGUgLCBzdHJlYW0gLCBub250ZXJtaW5hbCAsIHByb2R1Y3Rpb25pZCApIHtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXG5cdGZvciAoY29uc3QgeCBvZiBydWxlKSB7XG5cblx0XHRjb25zdCBsb29rYWhlYWQgPSBzdHJlYW0ucmVhZCgpO1xuXG5cdFx0Y29uc3QgdCA9IGxvb2thaGVhZCA9PT0gc3RyZWFtLmVvZiA/IEVPRiA6IGxvb2thaGVhZCA7XG5cblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRpZiAodCA9PT0geCkgeyBjaGlsZHJlbi5wdXNoKHgpOyBjb250aW51ZTsgfVxuXHRcdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoYFN5bnRheCBlcnJvciBhdCB0b2tlbiAnJHt0fScsIGV4cGVjdGVkICcke3h9Jy5gKSA7XG5cdFx0fVxuXG5cdFx0c3RyZWFtLnVucmVhZCh0KTtcblxuXHRcdGNvbnN0IG5leHQgPSB0YWJsZVt4XS5nZXQodCkgO1xuXG5cdFx0aWYgKCBuZXh0ID09PSB1bmRlZmluZWQgKSB0aHJvdyBuZXcgRXJyb3IoYFN5bnRheCBlcnJvciBhdCB0b2tlbiAnJHt0fScsIGV4cGVjdGVkIG9uZSBvZiAnJHtbLi4udGFibGVbeF0ua2V5cygpXX0nLmApIDtcblxuXHRcdGVsc2UgY2hpbGRyZW4ucHVzaChfcGFyc2UoZ3JhbW1hciwgdGFibGUsIGdyYW1tYXJbeF1bbmV4dF0sIHN0cmVhbSAsIHggLCBuZXh0KSk7XG5cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bm9udGVybWluYWwgLFxuXHRcdCdwcm9kdWN0aW9uJyA6IHtcblx0XHRcdCdpZCcgOiBwcm9kdWN0aW9uaWQgLFxuXHRcdFx0cnVsZSAsXG5cdFx0fSAsXG5cdFx0Y2hpbGRyZW5cblx0fSA7XG5cbn1cbiJdfQ==