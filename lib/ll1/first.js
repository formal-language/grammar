'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports._first = _first;
exports.first = first;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _constants = require('./constants');

/**
 * Computes FIRST table for grammar nonterminals.
 *
 * @param grammar
 * @returns {Array}
 */
function _first(grammar) {

	var FIRST = (0, _jsItertools.list)((0, _jsItertools.map)(function (_) {
		return new Set();
	}, grammar));

	var updated = true;

	while (updated) {

		updated = false;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = (0, _jsItertools.enumerate)(grammar)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _ref = _step.value;

				var _ref2 = _slicedToArray(_ref, 2);

				var i = _ref2[0];
				var rules = _ref2[1];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {

					for (var _iterator2 = rules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var rule = _step2.value;


						var read = true;

						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = rule[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var x = _step3.value;


								if (!read) break;read = false;

								if (typeof x === 'string') updated |= (0, _util.setadd)(FIRST[i], x);else {
									updated |= (0, _util.setaddall)(FIRST[i], (0, _jsItertools.filter)(function (y) {
										return y !== _constants.EW;
									}, FIRST[x]));
									read |= (0, _jsItertools.any)((0, _jsItertools.map)(function (y) {
										return y === _constants.EW;
									}, FIRST[x]));
								}
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}

						if (read) updated |= (0, _util.setadd)(FIRST[i], _constants.EW);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
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
	}

	return FIRST;
}

/**
 * Computes FIRST table for grammar entire rules. Needed?
 *
 * @param _FIRST
 * @param grammar
 * @returns {undefined}
 */
//function first ( _FIRST , grammar ) {

//const F = [];

//for (const unit of grammar) {

//const forrules = [];

//for (const rule of unit) {
//const f = FIRST( _FIRST , rule);
//forrules.push(f);
//}

//F.push(forrules);
//}

//return F;

//}

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
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = rule[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var x = _step4.value;

			if (!read) break;read = false;
			if (typeof x === 'string') {
				terminals.add(x);
				break;
			}
			(0, _util.setaddall)(terminals, (0, _jsItertools.filter)(function (y) {
				return y !== _constants.EW;
			}, FIRST[x]));
			read |= (0, _jsItertools.any)((0, _jsItertools.map)(function (y) {
				return y === _constants.EW;
			}, FIRST[x]));
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	if (read) terminals.add(_constants.EW);

	return terminals;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZmlyc3QuanMiXSwibmFtZXMiOlsiX2ZpcnN0IiwiZmlyc3QiLCJncmFtbWFyIiwiRklSU1QiLCJTZXQiLCJ1cGRhdGVkIiwiaSIsInJ1bGVzIiwicnVsZSIsInJlYWQiLCJ4IiwieSIsInRlcm1pbmFscyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFZZ0JBLE0sR0FBQUEsTTtRQXlFQUMsSyxHQUFBQSxLOztBQXJGaEI7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1PLFNBQVNELE1BQVQsQ0FBa0JFLE9BQWxCLEVBQTRCOztBQUVsQyxLQUFNQyxRQUFRLHVCQUFNLHNCQUFLO0FBQUEsU0FBSyxJQUFJQyxHQUFKLEVBQUw7QUFBQSxFQUFMLEVBQXNCRixPQUF0QixDQUFOLENBQWQ7O0FBRUEsS0FBSUcsVUFBVSxJQUFkOztBQUVBLFFBQU9BLE9BQVAsRUFBZ0I7O0FBRWZBLFlBQVUsS0FBVjs7QUFGZTtBQUFBO0FBQUE7O0FBQUE7QUFJZix3QkFBeUIsNEJBQVVILE9BQVYsQ0FBekIsOEhBQTZDO0FBQUE7O0FBQUE7O0FBQUEsUUFBakNJLENBQWlDO0FBQUEsUUFBOUJDLEtBQThCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUU1QywyQkFBbUJBLEtBQW5CLG1JQUEwQjtBQUFBLFVBQWZDLElBQWU7OztBQUV6QixVQUFJQyxPQUFPLElBQVg7O0FBRnlCO0FBQUE7QUFBQTs7QUFBQTtBQUl6Qiw2QkFBaUJELElBQWpCLG1JQUF3QjtBQUFBLFlBQVpFLENBQVk7OztBQUV2QixZQUFJLENBQUNELElBQUwsRUFBVyxNQUFPQSxPQUFPLEtBQVA7O0FBRWxCLFlBQUssT0FBT0MsQ0FBUCxLQUFhLFFBQWxCLEVBQTZCTCxXQUFXLGtCQUFRRixNQUFNRyxDQUFOLENBQVIsRUFBa0JJLENBQWxCLENBQVgsQ0FBN0IsS0FDSztBQUNKTCxvQkFBVyxxQkFBVUYsTUFBTUcsQ0FBTixDQUFWLEVBQW9CLHlCQUFPO0FBQUEsaUJBQUtLLG1CQUFMO0FBQUEsVUFBUCxFQUFzQlIsTUFBTU8sQ0FBTixDQUF0QixDQUFwQixDQUFYO0FBQ0FELGlCQUFRLHNCQUFJLHNCQUFJO0FBQUEsaUJBQUtFLG1CQUFMO0FBQUEsVUFBSixFQUFtQlIsTUFBTU8sQ0FBTixDQUFuQixDQUFKLENBQVI7QUFDQTtBQUVEO0FBZHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0J6QixVQUFJRCxJQUFKLEVBQVVKLFdBQVcsa0JBQU9GLE1BQU1HLENBQU4sQ0FBUCxnQkFBWDtBQUNWO0FBbkIyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUI1QztBQXpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJmOztBQUVELFFBQU9ILEtBQVA7QUFFQTs7QUFFRDs7Ozs7OztBQU9BOztBQUVDOztBQUVBOztBQUVDOztBQUVBO0FBQ0M7QUFDQTtBQUNEOztBQUVBO0FBQ0Q7O0FBRUE7O0FBRUQ7O0FBRUE7Ozs7Ozs7QUFPTyxTQUFTRixLQUFULENBQWlCRSxLQUFqQixFQUF5QkssSUFBekIsRUFBZ0M7O0FBRXRDLEtBQU1JLFlBQVksSUFBSVIsR0FBSixFQUFsQjtBQUNBLEtBQUlLLE9BQU8sSUFBWDtBQUhzQztBQUFBO0FBQUE7O0FBQUE7QUFJdEMsd0JBQWdCRCxJQUFoQixtSUFBc0I7QUFBQSxPQUFYRSxDQUFXOztBQUNyQixPQUFJLENBQUNELElBQUwsRUFBVyxNQUFPQSxPQUFPLEtBQVA7QUFDbEIsT0FBSSxPQUFPQyxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDMUJFLGNBQVVDLEdBQVYsQ0FBY0gsQ0FBZDtBQUNBO0FBQ0E7QUFDRCx3QkFBVUUsU0FBVixFQUFxQix5QkFBTztBQUFBLFdBQUtELG1CQUFMO0FBQUEsSUFBUCxFQUFzQlIsTUFBTU8sQ0FBTixDQUF0QixDQUFyQjtBQUNBRCxXQUFRLHNCQUFJLHNCQUFJO0FBQUEsV0FBS0UsbUJBQUw7QUFBQSxJQUFKLEVBQW1CUixNQUFNTyxDQUFOLENBQW5CLENBQUosQ0FBUjtBQUNBO0FBWnFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY3RDLEtBQUlELElBQUosRUFBVUcsVUFBVUMsR0FBVjs7QUFFVixRQUFPRCxTQUFQO0FBRUE7O0FBRUQ7O0FBRUM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQztBQUNBO0FBQ0M7QUFDQztBQUNBO0FBQ0Q7QUFDRDtBQUNEOztBQUVBOztBQUVEIiwiZmlsZSI6ImZpcnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW51bWVyYXRlICwgbGlzdCAsIG1hcCAsIGZpbHRlciAsIGFueSB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IHsgc2V0YWRkICwgc2V0YWRkYWxsIH0gZnJvbSAnLi4vdXRpbCcgO1xuXG5pbXBvcnQgeyBFVyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDb21wdXRlcyBGSVJTVCB0YWJsZSBmb3IgZ3JhbW1hciBub250ZXJtaW5hbHMuXG4gKlxuICogQHBhcmFtIGdyYW1tYXJcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9maXJzdCAoIGdyYW1tYXIgKSB7XG5cblx0Y29uc3QgRklSU1QgPSBsaXN0KCBtYXAoIF8gPT4gbmV3IFNldCgpICwgZ3JhbW1hciApICkgO1xuXG5cdGxldCB1cGRhdGVkID0gdHJ1ZTtcblxuXHR3aGlsZSAodXBkYXRlZCkge1xuXG5cdFx0dXBkYXRlZCA9IGZhbHNlO1xuXG5cdFx0Zm9yIChjb25zdCBbaSwgcnVsZXNdIG9mIGVudW1lcmF0ZShncmFtbWFyKSkge1xuXG5cdFx0XHRmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcblxuXHRcdFx0XHRsZXQgcmVhZCA9IHRydWU7XG5cblx0XHRcdFx0Zm9yICggY29uc3QgeCBvZiBydWxlICkge1xuXG5cdFx0XHRcdFx0aWYgKCFyZWFkKSBicmVhazsgcmVhZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCB0eXBlb2YgeCA9PT0gJ3N0cmluZycgKSB1cGRhdGVkIHw9IHNldGFkZCggRklSU1RbaV0sIHgpO1xuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0dXBkYXRlZCB8PSBzZXRhZGRhbGwoRklSU1RbaV0sIGZpbHRlcih5ID0+IHkgIT09IEVXLCBGSVJTVFt4XSkpO1xuXHRcdFx0XHRcdFx0cmVhZCB8PSBhbnkobWFwKHkgPT4geSA9PT0gRVcsIEZJUlNUW3hdKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVhZCkgdXBkYXRlZCB8PSBzZXRhZGQoRklSU1RbaV0sIEVXKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIEZJUlNUO1xuXG59XG5cbi8qKlxuICogQ29tcHV0ZXMgRklSU1QgdGFibGUgZm9yIGdyYW1tYXIgZW50aXJlIHJ1bGVzLiBOZWVkZWQ/XG4gKlxuICogQHBhcmFtIF9GSVJTVFxuICogQHBhcmFtIGdyYW1tYXJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbi8vZnVuY3Rpb24gZmlyc3QgKCBfRklSU1QgLCBncmFtbWFyICkge1xuXG5cdC8vY29uc3QgRiA9IFtdO1xuXG5cdC8vZm9yIChjb25zdCB1bml0IG9mIGdyYW1tYXIpIHtcblxuXHRcdC8vY29uc3QgZm9ycnVsZXMgPSBbXTtcblxuXHRcdC8vZm9yIChjb25zdCBydWxlIG9mIHVuaXQpIHtcblx0XHRcdC8vY29uc3QgZiA9IEZJUlNUKCBfRklSU1QgLCBydWxlKTtcblx0XHRcdC8vZm9ycnVsZXMucHVzaChmKTtcblx0XHQvL31cblxuXHRcdC8vRi5wdXNoKGZvcnJ1bGVzKTtcblx0Ly99XG5cblx0Ly9yZXR1cm4gRjtcblxuLy99XG5cbi8qKlxuICogR2VuZXJhdGUgRklSU1Qgc2V0IGZvciBhbnkgcnVsZSBnaXZlbiB0aGUgRklSU1Qgc2V0cyBmb3IgdGhlIG5vbnRlcm1pbmFscy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBGSVJTVFxuICogQHBhcmFtIHtBcnJheX0gcnVsZVxuICogQHJldHVybnMge1NldH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0ICggRklSU1QgLCBydWxlICkge1xuXG5cdGNvbnN0IHRlcm1pbmFscyA9IG5ldyBTZXQoKTtcblx0bGV0IHJlYWQgPSB0cnVlO1xuXHRmb3IgKGNvbnN0IHggb2YgcnVsZSkge1xuXHRcdGlmICghcmVhZCkgYnJlYWs7IHJlYWQgPSBmYWxzZTtcblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0ZXJtaW5hbHMuYWRkKHgpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHNldGFkZGFsbCh0ZXJtaW5hbHMsIGZpbHRlcih5ID0+IHkgIT09IEVXLCBGSVJTVFt4XSkpO1xuXHRcdHJlYWQgfD0gYW55KG1hcCh5ID0+IHkgPT09IEVXLCBGSVJTVFt4XSkpO1xuXHR9XG5cblx0aWYgKHJlYWQpIHRlcm1pbmFscy5hZGQoRVcpO1xuXG5cdHJldHVybiB0ZXJtaW5hbHM7XG5cbn1cblxuLy9mdW5jdGlvbiBnZXRmaXJzdGdyYXBoICggZ3JhbW1hciApIHtcblxuXHQvL2NvbnN0IG4gPSBncmFtbWFyLmxlbmd0aDtcblxuXHQvL2NvbnN0IGdyYXBoID0gW107XG5cblx0Ly9mb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkgZ3JhcGgucHVzaChuZXcgU2V0KCkpO1xuXG5cdC8vZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcblx0XHQvL2NvbnN0IHJ1bGVzID0gZ3JhbW1hcltpXTtcblx0XHQvL2ZvciAoIGNvbnN0IHJ1bGUgb2YgcnVsZXMgKSB7XG5cdFx0XHQvL2ZvciAoIGNvbnN0IHggb2YgcnVsZSApIHtcblx0XHRcdFx0Ly9pZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSBicmVhaztcblx0XHRcdFx0Ly9ncmFwaFt4XS5hZGQoaSk7XG5cdFx0XHQvL31cblx0XHQvL31cblx0Ly99XG5cblx0Ly9yZXR1cm4gZ3JhcGg7XG5cbi8vfVxuIl19