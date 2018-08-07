"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _parse_lazy2 = _interopRequireDefault(require("./_parse_lazy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function parse(_x, _x2, _x3, _x4, _x5) {
  return _parse.apply(this, arguments);
}

function _parse() {
  _parse = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(start, eof, productions, table, stream) {
    var root;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            root = [{
              'type': 'node',
              'nonterminal': start
            }, {
              'type': 'leaf',
              'terminal': eof
            }];
            _context.next = 3;
            return (0, _parse_lazy2.default)(eof, productions, table, root, stream, -1, 0).children.next();

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _parse.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFibGUiLCJzdHJlYW0iLCJyb290IiwiY2hpbGRyZW4iLCJuZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O1NBRThCQSxLOzs7Ozs7OzBCQUFmLGlCQUF1QkMsS0FBdkIsRUFBK0JDLEdBQS9CLEVBQXFDQyxXQUFyQyxFQUFrREMsS0FBbEQsRUFBMERDLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxZQUFBQSxJQURRLEdBQ0QsQ0FDWjtBQUFFLHNCQUFTLE1BQVg7QUFBb0IsNkJBQWdCTDtBQUFwQyxhQURZLEVBRVo7QUFBRSxzQkFBUyxNQUFYO0FBQW9CLDBCQUFhQztBQUFqQyxhQUZZLENBREM7QUFBQTtBQUFBLG1CQUtELDBCQUFhQSxHQUFiLEVBQWtCQyxXQUFsQixFQUErQkMsS0FBL0IsRUFBdUNFLElBQXZDLEVBQThDRCxNQUE5QyxFQUF1RCxDQUFDLENBQXhELEVBQTRELENBQTVELEVBQWdFRSxRQUFoRSxDQUF5RUMsSUFBekUsRUFMQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3BhcnNlX2xhenkgZnJvbSAnLi9fcGFyc2VfbGF6eScgO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwYXJzZSAoIHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMsIHRhYmxlICwgc3RyZWFtICkge1xuXHRjb25zdCByb290ID0gW1xuXHRcdHsgJ3R5cGUnIDogJ25vZGUnICwgJ25vbnRlcm1pbmFsJyA6IHN0YXJ0IH0gLFxuXHRcdHsgJ3R5cGUnIDogJ2xlYWYnICwgJ3Rlcm1pbmFsJyA6IGVvZiB9ICxcblx0XSA7XG5cdHJldHVybiBhd2FpdCBfcGFyc2VfbGF6eSggZW9mLCBwcm9kdWN0aW9ucywgdGFibGUgLCByb290ICwgc3RyZWFtICwgLTEgLCAwICkuY2hpbGRyZW4ubmV4dCgpIDtcbn1cbiJdfQ==