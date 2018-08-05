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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9VbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IuanMiXSwibmFtZXMiOlsiVW5leHBlY3RlZEVuZE9mRmlsZUVycm9yIiwiZXhwZWN0ZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiU3ludGF4RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLHdCOzs7QUFDcEIsbUNBQWNDLFFBQWQsRUFBeUI7QUFBQTs7QUFBQSxrTkFDa0RDLEtBQUtDLFNBQUwsQ0FBZUYsUUFBZixDQURsRDtBQUV4Qjs7O0VBSG9ERyxxQjs7a0JBQWpDSix3QiIsImZpbGUiOiJVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ludGF4RXJyb3IgZnJvbSAnLi9TeW50YXhFcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmV4cGVjdGVkRW5kT2ZGaWxlRXJyb3IgZXh0ZW5kcyBTeW50YXhFcnJvciB7XG5cdGNvbnN0cnVjdG9yICggZXhwZWN0ZWQgKSB7XG5cdFx0c3VwZXIoIGBTeW50YXggZXJyb3IgYmVjYXVzZSBvZiB1bmV4cGVjdGVkIGVuZCBvZiBmaWxlLCBleHBlY3RlZCBvbmUgb2YgJHtKU09OLnN0cmluZ2lmeShleHBlY3RlZCl9LmAgKSA7XG5cdH1cbn1cbiJdfQ==