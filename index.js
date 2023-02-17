const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const pool = require("./config");
const port = 7070;
// ?middleware

app.use(cors());
app.use(express.json());
app.connect(pool);

// ** les routes **//

const todoRouter = require("./routes/todo-router");
const userRouter = require("./routes/user-router");

app.use("/api/users", userRouter)
app.use("/api/todos", todoRouter)

app.listen(port, () => {
  console.log(`le server est sur le port ${port}`);
});

