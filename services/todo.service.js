import Todo from "../models/todo.model.js";

export const getTodos = async (filter) => {
  let query = {};
  console.log("filter", filter)
  if (filter === "done") {
    query = { isDone: true };
  } else if (filter == "upcoming") {
    query = {
      dateTime: { $gte: new Date() },
      isDone: false,
    };
  }

  return await Todo.find(query);
};

export const getTodoById = async (id) => {
  return await Todo.findById(id);
};

export const addTodo = async (data) => {
  const { name, description, dateTime } = data;
  if (!name || !description || !dateTime) {
    throw new Error("All fields are required");
  }

  await Todo.create({ name, description, dateTime });
};

export const updateTodo = async (id, data) => {
  const { name, description, dateTime } = data;
  if (!name || !description || !dateTime) {
    throw new Error("All fields are required");
  }

  await Todo.findByIdAndUpdate(
    id,
    { name, description, dateTime },
    {
      new: true,
    }
  );
};

export const updateTodoMark = async (id, data) => {
  console.log(data);
  await Todo.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteTodo = async (id) => {
  await Todo.findByIdAndDelete(id);
};

export default {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  updateTodoMark,
  deleteTodo,
};
