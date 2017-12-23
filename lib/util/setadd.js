"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setadd = setadd;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3NldGFkZC5qcyJdLCJuYW1lcyI6WyJzZXRhZGQiLCJzZXQiLCJlbGVtZW50IiwiaGFzIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsTSxHQUFBQSxNO0FBUGhCOzs7Ozs7O0FBT08sU0FBU0EsTUFBVCxDQUFrQkMsR0FBbEIsRUFBd0JDLE9BQXhCLEVBQWtDO0FBQ3hDLE1BQUtELElBQUlFLEdBQUosQ0FBUUQsT0FBUixDQUFMLEVBQXdCLE9BQU8sS0FBUDtBQUN4QkQsTUFBSUcsR0FBSixDQUFRRixPQUFSO0FBQ0EsU0FBTyxJQUFQO0FBQ0EiLCJmaWxlIjoic2V0YWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBZGRzIGFuIGVsZW1lbnQgdG8gYSBzZXQgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGUgc2V0IGhhcyBjaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U2V0fSBzZXQgLSBUaGUgc2V0IHRvIGFkZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciA8Y29kZT5zZXQ8L2NvZGU+IGhhcyBjaGFuZ2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0YWRkICggc2V0ICwgZWxlbWVudCApIHtcblx0aWYgKCBzZXQuaGFzKGVsZW1lbnQpICkgcmV0dXJuIGZhbHNlIDtcblx0c2V0LmFkZChlbGVtZW50KTtcblx0cmV0dXJuIHRydWU7XG59XG4iXX0=