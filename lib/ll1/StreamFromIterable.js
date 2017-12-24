'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StreamFromIterable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsItertools = require('@aureooms/js-itertools');

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StreamFromIterable = exports.StreamFromIterable = function () {
	function StreamFromIterable(iterable) {
		_classCallCheck(this, StreamFromIterable);

		this.buffer = [];
		this.iterable = iterable;
		this.iterator = (0, _jsItertools.iter)(iterable);
	}

	_createClass(StreamFromIterable, [{
		key: 'read',
		value: function read() {
			if (this.buffer.length > 0) return this.buffer.pop();
			return (0, _jsItertools.next)(this.iterator, _constants.EOF);
		}
	}, {
		key: 'unread',
		value: function unread(t) {
			this.buffer.push(t);
		}
	}]);

	return StreamFromIterable;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvU3RyZWFtRnJvbUl0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbIlN0cmVhbUZyb21JdGVyYWJsZSIsIml0ZXJhYmxlIiwiYnVmZmVyIiwiaXRlcmF0b3IiLCJsZW5ndGgiLCJwb3AiLCJ0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFYUEsa0IsV0FBQUEsa0I7QUFFWiw2QkFBY0MsUUFBZCxFQUF5QjtBQUFBOztBQUV4QixPQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLE9BQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0UsUUFBTCxHQUFnQix1QkFBTUYsUUFBTixDQUFoQjtBQUVBOzs7O3lCQUVRO0FBQ1IsT0FBSSxLQUFLQyxNQUFMLENBQVlFLE1BQVosR0FBcUIsQ0FBekIsRUFBNEIsT0FBTyxLQUFLRixNQUFMLENBQVlHLEdBQVosRUFBUDtBQUM1QixVQUFPLHVCQUFNLEtBQUtGLFFBQVgsaUJBQVA7QUFDQTs7O3lCQUVRRyxDLEVBQUk7QUFDWixRQUFLSixNQUFMLENBQVlLLElBQVosQ0FBaUJELENBQWpCO0FBQ0EiLCJmaWxlIjoiU3RyZWFtRnJvbUl0ZXJhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIG5leHQgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBFT0YgfSBmcm9tICcuL2NvbnN0YW50cycgO1xuXG5leHBvcnQgY2xhc3MgU3RyZWFtRnJvbUl0ZXJhYmxlIHtcblxuXHRjb25zdHJ1Y3RvciAoIGl0ZXJhYmxlICkge1xuXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0XHR0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XG5cdFx0dGhpcy5pdGVyYXRvciA9IGl0ZXIoIGl0ZXJhYmxlICk7XG5cblx0fVxuXG5cdHJlYWQgKCApIHtcblx0XHRpZiAodGhpcy5idWZmZXIubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXMuYnVmZmVyLnBvcCgpO1xuXHRcdHJldHVybiBuZXh0KCB0aGlzLml0ZXJhdG9yICwgRU9GICk7XG5cdH1cblxuXHR1bnJlYWQgKCB0ICkge1xuXHRcdHRoaXMuYnVmZmVyLnB1c2godCk7XG5cdH1cblxufVxuIl19