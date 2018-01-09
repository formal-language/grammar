'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = first;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _grammar = require('../grammar');

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
			if (x.type === 'leaf') {
				terminals.add(x.terminal);
				break;
			}
			(0, _util.setaddall)(terminals, (0, _jsItertools.filter)(function (y) {
				return y !== _grammar.EW;
			}, FIRST.get(x.nonterminal)));
			read |= (0, _jsItertools.any)((0, _jsItertools.map)(function (y) {
				return y === _grammar.EW;
			}, FIRST.get(x.nonterminal)));
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

	if (read) terminals.add(_grammar.EW);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZmlyc3QuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJGSVJTVCIsInJ1bGUiLCJ0ZXJtaW5hbHMiLCJTZXQiLCJyZWFkIiwieCIsInR5cGUiLCJhZGQiLCJ0ZXJtaW5hbCIsInkiLCJnZXQiLCJub250ZXJtaW5hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBYXdCQSxLOztBQWJ4Qjs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9lLFNBQVNBLEtBQVQsQ0FBaUJDLEtBQWpCLEVBQXlCQyxJQUF6QixFQUFnQzs7QUFFOUMsS0FBTUMsWUFBWSxJQUFJQyxHQUFKLEVBQWxCO0FBQ0EsS0FBSUMsT0FBTyxJQUFYO0FBSDhDO0FBQUE7QUFBQTs7QUFBQTtBQUk5Qyx1QkFBZ0JILElBQWhCLDhIQUFzQjtBQUFBLE9BQVhJLENBQVc7O0FBQ3JCLE9BQUksQ0FBQ0QsSUFBTCxFQUFXLE1BQU9BLE9BQU8sS0FBUDtBQUNsQixPQUFJQyxFQUFFQyxJQUFGLEtBQVcsTUFBZixFQUF1QjtBQUN0QkosY0FBVUssR0FBVixDQUFjRixFQUFFRyxRQUFoQjtBQUNBO0FBQ0E7QUFDRCx3QkFBVU4sU0FBVixFQUFxQix5QkFBTztBQUFBLFdBQUtPLGlCQUFMO0FBQUEsSUFBUCxFQUFzQlQsTUFBTVUsR0FBTixDQUFVTCxFQUFFTSxXQUFaLENBQXRCLENBQXJCO0FBQ0FQLFdBQVEsc0JBQUksc0JBQUk7QUFBQSxXQUFLSyxpQkFBTDtBQUFBLElBQUosRUFBbUJULE1BQU1VLEdBQU4sQ0FBVUwsRUFBRU0sV0FBWixDQUFuQixDQUFKLENBQVI7QUFDQTtBQVo2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWM5QyxLQUFJUCxJQUFKLEVBQVVGLFVBQVVLLEdBQVY7O0FBRVYsUUFBT0wsU0FBUDtBQUVBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7O0FBRUE7O0FBRUM7O0FBRUE7QUFDQztBQUNBO0FBQ0Q7O0FBRUE7QUFDRDs7QUFFQTs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNBO0FBQ0M7QUFDQztBQUNBO0FBQ0Q7QUFDRDtBQUNEOztBQUVBOztBQUVEIiwiZmlsZSI6ImZpcnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwICwgZmlsdGVyICwgYW55IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgeyBzZXRhZGRhbGwgfSBmcm9tICcuLi91dGlsJyA7XG5cbmltcG9ydCB7IEVXIH0gZnJvbSAnLi4vZ3JhbW1hcic7XG5cbi8qKlxuICogR2VuZXJhdGUgRklSU1Qgc2V0IGZvciBhbnkgcnVsZSBnaXZlbiB0aGUgRklSU1Qgc2V0cyBmb3IgdGhlIG5vbnRlcm1pbmFscy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBGSVJTVFxuICogQHBhcmFtIHtBcnJheX0gcnVsZVxuICogQHJldHVybnMge1NldH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlyc3QgKCBGSVJTVCAsIHJ1bGUgKSB7XG5cblx0Y29uc3QgdGVybWluYWxzID0gbmV3IFNldCgpO1xuXHRsZXQgcmVhZCA9IHRydWU7XG5cdGZvciAoY29uc3QgeCBvZiBydWxlKSB7XG5cdFx0aWYgKCFyZWFkKSBicmVhazsgcmVhZCA9IGZhbHNlO1xuXHRcdGlmICh4LnR5cGUgPT09ICdsZWFmJykge1xuXHRcdFx0dGVybWluYWxzLmFkZCh4LnRlcm1pbmFsKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRzZXRhZGRhbGwodGVybWluYWxzLCBmaWx0ZXIoeSA9PiB5ICE9PSBFVywgRklSU1QuZ2V0KHgubm9udGVybWluYWwpKSk7XG5cdFx0cmVhZCB8PSBhbnkobWFwKHkgPT4geSA9PT0gRVcsIEZJUlNULmdldCh4Lm5vbnRlcm1pbmFsKSkpO1xuXHR9XG5cblx0aWYgKHJlYWQpIHRlcm1pbmFscy5hZGQoRVcpO1xuXG5cdHJldHVybiB0ZXJtaW5hbHM7XG5cbn1cblxuLy8vKipcbi8vICogQ29tcHV0ZXMgRklSU1QgdGFibGUgZm9yIGdyYW1tYXIgZW50aXJlIHJ1bGVzLiBOZWVkZWQ/XG4vLyAqXG4vLyAqIEBwYXJhbSBfRklSU1Rcbi8vICogQHBhcmFtIGdyYW1tYXJcbi8vICogQHJldHVybnMge3VuZGVmaW5lZH1cbi8vICovXG4vL2Z1bmN0aW9uIF9fZmlyc3QgKCBfRklSU1QgLCBncmFtbWFyICkge1xuXG5cdC8vY29uc3QgRiA9IFtdO1xuXG5cdC8vZm9yIChjb25zdCB1bml0IG9mIGdyYW1tYXIpIHtcblxuXHRcdC8vY29uc3QgZm9ycnVsZXMgPSBbXTtcblxuXHRcdC8vZm9yIChjb25zdCBydWxlIG9mIHVuaXQpIHtcblx0XHRcdC8vY29uc3QgZiA9IGZpcnN0KCBfRklSU1QgLCBydWxlKTtcblx0XHRcdC8vZm9ycnVsZXMucHVzaChmKTtcblx0XHQvL31cblxuXHRcdC8vRi5wdXNoKGZvcnJ1bGVzKTtcblx0Ly99XG5cblx0Ly9yZXR1cm4gRjtcblxuLy99XG5cblxuLy8vKipcbi8vKiBDb21wdXRlcyBkZXBlbmRlbmN5IGdyYXBoIGZvciBmYXN0ZXIgdXBkYXRlcy4gTmVlZGVkP1xuLy8qXG4vLyogQHBhcmFtIGdyYW1tYXJcbi8vKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuLy8qL1xuLy9mdW5jdGlvbiBnZXRmaXJzdGdyYXBoICggZ3JhbW1hciApIHtcblxuXHQvL2NvbnN0IG4gPSBncmFtbWFyLmxlbmd0aDtcblxuXHQvL2NvbnN0IGdyYXBoID0gW107XG5cblx0Ly9mb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgZ3JhcGgucHVzaChuZXcgU2V0KCkpO1xuXG5cdC8vZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcblx0XHQvL2NvbnN0IHJ1bGVzID0gZ3JhbW1hcltpXTtcblx0XHQvL2ZvciAoIGNvbnN0IHJ1bGUgb2YgcnVsZXMgKSB7XG5cdFx0XHQvL2ZvciAoIGNvbnN0IHggb2YgcnVsZSApIHtcblx0XHRcdFx0Ly9pZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSBicmVhaztcblx0XHRcdFx0Ly9ncmFwaFt4XS5hZGQoaSk7XG5cdFx0XHQvL31cblx0XHQvL31cblx0Ly99XG5cblx0Ly9yZXR1cm4gZ3JhcGg7XG5cbi8vfVxuIl19