"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SyntaxError2 = _interopRequireDefault(require("./SyntaxError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LookaheadMismatchError =
/*#__PURE__*/
function (_SyntaxError) {
  _inherits(LookaheadMismatchError, _SyntaxError);

  function LookaheadMismatchError(lookahead, expected) {
    _classCallCheck(this, LookaheadMismatchError);

    return _possibleConstructorReturn(this, _getPrototypeOf(LookaheadMismatchError).call(this, "Syntax error at ".concat(lookahead.position, " (").concat(lookahead.terminal, "), expected one of ").concat(JSON.stringify(expected), ".")));
  }

  return LookaheadMismatchError;
}(_SyntaxError2.default);

exports.default = LookaheadMismatchError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9Mb29rYWhlYWRNaXNtYXRjaEVycm9yLmpzIl0sIm5hbWVzIjpbIkxvb2thaGVhZE1pc21hdGNoRXJyb3IiLCJsb29rYWhlYWQiLCJleHBlY3RlZCIsInBvc2l0aW9uIiwidGVybWluYWwiLCJKU09OIiwic3RyaW5naWZ5IiwiU3ludGF4RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7QUFDcEIsa0NBQWNDLFNBQWQsRUFBMEJDLFFBQTFCLEVBQXFDO0FBQUE7O0FBQUEseUhBQ1ZELFNBQVMsQ0FBQ0UsUUFEQSxlQUNhRixTQUFTLENBQUNHLFFBRHZCLGdDQUNxREMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFFBQWYsQ0FEckQ7QUFFcEM7OztFQUhrREsscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ludGF4RXJyb3IgZnJvbSAnLi9TeW50YXhFcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rYWhlYWRNaXNtYXRjaEVycm9yIGV4dGVuZHMgU3ludGF4RXJyb3Ige1xuXHRjb25zdHJ1Y3RvciAoIGxvb2thaGVhZCAsIGV4cGVjdGVkICkge1xuXHRcdHN1cGVyKCBgU3ludGF4IGVycm9yIGF0ICR7bG9va2FoZWFkLnBvc2l0aW9ufSAoJHtsb29rYWhlYWQudGVybWluYWx9KSwgZXhwZWN0ZWQgb25lIG9mICR7SlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWQpfS5gICkgO1xuXHR9XG59XG4iXX0=