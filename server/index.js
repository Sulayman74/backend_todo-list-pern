const express = require("express");
const app = express();
const port = 7070;
const cors = require("cors");
const pool = require("./config");
// ?middleware
app.use(cors());
app.use(express.json());

app.connect(pool);

// ** les routes **//

const deleteRouter = require("../routes/delete");
const getTasksRouter = require("../routes/get-tasks");
const oneTodoRouter = require("../routes/by-id");
const postsRouter = require("../routes/posts");
const updateRouter = require("../routes/by-id");

app.use("/api/todos/create", postsRouter);
app.use("/api/todos/allTodos", getTasksRouter);
app.use("/api/todos/:id/one", oneTodoRouter);
app.use("/api/todos/:id/delete", deleteRouter);
app.use("/api/todos/:id/update", updateRouter);

app.listen(port, () => {
  console.log(`le server est sur le port ${port}`);
});

// TODO ROUTES Controllers//

//TODO get all todos
//TODO create a todo
//TODO update a todo
//TODO delete a todo
