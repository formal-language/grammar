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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZmlyc3QuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJGSVJTVCIsInJ1bGUiLCJ0ZXJtaW5hbHMiLCJTZXQiLCJyZWFkIiwieCIsInR5cGUiLCJhZGQiLCJ0ZXJtaW5hbCIsInkiLCJFVyIsImdldCIsIm5vbnRlcm1pbmFsIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFhd0JBLEs7O0FBYnhCOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FBT2UsU0FBU0EsS0FBVCxDQUFpQkMsS0FBakIsRUFBeUJDLElBQXpCLEVBQWdDOztBQUU5QyxLQUFNQyxZQUFZLElBQUlDLEdBQUosRUFBbEI7QUFDQSxLQUFJQyxPQUFPLElBQVg7QUFIOEM7QUFBQTtBQUFBOztBQUFBO0FBSTlDLHVCQUFnQkgsSUFBaEIsOEhBQXNCO0FBQUEsT0FBWEksQ0FBVzs7QUFDckIsT0FBSSxDQUFDRCxJQUFMLEVBQVcsTUFBT0EsT0FBTyxLQUFQO0FBQ2xCLE9BQUlDLEVBQUVDLElBQUYsS0FBVyxNQUFmLEVBQXVCO0FBQ3RCSixjQUFVSyxHQUFWLENBQWNGLEVBQUVHLFFBQWhCO0FBQ0E7QUFDQTtBQUNELHdCQUFVTixTQUFWLEVBQXFCLHlCQUFPO0FBQUEsV0FBS08sTUFBTUMsV0FBWDtBQUFBLElBQVAsRUFBc0JWLE1BQU1XLEdBQU4sQ0FBVU4sRUFBRU8sV0FBWixDQUF0QixDQUFyQjtBQUNBUixXQUFRLHNCQUFJLHNCQUFJO0FBQUEsV0FBS0ssTUFBTUMsV0FBWDtBQUFBLElBQUosRUFBbUJWLE1BQU1XLEdBQU4sQ0FBVU4sRUFBRU8sV0FBWixDQUFuQixDQUFKLENBQVI7QUFDQTtBQVo2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWM5QyxLQUFJUixJQUFKLEVBQVVGLFVBQVVLLEdBQVYsQ0FBY0csV0FBZDs7QUFFVixRQUFPUixTQUFQO0FBRUE7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQzs7QUFFQTs7QUFFQzs7QUFFQTtBQUNDO0FBQ0E7QUFDRDs7QUFFQTtBQUNEOztBQUVBOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNDO0FBQ0E7QUFDQztBQUNDO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7O0FBRUE7O0FBRUQiLCJmaWxlIjoiZmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAgLCBmaWx0ZXIgLCBhbnkgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCB7IHNldGFkZGFsbCB9IGZyb20gJy4uL3V0aWwnIDtcblxuaW1wb3J0IHsgRVcgfSBmcm9tICcuLi9ncmFtbWFyJztcblxuLyoqXG4gKiBHZW5lcmF0ZSBGSVJTVCBzZXQgZm9yIGFueSBydWxlIGdpdmVuIHRoZSBGSVJTVCBzZXRzIGZvciB0aGUgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IEZJUlNUXG4gKiBAcGFyYW0ge0FycmF5fSBydWxlXG4gKiBAcmV0dXJucyB7U2V0fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaXJzdCAoIEZJUlNUICwgcnVsZSApIHtcblxuXHRjb25zdCB0ZXJtaW5hbHMgPSBuZXcgU2V0KCk7XG5cdGxldCByZWFkID0gdHJ1ZTtcblx0Zm9yIChjb25zdCB4IG9mIHJ1bGUpIHtcblx0XHRpZiAoIXJlYWQpIGJyZWFrOyByZWFkID0gZmFsc2U7XG5cdFx0aWYgKHgudHlwZSA9PT0gJ2xlYWYnKSB7XG5cdFx0XHR0ZXJtaW5hbHMuYWRkKHgudGVybWluYWwpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHNldGFkZGFsbCh0ZXJtaW5hbHMsIGZpbHRlcih5ID0+IHkgIT09IEVXLCBGSVJTVC5nZXQoeC5ub250ZXJtaW5hbCkpKTtcblx0XHRyZWFkIHw9IGFueShtYXAoeSA9PiB5ID09PSBFVywgRklSU1QuZ2V0KHgubm9udGVybWluYWwpKSk7XG5cdH1cblxuXHRpZiAocmVhZCkgdGVybWluYWxzLmFkZChFVyk7XG5cblx0cmV0dXJuIHRlcm1pbmFscztcblxufVxuXG4vLy8qKlxuLy8gKiBDb21wdXRlcyBGSVJTVCB0YWJsZSBmb3IgZ3JhbW1hciBlbnRpcmUgcnVsZXMuIE5lZWRlZD9cbi8vICpcbi8vICogQHBhcmFtIF9GSVJTVFxuLy8gKiBAcGFyYW0gZ3JhbW1hclxuLy8gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuLy8gKi9cbi8vZnVuY3Rpb24gX19maXJzdCAoIF9GSVJTVCAsIGdyYW1tYXIgKSB7XG5cblx0Ly9jb25zdCBGID0gW107XG5cblx0Ly9mb3IgKGNvbnN0IHVuaXQgb2YgZ3JhbW1hcikge1xuXG5cdFx0Ly9jb25zdCBmb3JydWxlcyA9IFtdO1xuXG5cdFx0Ly9mb3IgKGNvbnN0IHJ1bGUgb2YgdW5pdCkge1xuXHRcdFx0Ly9jb25zdCBmID0gZmlyc3QoIF9GSVJTVCAsIHJ1bGUpO1xuXHRcdFx0Ly9mb3JydWxlcy5wdXNoKGYpO1xuXHRcdC8vfVxuXG5cdFx0Ly9GLnB1c2goZm9ycnVsZXMpO1xuXHQvL31cblxuXHQvL3JldHVybiBGO1xuXG4vL31cblxuXG4vLy8qKlxuLy8qIENvbXB1dGVzIGRlcGVuZGVuY3kgZ3JhcGggZm9yIGZhc3RlciB1cGRhdGVzLiBOZWVkZWQ/XG4vLypcbi8vKiBAcGFyYW0gZ3JhbW1hclxuLy8qIEByZXR1cm5zIHt1bmRlZmluZWR9XG4vLyovXG4vL2Z1bmN0aW9uIGdldGZpcnN0Z3JhcGggKCBncmFtbWFyICkge1xuXG5cdC8vY29uc3QgbiA9IGdyYW1tYXIubGVuZ3RoO1xuXG5cdC8vY29uc3QgZ3JhcGggPSBbXTtcblxuXHQvL2ZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSBncmFwaC5wdXNoKG5ldyBTZXQoKSk7XG5cblx0Ly9mb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuXHRcdC8vY29uc3QgcnVsZXMgPSBncmFtbWFyW2ldO1xuXHRcdC8vZm9yICggY29uc3QgcnVsZSBvZiBydWxlcyApIHtcblx0XHRcdC8vZm9yICggY29uc3QgeCBvZiBydWxlICkge1xuXHRcdFx0XHQvL2lmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIGJyZWFrO1xuXHRcdFx0XHQvL2dyYXBoW3hdLmFkZChpKTtcblx0XHRcdC8vfVxuXHRcdC8vfVxuXHQvL31cblxuXHQvL3JldHVybiBncmFwaDtcblxuLy99XG4iXX0=