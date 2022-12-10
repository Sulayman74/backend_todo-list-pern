const express = require("express");
const router = express.Router();

const todo = require("../controllers/get-one-todo");
const update = require("../controllers/update-controller");

// ** get a specific todo/

router.get("/", todo.getOneTodo);
//** update a todo */

router.put("/", update.updateTodo);

module.exports = router;
