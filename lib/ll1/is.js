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
  var productions = _ref.productions;
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

  var pho = (0, _follow2.default)(phi, productions);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvaXMuanMiXSwibmFtZXMiOlsiaXMiLCJwcm9kdWN0aW9ucyIsInBoaSIsIkZJUlNUIiwicnVsZSIsImNvbnRhaW5zZHVwbGljYXRlcyIsImFycmF5IiwiU2V0Iiwic2l6ZSIsImxlbmd0aCIsInJ1bGVzIiwidmFsdWVzIiwicGhvIiwiRk9MTE9XIiwiQSIsImdldCIsImRmbHQiLCJ5aWVsZHNFVyIsImhhcyIsIkVXIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBV0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQU1lLFNBQVNBLEVBQVQsT0FBZ0M7QUFBQSxNQUFoQkMsV0FBZ0IsUUFBaEJBLFdBQWdCO0FBRTlDLE1BQU1DLEdBQUcsR0FBRyxxQkFBT0QsV0FBUCxDQUFaOztBQUVBLE1BQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLElBQUk7QUFBQSxXQUFJLHFCQUFNRixHQUFOLEVBQVdFLElBQVgsQ0FBSjtBQUFBLEdBQWxCLENBSjhDLENBTTlDOzs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLEtBQUs7QUFBQSxXQUFLLElBQUlDLEdBQUosQ0FBUUQsS0FBUixDQUFELENBQWlCRSxJQUFqQixLQUEwQkYsS0FBSyxDQUFDRyxNQUFwQztBQUFBLEdBQWhDLENBUDhDLENBUzlDO0FBQ0E7OztBQUVBLE1BQUssc0JBQ0osc0JBQ0MsVUFBQUMsS0FBSztBQUFBLFdBQUlMLGtCQUFrQixDQUMxQix1QkFBTSx3QkFBTyxzQkFBS0YsS0FBTCxFQUFhTyxLQUFLLENBQUNDLE1BQU4sRUFBYixDQUFQLENBQU4sQ0FEMEIsQ0FBdEI7QUFBQSxHQUROLEVBSUNWLFdBQVcsQ0FBQ1UsTUFBWixFQUpELENBREksQ0FBTCxFQU9JLE9BQU8sS0FBUCxDQW5CMEMsQ0FxQjlDO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsc0JBQVFWLEdBQVIsRUFBYUQsV0FBYixDQUFaOztBQUVBLE1BQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLENBQUM7QUFBQSxXQUFJRixHQUFHLENBQUNHLEdBQUosQ0FBUUQsQ0FBUixDQUFKO0FBQUEsR0FBaEI7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLEVBQWIsQ0E3QjhDLENBNkI3Qjs7QUE3QjZCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQStCakNGLENBL0JpQztBQUFBLFVBK0I5QkosS0EvQjhCOztBQWlDN0MsVUFBTU8sUUFBUSxHQUFHLHVCQUFNLHVCQUFNLHlCQUFRLFVBQUFiLElBQUk7QUFBQSxlQUFJRCxLQUFLLENBQUNDLElBQUQsQ0FBTCxDQUFZYyxHQUFaLENBQWdCQyxXQUFoQixDQUFKO0FBQUEsT0FBWixFQUFxQ1QsS0FBSyxDQUFDQyxNQUFOLEVBQXJDLENBQU4sQ0FBTixFQUFzRUssSUFBdEUsQ0FBakI7QUFFQSxVQUFJQyxRQUFRLEtBQUtELElBQWpCLEVBQXVCO0FBRXZCLFVBQUssc0JBQ0osc0JBQ0MsVUFBQVosSUFBSTtBQUFBLGVBQUlDLGtCQUFrQixDQUN6Qix1QkFBTSx3QkFBTyxDQUFFRixLQUFLLENBQUNDLElBQUQsQ0FBUCxFQUFnQlMsTUFBTSxDQUFDQyxDQUFELENBQXRCLENBQVAsQ0FBTixDQUR5QixDQUF0QjtBQUFBLE9BREwsRUFJQyx5QkFBTyxVQUFBVixJQUFJO0FBQUEsZUFBSUEsSUFBSSxLQUFLYSxRQUFiO0FBQUEsT0FBWCxFQUFrQ1AsS0FBSyxDQUFDQyxNQUFOLEVBQWxDLENBSkQsQ0FESSxDQUFMLEVBT0k7QUFBQSxXQUFPO0FBQVA7QUE1Q3lDOztBQStCOUMseUJBQTBCVixXQUExQiw4SEFBd0M7QUFBQTs7QUFBQTtBQUFBO0FBSWhCOztBQUpnQjtBQUFBO0FBQUE7QUFldkM7QUE5QzZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0Q5QyxTQUFPLElBQVA7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGFueSAsXG5cdG1hcCAsXG5cdGxpc3QgLFxuXHRjaGFpbiAsXG5cdGVudW1lcmF0ZSAsXG5cdG5leHQgLFxuXHRpdGVyICxcblx0ZmlsdGVyICxcbn0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgX2ZpcnN0IGZyb20gJy4vX2ZpcnN0JyA7XG5pbXBvcnQgX2ZvbGxvdyBmcm9tICcuL19mb2xsb3cnIDtcbmltcG9ydCBmaXJzdCBmcm9tICcuL2ZpcnN0JyA7XG5pbXBvcnQgeyBFVyB9IGZyb20gJy4uL2dyYW1tYXInIDtcblxuLyoqXG4gKiBDaGVjayBpZiBncmFtbWFyIGlzIGxsKDEpLlxuICpcbiAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzICggeyBwcm9kdWN0aW9ucyB9ICkge1xuXG5cdGNvbnN0IHBoaSA9IF9maXJzdChwcm9kdWN0aW9ucyk7XG5cblx0Y29uc3QgRklSU1QgPSBydWxlID0+IGZpcnN0KHBoaSwgcnVsZSk7XG5cblx0Ly8gVE9ETyB0aGlzIGlzIHN0dXBpZFxuXHRjb25zdCBjb250YWluc2R1cGxpY2F0ZXMgPSBhcnJheSA9PiAobmV3IFNldChhcnJheSkpLnNpemUgIT09IGFycmF5Lmxlbmd0aDtcblxuXHQvLyBEcmFnb24gQm9vayAoMjAwNikgcGFnZSAyMjQ6IEZvciBldmVyeSBBLCBhLCBiIHN1Y2ggdGhhdCBBID0+IGEgfCBiXG5cdC8vIGBgLi4uIEZJUlNUKGEpIGFuZCBGSVJTVChiKSBhcmUgZGlzam9pbnQgc2V0cy4nJ1xuXG5cdGlmICggYW55KFxuXHRcdG1hcChcblx0XHRcdHJ1bGVzID0+IGNvbnRhaW5zZHVwbGljYXRlcyhcblx0XHRcdFx0bGlzdCggY2hhaW4oIG1hcCggRklSU1QgLCBydWxlcy52YWx1ZXMoKSApICkgKVxuXHRcdFx0KSAsXG5cdFx0XHRwcm9kdWN0aW9ucy52YWx1ZXMoKVxuXHRcdClcblx0KSApIHJldHVybiBmYWxzZSA7XG5cblx0Ly8gICBhbmQgYGAuLi4gaWYgdGhlIGVtcHR5XG5cdC8vICAgd29yZCBpcyBpbiBGSVJTVChiKSwgdGhlbiBGSVJTVChhKSBhbmQgRk9MTE9XKEEpIGFyZSBkaXNqb2ludCBzZXRzLFxuXHQvLyAgIGFuZCBsaWtld2lzZSBpZiB0aGUgZW1wdHkgd29yZCBpcyBpbiBGSVJTVChhKS4nJ1xuXG5cdGNvbnN0IHBobyA9IF9mb2xsb3cocGhpLCBwcm9kdWN0aW9ucyk7XG5cblx0Y29uc3QgRk9MTE9XID0gQSA9PiBwaG8uZ2V0KEEpO1xuXG5cdGNvbnN0IGRmbHQgPSB7fTsgLy8gZHVtbXkgb2JqZWN0XG5cblx0Zm9yICggY29uc3QgW0EsIHJ1bGVzXSBvZiBwcm9kdWN0aW9ucyApIHtcblxuXHRcdGNvbnN0IHlpZWxkc0VXID0gbmV4dCggaXRlciggZmlsdGVyKCBydWxlID0+IEZJUlNUKHJ1bGUpLmhhcyhFVyksIHJ1bGVzLnZhbHVlcygpICkgKSAsIGRmbHQgKTtcblxuXHRcdGlmICh5aWVsZHNFVyA9PT0gZGZsdCkgY29udGludWU7XG5cblx0XHRpZiAoIGFueSAoXG5cdFx0XHRtYXAgKFxuXHRcdFx0XHRydWxlID0+IGNvbnRhaW5zZHVwbGljYXRlcyhcblx0XHRcdFx0XHRsaXN0KCBjaGFpbiggWyBGSVJTVChydWxlKSAsIEZPTExPVyhBKSBdICkgKVxuXHRcdFx0XHQpICxcblx0XHRcdFx0ZmlsdGVyKHJ1bGUgPT4gcnVsZSAhPT0geWllbGRzRVcsIHJ1bGVzLnZhbHVlcygpKVxuXHRcdFx0KVxuXHRcdCkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcblxufVxuIl19