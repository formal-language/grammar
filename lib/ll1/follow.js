'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = follow;

var _jsItertools = require('@aureooms/js-itertools');

var _first = require('./first');

var _first2 = _interopRequireDefault(_first);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate FOLLOW set for any rule given the FOLLOW sets for the nonterminals.
 *
 * @param {Array} FOLLOW
 * @param {Array} rule
 * @returns {Set}
 */
function follow(FOLLOW, rule) {
  return (0, _first2.default)(FOLLOW, (0, _jsItertools.reversed)(rule));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvZm9sbG93LmpzIl0sIm5hbWVzIjpbImZvbGxvdyIsIkZPTExPVyIsInJ1bGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVV3QkEsTTs7QUFWeEI7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7O0FBT2UsU0FBU0EsTUFBVCxDQUFrQkMsTUFBbEIsRUFBMkJDLElBQTNCLEVBQWtDO0FBQ2hELFNBQU8scUJBQU9ELE1BQVAsRUFBZ0IsMkJBQVNDLElBQVQsQ0FBaEIsQ0FBUDtBQUNBIiwiZmlsZSI6ImZvbGxvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJldmVyc2VkIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IGZpcnN0IGZyb20gJy4vZmlyc3QnIDtcblxuLyoqXG4gKiBHZW5lcmF0ZSBGT0xMT1cgc2V0IGZvciBhbnkgcnVsZSBnaXZlbiB0aGUgRk9MTE9XIHNldHMgZm9yIHRoZSBub250ZXJtaW5hbHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gRk9MTE9XXG4gKiBAcGFyYW0ge0FycmF5fSBydWxlXG4gKiBAcmV0dXJucyB7U2V0fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb2xsb3cgKCBGT0xMT1cgLCBydWxlICkge1xuXHRyZXR1cm4gZmlyc3QoIEZPTExPVyAsIHJldmVyc2VkKHJ1bGUpKSA7XG59XG4iXX0=