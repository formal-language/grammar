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
      regeneratorRuntime.mark(function _callee(stream) {
        var table, result, tree;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                table = this.table();
                _context.next = 3;
                return (0, _parse3.default)(this.grammar.start, this.grammar.eof, this.grammar.productions, table, stream);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvUGFyc2VyLmpzIl0sIm5hbWVzIjpbIlBhcnNlciIsImdyYW1tYXIiLCJfdGFibGUiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwic3RyZWFtIiwidGFibGUiLCJyZXN1bHQiLCJ0cmVlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQUVwQixrQkFBY0MsT0FBZCxFQUF3QjtBQUFBOztBQUN2QixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLEcsQ0FFRDtBQUVBO0FBRUE7QUFFQTs7Ozs7NEJBRVU7QUFDVCxVQUFLLEtBQUtBLE1BQUwsS0FBZ0IsSUFBckIsRUFBNEIsS0FBS0EsTUFBTCxHQUFjLHNCQUFTLEtBQUtELE9BQUwsQ0FBYUUsS0FBdEIsRUFBNkIsS0FBS0YsT0FBTCxDQUFhRyxHQUExQyxFQUErQyxLQUFLSCxPQUFMLENBQWFJLFdBQTVELENBQWQ7QUFDNUIsYUFBTyxLQUFLSCxNQUFaO0FBQ0E7Ozs7OzsrQ0FFYUksTTs7Ozs7O0FBQ1BDLGdCQUFBQSxLLEdBQVEsS0FBS0EsS0FBTCxFOzt1QkFDTyxxQkFBTSxLQUFLTixPQUFMLENBQWFFLEtBQW5CLEVBQTBCLEtBQUtGLE9BQUwsQ0FBYUcsR0FBdkMsRUFBNEMsS0FBS0gsT0FBTCxDQUFhSSxXQUF6RCxFQUFzRUUsS0FBdEUsRUFBNkVELE1BQTdFLEM7OztBQUFmRSxnQkFBQUEsTTtBQUNBQyxnQkFBQUEsSSxHQUFPRCxNQUFNLENBQUNFLEs7aURBQ2JELEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYWJldCB9IGZyb20gJy4uL2dyYW1tYXInIDtcbmltcG9ydCBjb21waWxlIGZyb20gJy4vY29tcGlsZScgO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIHtcblxuXHRjb25zdHJ1Y3RvciAoIGdyYW1tYXIgKSB7XG5cdFx0dGhpcy5ncmFtbWFyID0gZ3JhbW1hciA7XG5cdFx0dGhpcy5fdGFibGUgPSBudWxsIDtcblx0fVxuXG5cdC8vZmlyc3QgKCBydWxlICkge1xuXG5cdC8vfVxuXG5cdC8vZm9sbG93ICggcnVsZSApIHtcblxuXHQvL31cblxuXHR0YWJsZSAoICkge1xuXHRcdGlmICggdGhpcy5fdGFibGUgPT09IG51bGwgKSB0aGlzLl90YWJsZSA9IGNvbXBpbGUoIHRoaXMuZ3JhbW1hci5zdGFydCwgdGhpcy5ncmFtbWFyLmVvZiwgdGhpcy5ncmFtbWFyLnByb2R1Y3Rpb25zKSA7XG5cdFx0cmV0dXJuIHRoaXMuX3RhYmxlIDtcblx0fVxuXG5cdGFzeW5jIHBhcnNlICggc3RyZWFtICkge1xuXHRcdGNvbnN0IHRhYmxlID0gdGhpcy50YWJsZSgpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBhcnNlKHRoaXMuZ3JhbW1hci5zdGFydCwgdGhpcy5ncmFtbWFyLmVvZiwgdGhpcy5ncmFtbWFyLnByb2R1Y3Rpb25zLCB0YWJsZSwgc3RyZWFtKTtcblx0XHRjb25zdCB0cmVlID0gcmVzdWx0LnZhbHVlIDtcblx0XHRyZXR1cm4gdHJlZSA7XG5cdH1cblxufVxuIl19