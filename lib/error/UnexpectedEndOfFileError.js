'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _SyntaxError2 = require('./SyntaxError');

var _SyntaxError3 = _interopRequireDefault(_SyntaxError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnexpectedEndOfFileError = function (_SyntaxError) {
	_inherits(UnexpectedEndOfFileError, _SyntaxError);

	function UnexpectedEndOfFileError(expected) {
		_classCallCheck(this, UnexpectedEndOfFileError);

		return _possibleConstructorReturn(this, (UnexpectedEndOfFileError.__proto__ || Object.getPrototypeOf(UnexpectedEndOfFileError)).call(this, 'Syntax error because of unexpected end of file, expected one of ' + JSON.stringify(expected) + '.'));
	}

	return UnexpectedEndOfFileError;
}(_SyntaxError3.default);

exports.default = UnexpectedEndOfFileError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9VbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IuanMiXSwibmFtZXMiOlsiVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIiwiZXhwZWN0ZWQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSx3Qjs7O0FBQ3BCLG1DQUFjQyxRQUFkLEVBQXlCO0FBQUE7O0FBQUEsa05BQ2tEQyxLQUFLQyxTQUFMLENBQWVGLFFBQWYsQ0FEbEQ7QUFFeEI7Ozs7O2tCQUhtQkQsd0IiLCJmaWxlIjoiVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN5bnRheEVycm9yIGZyb20gJy4vU3ludGF4RXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIGV4dGVuZHMgU3ludGF4RXJyb3Ige1xuXHRjb25zdHJ1Y3RvciAoIGV4cGVjdGVkICkge1xuXHRcdHN1cGVyKCBgU3ludGF4IGVycm9yIGJlY2F1c2Ugb2YgdW5leHBlY3RlZCBlbmQgb2YgZmlsZSwgZXhwZWN0ZWQgb25lIG9mICR7SlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWQpfS5gICkgO1xuXHR9XG59XG4iXX0=