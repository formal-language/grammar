'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compile;

var _jsItertools = require('@aureooms/js-itertools');

var _compile2 = require('./_compile');

var _compile3 = _interopRequireDefault(_compile2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compiles the predictive parsing table for a grammar.
 * Corresponds to Algorithm 4.31 in Dragon Book (2006) on page 224.
 *
 * @param grammar
 * @returns {undefined}
 */
function compile(start, grammar) {
  return (0, _jsItertools.list)((0, _compile3.default)(start, grammar));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvY29tcGlsZS5qcyJdLCJuYW1lcyI6WyJjb21waWxlIiwic3RhcnQiLCJncmFtbWFyIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFXd0JBLE87O0FBWHhCOztBQUVBOzs7Ozs7QUFFQTs7Ozs7OztBQU9lLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQztBQUNoRCxTQUFPLHVCQUFLLHVCQUFTRCxLQUFULEVBQWdCQyxPQUFoQixDQUFMLENBQVA7QUFDQSIsImZpbGUiOiJjb21waWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IF9jb21waWxlIGZyb20gJy4vX2NvbXBpbGUnIDtcblxuLyoqXG4gKiBDb21waWxlcyB0aGUgcHJlZGljdGl2ZSBwYXJzaW5nIHRhYmxlIGZvciBhIGdyYW1tYXIuXG4gKiBDb3JyZXNwb25kcyB0byBBbGdvcml0aG0gNC4zMSBpbiBEcmFnb24gQm9vayAoMjAwNikgb24gcGFnZSAyMjQuXG4gKlxuICogQHBhcmFtIGdyYW1tYXJcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBpbGUgKHN0YXJ0LCBncmFtbWFyKSB7XG5cdHJldHVybiBsaXN0KF9jb21waWxlKHN0YXJ0LCBncmFtbWFyKSk7XG59XG4iXX0=