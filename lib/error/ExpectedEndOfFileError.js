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

var ExpectedEndOfFileError = function (_SyntaxError) {
	_inherits(ExpectedEndOfFileError, _SyntaxError);

	function ExpectedEndOfFileError(lookahead) {
		_classCallCheck(this, ExpectedEndOfFileError);

		return _possibleConstructorReturn(this, (ExpectedEndOfFileError.__proto__ || Object.getPrototypeOf(ExpectedEndOfFileError)).call(this, 'Syntax error at ' + lookahead.position + ' (\'' + lookahead.terminal + '\'), expected end of file.'));
	}

	return ExpectedEndOfFileError;
}(_SyntaxError3.default);

exports.default = ExpectedEndOfFileError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9FeHBlY3RlZEVuZE9mRmlsZUVycm9yLmpzIl0sIm5hbWVzIjpbIkV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IiLCJsb29rYWhlYWQiLCJwb3NpdGlvbiIsInRlcm1pbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7O0FBQ3BCLGlDQUFjQyxTQUFkLEVBQTBCO0FBQUE7O0FBQUEsOEpBQ0NBLFVBQVVDLFFBRFgsWUFDeUJELFVBQVVFLFFBRG5DO0FBRXpCOzs7OztrQkFIbUJILHNCIiwiZmlsZSI6IkV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ludGF4RXJyb3IgZnJvbSAnLi9TeW50YXhFcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlY3RlZEVuZE9mRmlsZUVycm9yIGV4dGVuZHMgU3ludGF4RXJyb3Ige1xuXHRjb25zdHJ1Y3RvciAoIGxvb2thaGVhZCApIHtcblx0XHRzdXBlciggYFN5bnRheCBlcnJvciBhdCAke2xvb2thaGVhZC5wb3NpdGlvbn0gKCcke2xvb2thaGVhZC50ZXJtaW5hbH0nKSwgZXhwZWN0ZWQgZW5kIG9mIGZpbGUuYCApIDtcblx0fVxufVxuIl19