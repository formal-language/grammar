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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9Mb29rYWhlYWRNaXNtYXRjaEVycm9yLmpzIl0sIm5hbWVzIjpbIkxvb2thaGVhZE1pc21hdGNoRXJyb3IiLCJsb29rYWhlYWQiLCJleHBlY3RlZCIsInBvc2l0aW9uIiwidGVybWluYWwiLCJKU09OIiwic3RyaW5naWZ5IiwiU3ludGF4RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7QUFDcEIsaUNBQWNDLFNBQWQsRUFBMEJDLFFBQTFCLEVBQXFDO0FBQUE7O0FBQUEsOEpBQ1ZELFVBQVVFLFFBREEsVUFDYUYsVUFBVUcsUUFEdkIsMkJBQ3FEQyxLQUFLQyxTQUFMLENBQWVKLFFBQWYsQ0FEckQ7QUFFcEM7OztFQUhrREsscUI7O2tCQUEvQlAsc0IiLCJmaWxlIjoiTG9va2FoZWFkTWlzbWF0Y2hFcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTeW50YXhFcnJvciBmcm9tICcuL1N5bnRheEVycm9yJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb2thaGVhZE1pc21hdGNoRXJyb3IgZXh0ZW5kcyBTeW50YXhFcnJvciB7XG5cdGNvbnN0cnVjdG9yICggbG9va2FoZWFkICwgZXhwZWN0ZWQgKSB7XG5cdFx0c3VwZXIoIGBTeW50YXggZXJyb3IgYXQgJHtsb29rYWhlYWQucG9zaXRpb259ICgke2xvb2thaGVhZC50ZXJtaW5hbH0pLCBleHBlY3RlZCBvbmUgb2YgJHtKU09OLnN0cmluZ2lmeShleHBlY3RlZCl9LmAgKSA7XG5cdH1cbn1cbiJdfQ==