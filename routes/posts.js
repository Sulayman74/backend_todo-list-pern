const express = require("express");
const router = express.Router();

const createTodo = require("../controllers/add-controller");

// ** create a todo add a task

router.post("/", createTodo.addTodo);

module.exports = router;
