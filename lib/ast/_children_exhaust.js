'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _children_exhaust;
/**
 * Exhausts the input children iterator.
 *
 * @param {Iterator} children - The input children iterator.
 *
 */
function _children_exhaust(children) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;

      if (child.type === 'node') _children_exhaust(child.children);
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
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvX2NoaWxkcmVuX2V4aGF1c3QuanMiXSwibmFtZXMiOlsiX2NoaWxkcmVuX2V4aGF1c3QiLCJjaGlsZHJlbiIsImNoaWxkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBTXdCQSxpQjtBQU54Qjs7Ozs7O0FBTWUsU0FBU0EsaUJBQVQsQ0FBNkJDLFFBQTdCLEVBQXdDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUV0RCx5QkFBbUJBLFFBQW5CLDhIQUE4QjtBQUFBLFVBQXBCQyxLQUFvQjs7QUFDN0IsVUFBS0EsTUFBTUMsSUFBTixLQUFlLE1BQXBCLEVBQTZCSCxrQkFBbUJFLE1BQU1ELFFBQXpCO0FBQzdCO0FBSnFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNdEQiLCJmaWxlIjoiX2NoaWxkcmVuX2V4aGF1c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4aGF1c3RzIHRoZSBpbnB1dCBjaGlsZHJlbiBpdGVyYXRvci5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBjaGlsZHJlbiAtIFRoZSBpbnB1dCBjaGlsZHJlbiBpdGVyYXRvci5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jaGlsZHJlbl9leGhhdXN0ICggY2hpbGRyZW4gKSB7XG5cblx0Zm9yICggbGV0IGNoaWxkIG9mIGNoaWxkcmVuICkge1xuXHRcdGlmICggY2hpbGQudHlwZSA9PT0gJ25vZGUnICkgX2NoaWxkcmVuX2V4aGF1c3QoIGNoaWxkLmNoaWxkcmVuICkgO1xuXHR9XG5cbn1cbiJdfQ==