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
 * @param {String} start - The starting nonterminal.
 * @param {Object} eof - The end-of-file symbol.
 * @param {Map} productions - The productions map.
 * @returns {Map} The FOLLOW table.
 */
function _follow(FIRST, start, eof, productions) {
  var FOLLOW = new Map((0, _jsItertools.map)(function (i) {
    return [i, new Set(i === start ? [eof] : [])];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2ZvbGxvdy5qcyJdLCJuYW1lcyI6WyJfZm9sbG93IiwiRklSU1QiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiRk9MTE9XIiwiTWFwIiwiaSIsIlNldCIsImtleXMiLCJjb3VsZGJlbGFzdCIsIkEiLCJydWxlcyIsInZhbHVlcyIsInJ1bGUiLCJwb3MiLCJCIiwidHlwZSIsImZpIiwic2xpY2UiLCJoYXMiLCJFVyIsImdldCIsImFkZCIsIm5vbnRlcm1pbmFsIiwieCIsInVwZGF0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNlLFNBQVNBLE9BQVQsQ0FBbUJDLEtBQW5CLEVBQTJCQyxLQUEzQixFQUFtQ0MsR0FBbkMsRUFBeUNDLFdBQXpDLEVBQXVEO0FBRXJFLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxHQUFKLENBQVMsc0JBQUssVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBRUEsQ0FBRixFQUFNLElBQUlDLEdBQUosQ0FBU0QsQ0FBQyxLQUFLTCxLQUFOLEdBQWMsQ0FBQ0MsR0FBRCxDQUFkLEdBQXNCLEVBQS9CLENBQU4sQ0FBSjtBQUFBLEdBQU4sRUFBdURDLFdBQVcsQ0FBQ0ssSUFBWixFQUF2RCxDQUFULENBQWY7QUFFQSxNQUFNQyxXQUFXLEdBQUcsSUFBSUosR0FBSixDQUFTLHNCQUFLLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQUVBLENBQUYsRUFBTSxJQUFJQyxHQUFKLEVBQU4sQ0FBSjtBQUFBLEdBQU4sRUFBOEJKLFdBQVcsQ0FBQ0ssSUFBWixFQUE5QixDQUFULENBQXBCO0FBSnFFO0FBQUE7QUFBQTs7QUFBQTtBQU1yRSx5QkFBNEJMLFdBQTVCLDhIQUF5QztBQUFBO0FBQUEsVUFBNUJPLEVBQTRCO0FBQUEsVUFBeEJDLEtBQXdCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN4Qyw4QkFBbUJBLEtBQUssQ0FBQ0MsTUFBTixFQUFuQixtSUFBbUM7QUFBQSxjQUF4QkMsSUFBd0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbEMsa0NBQTBCLDRCQUFVQSxJQUFWLENBQTFCLG1JQUEyQztBQUFBO0FBQUEsa0JBQTlCQyxHQUE4QjtBQUFBLGtCQUF4QkMsRUFBd0I7O0FBQzFDLGtCQUFJQSxFQUFDLENBQUNDLElBQUYsS0FBVyxNQUFmLEVBQXVCO0FBQ3ZCLGtCQUFNQyxFQUFFLEdBQUcsb0JBQU1qQixLQUFOLEVBQWFhLElBQUksQ0FBQ0ssS0FBTCxDQUFXSixHQUFHLEdBQUMsQ0FBZixDQUFiLENBQVg7QUFDQSxrQkFBSUcsRUFBRSxDQUFDRSxHQUFILENBQU9DLFdBQVAsQ0FBSixFQUFnQlgsV0FBVyxDQUFDWSxHQUFaLENBQWdCWCxFQUFoQixFQUFtQlksR0FBbkIsQ0FBdUJQLEVBQUMsQ0FBQ1EsV0FBekI7QUFDaEIsbUNBQVVuQixNQUFNLENBQUNpQixHQUFQLENBQVdOLEVBQUMsQ0FBQ1EsV0FBYixDQUFWLEVBQXFDLHlCQUFRLFVBQUFDLENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxLQUFLSixXQUFWO0FBQUEsZUFBVCxFQUF3QkgsRUFBeEIsQ0FBckM7QUFDQTtBQU5pQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT2xDO0FBUnVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTeEM7QUFmb0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQnJFLE1BQUlRLE9BQU8sR0FBRyxJQUFkOztBQUNBLFNBQU9BLE9BQVAsRUFBZ0I7QUFDZkEsSUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFEZTtBQUFBO0FBQUE7O0FBQUE7QUFFZiw0QkFBZ0J0QixXQUFXLENBQUNLLElBQVosRUFBaEIsbUlBQW9DO0FBQUEsWUFBekJFLENBQXlCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ25DLGdDQUFnQkQsV0FBVyxDQUFDWSxHQUFaLENBQWdCWCxDQUFoQixDQUFoQixtSUFBb0M7QUFBQSxnQkFBekJLLENBQXlCO0FBQ25DVSxZQUFBQSxPQUFPLElBQUkscUJBQVVyQixNQUFNLENBQUNpQixHQUFQLENBQVdOLENBQVgsQ0FBVixFQUF5QlgsTUFBTSxDQUFDaUIsR0FBUCxDQUFXWCxDQUFYLENBQXpCLENBQVg7QUFDQTtBQUhrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSW5DO0FBTmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9mOztBQUVELFNBQU9OLE1BQVA7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgLCBtYXAgLCBmaWx0ZXIgLCBlbnVtZXJhdGUgLCByYW5nZSB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IHsgc2V0YWRkYWxsIH0gZnJvbSAnLi4vdXRpbCcgO1xuXG5pbXBvcnQgZmlyc3QgZnJvbSAnLi9maXJzdCcgO1xuXG5pbXBvcnQgeyBFVyB9IGZyb20gJy4uL2dyYW1tYXInO1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBGT0xMT1cgdGFibGUgZm9yIGFsbCBub250ZXJtaW5hbHMuXG4gKlxuICogQHBhcmFtIHtNYXB9IEZJUlNUIC0gVGhlIEZJUlNUIHRhYmxlIGFzIGNvbXB1dGVkIGJ5IHtAbGluayBsbDEjX2ZpcnN0fVxuICogQHBhcmFtIHtTdHJpbmd9IHN0YXJ0IC0gVGhlIHN0YXJ0aW5nIG5vbnRlcm1pbmFsLlxuICogQHBhcmFtIHtPYmplY3R9IGVvZiAtIFRoZSBlbmQtb2YtZmlsZSBzeW1ib2wuXG4gKiBAcGFyYW0ge01hcH0gcHJvZHVjdGlvbnMgLSBUaGUgcHJvZHVjdGlvbnMgbWFwLlxuICogQHJldHVybnMge01hcH0gVGhlIEZPTExPVyB0YWJsZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2ZvbGxvdyAoIEZJUlNUICwgc3RhcnQgLCBlb2YgLCBwcm9kdWN0aW9ucyApIHtcblxuXHRjb25zdCBGT0xMT1cgPSBuZXcgTWFwKCBtYXAoIGkgPT4gWyBpICwgbmV3IFNldCggaSA9PT0gc3RhcnQgPyBbZW9mXSA6IFtdKSBdICwgcHJvZHVjdGlvbnMua2V5cygpICkgKSA7XG5cblx0Y29uc3QgY291bGRiZWxhc3QgPSBuZXcgTWFwKCBtYXAoIGkgPT4gWyBpICwgbmV3IFNldCgpIF0gLCBwcm9kdWN0aW9ucy5rZXlzKCkgKSkgO1xuXG5cdGZvciAoY29uc3QgWyBBICwgcnVsZXMgXSBvZiBwcm9kdWN0aW9ucykge1xuXHRcdGZvciAoY29uc3QgcnVsZSBvZiBydWxlcy52YWx1ZXMoKSkge1xuXHRcdFx0Zm9yIChjb25zdCBbIHBvcyAsIEIgXSBvZiBlbnVtZXJhdGUocnVsZSkpIHtcblx0XHRcdFx0aWYgKEIudHlwZSA9PT0gJ2xlYWYnKSBjb250aW51ZSA7XG5cdFx0XHRcdGNvbnN0IGZpID0gZmlyc3QoRklSU1QsIHJ1bGUuc2xpY2UocG9zKzEpKTtcblx0XHRcdFx0aWYgKGZpLmhhcyhFVykpIGNvdWxkYmVsYXN0LmdldChBKS5hZGQoQi5ub250ZXJtaW5hbCk7XG5cdFx0XHRcdHNldGFkZGFsbChGT0xMT1cuZ2V0KEIubm9udGVybWluYWwpLCBmaWx0ZXIoIHggPT4geCAhPT0gRVcgLCBmaSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGxldCB1cGRhdGVkID0gdHJ1ZTtcblx0d2hpbGUgKHVwZGF0ZWQpIHtcblx0XHR1cGRhdGVkID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBBIG9mIHByb2R1Y3Rpb25zLmtleXMoKSkge1xuXHRcdFx0Zm9yIChjb25zdCBCIG9mIGNvdWxkYmVsYXN0LmdldChBKSkge1xuXHRcdFx0XHR1cGRhdGVkIHw9IHNldGFkZGFsbChGT0xMT1cuZ2V0KEIpLCBGT0xMT1cuZ2V0KEEpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gRk9MTE9XO1xuXG59XG4iXX0=