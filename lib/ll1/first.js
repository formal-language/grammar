"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = first;

var _jsItertools = require("@aureooms/js-itertools");

var _util = require("../util");

var _grammar = require("../grammar");

/**
 * Generate FIRST set for any rule given the FIRST sets for the nonterminals.
 *
 * @param {Map} FIRST
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
      if (!read) break;
      read = false;

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
      if (!_iteratorNormalCompletion && _iterator.return != null) {
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
} ///**
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZmlyc3QuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJGSVJTVCIsInJ1bGUiLCJ0ZXJtaW5hbHMiLCJTZXQiLCJyZWFkIiwieCIsInR5cGUiLCJhZGQiLCJ0ZXJtaW5hbCIsInkiLCJFVyIsImdldCIsIm5vbnRlcm1pbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPZSxTQUFTQSxLQUFULENBQWlCQyxLQUFqQixFQUF5QkMsSUFBekIsRUFBZ0M7QUFFOUMsTUFBTUMsU0FBUyxHQUFHLElBQUlDLEdBQUosRUFBbEI7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUg4QztBQUFBO0FBQUE7O0FBQUE7QUFJOUMseUJBQWdCSCxJQUFoQiw4SEFBc0I7QUFBQSxVQUFYSSxDQUFXO0FBQ3JCLFVBQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQU9BLE1BQUFBLElBQUksR0FBRyxLQUFQOztBQUNsQixVQUFJQyxDQUFDLENBQUNDLElBQUYsS0FBVyxNQUFmLEVBQXVCO0FBQ3RCSixRQUFBQSxTQUFTLENBQUNLLEdBQVYsQ0FBY0YsQ0FBQyxDQUFDRyxRQUFoQjtBQUNBO0FBQ0E7O0FBQ0QsMkJBQVVOLFNBQVYsRUFBcUIseUJBQU8sVUFBQU8sQ0FBQztBQUFBLGVBQUlBLENBQUMsS0FBS0MsV0FBVjtBQUFBLE9BQVIsRUFBc0JWLEtBQUssQ0FBQ1csR0FBTixDQUFVTixDQUFDLENBQUNPLFdBQVosQ0FBdEIsQ0FBckI7QUFDQVIsTUFBQUEsSUFBSSxJQUFJLHNCQUFJLHNCQUFJLFVBQUFLLENBQUM7QUFBQSxlQUFJQSxDQUFDLEtBQUtDLFdBQVY7QUFBQSxPQUFMLEVBQW1CVixLQUFLLENBQUNXLEdBQU4sQ0FBVU4sQ0FBQyxDQUFDTyxXQUFaLENBQW5CLENBQUosQ0FBUjtBQUNBO0FBWjZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYzlDLE1BQUlSLElBQUosRUFBVUYsU0FBUyxDQUFDSyxHQUFWLENBQWNHLFdBQWQ7QUFFVixTQUFPUixTQUFQO0FBRUEsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQztBQUVBO0FBRUM7QUFFQTtBQUNDO0FBQ0E7QUFDRDtBQUVBO0FBQ0Q7QUFFQTtBQUVEO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQztBQUVBO0FBRUE7QUFFQTtBQUNDO0FBQ0E7QUFDQztBQUNDO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFFQTtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwICwgZmlsdGVyICwgYW55IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgeyBzZXRhZGRhbGwgfSBmcm9tICcuLi91dGlsJyA7XG5cbmltcG9ydCB7IEVXIH0gZnJvbSAnLi4vZ3JhbW1hcic7XG5cbi8qKlxuICogR2VuZXJhdGUgRklSU1Qgc2V0IGZvciBhbnkgcnVsZSBnaXZlbiB0aGUgRklSU1Qgc2V0cyBmb3IgdGhlIG5vbnRlcm1pbmFscy5cbiAqXG4gKiBAcGFyYW0ge01hcH0gRklSU1RcbiAqIEBwYXJhbSB7QXJyYXl9IHJ1bGVcbiAqIEByZXR1cm5zIHtTZXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpcnN0ICggRklSU1QgLCBydWxlICkge1xuXG5cdGNvbnN0IHRlcm1pbmFscyA9IG5ldyBTZXQoKTtcblx0bGV0IHJlYWQgPSB0cnVlO1xuXHRmb3IgKGNvbnN0IHggb2YgcnVsZSkge1xuXHRcdGlmICghcmVhZCkgYnJlYWs7IHJlYWQgPSBmYWxzZTtcblx0XHRpZiAoeC50eXBlID09PSAnbGVhZicpIHtcblx0XHRcdHRlcm1pbmFscy5hZGQoeC50ZXJtaW5hbCk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0c2V0YWRkYWxsKHRlcm1pbmFscywgZmlsdGVyKHkgPT4geSAhPT0gRVcsIEZJUlNULmdldCh4Lm5vbnRlcm1pbmFsKSkpO1xuXHRcdHJlYWQgfD0gYW55KG1hcCh5ID0+IHkgPT09IEVXLCBGSVJTVC5nZXQoeC5ub250ZXJtaW5hbCkpKTtcblx0fVxuXG5cdGlmIChyZWFkKSB0ZXJtaW5hbHMuYWRkKEVXKTtcblxuXHRyZXR1cm4gdGVybWluYWxzO1xuXG59XG5cbi8vLyoqXG4vLyAqIENvbXB1dGVzIEZJUlNUIHRhYmxlIGZvciBncmFtbWFyIGVudGlyZSBydWxlcy4gTmVlZGVkP1xuLy8gKlxuLy8gKiBAcGFyYW0gX0ZJUlNUXG4vLyAqIEBwYXJhbSBncmFtbWFyXG4vLyAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4vLyAqL1xuLy9mdW5jdGlvbiBfX2ZpcnN0ICggX0ZJUlNUICwgZ3JhbW1hciApIHtcblxuXHQvL2NvbnN0IEYgPSBbXTtcblxuXHQvL2ZvciAoY29uc3QgdW5pdCBvZiBncmFtbWFyKSB7XG5cblx0XHQvL2NvbnN0IGZvcnJ1bGVzID0gW107XG5cblx0XHQvL2ZvciAoY29uc3QgcnVsZSBvZiB1bml0KSB7XG5cdFx0XHQvL2NvbnN0IGYgPSBmaXJzdCggX0ZJUlNUICwgcnVsZSk7XG5cdFx0XHQvL2ZvcnJ1bGVzLnB1c2goZik7XG5cdFx0Ly99XG5cblx0XHQvL0YucHVzaChmb3JydWxlcyk7XG5cdC8vfVxuXG5cdC8vcmV0dXJuIEY7XG5cbi8vfVxuXG5cbi8vLyoqXG4vLyogQ29tcHV0ZXMgZGVwZW5kZW5jeSBncmFwaCBmb3IgZmFzdGVyIHVwZGF0ZXMuIE5lZWRlZD9cbi8vKlxuLy8qIEBwYXJhbSBncmFtbWFyXG4vLyogQHJldHVybnMge3VuZGVmaW5lZH1cbi8vKi9cbi8vZnVuY3Rpb24gZ2V0Zmlyc3RncmFwaCAoIGdyYW1tYXIgKSB7XG5cblx0Ly9jb25zdCBuID0gZ3JhbW1hci5sZW5ndGg7XG5cblx0Ly9jb25zdCBncmFwaCA9IFtdO1xuXG5cdC8vZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIGdyYXBoLnB1c2gobmV3IFNldCgpKTtcblxuXHQvL2ZvciAobGV0IGkgPSAwOyBpIDwgbjsgKytpKSB7XG5cdFx0Ly9jb25zdCBydWxlcyA9IGdyYW1tYXJbaV07XG5cdFx0Ly9mb3IgKCBjb25zdCBydWxlIG9mIHJ1bGVzICkge1xuXHRcdFx0Ly9mb3IgKCBjb25zdCB4IG9mIHJ1bGUgKSB7XG5cdFx0XHRcdC8vaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykgYnJlYWs7XG5cdFx0XHRcdC8vZ3JhcGhbeF0uYWRkKGkpO1xuXHRcdFx0Ly99XG5cdFx0Ly99XG5cdC8vfVxuXG5cdC8vcmV0dXJuIGdyYXBoO1xuXG4vL31cbiJdfQ==