'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expandobject = require('./expandobject');

var _expandobject2 = _interopRequireDefault(_expandobject);

var _alphabet2 = require('./alphabet');

var _alphabet3 = _interopRequireDefault(_alphabet2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grammar = function () {
	function Grammar(_ref) {
		var start = _ref.start,
		    eof = _ref.eof,
		    productions = _ref.productions;

		_classCallCheck(this, Grammar);

		this.start = start;
		this.eof = eof;
		this.productions = (0, _expandobject2.default)(productions);
		this._alphabet = null;
	}

	_createClass(Grammar, [{
		key: 'alphabet',
		value: function alphabet() {
			if (this._alphabet === null) this._alphabet = (0, _alphabet3.default)(this.productions);
			return this._alphabet;
		}
	}]);

	return Grammar;
}();

exports.default = Grammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL0dyYW1tYXIuanMiXSwibmFtZXMiOlsiR3JhbW1hciIsInN0YXJ0IiwiZW9mIiwicHJvZHVjdGlvbnMiLCJfYWxwaGFiZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLE87QUFFcEIsd0JBQThDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXRCQyxHQUFzQixRQUF0QkEsR0FBc0I7QUFBQSxNQUFoQkMsV0FBZ0IsUUFBaEJBLFdBQWdCOztBQUFBOztBQUM3QyxPQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLQyxXQUFMLEdBQW1CLDRCQUFjQSxXQUFkLENBQW5CO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBOzs7OzZCQUVZO0FBQ1osT0FBSyxLQUFLQSxTQUFMLEtBQW1CLElBQXhCLEVBQStCLEtBQUtBLFNBQUwsR0FBaUIsd0JBQVMsS0FBS0QsV0FBZCxDQUFqQjtBQUMvQixVQUFPLEtBQUtDLFNBQVo7QUFDQTs7Ozs7O2tCQVptQkosTyIsImZpbGUiOiJHcmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cGFuZG9iamVjdCBmcm9tICcuL2V4cGFuZG9iamVjdCcgO1xuaW1wb3J0IGFscGhhYmV0IGZyb20gJy4vYWxwaGFiZXQnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhbW1hciB7XG5cblx0Y29uc3RydWN0b3IgKCB7IHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMgfSApIHtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQgO1xuXHRcdHRoaXMuZW9mID0gZW9mIDtcblx0XHR0aGlzLnByb2R1Y3Rpb25zID0gZXhwYW5kb2JqZWN0KCBwcm9kdWN0aW9ucyApIDtcblx0XHR0aGlzLl9hbHBoYWJldCA9IG51bGwgO1xuXHR9XG5cblx0YWxwaGFiZXQgKCApIHtcblx0XHRpZiAoIHRoaXMuX2FscGhhYmV0ID09PSBudWxsICkgdGhpcy5fYWxwaGFiZXQgPSBhbHBoYWJldCh0aGlzLnByb2R1Y3Rpb25zKTtcblx0XHRyZXR1cm4gdGhpcy5fYWxwaGFiZXQ7XG5cdH1cblxufVxuIl19