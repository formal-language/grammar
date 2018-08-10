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
    var root = _ref.root,
        start = _ref.start,
        eof = _ref.eof,
        productions = _ref.productions;

    _classCallCheck(this, Grammar);

    this.root = '' + root;
    this.start = '' + start;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL0dyYW1tYXIuanMiXSwibmFtZXMiOlsiR3JhbW1hciIsInJvb3QiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiX2FscGhhYmV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUVwQix5QkFBcUQ7QUFBQSxRQUFyQ0MsSUFBcUMsUUFBckNBLElBQXFDO0FBQUEsUUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLFFBQXRCQyxHQUFzQixRQUF0QkEsR0FBc0I7QUFBQSxRQUFoQkMsV0FBZ0IsUUFBaEJBLFdBQWdCOztBQUFBOztBQUNwRCxTQUFLSCxJQUFMLEdBQVksS0FBR0EsSUFBZjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFHQSxLQUFoQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsMkJBQWNBLFdBQWQsQ0FBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0E7Ozs7K0JBRVk7QUFDWixVQUFLLEtBQUtBLFNBQUwsS0FBbUIsSUFBeEIsRUFBK0IsS0FBS0EsU0FBTCxHQUFpQix3QkFBUyxLQUFLRCxXQUFkLENBQWpCO0FBQy9CLGFBQU8sS0FBS0MsU0FBWjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cGFuZG9iamVjdCBmcm9tICcuL2V4cGFuZG9iamVjdCcgO1xuaW1wb3J0IGFscGhhYmV0IGZyb20gJy4vYWxwaGFiZXQnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhbW1hciB7XG5cblx0Y29uc3RydWN0b3IgKCB7IHJvb3QgLCBzdGFydCAsIGVvZiAsIHByb2R1Y3Rpb25zIH0gKSB7XG5cdFx0dGhpcy5yb290ID0gJycrcm9vdCA7XG5cdFx0dGhpcy5zdGFydCA9ICcnK3N0YXJ0IDtcblx0XHR0aGlzLmVvZiA9IGVvZiA7XG5cdFx0dGhpcy5wcm9kdWN0aW9ucyA9IGV4cGFuZG9iamVjdCggcHJvZHVjdGlvbnMgKSA7XG5cdFx0dGhpcy5fYWxwaGFiZXQgPSBudWxsIDtcblx0fVxuXG5cdGFscGhhYmV0ICggKSB7XG5cdFx0aWYgKCB0aGlzLl9hbHBoYWJldCA9PT0gbnVsbCApIHRoaXMuX2FscGhhYmV0ID0gYWxwaGFiZXQodGhpcy5wcm9kdWN0aW9ucyk7XG5cdFx0cmV0dXJuIHRoaXMuX2FscGhhYmV0O1xuXHR9XG5cbn1cbiJdfQ==