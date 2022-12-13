const express = require("express");
const userRouter = express.Router();
const authToken = require("../middleware/auth-middleware");


const registerUser = require("../controllers/register-user");
const deleteUser = require("../controllers/delete-user");
const getUsers = require("../controllers/get-users")

userRouter.post("/create", registerUser.register)
userRouter.get("/allUsers", authToken, getUsers.getUsers)
userRouter.delete("/delete/:id", authToken, deleteUser.deleteUser);

module.exports = userRouter