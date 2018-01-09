'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grammar = require('../grammar');

var _compile = require('./compile');

var _compile2 = _interopRequireDefault(_compile);

var _parse2 = require('./parse');

var _parse3 = _interopRequireDefault(_parse2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
	function Parser(grammar) {
		_classCallCheck(this, Parser);

		this.grammar = grammar;
		this._table = null;
	}

	//first ( rule ) {

	//}

	//follow ( rule ) {

	//}

	_createClass(Parser, [{
		key: 'table',
		value: function table() {
			if (this._table === null) this._table = (0, _compile2.default)(this.grammar.start, this.grammar.eof, this.grammar.productions);
			return this._table;
		}
	}, {
		key: 'parse',
		value: function parse(stream) {
			var table = this.table();
			return (0, _parse3.default)(this.grammar.start, this.grammar.eof, this.grammar.productions, table, stream);
		}
	}]);

	return Parser;
}();

exports.default = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvUGFyc2VyLmpzIl0sIm5hbWVzIjpbIlBhcnNlciIsImdyYW1tYXIiLCJfdGFibGUiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwic3RyZWFtIiwidGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLE07QUFFcEIsaUJBQWNDLE9BQWQsRUFBd0I7QUFBQTs7QUFDdkIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQTs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7OzswQkFFVTtBQUNULE9BQUssS0FBS0EsTUFBTCxLQUFnQixJQUFyQixFQUE0QixLQUFLQSxNQUFMLEdBQWMsdUJBQVMsS0FBS0QsT0FBTCxDQUFhRSxLQUF0QixFQUE2QixLQUFLRixPQUFMLENBQWFHLEdBQTFDLEVBQStDLEtBQUtILE9BQUwsQ0FBYUksV0FBNUQsQ0FBZDtBQUM1QixVQUFPLEtBQUtILE1BQVo7QUFDQTs7O3dCQUVPSSxNLEVBQVM7QUFDaEIsT0FBTUMsUUFBUSxLQUFLQSxLQUFMLEVBQWQ7QUFDQSxVQUFPLHFCQUFNLEtBQUtOLE9BQUwsQ0FBYUUsS0FBbkIsRUFBMEIsS0FBS0YsT0FBTCxDQUFhRyxHQUF2QyxFQUE0QyxLQUFLSCxPQUFMLENBQWFJLFdBQXpELEVBQXNFRSxLQUF0RSxFQUE2RUQsTUFBN0UsQ0FBUDtBQUNBOzs7Ozs7a0JBdkJtQk4sTSIsImZpbGUiOiJQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYWJldCB9IGZyb20gJy4uL2dyYW1tYXInIDtcbmltcG9ydCBjb21waWxlIGZyb20gJy4vY29tcGlsZScgO1xuaW1wb3J0IHBhcnNlIGZyb20gJy4vcGFyc2UnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VyIHtcblxuXHRjb25zdHJ1Y3RvciAoIGdyYW1tYXIgKSB7XG5cdFx0dGhpcy5ncmFtbWFyID0gZ3JhbW1hciA7XG5cdFx0dGhpcy5fdGFibGUgPSBudWxsIDtcblx0fVxuXG5cdC8vZmlyc3QgKCBydWxlICkge1xuXG5cdC8vfVxuXG5cdC8vZm9sbG93ICggcnVsZSApIHtcblxuXHQvL31cblxuXHR0YWJsZSAoICkge1xuXHRcdGlmICggdGhpcy5fdGFibGUgPT09IG51bGwgKSB0aGlzLl90YWJsZSA9IGNvbXBpbGUoIHRoaXMuZ3JhbW1hci5zdGFydCwgdGhpcy5ncmFtbWFyLmVvZiwgdGhpcy5ncmFtbWFyLnByb2R1Y3Rpb25zKSA7XG5cdFx0cmV0dXJuIHRoaXMuX3RhYmxlIDtcblx0fVxuXG5cdHBhcnNlICggc3RyZWFtICkge1xuXHRcdGNvbnN0IHRhYmxlID0gdGhpcy50YWJsZSgpO1xuXHRcdHJldHVybiBwYXJzZSh0aGlzLmdyYW1tYXIuc3RhcnQsIHRoaXMuZ3JhbW1hci5lb2YsIHRoaXMuZ3JhbW1hci5wcm9kdWN0aW9ucywgdGFibGUsIHN0cmVhbSk7XG5cdH1cblxufVxuIl19