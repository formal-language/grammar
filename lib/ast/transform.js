'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = transform;

var _cmap = require('./cmap');

var _cmap2 = _interopRequireDefault(_cmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _transform(match) {

	var t = function t(tree) {
		var nonterminal = tree.nonterminal,
		    production = tree.production;

		return match[nonterminal][production](t, tree);
	};

	return t;
}

function transform(tree, match) {
	// assert tree.type === 'node'
	return _transform(match)(tree);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbInRyYW5zZm9ybSIsIl90cmFuc2Zvcm0iLCJtYXRjaCIsInQiLCJ0cmVlIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFhd0JBLFM7O0FBYnhCOzs7Ozs7QUFFQSxTQUFTQyxVQUFULENBQXNCQyxLQUF0QixFQUE4Qjs7QUFFN0IsS0FBTUMsSUFBSSxTQUFKQSxDQUFJLENBQVdDLElBQVgsRUFBa0I7QUFBQSxNQUNuQkMsV0FEbUIsR0FDVUQsSUFEVixDQUNuQkMsV0FEbUI7QUFBQSxNQUNMQyxVQURLLEdBQ1VGLElBRFYsQ0FDTEUsVUFESzs7QUFFM0IsU0FBT0osTUFBTUcsV0FBTixFQUFtQkMsVUFBbkIsRUFBZ0NILENBQWhDLEVBQW9DQyxJQUFwQyxDQUFQO0FBQ0EsRUFIRDs7QUFLQSxRQUFPRCxDQUFQO0FBRUE7O0FBRWMsU0FBU0gsU0FBVCxDQUFxQkksSUFBckIsRUFBNEJGLEtBQTVCLEVBQW9DO0FBQ2xEO0FBQ0EsUUFBT0QsV0FBV0MsS0FBWCxFQUFrQkUsSUFBbEIsQ0FBUDtBQUNBIiwiZmlsZSI6InRyYW5zZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbWFwIGZyb20gJy4vY21hcCcgO1xuXG5mdW5jdGlvbiBfdHJhbnNmb3JtICggbWF0Y2ggKSB7XG5cblx0Y29uc3QgdCA9IGZ1bmN0aW9uICggdHJlZSApIHtcblx0XHRjb25zdCB7IG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbiB9ID0gdHJlZSA7XG5cdFx0cmV0dXJuIG1hdGNoW25vbnRlcm1pbmFsXVtwcm9kdWN0aW9uXSggdCAsIHRyZWUgKSA7XG5cdH1cblxuXHRyZXR1cm4gdCA7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNmb3JtICggdHJlZSAsIG1hdGNoICkge1xuXHQvLyBhc3NlcnQgdHJlZS50eXBlID09PSAnbm9kZSdcblx0cmV0dXJuIF90cmFuc2Zvcm0obWF0Y2gpKHRyZWUpIDtcbn1cbiJdfQ==