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
 * @param start
 * @param eof
 * @param productions
 * @returns {Map}
 */
function compile(start, eof, productions) {
  return new Map((0, _compile2.default)(start, eof, productions));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwic3RhcnQiLCJlb2YiLCJwcm9kdWN0aW9ucyIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7OztBQVNlLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QkMsV0FBOUIsRUFBMkM7QUFDekQsU0FBTyxJQUFJQyxHQUFKLENBQVEsdUJBQVNILEtBQVQsRUFBZ0JDLEdBQWhCLEVBQXFCQyxXQUFyQixDQUFSLENBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfY29tcGlsZSBmcm9tICcuL19jb21waWxlJyA7XG5cbi8qKlxuICogQ29tcGlsZXMgdGhlIHByZWRpY3RpdmUgcGFyc2luZyB0YWJsZSBmb3IgYSBncmFtbWFyLlxuICogQ29ycmVzcG9uZHMgdG8gQWxnb3JpdGhtIDQuMzEgaW4gRHJhZ29uIEJvb2sgKDIwMDYpIG9uIHBhZ2UgMjI0LlxuICpcbiAqIEBwYXJhbSBzdGFydFxuICogQHBhcmFtIGVvZlxuICogQHBhcmFtIHByb2R1Y3Rpb25zXG4gKiBAcmV0dXJucyB7TWFwfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21waWxlIChzdGFydCwgZW9mLCBwcm9kdWN0aW9ucykge1xuXHRyZXR1cm4gbmV3IE1hcChfY29tcGlsZShzdGFydCwgZW9mLCBwcm9kdWN0aW9ucykpO1xufVxuIl19