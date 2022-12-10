
const express = require("express");
const router = express.Router();

const createTodo = require("../controllers/add-controller");
const update = require("../controllers/update-controller");
const todo = require("../controllers/get-one-todo");
const getAll = require("../controllers/get-all-todos");
const deleteTodo = require("../controllers/delete-controller");

router.post("/create", createTodo.addTodo);
router.get("/allTodos", getAll.getAllTodos);
router.get("/one/:id", todo.getOneTodo);
router.delete("/delete/:id", deleteTodo.delete_task);
router.put("/update/:id", update.updateTodo);


module.exports = router;