"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _follow;

var _jsItertools = require("@aureooms/js-itertools");

var _util = require("../util");

var _first = _interopRequireDefault(require("./first"));

var _grammar = require("../grammar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Computes the FOLLOW table for all nonterminals.
 *
 * @param {Map} FIRST - The FIRST table as computed by {@link ll1#_first}
 * @param {Map} productions - The productions map.
 * @returns {Map} The FOLLOW table.
 */
function _follow(FIRST, productions) {
  var FOLLOW = new Map((0, _jsItertools.map)(function (i) {
    return [i, new Set()];
  }, productions.keys()));
  var couldbelast = new Map((0, _jsItertools.map)(function (i) {
    return [i, new Set()];
  }, productions.keys()));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = productions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          _A = _step$value[0],
          rules = _step$value[1];

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = rules.values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var rule = _step4.value;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = (0, _jsItertools.enumerate)(rule)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                  pos = _step5$value[0],
                  _B = _step5$value[1];

              if (_B.type === 'leaf') continue;
              var fi = (0, _first.default)(FIRST, rule.slice(pos + 1));
              if (fi.has(_grammar.EW)) couldbelast.get(_A).add(_B.nonterminal);
              (0, _util.setaddall)(FOLLOW.get(_B.nonterminal), (0, _jsItertools.filter)(function (x) {
                return x !== _grammar.EW;
              }, fi));
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
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

  var updated = true;

  while (updated) {
    updated = false;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = productions.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var A = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = couldbelast.get(A)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var B = _step3.value;
            updated |= (0, _util.setaddall)(FOLLOW.get(B), FOLLOW.get(A));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
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
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return FOLLOW;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2ZvbGxvdy5qcyJdLCJuYW1lcyI6WyJfZm9sbG93IiwiRklSU1QiLCJwcm9kdWN0aW9ucyIsIkZPTExPVyIsIk1hcCIsImkiLCJTZXQiLCJrZXlzIiwiY291bGRiZWxhc3QiLCJBIiwicnVsZXMiLCJ2YWx1ZXMiLCJydWxlIiwicG9zIiwiQiIsInR5cGUiLCJmaSIsInNsaWNlIiwiaGFzIiwiRVciLCJnZXQiLCJhZGQiLCJub250ZXJtaW5hbCIsIngiLCJ1cGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0FBT2UsU0FBU0EsT0FBVCxDQUFtQkMsS0FBbkIsRUFBMkJDLFdBQTNCLEVBQXlDO0FBRXZELE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxHQUFKLENBQVMsc0JBQUssVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBRUEsQ0FBRixFQUFNLElBQUlDLEdBQUosRUFBTixDQUFKO0FBQUEsR0FBTixFQUE4QkosV0FBVyxDQUFDSyxJQUFaLEVBQTlCLENBQVQsQ0FBZjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxJQUFJSixHQUFKLENBQVMsc0JBQUssVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBRUEsQ0FBRixFQUFNLElBQUlDLEdBQUosRUFBTixDQUFKO0FBQUEsR0FBTixFQUE4QkosV0FBVyxDQUFDSyxJQUFaLEVBQTlCLENBQVQsQ0FBcEI7QUFKdUQ7QUFBQTtBQUFBOztBQUFBO0FBTXZELHlCQUE0QkwsV0FBNUIsOEhBQXlDO0FBQUE7QUFBQSxVQUE1Qk8sRUFBNEI7QUFBQSxVQUF4QkMsS0FBd0I7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3hDLDhCQUFtQkEsS0FBSyxDQUFDQyxNQUFOLEVBQW5CLG1JQUFtQztBQUFBLGNBQXhCQyxJQUF3QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNsQyxrQ0FBMEIsNEJBQVVBLElBQVYsQ0FBMUIsbUlBQTJDO0FBQUE7QUFBQSxrQkFBOUJDLEdBQThCO0FBQUEsa0JBQXhCQyxFQUF3Qjs7QUFDMUMsa0JBQUlBLEVBQUMsQ0FBQ0MsSUFBRixLQUFXLE1BQWYsRUFBdUI7QUFDdkIsa0JBQU1DLEVBQUUsR0FBRyxvQkFBTWYsS0FBTixFQUFhVyxJQUFJLENBQUNLLEtBQUwsQ0FBV0osR0FBRyxHQUFDLENBQWYsQ0FBYixDQUFYO0FBQ0Esa0JBQUlHLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPQyxXQUFQLENBQUosRUFBZ0JYLFdBQVcsQ0FBQ1ksR0FBWixDQUFnQlgsRUFBaEIsRUFBbUJZLEdBQW5CLENBQXVCUCxFQUFDLENBQUNRLFdBQXpCO0FBQ2hCLG1DQUFVbkIsTUFBTSxDQUFDaUIsR0FBUCxDQUFXTixFQUFDLENBQUNRLFdBQWIsQ0FBVixFQUFxQyx5QkFBUSxVQUFBQyxDQUFDO0FBQUEsdUJBQUlBLENBQUMsS0FBS0osV0FBVjtBQUFBLGVBQVQsRUFBd0JILEVBQXhCLENBQXJDO0FBQ0E7QUFOaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9sQztBQVJ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3hDO0FBZnNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJ2RCxNQUFJUSxPQUFPLEdBQUcsSUFBZDs7QUFDQSxTQUFPQSxPQUFQLEVBQWdCO0FBQ2ZBLElBQUFBLE9BQU8sR0FBRyxLQUFWO0FBRGU7QUFBQTtBQUFBOztBQUFBO0FBRWYsNEJBQWdCdEIsV0FBVyxDQUFDSyxJQUFaLEVBQWhCLG1JQUFvQztBQUFBLFlBQXpCRSxDQUF5QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNuQyxnQ0FBZ0JELFdBQVcsQ0FBQ1ksR0FBWixDQUFnQlgsQ0FBaEIsQ0FBaEIsbUlBQW9DO0FBQUEsZ0JBQXpCSyxDQUF5QjtBQUNuQ1UsWUFBQUEsT0FBTyxJQUFJLHFCQUFVckIsTUFBTSxDQUFDaUIsR0FBUCxDQUFXTixDQUFYLENBQVYsRUFBeUJYLE1BQU0sQ0FBQ2lCLEdBQVAsQ0FBV1gsQ0FBWCxDQUF6QixDQUFYO0FBQ0E7QUFIa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUluQztBQU5jO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPZjs7QUFFRCxTQUFPTixNQUFQO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgZmlsdGVyICwgZW51bWVyYXRlICwgcmFuZ2UgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5cbmltcG9ydCB7IHNldGFkZGFsbCB9IGZyb20gJy4uL3V0aWwnIDtcblxuaW1wb3J0IGZpcnN0IGZyb20gJy4vZmlyc3QnIDtcblxuaW1wb3J0IHsgRVcgfSBmcm9tICcuLi9ncmFtbWFyJztcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgRk9MTE9XIHRhYmxlIGZvciBhbGwgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSB7TWFwfSBGSVJTVCAtIFRoZSBGSVJTVCB0YWJsZSBhcyBjb21wdXRlZCBieSB7QGxpbmsgbGwxI19maXJzdH1cbiAqIEBwYXJhbSB7TWFwfSBwcm9kdWN0aW9ucyAtIFRoZSBwcm9kdWN0aW9ucyBtYXAuXG4gKiBAcmV0dXJucyB7TWFwfSBUaGUgRk9MTE9XIHRhYmxlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZm9sbG93ICggRklSU1QgLCBwcm9kdWN0aW9ucyApIHtcblxuXHRjb25zdCBGT0xMT1cgPSBuZXcgTWFwKCBtYXAoIGkgPT4gWyBpICwgbmV3IFNldCgpIF0gLCBwcm9kdWN0aW9ucy5rZXlzKCkgKSApIDtcblxuXHRjb25zdCBjb3VsZGJlbGFzdCA9IG5ldyBNYXAoIG1hcCggaSA9PiBbIGkgLCBuZXcgU2V0KCkgXSAsIHByb2R1Y3Rpb25zLmtleXMoKSApKSA7XG5cblx0Zm9yIChjb25zdCBbIEEgLCBydWxlcyBdIG9mIHByb2R1Y3Rpb25zKSB7XG5cdFx0Zm9yIChjb25zdCBydWxlIG9mIHJ1bGVzLnZhbHVlcygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFsgcG9zICwgQiBdIG9mIGVudW1lcmF0ZShydWxlKSkge1xuXHRcdFx0XHRpZiAoQi50eXBlID09PSAnbGVhZicpIGNvbnRpbnVlIDtcblx0XHRcdFx0Y29uc3QgZmkgPSBmaXJzdChGSVJTVCwgcnVsZS5zbGljZShwb3MrMSkpO1xuXHRcdFx0XHRpZiAoZmkuaGFzKEVXKSkgY291bGRiZWxhc3QuZ2V0KEEpLmFkZChCLm5vbnRlcm1pbmFsKTtcblx0XHRcdFx0c2V0YWRkYWxsKEZPTExPVy5nZXQoQi5ub250ZXJtaW5hbCksIGZpbHRlciggeCA9PiB4ICE9PSBFVyAsIGZpKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bGV0IHVwZGF0ZWQgPSB0cnVlO1xuXHR3aGlsZSAodXBkYXRlZCkge1xuXHRcdHVwZGF0ZWQgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IEEgb2YgcHJvZHVjdGlvbnMua2V5cygpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IEIgb2YgY291bGRiZWxhc3QuZ2V0KEEpKSB7XG5cdFx0XHRcdHVwZGF0ZWQgfD0gc2V0YWRkYWxsKEZPTExPVy5nZXQoQiksIEZPTExPVy5nZXQoQSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBGT0xMT1c7XG5cbn1cbiJdfQ==