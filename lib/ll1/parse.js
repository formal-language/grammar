"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _parse_lazy2 = _interopRequireDefault(require("./_parse_lazy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * parse
 *
 * @param root
 * @param start
 * @param eof
 * @param productions
 * @param table
 * @param tape
 * @returns {Object}
 */
function parse(root, start, eof, productions, table, tape) {
  var startRule = productions.get(root).get(start);
  return (0, _parse_lazy2.default)(eof, productions, table, startRule, tape, root, start);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJyb290Iiwic3RhcnQiLCJlb2YiLCJwcm9kdWN0aW9ucyIsInRhYmxlIiwidGFwZSIsInN0YXJ0UnVsZSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBV2UsU0FBU0EsS0FBVCxDQUFpQkMsSUFBakIsRUFBd0JDLEtBQXhCLEVBQWdDQyxHQUFoQyxFQUFzQ0MsV0FBdEMsRUFBbURDLEtBQW5ELEVBQTJEQyxJQUEzRCxFQUFrRTtBQUNoRixNQUFNQyxTQUFTLEdBQUdILFdBQVcsQ0FBQ0ksR0FBWixDQUFnQlAsSUFBaEIsRUFBc0JPLEdBQXRCLENBQTBCTixLQUExQixDQUFsQjtBQUNBLFNBQU8sMEJBQWFDLEdBQWIsRUFBa0JDLFdBQWxCLEVBQStCQyxLQUEvQixFQUF1Q0UsU0FBdkMsRUFBbURELElBQW5ELEVBQTBETCxJQUExRCxFQUFpRUMsS0FBakUsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9wYXJzZV9sYXp5IGZyb20gJy4vX3BhcnNlX2xhenknIDtcblxuLyoqXG4gKiBwYXJzZVxuICpcbiAqIEBwYXJhbSByb290XG4gKiBAcGFyYW0gc3RhcnRcbiAqIEBwYXJhbSBlb2ZcbiAqIEBwYXJhbSBwcm9kdWN0aW9uc1xuICogQHBhcmFtIHRhYmxlXG4gKiBAcGFyYW0gdGFwZVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2UgKCByb290ICwgc3RhcnQgLCBlb2YgLCBwcm9kdWN0aW9ucywgdGFibGUgLCB0YXBlICkge1xuXHRjb25zdCBzdGFydFJ1bGUgPSBwcm9kdWN0aW9ucy5nZXQocm9vdCkuZ2V0KHN0YXJ0KSA7XG5cdHJldHVybiBfcGFyc2VfbGF6eSggZW9mLCBwcm9kdWN0aW9ucywgdGFibGUgLCBzdGFydFJ1bGUgLCB0YXBlICwgcm9vdCAsIHN0YXJ0ICkgO1xufVxuIl19