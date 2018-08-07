"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = follow;

var _jsItertools = require("@aureooms/js-itertools");

var _first = _interopRequireDefault(require("./first"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate FOLLOW set for any rule given the FOLLOW sets for the nonterminals.
 *
 * @param {Array} FOLLOW
 * @param {Array} rule
 * @returns {Set}
 */
function follow(FOLLOW, rule) {
  return (0, _first.default)(FOLLOW, (0, _jsItertools.reversed)(rule));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZm9sbG93LmpzIl0sIm5hbWVzIjpbImZvbGxvdyIsIkZPTExPVyIsInJ1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBOzs7Ozs7O0FBT2UsU0FBU0EsTUFBVCxDQUFrQkMsTUFBbEIsRUFBMkJDLElBQTNCLEVBQWtDO0FBQ2hELFNBQU8sb0JBQU9ELE1BQVAsRUFBZ0IsMkJBQVNDLElBQVQsQ0FBaEIsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmV2ZXJzZWQgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgZmlyc3QgZnJvbSAnLi9maXJzdCcgO1xuXG4vKipcbiAqIEdlbmVyYXRlIEZPTExPVyBzZXQgZm9yIGFueSBydWxlIGdpdmVuIHRoZSBGT0xMT1cgc2V0cyBmb3IgdGhlIG5vbnRlcm1pbmFscy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBGT0xMT1dcbiAqIEBwYXJhbSB7QXJyYXl9IHJ1bGVcbiAqIEByZXR1cm5zIHtTZXR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvbGxvdyAoIEZPTExPVyAsIHJ1bGUgKSB7XG5cdHJldHVybiBmaXJzdCggRk9MTE9XICwgcmV2ZXJzZWQocnVsZSkpIDtcbn1cbiJdfQ==