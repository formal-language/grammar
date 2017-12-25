'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = first;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _EW = require('./EW');

var _EW2 = _interopRequireDefault(_EW);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate FIRST set for any rule given the FIRST sets for the nonterminals.
 *
 * @param {Array} FIRST
 * @param {Array} rule
 * @returns {Set}
 */
function first(FIRST, rule) {

	var terminals = new Set();
	var read = true;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = rule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var x = _step.value;

			if (!read) break;read = false;
			if (typeof x === 'string') {
				terminals.add(x);
				break;
			}
			(0, _util.setaddall)(terminals, (0, _jsItertools.filter)(function (y) {
				return y !== _EW2.default;
			}, FIRST[x]));
			read |= (0, _jsItertools.any)((0, _jsItertools.map)(function (y) {
				return y === _EW2.default;
			}, FIRST[x]));
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

	if (read) terminals.add(_EW2.default);

	return terminals;
}

///**
// * Computes FIRST table for grammar entire rules. Needed?
// *
// * @param _FIRST
// * @param grammar
// * @returns {undefined}
// */
//function __first ( _FIRST , grammar ) {

//const F = [];

//for (const unit of grammar) {

//const forrules = [];

//for (const rule of unit) {
//const f = first( _FIRST , rule);
//forrules.push(f);
//}

//F.push(forrules);
//}

//return F;

//}


///**
//* Computes dependency graph for faster updates. Needed?
//*
//* @param grammar
//* @returns {undefined}
//*/
//function getfirstgraph ( grammar ) {

//const n = grammar.length;

//const graph = [];

//for (let i = 0; i < n; ++i) graph.push(new Set());

//for (let i = 0; i < n; ++i) {
//const rules = grammar[i];
//for ( const rule of rules ) {
//for ( const x of rule ) {
//if (typeof x === 'string') break;
//graph[x].add(i);
//}
//}
//}

//return graph;

