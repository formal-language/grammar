"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;

var _Children = _interopRequireDefault(require("./Children"));

var _cmap = _interopRequireDefault(require("./cmap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Applies a given callable to each of the child of a given children async iterable.
 *
 * @param {Function} callable - The callable to use.
 * @param {AsyncIterable} children - The input children.
 * @returns {AsyncIterator}
 */
function map(callable, children) {
  var iterator = (0, _cmap.default)(callable, children)[Symbol.asyncIterator]();
  return new _Children.default(iterator, undefined);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvbWFwLmpzIl0sIm5hbWVzIjpbIm1hcCIsImNhbGxhYmxlIiwiY2hpbGRyZW4iLCJpdGVyYXRvciIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJDaGlsZHJlbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7Ozs7Ozs7QUFPZSxTQUFTQSxHQUFULENBQWVDLFFBQWYsRUFBMEJDLFFBQTFCLEVBQXFDO0FBRW5ELE1BQU1DLFFBQVEsR0FBRyxtQkFBTUYsUUFBTixFQUFpQkMsUUFBakIsRUFBNEJFLE1BQU0sQ0FBQ0MsYUFBbkMsR0FBakI7QUFFQSxTQUFPLElBQUlDLGlCQUFKLENBQWNILFFBQWQsRUFBeUJJLFNBQXpCLENBQVA7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGlsZHJlbiBmcm9tICcuL0NoaWxkcmVuJyA7XG5pbXBvcnQgY21hcCBmcm9tICcuL2NtYXAnIDtcblxuLyoqXG4gKiBBcHBsaWVzIGEgZ2l2ZW4gY2FsbGFibGUgdG8gZWFjaCBvZiB0aGUgY2hpbGQgb2YgYSBnaXZlbiBjaGlsZHJlbiBhc3luYyBpdGVyYWJsZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYWJsZSAtIFRoZSBjYWxsYWJsZSB0byB1c2UuXG4gKiBAcGFyYW0ge0FzeW5jSXRlcmFibGV9IGNoaWxkcmVuIC0gVGhlIGlucHV0IGNoaWxkcmVuLlxuICogQHJldHVybnMge0FzeW5jSXRlcmF0b3J9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCAoIGNhbGxhYmxlICwgY2hpbGRyZW4gKSB7XG5cblx0Y29uc3QgaXRlcmF0b3IgPSBjbWFwKCBjYWxsYWJsZSAsIGNoaWxkcmVuIClbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgO1xuXG5cdHJldHVybiBuZXcgQ2hpbGRyZW4oIGl0ZXJhdG9yICwgdW5kZWZpbmVkICkgO1xuXG59XG4iXX0=