'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsItertools = require('@aureooms/js-itertools');

var _EOF = require('./EOF');

var _EOF2 = _interopRequireDefault(_EOF);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StreamFromIterable = function () {
	function StreamFromIterable(iterable) {
		_classCallCheck(this, StreamFromIterable);

		this.buffer = [];
		this.iterator = (0, _jsItertools.iter)(iterable);
	}

	_createClass(StreamFromIterable, [{
		key: 'read',
		value: function read() {
			if (this.buffer.length > 0) return this.buffer.pop();
			return (0, _jsItertools.next)(this.iterator, _EOF2.default);
		}
	}, {
		key: 'unread',
		value: function unread(t) {
			this.buffer.push(t);
		}
	}]);

	return StreamFromIterable;
}();

exports.default = StreamFromIterable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvU3RyZWFtRnJvbUl0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbIlN0cmVhbUZyb21JdGVyYWJsZSIsIml0ZXJhYmxlIiwiYnVmZmVyIiwiaXRlcmF0b3IiLCJsZW5ndGgiLCJwb3AiLCJ0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLGtCO0FBRXBCLDZCQUFjQyxRQUFkLEVBQXlCO0FBQUE7O0FBRXhCLE9BQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQix1QkFBTUYsUUFBTixDQUFoQjtBQUVBOzs7O3lCQUVRO0FBQ1IsT0FBSSxLQUFLQyxNQUFMLENBQVlFLE1BQVosR0FBcUIsQ0FBekIsRUFBNEIsT0FBTyxLQUFLRixNQUFMLENBQVlHLEdBQVosRUFBUDtBQUM1QixVQUFPLHVCQUFNLEtBQUtGLFFBQVgsZ0JBQVA7QUFDQTs7O3lCQUVRRyxDLEVBQUk7QUFDWixRQUFLSixNQUFMLENBQVlLLElBQVosQ0FBaUJELENBQWpCO0FBQ0E7Ozs7OztrQkFoQm1CTixrQiIsImZpbGUiOiJTdHJlYW1Gcm9tSXRlcmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpdGVyICwgbmV4dCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcbmltcG9ydCBFT0YgZnJvbSAnLi9FT0YnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyZWFtRnJvbUl0ZXJhYmxlIHtcblxuXHRjb25zdHJ1Y3RvciAoIGl0ZXJhYmxlICkge1xuXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0XHR0aGlzLml0ZXJhdG9yID0gaXRlciggaXRlcmFibGUgKTtcblxuXHR9XG5cblx0cmVhZCAoICkge1xuXHRcdGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5idWZmZXIucG9wKCk7XG5cdFx0cmV0dXJuIG5leHQoIHRoaXMuaXRlcmF0b3IgLCBFT0YgKTtcblx0fVxuXG5cdHVucmVhZCAoIHQgKSB7XG5cdFx0dGhpcy5idWZmZXIucHVzaCh0KTtcblx0fVxuXG59XG4iXX0=