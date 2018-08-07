"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;

var _jsItertools = require("@aureooms/js-itertools");

var _first2 = _interopRequireDefault(require("./_first"));

var _follow2 = _interopRequireDefault(require("./_follow"));

var _first3 = _interopRequireDefault(require("./first"));

var _grammar = require("../grammar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Check if grammar is ll(1).
 *
 * @param {Grammar} grammar
 * @returns {Boolean}
 */
function is(_ref) {
  var start = _ref.start,
      eof = _ref.eof,
      productions = _ref.productions;
  var phi = (0, _first2.default)(productions);

  var FIRST = function FIRST(rule) {
    return (0, _first3.default)(phi, rule);
  }; // TODO this is stupid


  var containsduplicates = function containsduplicates(array) {
    return new Set(array).size !== array.length;
  }; // Dragon Book (2006) page 224: For every A, a, b such that A => a | b
  // ``... FIRST(a) and FIRST(b) are disjoint sets.''


  if ((0, _jsItertools.any)((0, _jsItertools.map)(function (rules) {
    return containsduplicates((0, _jsItertools.list)((0, _jsItertools.chain)((0, _jsItertools.map)(FIRST, rules.values()))));
  }, productions.values()))) return false; //   and ``... if the empty
  //   word is in FIRST(b), then FIRST(a) and FOLLOW(A) are disjoint sets,
  //   and likewise if the empty word is in FIRST(a).''

  var pho = (0, _follow2.default)(phi, start, eof, productions);

  var FOLLOW = function FOLLOW(A) {
    return pho.get(A);
  };

  var dflt = {}; // dummy object

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var _step$value = _slicedToArray(_step.value, 2),
          A = _step$value[0],
          rules = _step$value[1];

      var yieldsEW = (0, _jsItertools.next)((0, _jsItertools.iter)((0, _jsItertools.filter)(function (rule) {
        return FIRST(rule).has(_grammar.EW);
      }, rules.values())), dflt);
      if (yieldsEW === dflt) return "continue";
      if ((0, _jsItertools.any)((0, _jsItertools.map)(function (rule) {
        return containsduplicates((0, _jsItertools.list)((0, _jsItertools.chain)([FIRST(rule), FOLLOW(A)])));
      }, (0, _jsItertools.filter)(function (rule) {
        return rule !== yieldsEW;
      }, rules.values())))) return {
        v: false
      };
    };

    for (var _iterator = productions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ret = _loop();

      switch (_ret) {
        case "continue":
          continue;

        default:
          if (_typeof(_ret) === "object") return _ret.v;
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

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvaXMuanMiXSwibmFtZXMiOlsiaXMiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwicGhpIiwiRklSU1QiLCJydWxlIiwiY29udGFpbnNkdXBsaWNhdGVzIiwiYXJyYXkiLCJTZXQiLCJzaXplIiwibGVuZ3RoIiwicnVsZXMiLCJ2YWx1ZXMiLCJwaG8iLCJGT0xMT1ciLCJBIiwiZ2V0IiwiZGZsdCIsInlpZWxkc0VXIiwiaGFzIiwiRVciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFXQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsRUFBVCxPQUE4QztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF0QkMsR0FBc0IsUUFBdEJBLEdBQXNCO0FBQUEsTUFBaEJDLFdBQWdCLFFBQWhCQSxXQUFnQjtBQUU1RCxNQUFNQyxHQUFHLEdBQUcscUJBQU9ELFdBQVAsQ0FBWjs7QUFFQSxNQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxJQUFJO0FBQUEsV0FBSSxxQkFBTUYsR0FBTixFQUFXRSxJQUFYLENBQUo7QUFBQSxHQUFsQixDQUo0RCxDQU01RDs7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxLQUFLO0FBQUEsV0FBSyxJQUFJQyxHQUFKLENBQVFELEtBQVIsQ0FBRCxDQUFpQkUsSUFBakIsS0FBMEJGLEtBQUssQ0FBQ0csTUFBcEM7QUFBQSxHQUFoQyxDQVA0RCxDQVM1RDtBQUNBOzs7QUFFQSxNQUFLLHNCQUNKLHNCQUNDLFVBQUFDLEtBQUs7QUFBQSxXQUFJTCxrQkFBa0IsQ0FDMUIsdUJBQU0sd0JBQU8sc0JBQUtGLEtBQUwsRUFBYU8sS0FBSyxDQUFDQyxNQUFOLEVBQWIsQ0FBUCxDQUFOLENBRDBCLENBQXRCO0FBQUEsR0FETixFQUlDVixXQUFXLENBQUNVLE1BQVosRUFKRCxDQURJLENBQUwsRUFPSSxPQUFPLEtBQVAsQ0FuQndELENBcUI1RDtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLHNCQUFRVixHQUFSLEVBQWFILEtBQWIsRUFBb0JDLEdBQXBCLEVBQXlCQyxXQUF6QixDQUFaOztBQUVBLE1BQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLENBQUM7QUFBQSxXQUFJRixHQUFHLENBQUNHLEdBQUosQ0FBUUQsQ0FBUixDQUFKO0FBQUEsR0FBaEI7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLEVBQWIsQ0E3QjRELENBNkIzQzs7QUE3QjJDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQStCL0NGLENBL0IrQztBQUFBLFVBK0I1Q0osS0EvQjRDOztBQWlDM0QsVUFBTU8sUUFBUSxHQUFHLHVCQUFNLHVCQUFNLHlCQUFRLFVBQUFiLElBQUk7QUFBQSxlQUFJRCxLQUFLLENBQUNDLElBQUQsQ0FBTCxDQUFZYyxHQUFaLENBQWdCQyxXQUFoQixDQUFKO0FBQUEsT0FBWixFQUFxQ1QsS0FBSyxDQUFDQyxNQUFOLEVBQXJDLENBQU4sQ0FBTixFQUFzRUssSUFBdEUsQ0FBakI7QUFFQSxVQUFJQyxRQUFRLEtBQUtELElBQWpCLEVBQXVCO0FBRXZCLFVBQUssc0JBQ0osc0JBQ0MsVUFBQVosSUFBSTtBQUFBLGVBQUlDLGtCQUFrQixDQUN6Qix1QkFBTSx3QkFBTyxDQUFFRixLQUFLLENBQUNDLElBQUQsQ0FBUCxFQUFnQlMsTUFBTSxDQUFDQyxDQUFELENBQXRCLENBQVAsQ0FBTixDQUR5QixDQUF0QjtBQUFBLE9BREwsRUFJQyx5QkFBTyxVQUFBVixJQUFJO0FBQUEsZUFBSUEsSUFBSSxLQUFLYSxRQUFiO0FBQUEsT0FBWCxFQUFrQ1AsS0FBSyxDQUFDQyxNQUFOLEVBQWxDLENBSkQsQ0FESSxDQUFMLEVBT0k7QUFBQSxXQUFPO0FBQVA7QUE1Q3VEOztBQStCNUQseUJBQTBCVixXQUExQiw4SEFBd0M7QUFBQTs7QUFBQTtBQUFBO0FBSWhCOztBQUpnQjtBQUFBO0FBQUE7QUFldkM7QUE5QzJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0Q1RCxTQUFPLElBQVA7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGFueSAsXG5cdG1hcCAsXG5cdGxpc3QgLFxuXHRjaGFpbiAsXG5cdGVudW1lcmF0ZSAsXG5cdG5leHQgLFxuXHRpdGVyICxcblx0ZmlsdGVyICxcbn0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgX2ZpcnN0IGZyb20gJy4vX2ZpcnN0JyA7XG5pbXBvcnQgX2ZvbGxvdyBmcm9tICcuL19mb2xsb3cnIDtcbmltcG9ydCBmaXJzdCBmcm9tICcuL2ZpcnN0JyA7XG5pbXBvcnQgeyBFVyB9IGZyb20gJy4uL2dyYW1tYXInIDtcblxuLyoqXG4gKiBDaGVjayBpZiBncmFtbWFyIGlzIGxsKDEpLlxuICpcbiAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzICggeyBzdGFydCAsIGVvZiAsIHByb2R1Y3Rpb25zIH0gKSB7XG5cblx0Y29uc3QgcGhpID0gX2ZpcnN0KHByb2R1Y3Rpb25zKTtcblxuXHRjb25zdCBGSVJTVCA9IHJ1bGUgPT4gZmlyc3QocGhpLCBydWxlKTtcblxuXHQvLyBUT0RPIHRoaXMgaXMgc3R1cGlkXG5cdGNvbnN0IGNvbnRhaW5zZHVwbGljYXRlcyA9IGFycmF5ID0+IChuZXcgU2V0KGFycmF5KSkuc2l6ZSAhPT0gYXJyYXkubGVuZ3RoO1xuXG5cdC8vIERyYWdvbiBCb29rICgyMDA2KSBwYWdlIDIyNDogRm9yIGV2ZXJ5IEEsIGEsIGIgc3VjaCB0aGF0IEEgPT4gYSB8IGJcblx0Ly8gYGAuLi4gRklSU1QoYSkgYW5kIEZJUlNUKGIpIGFyZSBkaXNqb2ludCBzZXRzLicnXG5cblx0aWYgKCBhbnkoXG5cdFx0bWFwKFxuXHRcdFx0cnVsZXMgPT4gY29udGFpbnNkdXBsaWNhdGVzKFxuXHRcdFx0XHRsaXN0KCBjaGFpbiggbWFwKCBGSVJTVCAsIHJ1bGVzLnZhbHVlcygpICkgKSApXG5cdFx0XHQpICxcblx0XHRcdHByb2R1Y3Rpb25zLnZhbHVlcygpXG5cdFx0KVxuXHQpICkgcmV0dXJuIGZhbHNlIDtcblxuXHQvLyAgIGFuZCBgYC4uLiBpZiB0aGUgZW1wdHlcblx0Ly8gICB3b3JkIGlzIGluIEZJUlNUKGIpLCB0aGVuIEZJUlNUKGEpIGFuZCBGT0xMT1coQSkgYXJlIGRpc2pvaW50IHNldHMsXG5cdC8vICAgYW5kIGxpa2V3aXNlIGlmIHRoZSBlbXB0eSB3b3JkIGlzIGluIEZJUlNUKGEpLicnXG5cblx0Y29uc3QgcGhvID0gX2ZvbGxvdyhwaGksIHN0YXJ0LCBlb2YsIHByb2R1Y3Rpb25zKTtcblxuXHRjb25zdCBGT0xMT1cgPSBBID0+IHBoby5nZXQoQSk7XG5cblx0Y29uc3QgZGZsdCA9IHt9OyAvLyBkdW1teSBvYmplY3RcblxuXHRmb3IgKCBjb25zdCBbQSwgcnVsZXNdIG9mIHByb2R1Y3Rpb25zICkge1xuXG5cdFx0Y29uc3QgeWllbGRzRVcgPSBuZXh0KCBpdGVyKCBmaWx0ZXIoIHJ1bGUgPT4gRklSU1QocnVsZSkuaGFzKEVXKSwgcnVsZXMudmFsdWVzKCkgKSApICwgZGZsdCApO1xuXG5cdFx0aWYgKHlpZWxkc0VXID09PSBkZmx0KSBjb250aW51ZTtcblxuXHRcdGlmICggYW55IChcblx0XHRcdG1hcCAoXG5cdFx0XHRcdHJ1bGUgPT4gY29udGFpbnNkdXBsaWNhdGVzKFxuXHRcdFx0XHRcdGxpc3QoIGNoYWluKCBbIEZJUlNUKHJ1bGUpICwgRk9MTE9XKEEpIF0gKSApXG5cdFx0XHRcdCkgLFxuXHRcdFx0XHRmaWx0ZXIocnVsZSA9PiBydWxlICE9PSB5aWVsZHNFVywgcnVsZXMudmFsdWVzKCkpXG5cdFx0XHQpXG5cdFx0KSApIHJldHVybiBmYWxzZSA7XG5cblx0fVxuXG5cdHJldHVybiB0cnVlO1xuXG59XG4iXX0=