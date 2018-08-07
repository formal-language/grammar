"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandobject;

var _jsItertools = require("@aureooms/js-itertools");

var _expandproduction2 = _interopRequireDefault(require("./_expandproduction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(_expandproductions),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(_expandobject);

function _expandproductions(productions) {
  var key;
  return regeneratorRuntime.wrap(function _expandproductions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime.keys(productions);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 7;
            break;
          }

          key = _context.t1.value;
          _context.next = 5;
          return [key, (0, _jsItertools.list)((0, _expandproduction2.default)(productions[key]))];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function _expandobject(object) {
  var nonterminal;
  return regeneratorRuntime.wrap(function _expandobject$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = regeneratorRuntime.keys(object);

        case 1:
          if ((_context2.t1 = _context2.t0()).done) {
            _context2.next = 7;
            break;
          }

          nonterminal = _context2.t1.value;
          _context2.next = 5;
          return [nonterminal, new Map(_expandproductions(object[nonterminal]))];

        case 5:
          _context2.next = 1;
          break;

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function expandobject(object) {
  return new Map(_expandobject(object));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL2V4cGFuZG9iamVjdC5qcyJdLCJuYW1lcyI6WyJfZXhwYW5kcHJvZHVjdGlvbnMiLCJfZXhwYW5kb2JqZWN0IiwicHJvZHVjdGlvbnMiLCJrZXkiLCJvYmplY3QiLCJub250ZXJtaW5hbCIsIk1hcCIsImV4cGFuZG9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7d0JBRVVBLGtCOzs7d0JBSUFDLGE7O0FBSlYsU0FBVUQsa0JBQVYsQ0FBK0JFLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUNvQkEsV0FEcEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDYUMsVUFBQUEsR0FEYjtBQUFBO0FBQ2tDLGlCQUFNLENBQUVBLEdBQUYsRUFBUSx1QkFBTSxnQ0FBbUJELFdBQVcsQ0FBQ0MsR0FBRCxDQUE5QixDQUFOLENBQVIsQ0FBTjs7QUFEbEM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVGLGFBQVYsQ0FBMEJHLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQUM0QkEsTUFENUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDYUMsVUFBQUEsV0FEYjtBQUFBO0FBQ3FDLGlCQUFNLENBQUVBLFdBQUYsRUFBZ0IsSUFBSUMsR0FBSixDQUFTTixrQkFBa0IsQ0FBRUksTUFBTSxDQUFDQyxXQUFELENBQVIsQ0FBM0IsQ0FBaEIsQ0FBTjs7QUFEckM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVNFLFlBQVQsQ0FBd0JILE1BQXhCLEVBQWlDO0FBQy9DLFNBQU8sSUFBSUUsR0FBSixDQUFTTCxhQUFhLENBQUVHLE1BQUYsQ0FBdEIsQ0FBUDtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwICwgbGlzdCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuaW1wb3J0IF9leHBhbmRwcm9kdWN0aW9uIGZyb20gJy4vX2V4cGFuZHByb2R1Y3Rpb24nIDtcblxuZnVuY3Rpb24qIF9leHBhbmRwcm9kdWN0aW9ucyAoIHByb2R1Y3Rpb25zICkge1xuXHRmb3IgKCBjb25zdCBrZXkgaW4gcHJvZHVjdGlvbnMgKSB5aWVsZCBbIGtleSAsIGxpc3QoIF9leHBhbmRwcm9kdWN0aW9uKCBwcm9kdWN0aW9uc1trZXldICkgKSBdIDtcbn1cblxuZnVuY3Rpb24qIF9leHBhbmRvYmplY3QgKCBvYmplY3QgKSB7XG5cdGZvciAoIGNvbnN0IG5vbnRlcm1pbmFsIGluIG9iamVjdCApIHlpZWxkIFsgbm9udGVybWluYWwgLCBuZXcgTWFwKCBfZXhwYW5kcHJvZHVjdGlvbnMoIG9iamVjdFtub250ZXJtaW5hbF0gKSApIF0gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRvYmplY3QgKCBvYmplY3QgKSB7XG5cdHJldHVybiBuZXcgTWFwKCBfZXhwYW5kb2JqZWN0KCBvYmplY3QgKSApIDtcbn1cbiJdfQ==