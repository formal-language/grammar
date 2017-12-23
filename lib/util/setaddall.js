'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setaddall = setaddall;

var _setadd = require('./setadd');

/**
 * Adds all elements of an iterable to a set and returns true if the set has
 * changed.
 *
 * @param {Set} set - The set to add to.
 * @param {Iterable} iterable - The iterable of elements to add to the set.
 * @returns {Boolean} Whether <code>set</code> has changed.
 */
function setaddall(set, iterable) {
  var changed = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;
      changed |= (0, _setadd.setadd)(set, element);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return changed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3NldGFkZGFsbC5qcyJdLCJuYW1lcyI6WyJzZXRhZGRhbGwiLCJzZXQiLCJpdGVyYWJsZSIsImNoYW5nZWQiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7OztRQVVnQkEsUyxHQUFBQSxTOztBQVZoQjs7QUFFQTs7Ozs7Ozs7QUFRTyxTQUFTQSxTQUFULENBQXFCQyxHQUFyQixFQUEyQkMsUUFBM0IsRUFBc0M7QUFDNUMsTUFBSUMsVUFBVSxLQUFkO0FBRDRDO0FBQUE7QUFBQTs7QUFBQTtBQUU1Qyx5QkFBc0JELFFBQXRCO0FBQUEsVUFBV0UsT0FBWDtBQUFnQ0QsaUJBQVcsb0JBQU9GLEdBQVAsRUFBWUcsT0FBWixDQUFYO0FBQWhDO0FBRjRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRzVDLFNBQU9ELE9BQVA7QUFDQSIsImZpbGUiOiJzZXRhZGRhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXRhZGQgfSBmcm9tICcuL3NldGFkZCcgO1xuXG4vKipcbiAqIEFkZHMgYWxsIGVsZW1lbnRzIG9mIGFuIGl0ZXJhYmxlIHRvIGEgc2V0IGFuZCByZXR1cm5zIHRydWUgaWYgdGhlIHNldCBoYXNcbiAqIGNoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTZXR9IHNldCAtIFRoZSBzZXQgdG8gYWRkIHRvLlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgLSBUaGUgaXRlcmFibGUgb2YgZWxlbWVudHMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciA8Y29kZT5zZXQ8L2NvZGU+IGhhcyBjaGFuZ2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0YWRkYWxsICggc2V0ICwgaXRlcmFibGUgKSB7XG5cdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBpdGVyYWJsZSkgY2hhbmdlZCB8PSBzZXRhZGQoc2V0LCBlbGVtZW50KTtcblx0cmV0dXJuIGNoYW5nZWQ7XG59XG4iXX0=