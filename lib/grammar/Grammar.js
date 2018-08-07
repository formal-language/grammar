"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expandobject = _interopRequireDefault(require("./expandobject"));

var _alphabet2 = _interopRequireDefault(require("./alphabet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Grammar =
/*#__PURE__*/
function () {
  function Grammar(_ref) {
    var start = _ref.start,
        eof = _ref.eof,
        productions = _ref.productions;

    _classCallCheck(this, Grammar);

    this.start = start;
    this.eof = eof;
    this.productions = (0, _expandobject.default)(productions);
    this._alphabet = null;
  }

  _createClass(Grammar, [{
    key: "alphabet",
    value: function alphabet() {
      if (this._alphabet === null) this._alphabet = (0, _alphabet2.default)(this.productions);
      return this._alphabet;
    }
  }]);

  return Grammar;
}();

exports.default = Grammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL0dyYW1tYXIuanMiXSwibmFtZXMiOlsiR3JhbW1hciIsInN0YXJ0IiwiZW9mIiwicHJvZHVjdGlvbnMiLCJfYWxwaGFiZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsTzs7O0FBRXBCLHlCQUE4QztBQUFBLFFBQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxRQUF0QkMsR0FBc0IsUUFBdEJBLEdBQXNCO0FBQUEsUUFBaEJDLFdBQWdCLFFBQWhCQSxXQUFnQjs7QUFBQTs7QUFDN0MsU0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQiwyQkFBY0EsV0FBZCxDQUFuQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQTs7OzsrQkFFWTtBQUNaLFVBQUssS0FBS0EsU0FBTCxLQUFtQixJQUF4QixFQUErQixLQUFLQSxTQUFMLEdBQWlCLHdCQUFTLEtBQUtELFdBQWQsQ0FBakI7QUFDL0IsYUFBTyxLQUFLQyxTQUFaO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwYW5kb2JqZWN0IGZyb20gJy4vZXhwYW5kb2JqZWN0JyA7XG5pbXBvcnQgYWxwaGFiZXQgZnJvbSAnLi9hbHBoYWJldCcgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFtbWFyIHtcblxuXHRjb25zdHJ1Y3RvciAoIHsgc3RhcnQgLCBlb2YgLCBwcm9kdWN0aW9ucyB9ICkge1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydCA7XG5cdFx0dGhpcy5lb2YgPSBlb2YgO1xuXHRcdHRoaXMucHJvZHVjdGlvbnMgPSBleHBhbmRvYmplY3QoIHByb2R1Y3Rpb25zICkgO1xuXHRcdHRoaXMuX2FscGhhYmV0ID0gbnVsbCA7XG5cdH1cblxuXHRhbHBoYWJldCAoICkge1xuXHRcdGlmICggdGhpcy5fYWxwaGFiZXQgPT09IG51bGwgKSB0aGlzLl9hbHBoYWJldCA9IGFscGhhYmV0KHRoaXMucHJvZHVjdGlvbnMpO1xuXHRcdHJldHVybiB0aGlzLl9hbHBoYWJldDtcblx0fVxuXG59XG4iXX0=