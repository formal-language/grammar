"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = materialize;

var _util = require("../util");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function materialize(_x) {
  return _materialize.apply(this, arguments);
}

function _materialize() {
  _materialize = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(root) {
    var parents, children, todo, _ref, done, value, tree, parent, child, _tree, grandchildren, newchild;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // assert root.type === 'node'
            parents = [{
              type: 'node',
              nonterminal: root.nonterminal,
              production: root.production,
              children: []
            }];
            children = [(0, _util.anyIterator)(root.children)];

          case 2:
            if (!true) {
              _context.next = 24;
              break;
            }

            todo = children.pop();
            _context.next = 6;
            return todo.next();

          case 6:
            _ref = _context.sent;
            done = _ref.done;
            value = _ref.value;

            if (!done) {
              _context.next = 20;
              break;
            }

            if (!(children.length === 0)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", parents.pop());

          case 14:
            tree = parents.pop();
            parent = parents.pop();
            parent.children.push(tree);
            parents.push(parent);

          case 18:
            _context.next = 22;
            break;

          case 20:
            child = value;

            if (child.type === 'leaf') {
              _tree = parents.pop();

              _tree.children.push(child);

              parents.push(_tree);
              children.push(todo);
            } else {
              grandchildren = (0, _util.anyIterator)(child.children);
              newchild = {
                type: 'node',
                nonterminal: child.nonterminal,
                production: child.production,
                children: []
              };
              parents.push(newchild);
              children.push(todo);
              children.push(grandchildren);
            }

          case 22:
            _context.next = 2;
            break;

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _materialize.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvbWF0ZXJpYWxpemUuanMiXSwibmFtZXMiOlsibWF0ZXJpYWxpemUiLCJyb290IiwicGFyZW50cyIsInR5cGUiLCJub250ZXJtaW5hbCIsInByb2R1Y3Rpb24iLCJjaGlsZHJlbiIsInRvZG8iLCJwb3AiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwibGVuZ3RoIiwidHJlZSIsInBhcmVudCIsInB1c2giLCJjaGlsZCIsImdyYW5kY2hpbGRyZW4iLCJuZXdjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7U0FFOEJBLFc7Ozs7Ozs7MEJBQWYsaUJBQTZCQyxJQUE3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWQ7QUFFTUMsWUFBQUEsT0FKUSxHQUlFLENBQ2Y7QUFDQ0MsY0FBQUEsSUFBSSxFQUFHLE1BRFI7QUFFQ0MsY0FBQUEsV0FBVyxFQUFHSCxJQUFJLENBQUNHLFdBRnBCO0FBR0NDLGNBQUFBLFVBQVUsRUFBR0osSUFBSSxDQUFDSSxVQUhuQjtBQUlDQyxjQUFBQSxRQUFRLEVBQUc7QUFKWixhQURlLENBSkY7QUFhUkEsWUFBQUEsUUFiUSxHQWFHLENBQUUsdUJBQVlMLElBQUksQ0FBQ0ssUUFBakIsQ0FBRixDQWJIOztBQUFBO0FBQUEsaUJBZU4sSUFmTTtBQUFBO0FBQUE7QUFBQTs7QUFpQlBDLFlBQUFBLElBakJPLEdBaUJBRCxRQUFRLENBQUNFLEdBQVQsRUFqQkE7QUFBQTtBQUFBLG1CQW1Ca0JELElBQUksQ0FBQ0UsSUFBTCxFQW5CbEI7O0FBQUE7QUFBQTtBQW1CTEMsWUFBQUEsSUFuQkssUUFtQkxBLElBbkJLO0FBbUJFQyxZQUFBQSxLQW5CRixRQW1CRUEsS0FuQkY7O0FBQUEsaUJBcUJSRCxJQXJCUTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFzQlBKLFFBQVEsQ0FBQ00sTUFBVCxLQUFvQixDQXRCYjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FzQndCVixPQUFPLENBQUNNLEdBQVIsRUF0QnhCOztBQUFBO0FBd0JMSyxZQUFBQSxJQXhCSyxHQXdCRVgsT0FBTyxDQUFDTSxHQUFSLEVBeEJGO0FBeUJMTSxZQUFBQSxNQXpCSyxHQXlCSVosT0FBTyxDQUFDTSxHQUFSLEVBekJKO0FBMEJYTSxZQUFBQSxNQUFNLENBQUNSLFFBQVAsQ0FBZ0JTLElBQWhCLENBQXFCRixJQUFyQjtBQUNBWCxZQUFBQSxPQUFPLENBQUNhLElBQVIsQ0FBYUQsTUFBYjs7QUEzQlc7QUFBQTtBQUFBOztBQUFBO0FBaUNORSxZQUFBQSxLQWpDTSxHQWlDRUwsS0FqQ0Y7O0FBbUNaLGdCQUFLSyxLQUFLLENBQUNiLElBQU4sS0FBZSxNQUFwQixFQUE2QjtBQUN0QlUsY0FBQUEsS0FEc0IsR0FDZlgsT0FBTyxDQUFDTSxHQUFSLEVBRGU7O0FBRTVCSyxjQUFBQSxLQUFJLENBQUNQLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQkMsS0FBbkI7O0FBQ0FkLGNBQUFBLE9BQU8sQ0FBQ2EsSUFBUixDQUFhRixLQUFiO0FBQ0FQLGNBQUFBLFFBQVEsQ0FBQ1MsSUFBVCxDQUFjUixJQUFkO0FBQ0EsYUFMRCxNQU9LO0FBRUVVLGNBQUFBLGFBRkYsR0FFa0IsdUJBQVlELEtBQUssQ0FBQ1YsUUFBbEIsQ0FGbEI7QUFJRVksY0FBQUEsUUFKRixHQUlhO0FBQ2hCZixnQkFBQUEsSUFBSSxFQUFHLE1BRFM7QUFFaEJDLGdCQUFBQSxXQUFXLEVBQUdZLEtBQUssQ0FBQ1osV0FGSjtBQUdoQkMsZ0JBQUFBLFVBQVUsRUFBR1csS0FBSyxDQUFDWCxVQUhIO0FBSWhCQyxnQkFBQUEsUUFBUSxFQUFHO0FBSkssZUFKYjtBQVdKSixjQUFBQSxPQUFPLENBQUNhLElBQVIsQ0FBYUcsUUFBYjtBQUNBWixjQUFBQSxRQUFRLENBQUNTLElBQVQsQ0FBY1IsSUFBZDtBQUNBRCxjQUFBQSxRQUFRLENBQUNTLElBQVQsQ0FBY0UsYUFBZDtBQUVBOztBQXpEVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFueUl0ZXJhdG9yIH0gZnJvbSAnLi4vdXRpbCcgO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtYXRlcmlhbGl6ZSAoIHJvb3QgKSB7XG5cblx0Ly8gYXNzZXJ0IHJvb3QudHlwZSA9PT0gJ25vZGUnXG5cblx0Y29uc3QgcGFyZW50cyA9IFtcblx0XHR7XG5cdFx0XHR0eXBlIDogJ25vZGUnICxcblx0XHRcdG5vbnRlcm1pbmFsIDogcm9vdC5ub250ZXJtaW5hbCAsXG5cdFx0XHRwcm9kdWN0aW9uIDogcm9vdC5wcm9kdWN0aW9uICxcblx0XHRcdGNoaWxkcmVuIDogWyBdICxcblx0XHR9XG5cdF0gO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gWyBhbnlJdGVyYXRvcihyb290LmNoaWxkcmVuKSBdIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0b2RvID0gY2hpbGRyZW4ucG9wKCk7XG5cblx0XHRjb25zdCB7IGRvbmUgLCB2YWx1ZSB9ID0gYXdhaXQgdG9kby5uZXh0KCk7XG5cblx0XHRpZiAoIGRvbmUgKSB7XG5cdFx0XHRpZiAoIGNoaWxkcmVuLmxlbmd0aCA9PT0gMCApIHJldHVybiBwYXJlbnRzLnBvcCgpIDtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0cmVlID0gcGFyZW50cy5wb3AoKTtcblx0XHRcdFx0Y29uc3QgcGFyZW50ID0gcGFyZW50cy5wb3AoKTtcblx0XHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2godHJlZSk7XG5cdFx0XHRcdHBhcmVudHMucHVzaChwYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRjb25zdCBjaGlsZCA9IHZhbHVlO1xuXG5cdFx0XHRpZiAoIGNoaWxkLnR5cGUgPT09ICdsZWFmJyApIHtcblx0XHRcdFx0Y29uc3QgdHJlZSA9IHBhcmVudHMucG9wKCk7XG5cdFx0XHRcdHRyZWUuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdFx0XHRcdHBhcmVudHMucHVzaCh0cmVlKTtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCh0b2RvKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgZ3JhbmRjaGlsZHJlbiA9IGFueUl0ZXJhdG9yKGNoaWxkLmNoaWxkcmVuKSA7XG5cblx0XHRcdFx0Y29uc3QgbmV3Y2hpbGQgPSB7XG5cdFx0XHRcdFx0dHlwZSA6ICdub2RlJyAsXG5cdFx0XHRcdFx0bm9udGVybWluYWwgOiBjaGlsZC5ub250ZXJtaW5hbCAsXG5cdFx0XHRcdFx0cHJvZHVjdGlvbiA6IGNoaWxkLnByb2R1Y3Rpb24gLFxuXHRcdFx0XHRcdGNoaWxkcmVuIDogWyBdICxcblx0XHRcdFx0fSA7XG5cblx0XHRcdFx0cGFyZW50cy5wdXNoKG5ld2NoaWxkKTtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCh0b2RvKTtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChncmFuZGNoaWxkcmVuKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19