"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setaddall;

var _setadd = _interopRequireDefault(require("./setadd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      changed |= (0, _setadd.default)(set, element);
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

  return changed;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3NldGFkZGFsbC5qcyJdLCJuYW1lcyI6WyJzZXRhZGRhbGwiLCJzZXQiLCJpdGVyYWJsZSIsImNoYW5nZWQiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxTQUFULENBQXFCQyxHQUFyQixFQUEyQkMsUUFBM0IsRUFBc0M7QUFDcEQsTUFBSUMsT0FBTyxHQUFHLEtBQWQ7QUFEb0Q7QUFBQTtBQUFBOztBQUFBO0FBRXBELHlCQUFzQkQsUUFBdEI7QUFBQSxVQUFXRSxPQUFYO0FBQWdDRCxNQUFBQSxPQUFPLElBQUkscUJBQU9GLEdBQVAsRUFBWUcsT0FBWixDQUFYO0FBQWhDO0FBRm9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR3BELFNBQU9ELE9BQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXRhZGQgZnJvbSAnLi9zZXRhZGQnIDtcblxuLyoqXG4gKiBBZGRzIGFsbCBlbGVtZW50cyBvZiBhbiBpdGVyYWJsZSB0byBhIHNldCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZSBzZXQgaGFzXG4gKiBjaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U2V0fSBzZXQgLSBUaGUgc2V0IHRvIGFkZCB0by5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIC0gVGhlIGl0ZXJhYmxlIG9mIGVsZW1lbnRzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge0Jvb2xlYW59IFdoZXRoZXIgPGNvZGU+c2V0PC9jb2RlPiBoYXMgY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0YWRkYWxsICggc2V0ICwgaXRlcmFibGUgKSB7XG5cdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBpdGVyYWJsZSkgY2hhbmdlZCB8PSBzZXRhZGQoc2V0LCBlbGVtZW50KTtcblx0cmV0dXJuIGNoYW5nZWQ7XG59XG4iXX0=