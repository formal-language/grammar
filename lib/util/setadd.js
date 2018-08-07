"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setadd;

/**
 * Adds an element to a set and returns true if the set has changed.
 *
 * @param {Set} set - The set to add to.
 * @param {Object} element - The element to add to the set.
 * @returns {Boolean} Whether <code>set</code> has changed.
 */
function setadd(set, element) {
  if (set.has(element)) return false;
  set.add(element);
  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3NldGFkZC5qcyJdLCJuYW1lcyI6WyJzZXRhZGQiLCJzZXQiLCJlbGVtZW50IiwiaGFzIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7QUFPZSxTQUFTQSxNQUFULENBQWtCQyxHQUFsQixFQUF3QkMsT0FBeEIsRUFBa0M7QUFDaEQsTUFBS0QsR0FBRyxDQUFDRSxHQUFKLENBQVFELE9BQVIsQ0FBTCxFQUF3QixPQUFPLEtBQVA7QUFDeEJELEVBQUFBLEdBQUcsQ0FBQ0csR0FBSixDQUFRRixPQUFSO0FBQ0EsU0FBTyxJQUFQO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFkZHMgYW4gZWxlbWVudCB0byBhIHNldCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZSBzZXQgaGFzIGNoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTZXR9IHNldCAtIFRoZSBzZXQgdG8gYWRkIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIDxjb2RlPnNldDwvY29kZT4gaGFzIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldGFkZCAoIHNldCAsIGVsZW1lbnQgKSB7XG5cdGlmICggc2V0LmhhcyhlbGVtZW50KSApIHJldHVybiBmYWxzZSA7XG5cdHNldC5hZGQoZWxlbWVudCk7XG5cdHJldHVybiB0cnVlO1xufVxuIl19