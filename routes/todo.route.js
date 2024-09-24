import express from "express";

import {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  updateTodoMark,
  deleteTodo,
} from "../controllers/todo.controller.js";
import {
  todoValidation,
  validate,
} from "../middlewares/validation.middleware.js";

const router = express.Router();

router.get("/todos/new", (req, res) => {
  res.render("new");
});

router.put("/todos/:id/mark", updateTodoMark);
router.get("/todos/:id/edit", getTodoById);

router
  .route("/todos")
  .get(getAllTodos)
  .post(todoValidation(), validate, addTodo);

router
  .route("/todos/:id")
  .get(getTodoById)
  .put(todoValidation(true), validate, updateTodo)
  .delete(deleteTodo);

export default router;
