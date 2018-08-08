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
  regeneratorRuntime.mark(function _callee(start, eof, productions, table, tape) {
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
            return (0, _parse_lazy2.default)(eof, productions, table, root, tape, -1, 0).children.next();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvcGFyc2UuanMiXSwibmFtZXMiOlsicGFyc2UiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFibGUiLCJ0YXBlIiwicm9vdCIsImNoaWxkcmVuIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztTQUU4QkEsSzs7Ozs7OzswQkFBZixpQkFBdUJDLEtBQXZCLEVBQStCQyxHQUEvQixFQUFxQ0MsV0FBckMsRUFBa0RDLEtBQWxELEVBQTBEQyxJQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUkMsWUFBQUEsSUFEUSxHQUNELENBQ1o7QUFBRSxzQkFBUyxNQUFYO0FBQW9CLDZCQUFnQkw7QUFBcEMsYUFEWSxFQUVaO0FBQUUsc0JBQVMsTUFBWDtBQUFvQiwwQkFBYUM7QUFBakMsYUFGWSxDQURDO0FBQUE7QUFBQSxtQkFLRCwwQkFBYUEsR0FBYixFQUFrQkMsV0FBbEIsRUFBK0JDLEtBQS9CLEVBQXVDRSxJQUF2QyxFQUE4Q0QsSUFBOUMsRUFBcUQsQ0FBQyxDQUF0RCxFQUEwRCxDQUExRCxFQUE4REUsUUFBOUQsQ0FBdUVDLElBQXZFLEVBTEM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9wYXJzZV9sYXp5IGZyb20gJy4vX3BhcnNlX2xhenknIDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGFyc2UgKCBzdGFydCAsIGVvZiAsIHByb2R1Y3Rpb25zLCB0YWJsZSAsIHRhcGUgKSB7XG5cdGNvbnN0IHJvb3QgPSBbXG5cdFx0eyAndHlwZScgOiAnbm9kZScgLCAnbm9udGVybWluYWwnIDogc3RhcnQgfSAsXG5cdFx0eyAndHlwZScgOiAnbGVhZicgLCAndGVybWluYWwnIDogZW9mIH0gLFxuXHRdIDtcblx0cmV0dXJuIGF3YWl0IF9wYXJzZV9sYXp5KCBlb2YsIHByb2R1Y3Rpb25zLCB0YWJsZSAsIHJvb3QgLCB0YXBlICwgLTEgLCAwICkuY2hpbGRyZW4ubmV4dCgpIDtcbn1cbiJdfQ==