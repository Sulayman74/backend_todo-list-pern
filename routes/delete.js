const express = require("express");
const router = express.Router();
const deleteTodo = require("../controllers/delete-controller");

router.delete("/", deleteTodo.delete_task);

module.exports = router;
