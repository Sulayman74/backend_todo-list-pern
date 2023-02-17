const express = require("express");
const todoRouter = express.Router();
// const authToken = require("../middleware/auth-middleware")

const createTodo = require("../controllers/add-controller");
const update = require("../controllers/update-controller");
const todo = require("../controllers/get-one-todo");
const getAll = require("../controllers/get-all-todos");
const deleteTodo = require("../controllers/delete-controller");


//TODO ------------- todoRouter.use(authToken)

todoRouter.post("/create", createTodo.addTodo)
    .get("/allTodos", getAll.getAllTodos)
    .get("/one/:id", todo.getOneTodo)
    .delete("/delete/:id", deleteTodo.delete_task)
    .put("/update/:id", update.updateTodo)



module.exports = todoRouter