//}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZmlyc3QuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJGSVJTVCIsInJ1bGUiLCJ0ZXJtaW5hbHMiLCJTZXQiLCJyZWFkIiwieCIsImFkZCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWF3QkEsSzs7QUFieEI7O0FBRUE7O0FBRUE7Ozs7OztBQUVBOzs7Ozs7O0FBT2UsU0FBU0EsS0FBVCxDQUFpQkMsS0FBakIsRUFBeUJDLElBQXpCLEVBQWdDOztBQUU5QyxLQUFNQyxZQUFZLElBQUlDLEdBQUosRUFBbEI7QUFDQSxLQUFJQyxPQUFPLElBQVg7QUFIOEM7QUFBQTtBQUFBOztBQUFBO0FBSTlDLHVCQUFnQkgsSUFBaEIsOEhBQXNCO0FBQUEsT0FBWEksQ0FBVzs7QUFDckIsT0FBSSxDQUFDRCxJQUFMLEVBQVcsTUFBT0EsT0FBTyxLQUFQO0FBQ2xCLE9BQUksT0FBT0MsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQzFCSCxjQUFVSSxHQUFWLENBQWNELENBQWQ7QUFDQTtBQUNBO0FBQ0Qsd0JBQVVILFNBQVYsRUFBcUIseUJBQU87QUFBQSxXQUFLSyxrQkFBTDtBQUFBLElBQVAsRUFBc0JQLE1BQU1LLENBQU4sQ0FBdEIsQ0FBckI7QUFDQUQsV0FBUSxzQkFBSSxzQkFBSTtBQUFBLFdBQUtHLGtCQUFMO0FBQUEsSUFBSixFQUFtQlAsTUFBTUssQ0FBTixDQUFuQixDQUFKLENBQVI7QUFDQTtBQVo2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWM5QyxLQUFJRCxJQUFKLEVBQVVGLFVBQVVJLEdBQVY7O0FBRVYsUUFBT0osU0FBUDtBQUVBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7O0FBRUE7O0FBRUM7O0FBRUE7QUFDQztBQUNBO0FBQ0Q7O0FBRUE7QUFDRDs7QUFFQTs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNBO0FBQ0M7QUFDQztBQUNBO0FBQ0Q7QUFDRDtBQUNEOztBQUVBOztBQUVEIiwiZmlsZSI6ImZpcnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwICwgZmlsdGVyICwgYW55IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgeyBzZXRhZGRhbGwgfSBmcm9tICcuLi91dGlsJyA7XG5cbmltcG9ydCBFVyBmcm9tICcuL0VXJztcblxuLyoqXG4gKiBHZW5lcmF0ZSBGSVJTVCBzZXQgZm9yIGFueSBydWxlIGdpdmVuIHRoZSBGSVJTVCBzZXRzIGZvciB0aGUgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IEZJUlNUXG4gKiBAcGFyYW0ge0FycmF5fSBydWxlXG4gKiBAcmV0dXJucyB7U2V0fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaXJzdCAoIEZJUlNUICwgcnVsZSApIHtcblxuXHRjb25zdCB0ZXJtaW5hbHMgPSBuZXcgU2V0KCk7XG5cdGxldCByZWFkID0gdHJ1ZTtcblx0Zm9yIChjb25zdCB4IG9mIHJ1bGUpIHtcblx0XHRpZiAoIXJlYWQpIGJyZWFrOyByZWFkID0gZmFsc2U7XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGVybWluYWxzLmFkZCh4KTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRzZXRhZGRhbGwodGVybWluYWxzLCBmaWx0ZXIoeSA9PiB5ICE9PSBFVywgRklSU1RbeF0pKTtcblx0XHRyZWFkIHw9IGFueShtYXAoeSA9PiB5ID09PSBFVywgRklSU1RbeF0pKTtcblx0fVxuXG5cdGlmIChyZWFkKSB0ZXJtaW5hbHMuYWRkKEVXKTtcblxuXHRyZXR1cm4gdGVybWluYWxzO1xuXG59XG5cbi8vLyoqXG4vLyAqIENvbXB1dGVzIEZJUlNUIHRhYmxlIGZvciBncmFtbWFyIGVudGlyZSBydWxlcy4gTmVlZGVkP1xuLy8gKlxuLy8gKiBAcGFyYW0gX0ZJUlNUXG4vLyAqIEBwYXJhbSBncmFtbWFyXG4vLyAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4vLyAqL1xuLy9mdW5jdGlvbiBfX2ZpcnN0ICggX0ZJUlNUICwgZ3JhbW1hciApIHtcblxuXHQvL2NvbnN0IEYgPSBbXTtcblxuXHQvL2ZvciAoY29uc3QgdW5pdCBvZiBncmFtbWFyKSB7XG5cblx0XHQvL2NvbnN0IGZvcnJ1bGVzID0gW107XG5cblx0XHQvL2ZvciAoY29uc3QgcnVsZSBvZiB1bml0KSB7XG5cdFx0XHQvL2NvbnN0IGYgPSBmaXJzdCggX0ZJUlNUICwgcnVsZSk7XG5cdFx0XHQvL2ZvcnJ1bGVzLnB1c2goZik7XG5cdFx0Ly99XG5cblx0XHQvL0YucHVzaChmb3JydWxlcyk7XG5cdC8vfVxuXG5cdC8vcmV0dXJuIEY7XG5cbi8vfVxuXG5cbi8vLyoqXG4vLyogQ29tcHV0ZXMgZGVwZW5kZW5jeSBncmFwaCBmb3IgZmFzdGVyIHVwZGF0ZXMuIE5lZWRlZD9cbi8vKlxuLy8qIEBwYXJhbSBncmFtbWFyXG4vLyogQHJldHVybnMge3VuZGVmaW5lZH1cbi8vKi9cbi8vZnVuY3Rpb24gZ2V0Zmlyc3RncmFwaCAoIGdyYW1tYXIgKSB7XG5cblx0Ly9jb25zdCBuID0gZ3JhbW1hci5sZW5ndGg7XG5cblx0Ly9jb25zdCBncmFwaCA9IFtdO1xuXG5cdC8vZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIGdyYXBoLnB1c2gobmV3IFNldCgpKTtcblxuXHQvL2ZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG5cdFx0Ly9jb25zdCBydWxlcyA9IGdyYW1tYXJbaV07XG5cdFx0Ly9mb3IgKCBjb25zdCBydWxlIG9mIHJ1bGVzICkge1xuXHRcdFx0Ly9mb3IgKCBjb25zdCB4IG9mIHJ1bGUgKSB7XG5cdFx0XHRcdC8vaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykgYnJlYWs7XG5cdFx0XHRcdC8vZ3JhcGhbeF0uYWRkKGkpO1xuXHRcdFx0Ly99XG5cdFx0Ly99XG5cdC8vfVxuXG5cdC8vcmV0dXJuIGdyYXBoO1xuXG4vL31cbiJdfQ==