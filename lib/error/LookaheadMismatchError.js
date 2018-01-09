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

var LookaheadMismatchError = function (_SyntaxError) {
	_inherits(LookaheadMismatchError, _SyntaxError);

	function LookaheadMismatchError(lookahead, expected) {
		_classCallCheck(this, LookaheadMismatchError);

		return _possibleConstructorReturn(this, (LookaheadMismatchError.__proto__ || Object.getPrototypeOf(LookaheadMismatchError)).call(this, 'Syntax error at ' + lookahead.position + ' (' + lookahead.terminal + '), expected one of ' + JSON.stringify(expected) + '.'));
	}

	return LookaheadMismatchError;
}(_SyntaxError3.default);

exports.default = LookaheadMismatchError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9Mb29rYWhlYWRNaXNtYXRjaEVycm9yLmpzIl0sIm5hbWVzIjpbIkxvb2thaGVhZE1pc21hdGNoRXJyb3IiLCJsb29rYWhlYWQiLCJleHBlY3RlZCIsInBvc2l0aW9uIiwidGVybWluYWwiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7O0FBQ3BCLGlDQUFjQyxTQUFkLEVBQTBCQyxRQUExQixFQUFxQztBQUFBOztBQUFBLDhKQUNWRCxVQUFVRSxRQURBLFVBQ2FGLFVBQVVHLFFBRHZCLDJCQUNxREMsS0FBS0MsU0FBTCxDQUFlSixRQUFmLENBRHJEO0FBRXBDOzs7OztrQkFIbUJGLHNCIiwiZmlsZSI6Ikxvb2thaGVhZE1pc21hdGNoRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ludGF4RXJyb3IgZnJvbSAnLi9TeW50YXhFcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rYWhlYWRNaXNtYXRjaEVycm9yIGV4dGVuZHMgU3ludGF4RXJyb3Ige1xuXHRjb25zdHJ1Y3RvciAoIGxvb2thaGVhZCAsIGV4cGVjdGVkICkge1xuXHRcdHN1cGVyKCBgU3ludGF4IGVycm9yIGF0ICR7bG9va2FoZWFkLnBvc2l0aW9ufSAoJHtsb29rYWhlYWQudGVybWluYWx9KSwgZXhwZWN0ZWQgb25lIG9mICR7SlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWQpfS5gICkgO1xuXHR9XG59XG4iXX0=