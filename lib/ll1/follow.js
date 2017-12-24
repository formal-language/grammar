'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.follow = follow;

var _jsItertools = require('@aureooms/js-itertools');

var _util = require('../util');

var _first = require('./first');

var _constants = require('./constants');

/**
 * Computes the FOLLOW table for all nonterminals.
 *
 * @param {Array} FIRST
 * @param {Number} start
 * @param {Array} grammar
 * @returns {Array}
 */
function follow(FIRST, start, grammar) {

	var FOLLOW = (0, _jsItertools.list)((0, _jsItertools.map)(function (_) {
		return new Set();
	}, grammar));

	FOLLOW[start].add(_constants.EOF);

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

				var A = _ref2[0];
				var rules = _ref2[1];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = rules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var rule = _step2.value;
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = (0, _jsItertools.enumerate)(rule)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var _ref3 = _step3.value;

								var _ref4 = _slicedToArray(_ref3, 2);

								var pos = _ref4[0];
								var B = _ref4[1];

								if (typeof B === 'string') continue;
								var fi = (0, _first.first)(FIRST, rule.slice(pos + 1));
								if (fi.has(_constants.EW)) updated |= (0, _util.setaddall)(FOLLOW[B], FOLLOW[A]);
								updated |= (0, _util.setaddall)(FOLLOW[B], (0, _jsItertools.filter)(function (x) {
									return x !== _constants.EW;
								}, fi));
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

	return FOLLOW;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZm9sbG93LmpzIl0sIm5hbWVzIjpbImZvbGxvdyIsIkZJUlNUIiwic3RhcnQiLCJncmFtbWFyIiwiRk9MTE9XIiwiU2V0IiwiYWRkIiwidXBkYXRlZCIsIkEiLCJydWxlcyIsInJ1bGUiLCJwb3MiLCJCIiwiZmkiLCJzbGljZSIsImhhcyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBZ0JnQkEsTSxHQUFBQSxNOztBQWhCaEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBUU8sU0FBU0EsTUFBVCxDQUFrQkMsS0FBbEIsRUFBMEJDLEtBQTFCLEVBQWtDQyxPQUFsQyxFQUE0Qzs7QUFFbEQsS0FBTUMsU0FBUyx1QkFBTSxzQkFBSztBQUFBLFNBQUssSUFBSUMsR0FBSixFQUFMO0FBQUEsRUFBTCxFQUFzQkYsT0FBdEIsQ0FBTixDQUFmOztBQUVBQyxRQUFPRixLQUFQLEVBQWNJLEdBQWQ7O0FBRUEsS0FBSUMsVUFBVSxJQUFkOztBQUVBLFFBQU9BLE9BQVAsRUFBZ0I7QUFDZkEsWUFBVSxLQUFWO0FBRGU7QUFBQTtBQUFBOztBQUFBO0FBRWYsd0JBQTRCLDRCQUFVSixPQUFWLENBQTVCLDhIQUFnRDtBQUFBOztBQUFBOztBQUFBLFFBQW5DSyxDQUFtQztBQUFBLFFBQS9CQyxLQUErQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUMvQywyQkFBbUJBLEtBQW5CLG1JQUEwQjtBQUFBLFVBQWZDLElBQWU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsNkJBQTBCLDRCQUFVQSxJQUFWLENBQTFCLG1JQUEyQztBQUFBOztBQUFBOztBQUFBLFlBQTlCQyxHQUE4QjtBQUFBLFlBQXhCQyxDQUF3Qjs7QUFDMUMsWUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDM0IsWUFBTUMsS0FBSyxrQkFBTVosS0FBTixFQUFhUyxLQUFLSSxLQUFMLENBQVdILE1BQUksQ0FBZixDQUFiLENBQVg7QUFDQSxZQUFJRSxHQUFHRSxHQUFILGVBQUosRUFBZ0JSLFdBQVcscUJBQVVILE9BQU9RLENBQVAsQ0FBVixFQUFxQlIsT0FBT0ksQ0FBUCxDQUFyQixDQUFYO0FBQ2hCRCxtQkFBVyxxQkFBVUgsT0FBT1EsQ0FBUCxDQUFWLEVBQXFCLHlCQUFRO0FBQUEsZ0JBQUtJLG1CQUFMO0FBQUEsU0FBUixFQUF3QkgsRUFBeEIsQ0FBckIsQ0FBWDtBQUNBO0FBTndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPekI7QUFSOEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVMvQztBQVhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZZjs7QUFFRCxRQUFPVCxNQUFQO0FBRUEiLCJmaWxlIjoiZm9sbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCAsIG1hcCAsIGZpbHRlciAsIGVudW1lcmF0ZSB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IHsgc2V0YWRkYWxsIH0gZnJvbSAnLi4vdXRpbCcgO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJy4vZmlyc3QnIDtcblxuaW1wb3J0IHsgRVcgLCBFT0YgfSBmcm9tICcuL2NvbnN0YW50cycgO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBGT0xMT1cgdGFibGUgZm9yIGFsbCBub250ZXJtaW5hbHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gRklSU1RcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydFxuICogQHBhcmFtIHtBcnJheX0gZ3JhbW1hclxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9sbG93ICggRklSU1QgLCBzdGFydCAsIGdyYW1tYXIgKSB7XG5cblx0Y29uc3QgRk9MTE9XID0gbGlzdCggbWFwKCBfID0+IG5ldyBTZXQoKSAsIGdyYW1tYXIgKSApIDtcblxuXHRGT0xMT1dbc3RhcnRdLmFkZChFT0YpO1xuXG5cdGxldCB1cGRhdGVkID0gdHJ1ZTtcblxuXHR3aGlsZSAodXBkYXRlZCkge1xuXHRcdHVwZGF0ZWQgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IFsgQSAsIHJ1bGVzIF0gb2YgZW51bWVyYXRlKGdyYW1tYXIpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHJ1bGUgb2YgcnVsZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbIHBvcyAsIEIgXSBvZiBlbnVtZXJhdGUocnVsZSkpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIEIgPT09ICdzdHJpbmcnKSBjb250aW51ZSA7XG5cdFx0XHRcdFx0Y29uc3QgZmkgPSBmaXJzdChGSVJTVCwgcnVsZS5zbGljZShwb3MrMSkpO1xuXHRcdFx0XHRcdGlmIChmaS5oYXMoRVcpKSB1cGRhdGVkIHw9IHNldGFkZGFsbChGT0xMT1dbQl0sIEZPTExPV1tBXSk7XG5cdFx0XHRcdFx0dXBkYXRlZCB8PSBzZXRhZGRhbGwoRk9MTE9XW0JdLCBmaWx0ZXIoIHggPT4geCAhPT0gRVcgLCBmaSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIEZPTExPVztcblxufVxuIl19