import todoService from "../services/todo.service.js";

class TodoController {
  getAllTodos = async (req, res) => {
    try {
      const filter = req.query.filter;
      const todos = await todoService.getTodos(filter);
      if (!filter) {
        res.render("index", { todos, filter });
      } else {
        res.render("partials/todo-list", { todos, filter });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Error fetching todos");
    }
  };

  getTodoById = async (req, res) => {
    try {
      const todo = await todoService.getTodoById(req.params.id);
      if (!todo) {
        return res.status(404).send("Todo not found");
      }
      res.render("edit", { todo });
    } catch (error) {
      res.status(500).send("Error fetching todo");
    }
  };

  addTodo = async (req, res) => {
    try {
      await todoService.addTodo(req.body);
      res.redirect("/todos");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  updateTodo = async (req, res) => {
    try {
      const todoId = req.params.id;
      const todo = await todoService.getTodoById(todoId);

      const updatedTodo = await todoService.updateTodo(todoId, req.body);
      res.redirect("/todos");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  updateTodoMark = async (req, res) => {
    try {
      const todoId = req.params.id;
      const todo = await todoService.getTodoById(todoId);
      const updatedTodo = await todoService.updateTodoMark(todoId, {
        ...todo.toObject(),
        isDone: !todo.isDone,
      });
      res.redirect("/todos");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  deleteTodo = async (req, res) => {
    try {
      await todoService.deleteTodo(req.params.id);
      res.redirect("/todos");
    } catch (error) {
      res.status(500).send("Error deleting todo");
    }
  };
}

const todo = new TodoController();
export const {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  updateTodoMark,
  deleteTodo,
} = todo;
