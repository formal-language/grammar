"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _compile2 = _interopRequireDefault(require("./_compile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compiles the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param {Map} productions
 * @returns {Map}
 */
function compile(productions) {
  return new Map((0, _compile2.default)(productions));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwicHJvZHVjdGlvbnMiLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7O0FBT2UsU0FBU0EsT0FBVCxDQUFrQkMsV0FBbEIsRUFBK0I7QUFDN0MsU0FBTyxJQUFJQyxHQUFKLENBQVEsdUJBQVNELFdBQVQsQ0FBUixDQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2NvbXBpbGUgZnJvbSAnLi9fY29tcGlsZScgO1xuXG4vKipcbiAqIENvbXBpbGVzIHRoZSBwcmVkaWN0aXZlIHBhcnNpbmcgdGFibGUgZm9yIGEgZ3JhbW1hci5cbiAqIENvcnJlc3BvbmRzIHRvIEFsZ29yaXRobSA0LjMxIGluIERyYWdvbiBCb29rICgyMDA2KSBvbiBwYWdlIDIyNC5cbiAqXG4gKiBAcGFyYW0ge01hcH0gcHJvZHVjdGlvbnNcbiAqIEByZXR1cm5zIHtNYXB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBpbGUgKHByb2R1Y3Rpb25zKSB7XG5cdHJldHVybiBuZXcgTWFwKF9jb21waWxlKHByb2R1Y3Rpb25zKSk7XG59XG4iXX0=