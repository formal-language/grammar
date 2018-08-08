"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _grammar = require("../grammar");

var _compile = _interopRequireDefault(require("./compile"));

var _parse3 = _interopRequireDefault(require("./parse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parser =
/*#__PURE__*/
function () {
  function Parser(grammar) {
    _classCallCheck(this, Parser);

    this.grammar = grammar;
    this._table = null;
  } //first ( rule ) {
  //}
  //follow ( rule ) {
  //}


  _createClass(Parser, [{
    key: "table",
    value: function table() {
      if (this._table === null) this._table = (0, _compile.default)(this.grammar.start, this.grammar.eof, this.grammar.productions);
      return this._table;
    }
  }, {
    key: "parse",
    value: function () {
      var _parse2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(tape) {
        var table, result, tree;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                table = this.table();
                _context.next = 3;
                return (0, _parse3.default)(this.grammar.start, this.grammar.eof, this.grammar.productions, table, tape);

              case 3:
                result = _context.sent;
                tree = result.value;
                return _context.abrupt("return", tree);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function parse(_x) {
        return _parse2.apply(this, arguments);
      };
    }()
  }]);

  return Parser;
}();

exports.default = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvUGFyc2VyLmpzIl0sIm5hbWVzIjpbIlBhcnNlciIsImdyYW1tYXIiLCJfdGFibGUiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwidGFwZSIsInRhYmxlIiwicmVzdWx0IiwidHJlZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFFcEIsa0JBQWNDLE9BQWQsRUFBd0I7QUFBQTs7QUFDdkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxHLENBRUQ7QUFFQTtBQUVBO0FBRUE7Ozs7OzRCQUVVO0FBQ1QsVUFBSyxLQUFLQSxNQUFMLEtBQWdCLElBQXJCLEVBQTRCLEtBQUtBLE1BQUwsR0FBYyxzQkFBUyxLQUFLRCxPQUFMLENBQWFFLEtBQXRCLEVBQTZCLEtBQUtGLE9BQUwsQ0FBYUcsR0FBMUMsRUFBK0MsS0FBS0gsT0FBTCxDQUFhSSxXQUE1RCxDQUFkO0FBQzVCLGFBQU8sS0FBS0gsTUFBWjtBQUNBOzs7Ozs7K0NBRWFJLEk7Ozs7OztBQUNQQyxnQkFBQUEsSyxHQUFRLEtBQUtBLEtBQUwsRTs7dUJBQ08scUJBQU0sS0FBS04sT0FBTCxDQUFhRSxLQUFuQixFQUEwQixLQUFLRixPQUFMLENBQWFHLEdBQXZDLEVBQTRDLEtBQUtILE9BQUwsQ0FBYUksV0FBekQsRUFBc0VFLEtBQXRFLEVBQTZFRCxJQUE3RSxDOzs7QUFBZkUsZ0JBQUFBLE07QUFDQUMsZ0JBQUFBLEksR0FBT0QsTUFBTSxDQUFDRSxLO2lEQUNiRCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxwaGFiZXQgfSBmcm9tICcuLi9ncmFtbWFyJyA7XG5pbXBvcnQgY29tcGlsZSBmcm9tICcuL2NvbXBpbGUnIDtcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlciB7XG5cblx0Y29uc3RydWN0b3IgKCBncmFtbWFyICkge1xuXHRcdHRoaXMuZ3JhbW1hciA9IGdyYW1tYXIgO1xuXHRcdHRoaXMuX3RhYmxlID0gbnVsbCA7XG5cdH1cblxuXHQvL2ZpcnN0ICggcnVsZSApIHtcblxuXHQvL31cblxuXHQvL2ZvbGxvdyAoIHJ1bGUgKSB7XG5cblx0Ly99XG5cblx0dGFibGUgKCApIHtcblx0XHRpZiAoIHRoaXMuX3RhYmxlID09PSBudWxsICkgdGhpcy5fdGFibGUgPSBjb21waWxlKCB0aGlzLmdyYW1tYXIuc3RhcnQsIHRoaXMuZ3JhbW1hci5lb2YsIHRoaXMuZ3JhbW1hci5wcm9kdWN0aW9ucykgO1xuXHRcdHJldHVybiB0aGlzLl90YWJsZSA7XG5cdH1cblxuXHRhc3luYyBwYXJzZSAoIHRhcGUgKSB7XG5cdFx0Y29uc3QgdGFibGUgPSB0aGlzLnRhYmxlKCk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcGFyc2UodGhpcy5ncmFtbWFyLnN0YXJ0LCB0aGlzLmdyYW1tYXIuZW9mLCB0aGlzLmdyYW1tYXIucHJvZHVjdGlvbnMsIHRhYmxlLCB0YXBlKTtcblx0XHRjb25zdCB0cmVlID0gcmVzdWx0LnZhbHVlIDtcblx0XHRyZXR1cm4gdHJlZSA7XG5cdH1cblxufVxuIl19