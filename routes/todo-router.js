const express = require("express");
const todoRouter = express.Router();
const authToken = require("../middleware/auth-middleware")

const createTodo = require("../controllers/add-controller");
const update = require("../controllers/update-controller");
const todo = require("../controllers/get-one-todo");
const getAll = require("../controllers/get-all-todos");
const deleteTodo = require("../controllers/delete-controller");

todoRouter.post("/create", createTodo.addTodo);
todoRouter.get("/allTodos", getAll.getAllTodos);
todoRouter.get("/one/:id", todo.getOneTodo);
todoRouter.delete("/delete/:id", deleteTodo.delete_task);
todoRouter.put("/update/:id", update.updateTodo);



module.exports = todoRouter