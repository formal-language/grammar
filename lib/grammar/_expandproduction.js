"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _expandproduction;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(_expandproduction);

function _makenode(typ, arg) {
	switch (typ) {
		case '&':
			return { "type": "node", "nonterminal": arg };
		case '=':
			return { "type": "leaf", "terminal": arg };
		default:
			throw new Error(typ + " is not a valid type");
	}
}

function _expandproduction(production) {
	var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, part;

	return regeneratorRuntime.wrap(function _expandproduction$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 3;
					_iterator = production[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 22;
						break;
					}

					part = _step.value;

					if (!(typeof part === 'string')) {
						_context.next = 12;
						break;
					}

					_context.next = 10;
					return _makenode(part[0], part.substr(1));

				case 10:
					_context.next = 19;
					break;

				case 12:
					if (!(typeof part === 'number')) {
						_context.next = 17;
						break;
					}

					_context.next = 15;
					return _makenode('&', '' + part);

				case 15:
					_context.next = 19;
					break;

				case 17:
					_context.next = 19;
					return part;

				case 19:
					_iteratorNormalCompletion = true;
					_context.next = 5;
					break;

				case 22:
					_context.next = 28;
					break;

				case 24:
					_context.prev = 24;
					_context.t0 = _context["catch"](3);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 28:
					_context.prev = 28;
					_context.prev = 29;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 31:
					_context.prev = 31;

					if (!_didIteratorError) {
						_context.next = 34;
						break;
					}

					throw _iteratorError;

				case 34:
					return _context.finish(31);

				case 35:
					return _context.finish(28);

				case 36:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this, [[3, 24, 28, 36], [29,, 31, 35]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFtbWFyL19leHBhbmRwcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbIl9leHBhbmRwcm9kdWN0aW9uIiwiX21ha2Vub2RlIiwidHlwIiwiYXJnIiwiRXJyb3IiLCJwcm9kdWN0aW9uIiwicGFydCIsInN1YnN0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBV3lCQSxpQjs7bURBQUFBLGlCOztBQVh6QixTQUFTQyxTQUFULENBQXFCQyxHQUFyQixFQUEyQkMsR0FBM0IsRUFBaUM7QUFDaEMsU0FBU0QsR0FBVDtBQUNDLE9BQUssR0FBTDtBQUNDLFVBQU8sRUFBRSxRQUFTLE1BQVgsRUFBb0IsZUFBZ0JDLEdBQXBDLEVBQVA7QUFDRCxPQUFLLEdBQUw7QUFDQyxVQUFPLEVBQUUsUUFBUyxNQUFYLEVBQW9CLFlBQWFBLEdBQWpDLEVBQVA7QUFDRDtBQUNDLFNBQU0sSUFBSUMsS0FBSixDQUFhRixHQUFiLDBCQUFOO0FBTkY7QUFRQTs7QUFFYyxTQUFVRixpQkFBVixDQUE4QkssVUFBOUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ01BLFVBRE47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDRkMsU0FERTs7QUFBQSxXQUVSLE9BQU9BLElBQVAsS0FBZ0IsUUFGUjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBRXlCTCxVQUFXSyxLQUFLLENBQUwsQ0FBWCxFQUFxQkEsS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBckIsQ0FGekI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0FHSCxPQUFPRCxJQUFQLEtBQWdCLFFBSGI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQUc4QkwsVUFBVyxHQUFYLEVBQWlCLEtBQUdLLElBQXBCLENBSDlCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsWUFJRkEsSUFKRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Il9leHBhbmRwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX21ha2Vub2RlICggdHlwICwgYXJnICkge1xuXHRzd2l0Y2ggKCB0eXAgKSB7XG5cdFx0Y2FzZSAnJicgOlxuXHRcdFx0cmV0dXJuIHsgXCJ0eXBlXCIgOiBcIm5vZGVcIiAsIFwibm9udGVybWluYWxcIiA6IGFyZyB9IDtcblx0XHRjYXNlICc9JyA6XG5cdFx0XHRyZXR1cm4geyBcInR5cGVcIiA6IFwibGVhZlwiICwgXCJ0ZXJtaW5hbFwiIDogYXJnIH0gO1xuXHRcdGRlZmF1bHQgOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGAke3R5cH0gaXMgbm90IGEgdmFsaWQgdHlwZWApIDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX2V4cGFuZHByb2R1Y3Rpb24gKCBwcm9kdWN0aW9uICkge1xuXHRmb3IgKCBjb25zdCBwYXJ0IG9mIHByb2R1Y3Rpb24gKSB7XG5cdFx0aWYgKCB0eXBlb2YgcGFydCA9PT0gJ3N0cmluZycgKSB5aWVsZCBfbWFrZW5vZGUoIHBhcnRbMF0gLCBwYXJ0LnN1YnN0cigxKSApIDtcblx0XHRlbHNlIGlmICggdHlwZW9mIHBhcnQgPT09ICdudW1iZXInICkgeWllbGQgX21ha2Vub2RlKCAnJicgLCAnJytwYXJ0ICkgO1xuXHRcdGVsc2UgeWllbGQgcGFydCA7XG5cdH1cbn1cbiJdfQ==