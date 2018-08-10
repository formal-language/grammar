"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _grammar = require("../grammar");

var _compile = _interopRequireDefault(require("./compile"));

var _parse2 = _interopRequireDefault(require("./parse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parser =
/*#__PURE__*/
function () {
  function Parser(grammar) {
    _classCallCheck(this, Parser);

    this.grammar = grammar;
    this._table = null;
  } //first ( rule ) {
  //}
  //follow ( rule ) {
  //}


  _createClass(Parser, [{
    key: "table",
    value: function table() {
      if (this._table === null) this._table = (0, _compile.default)(this.grammar.productions);
      return this._table;
    }
  }, {
    key: "parse",
    value: function parse(tape) {
      var table = this.table();
      return (0, _parse2.default)(this.grammar.root, this.grammar.start, this.grammar.eof, this.grammar.productions, table, tape);
    }
  }]);

  return Parser;
}();

exports.default = Parser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sbDEvUGFyc2VyLmpzIl0sIm5hbWVzIjpbIlBhcnNlciIsImdyYW1tYXIiLCJfdGFibGUiLCJwcm9kdWN0aW9ucyIsInRhcGUiLCJ0YWJsZSIsInJvb3QiLCJzdGFydCIsImVvZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7QUFFcEIsa0JBQWNDLE9BQWQsRUFBd0I7QUFBQTs7QUFDdkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxHLENBRUQ7QUFFQTtBQUVBO0FBRUE7Ozs7OzRCQUVVO0FBQ1QsVUFBSyxLQUFLQSxNQUFMLEtBQWdCLElBQXJCLEVBQTRCLEtBQUtBLE1BQUwsR0FBYyxzQkFBUSxLQUFLRCxPQUFMLENBQWFFLFdBQXJCLENBQWQ7QUFDNUIsYUFBTyxLQUFLRCxNQUFaO0FBQ0E7OzswQkFFT0UsSSxFQUFPO0FBQ2QsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDtBQUNBLGFBQU8scUJBQU0sS0FBS0osT0FBTCxDQUFhSyxJQUFuQixFQUF5QixLQUFLTCxPQUFMLENBQWFNLEtBQXRDLEVBQTZDLEtBQUtOLE9BQUwsQ0FBYU8sR0FBMUQsRUFBK0QsS0FBS1AsT0FBTCxDQUFhRSxXQUE1RSxFQUF5RkUsS0FBekYsRUFBZ0dELElBQWhHLENBQVA7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFscGhhYmV0IH0gZnJvbSAnLi4vZ3JhbW1hcicgO1xuaW1wb3J0IGNvbXBpbGUgZnJvbSAnLi9jb21waWxlJyA7XG5pbXBvcnQgcGFyc2UgZnJvbSAnLi9wYXJzZScgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZXIge1xuXG5cdGNvbnN0cnVjdG9yICggZ3JhbW1hciApIHtcblx0XHR0aGlzLmdyYW1tYXIgPSBncmFtbWFyIDtcblx0XHR0aGlzLl90YWJsZSA9IG51bGwgO1xuXHR9XG5cblx0Ly9maXJzdCAoIHJ1bGUgKSB7XG5cblx0Ly99XG5cblx0Ly9mb2xsb3cgKCBydWxlICkge1xuXG5cdC8vfVxuXG5cdHRhYmxlICggKSB7XG5cdFx0aWYgKCB0aGlzLl90YWJsZSA9PT0gbnVsbCApIHRoaXMuX3RhYmxlID0gY29tcGlsZSh0aGlzLmdyYW1tYXIucHJvZHVjdGlvbnMpIDtcblx0XHRyZXR1cm4gdGhpcy5fdGFibGUgO1xuXHR9XG5cblx0cGFyc2UgKCB0YXBlICkge1xuXHRcdGNvbnN0IHRhYmxlID0gdGhpcy50YWJsZSgpO1xuXHRcdHJldHVybiBwYXJzZSh0aGlzLmdyYW1tYXIucm9vdCwgdGhpcy5ncmFtbWFyLnN0YXJ0LCB0aGlzLmdyYW1tYXIuZW9mLCB0aGlzLmdyYW1tYXIucHJvZHVjdGlvbnMsIHRhYmxlLCB0YXBlKTtcblx0fVxuXG59XG4iXX0=