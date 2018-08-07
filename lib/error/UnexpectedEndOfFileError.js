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

var UnexpectedEndOfFileError =
/*#__PURE__*/
function (_SyntaxError) {
  _inherits(UnexpectedEndOfFileError, _SyntaxError);

  function UnexpectedEndOfFileError(expected) {
    _classCallCheck(this, UnexpectedEndOfFileError);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnexpectedEndOfFileError).call(this, "Syntax error because of unexpected end of file, expected one of ".concat(JSON.stringify(expected), ".")));
  }

  return UnexpectedEndOfFileError;
}(_SyntaxError2.default);

exports.default = UnexpectedEndOfFileError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9VbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IuanMiXSwibmFtZXMiOlsiVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIiwiZXhwZWN0ZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiU3ludGF4RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSx3Qjs7Ozs7QUFDcEIsb0NBQWNDLFFBQWQsRUFBeUI7QUFBQTs7QUFBQSwyS0FDa0RDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixRQUFmLENBRGxEO0FBRXhCOzs7RUFIb0RHLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN5bnRheEVycm9yIGZyb20gJy4vU3ludGF4RXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIGV4dGVuZHMgU3ludGF4RXJyb3Ige1xuXHRjb25zdHJ1Y3RvciAoIGV4cGVjdGVkICkge1xuXHRcdHN1cGVyKCBgU3ludGF4IGVycm9yIGJlY2F1c2Ugb2YgdW5leHBlY3RlZCBlbmQgb2YgZmlsZSwgZXhwZWN0ZWQgb25lIG9mICR7SlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWQpfS5gICkgO1xuXHR9XG59XG4iXX0=