"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = materialize;

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
            children = [root.children[Symbol.asyncIterator]()];

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
              grandchildren = child.children[Symbol.asyncIterator]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvbWF0ZXJpYWxpemUuanMiXSwibmFtZXMiOlsibWF0ZXJpYWxpemUiLCJyb290IiwicGFyZW50cyIsInR5cGUiLCJub250ZXJtaW5hbCIsInByb2R1Y3Rpb24iLCJjaGlsZHJlbiIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b2RvIiwicG9wIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImxlbmd0aCIsInRyZWUiLCJwYXJlbnQiLCJwdXNoIiwiY2hpbGQiLCJncmFuZGNoaWxkcmVuIiwibmV3Y2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1NBQThCQSxXOzs7Ozs7OzBCQUFmLGlCQUE2QkMsSUFBN0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVkO0FBRU1DLFlBQUFBLE9BSlEsR0FJRSxDQUNmO0FBQ0NDLGNBQUFBLElBQUksRUFBRyxNQURSO0FBRUNDLGNBQUFBLFdBQVcsRUFBR0gsSUFBSSxDQUFDRyxXQUZwQjtBQUdDQyxjQUFBQSxVQUFVLEVBQUdKLElBQUksQ0FBQ0ksVUFIbkI7QUFJQ0MsY0FBQUEsUUFBUSxFQUFHO0FBSlosYUFEZSxDQUpGO0FBYVJBLFlBQUFBLFFBYlEsR0FhRyxDQUFFTCxJQUFJLENBQUNLLFFBQUwsQ0FBY0MsTUFBTSxDQUFDQyxhQUFyQixHQUFGLENBYkg7O0FBQUE7QUFBQSxpQkFlTixJQWZNO0FBQUE7QUFBQTtBQUFBOztBQWlCUEMsWUFBQUEsSUFqQk8sR0FpQkFILFFBQVEsQ0FBQ0ksR0FBVCxFQWpCQTtBQUFBO0FBQUEsbUJBbUJrQkQsSUFBSSxDQUFDRSxJQUFMLEVBbkJsQjs7QUFBQTtBQUFBO0FBbUJMQyxZQUFBQSxJQW5CSyxRQW1CTEEsSUFuQks7QUFtQkVDLFlBQUFBLEtBbkJGLFFBbUJFQSxLQW5CRjs7QUFBQSxpQkFxQlJELElBckJRO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQXNCUE4sUUFBUSxDQUFDUSxNQUFULEtBQW9CLENBdEJiO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQXNCd0JaLE9BQU8sQ0FBQ1EsR0FBUixFQXRCeEI7O0FBQUE7QUF3QkxLLFlBQUFBLElBeEJLLEdBd0JFYixPQUFPLENBQUNRLEdBQVIsRUF4QkY7QUF5QkxNLFlBQUFBLE1BekJLLEdBeUJJZCxPQUFPLENBQUNRLEdBQVIsRUF6Qko7QUEwQlhNLFlBQUFBLE1BQU0sQ0FBQ1YsUUFBUCxDQUFnQlcsSUFBaEIsQ0FBcUJGLElBQXJCO0FBQ0FiLFlBQUFBLE9BQU8sQ0FBQ2UsSUFBUixDQUFhRCxNQUFiOztBQTNCVztBQUFBO0FBQUE7O0FBQUE7QUFpQ05FLFlBQUFBLEtBakNNLEdBaUNFTCxLQWpDRjs7QUFtQ1osZ0JBQUtLLEtBQUssQ0FBQ2YsSUFBTixLQUFlLE1BQXBCLEVBQTZCO0FBQ3RCWSxjQUFBQSxLQURzQixHQUNmYixPQUFPLENBQUNRLEdBQVIsRUFEZTs7QUFFNUJLLGNBQUFBLEtBQUksQ0FBQ1QsUUFBTCxDQUFjVyxJQUFkLENBQW1CQyxLQUFuQjs7QUFDQWhCLGNBQUFBLE9BQU8sQ0FBQ2UsSUFBUixDQUFhRixLQUFiO0FBQ0FULGNBQUFBLFFBQVEsQ0FBQ1csSUFBVCxDQUFjUixJQUFkO0FBQ0EsYUFMRCxNQU9LO0FBRUVVLGNBQUFBLGFBRkYsR0FFa0JELEtBQUssQ0FBQ1osUUFBTixDQUFlQyxNQUFNLENBQUNDLGFBQXRCLEdBRmxCO0FBSUVZLGNBQUFBLFFBSkYsR0FJYTtBQUNoQmpCLGdCQUFBQSxJQUFJLEVBQUcsTUFEUztBQUVoQkMsZ0JBQUFBLFdBQVcsRUFBR2MsS0FBSyxDQUFDZCxXQUZKO0FBR2hCQyxnQkFBQUEsVUFBVSxFQUFHYSxLQUFLLENBQUNiLFVBSEg7QUFJaEJDLGdCQUFBQSxRQUFRLEVBQUc7QUFKSyxlQUpiO0FBV0pKLGNBQUFBLE9BQU8sQ0FBQ2UsSUFBUixDQUFhRyxRQUFiO0FBQ0FkLGNBQUFBLFFBQVEsQ0FBQ1csSUFBVCxDQUFjUixJQUFkO0FBQ0FILGNBQUFBLFFBQVEsQ0FBQ1csSUFBVCxDQUFjRSxhQUFkO0FBRUE7O0FBekRXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWF0ZXJpYWxpemUgKCByb290ICkge1xuXG5cdC8vIGFzc2VydCByb290LnR5cGUgPT09ICdub2RlJ1xuXG5cdGNvbnN0IHBhcmVudHMgPSBbXG5cdFx0e1xuXHRcdFx0dHlwZSA6ICdub2RlJyAsXG5cdFx0XHRub250ZXJtaW5hbCA6IHJvb3Qubm9udGVybWluYWwgLFxuXHRcdFx0cHJvZHVjdGlvbiA6IHJvb3QucHJvZHVjdGlvbiAsXG5cdFx0XHRjaGlsZHJlbiA6IFsgXSAsXG5cdFx0fVxuXHRdIDtcblxuXHRjb25zdCBjaGlsZHJlbiA9IFsgcm9vdC5jaGlsZHJlbltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSBdIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRjb25zdCB0b2RvID0gY2hpbGRyZW4ucG9wKCk7XG5cblx0XHRjb25zdCB7IGRvbmUgLCB2YWx1ZSB9ID0gYXdhaXQgdG9kby5uZXh0KCk7XG5cblx0XHRpZiAoIGRvbmUgKSB7XG5cdFx0XHRpZiAoIGNoaWxkcmVuLmxlbmd0aCA9PT0gMCApIHJldHVybiBwYXJlbnRzLnBvcCgpIDtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB0cmVlID0gcGFyZW50cy5wb3AoKTtcblx0XHRcdFx0Y29uc3QgcGFyZW50ID0gcGFyZW50cy5wb3AoKTtcblx0XHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2godHJlZSk7XG5cdFx0XHRcdHBhcmVudHMucHVzaChwYXJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRjb25zdCBjaGlsZCA9IHZhbHVlO1xuXG5cdFx0XHRpZiAoIGNoaWxkLnR5cGUgPT09ICdsZWFmJyApIHtcblx0XHRcdFx0Y29uc3QgdHJlZSA9IHBhcmVudHMucG9wKCk7XG5cdFx0XHRcdHRyZWUuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdFx0XHRcdHBhcmVudHMucHVzaCh0cmVlKTtcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaCh0b2RvKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgZ3JhbmRjaGlsZHJlbiA9IGNoaWxkLmNoaWxkcmVuW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIDtcblxuXHRcdFx0XHRjb25zdCBuZXdjaGlsZCA9IHtcblx0XHRcdFx0XHR0eXBlIDogJ25vZGUnICxcblx0XHRcdFx0XHRub250ZXJtaW5hbCA6IGNoaWxkLm5vbnRlcm1pbmFsICxcblx0XHRcdFx0XHRwcm9kdWN0aW9uIDogY2hpbGQucHJvZHVjdGlvbiAsXG5cdFx0XHRcdFx0Y2hpbGRyZW4gOiBbIF0gLFxuXHRcdFx0XHR9IDtcblxuXHRcdFx0XHRwYXJlbnRzLnB1c2gobmV3Y2hpbGQpO1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKHRvZG8pO1xuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKGdyYW5kY2hpbGRyZW4pO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=