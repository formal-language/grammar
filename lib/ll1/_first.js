"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _first;

var _jsItertools = require("@aureooms/js-itertools");

var _util = require("../util");

var _grammar = require("../grammar");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Computes FIRST table for grammar nonterminals.
 *
 * @param productions
 * @returns {Map}
 */
function _first(productions) {
  var FIRST = new Map((0, _jsItertools.map)(function (key) {
    return [key, new Set()];
  }, productions.keys()));
  var updated = true;

  while (updated) {
    updated = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = productions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            i = _step$value[0],
            rules = _step$value[1];

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = rules.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var rule = _step2.value;
            var read = true;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = rule[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var x = _step3.value;
                if (!read) break;
                read = false;
                if (x.type === 'leaf') updated |= (0, _util.setadd)(FIRST.get(i), x.terminal);else {
                  updated |= (0, _util.setaddall)(FIRST.get(i), (0, _jsItertools.filter)(function (y) {
                    return y !== _grammar.EW;
                  }, FIRST.get(x.nonterminal)));
                  read |= (0, _jsItertools.any)((0, _jsItertools.map)(function (y) {
                    return y === _grammar.EW;
                  }, FIRST.get(x.nonterminal)));
                }
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

            if (read) updated |= (0, _util.setadd)(FIRST.get(i), _grammar.EW);
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
  }

  return FIRST;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvX2ZpcnN0LmpzIl0sIm5hbWVzIjpbIl9maXJzdCIsInByb2R1Y3Rpb25zIiwiRklSU1QiLCJNYXAiLCJrZXkiLCJTZXQiLCJrZXlzIiwidXBkYXRlZCIsImkiLCJydWxlcyIsInZhbHVlcyIsInJ1bGUiLCJyZWFkIiwieCIsInR5cGUiLCJnZXQiLCJ0ZXJtaW5hbCIsInkiLCJFVyIsIm5vbnRlcm1pbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsTUFBVCxDQUFrQkMsV0FBbEIsRUFBZ0M7QUFFOUMsTUFBTUMsS0FBSyxHQUFHLElBQUlDLEdBQUosQ0FBUyxzQkFBSyxVQUFBQyxHQUFHO0FBQUEsV0FBSSxDQUFFQSxHQUFGLEVBQVEsSUFBSUMsR0FBSixFQUFSLENBQUo7QUFBQSxHQUFSLEVBQWtDSixXQUFXLENBQUNLLElBQVosRUFBbEMsQ0FBVCxDQUFkO0FBRUEsTUFBSUMsT0FBTyxHQUFHLElBQWQ7O0FBRUEsU0FBT0EsT0FBUCxFQUFnQjtBQUVmQSxJQUFBQSxPQUFPLEdBQUcsS0FBVjtBQUZlO0FBQUE7QUFBQTs7QUFBQTtBQUlmLDJCQUF5Qk4sV0FBekIsOEhBQXNDO0FBQUE7QUFBQSxZQUExQk8sQ0FBMEI7QUFBQSxZQUF2QkMsS0FBdUI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRXJDLGdDQUFtQkEsS0FBSyxDQUFDQyxNQUFOLEVBQW5CLG1JQUFtQztBQUFBLGdCQUF4QkMsSUFBd0I7QUFFbEMsZ0JBQUlDLElBQUksR0FBRyxJQUFYO0FBRmtDO0FBQUE7QUFBQTs7QUFBQTtBQUlsQyxvQ0FBaUJELElBQWpCLG1JQUF3QjtBQUFBLG9CQUFaRSxDQUFZO0FBRXZCLG9CQUFJLENBQUNELElBQUwsRUFBVztBQUFPQSxnQkFBQUEsSUFBSSxHQUFHLEtBQVA7QUFFbEIsb0JBQUtDLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE1BQWhCLEVBQXlCUCxPQUFPLElBQUksa0JBQVFMLEtBQUssQ0FBQ2EsR0FBTixDQUFVUCxDQUFWLENBQVIsRUFBc0JLLENBQUMsQ0FBQ0csUUFBeEIsQ0FBWCxDQUF6QixLQUNLO0FBQ0pULGtCQUFBQSxPQUFPLElBQUkscUJBQVVMLEtBQUssQ0FBQ2EsR0FBTixDQUFVUCxDQUFWLENBQVYsRUFBd0IseUJBQU8sVUFBQVMsQ0FBQztBQUFBLDJCQUFJQSxDQUFDLEtBQUtDLFdBQVY7QUFBQSxtQkFBUixFQUFzQmhCLEtBQUssQ0FBQ2EsR0FBTixDQUFVRixDQUFDLENBQUNNLFdBQVosQ0FBdEIsQ0FBeEIsQ0FBWDtBQUNBUCxrQkFBQUEsSUFBSSxJQUFJLHNCQUFJLHNCQUFJLFVBQUFLLENBQUM7QUFBQSwyQkFBSUEsQ0FBQyxLQUFLQyxXQUFWO0FBQUEsbUJBQUwsRUFBbUJoQixLQUFLLENBQUNhLEdBQU4sQ0FBVUYsQ0FBQyxDQUFDTSxXQUFaLENBQW5CLENBQUosQ0FBUjtBQUNBO0FBRUQ7QUFkaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQmxDLGdCQUFJUCxJQUFKLEVBQVVMLE9BQU8sSUFBSSxrQkFBT0wsS0FBSyxDQUFDYSxHQUFOLENBQVVQLENBQVYsQ0FBUCxFQUFxQlUsV0FBckIsQ0FBWDtBQUNWO0FBbkJvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJyQztBQXpCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJmOztBQUVELFNBQU9oQixLQUFQO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0ICwgbWFwICwgZmlsdGVyICwgYW55IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgeyBzZXRhZGQgLCBzZXRhZGRhbGwgfSBmcm9tICcuLi91dGlsJyA7XG5cbmltcG9ydCB7IEVXIH0gZnJvbSAnLi4vZ3JhbW1hcic7XG5cbi8qKlxuICogQ29tcHV0ZXMgRklSU1QgdGFibGUgZm9yIGdyYW1tYXIgbm9udGVybWluYWxzLlxuICpcbiAqIEBwYXJhbSBwcm9kdWN0aW9uc1xuICogQHJldHVybnMge01hcH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2ZpcnN0ICggcHJvZHVjdGlvbnMgKSB7XG5cblx0Y29uc3QgRklSU1QgPSBuZXcgTWFwKCBtYXAoIGtleSA9PiBbIGtleSAsIG5ldyBTZXQoKSBdICwgcHJvZHVjdGlvbnMua2V5cygpICkgKSA7XG5cblx0bGV0IHVwZGF0ZWQgPSB0cnVlO1xuXG5cdHdoaWxlICh1cGRhdGVkKSB7XG5cblx0XHR1cGRhdGVkID0gZmFsc2U7XG5cblx0XHRmb3IgKGNvbnN0IFtpLCBydWxlc10gb2YgcHJvZHVjdGlvbnMpIHtcblxuXHRcdFx0Zm9yIChjb25zdCBydWxlIG9mIHJ1bGVzLnZhbHVlcygpKSB7XG5cblx0XHRcdFx0bGV0IHJlYWQgPSB0cnVlO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IHggb2YgcnVsZSApIHtcblxuXHRcdFx0XHRcdGlmICghcmVhZCkgYnJlYWs7IHJlYWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggeC50eXBlID09PSAnbGVhZicgKSB1cGRhdGVkIHw9IHNldGFkZCggRklSU1QuZ2V0KGkpLCB4LnRlcm1pbmFsKTtcblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHVwZGF0ZWQgfD0gc2V0YWRkYWxsKEZJUlNULmdldChpKSwgZmlsdGVyKHkgPT4geSAhPT0gRVcsIEZJUlNULmdldCh4Lm5vbnRlcm1pbmFsKSkpO1xuXHRcdFx0XHRcdFx0cmVhZCB8PSBhbnkobWFwKHkgPT4geSA9PT0gRVcsIEZJUlNULmdldCh4Lm5vbnRlcm1pbmFsKSkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlYWQpIHVwZGF0ZWQgfD0gc2V0YWRkKEZJUlNULmdldChpKSwgRVcpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gRklSU1Q7XG5cbn1cbiJdfQ==