'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _compile2 = require('./_compile');

var _compile3 = _interopRequireDefault(_compile2);

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
  return new Map((0, _compile3.default)(start, eof, productions));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwic3RhcnQiLCJlb2YiLCJwcm9kdWN0aW9ucyIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBV3dCQSxPOztBQVh4Qjs7Ozs7O0FBRUE7Ozs7Ozs7OztBQVNlLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QkMsV0FBOUIsRUFBMkM7QUFDekQsU0FBTyxJQUFJQyxHQUFKLENBQVEsdUJBQVNILEtBQVQsRUFBZ0JDLEdBQWhCLEVBQXFCQyxXQUFyQixDQUFSLENBQVA7QUFDQSIsImZpbGUiOiJjb21waWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9jb21waWxlIGZyb20gJy4vX2NvbXBpbGUnIDtcblxuLyoqXG4gKiBDb21waWxlcyB0aGUgcHJlZGljdGl2ZSBwYXJzaW5nIHRhYmxlIGZvciBhIGdyYW1tYXIuXG4gKiBDb3JyZXNwb25kcyB0byBBbGdvcml0aG0gNC4zMSBpbiBEcmFnb24gQm9vayAoMjAwNikgb24gcGFnZSAyMjQuXG4gKlxuICogQHBhcmFtIHN0YXJ0XG4gKiBAcGFyYW0gZW9mXG4gKiBAcGFyYW0gcHJvZHVjdGlvbnNcbiAqIEByZXR1cm5zIHtNYXB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBpbGUgKHN0YXJ0LCBlb2YsIHByb2R1Y3Rpb25zKSB7XG5cdHJldHVybiBuZXcgTWFwKF9jb21waWxlKHN0YXJ0LCBlb2YsIHByb2R1Y3Rpb25zKSk7XG59XG4iXX0=