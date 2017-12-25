'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setaddall;

var _setadd = require('./setadd');

var _setadd2 = _interopRequireDefault(_setadd);

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
      changed |= (0, _setadd2.default)(set, element);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3NldGFkZGFsbC5qcyJdLCJuYW1lcyI6WyJzZXRhZGRhbGwiLCJzZXQiLCJpdGVyYWJsZSIsImNoYW5nZWQiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFVd0JBLFM7O0FBVnhCOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRZSxTQUFTQSxTQUFULENBQXFCQyxHQUFyQixFQUEyQkMsUUFBM0IsRUFBc0M7QUFDcEQsTUFBSUMsVUFBVSxLQUFkO0FBRG9EO0FBQUE7QUFBQTs7QUFBQTtBQUVwRCx5QkFBc0JELFFBQXRCO0FBQUEsVUFBV0UsT0FBWDtBQUFnQ0QsaUJBQVcsc0JBQU9GLEdBQVAsRUFBWUcsT0FBWixDQUFYO0FBQWhDO0FBRm9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR3BELFNBQU9ELE9BQVA7QUFDQSIsImZpbGUiOiJzZXRhZGRhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2V0YWRkIGZyb20gJy4vc2V0YWRkJyA7XG5cbi8qKlxuICogQWRkcyBhbGwgZWxlbWVudHMgb2YgYW4gaXRlcmFibGUgdG8gYSBzZXQgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGUgc2V0IGhhc1xuICogY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1NldH0gc2V0IC0gVGhlIHNldCB0byBhZGQgdG8uXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSAtIFRoZSBpdGVyYWJsZSBvZiBlbGVtZW50cyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIDxjb2RlPnNldDwvY29kZT4gaGFzIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldGFkZGFsbCAoIHNldCAsIGl0ZXJhYmxlICkge1xuXHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaXRlcmFibGUpIGNoYW5nZWQgfD0gc2V0YWRkKHNldCwgZWxlbWVudCk7XG5cdHJldHVybiBjaGFuZ2VkO1xufVxuIl19