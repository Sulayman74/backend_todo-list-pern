const express = require("express");
const userRouter = express.Router();
// const authToken = require("../middleware/auth-middleware");


const registerUser = require("../controllers/register-user");
const loginUser = require("../controllers/login-user");
const deleteUser = require("../controllers/delete-user");
const getUsers = require("../controllers/get-users")
const getOneUser = require("../controllers/get-one-user")

//!-------------------------------- les routes qui n'ont pas besoin d'authentification ----------------------------//
userRouter.post("/register", registerUser.register)
userRouter.post("/login", loginUser.login)

//? ------------------------------- les routes AVEC les authentifications nécessaires (token)-------------------//

// TODO userRouter.use(authToken);
// j'utilise le middleware ici pour toute les routes qui ont besoin du token pour accéder à la route


userRouter.get("/allUsers", getUsers.getUsers);
userRouter.get("/user/:id", getOneUser.getOneUser);
userRouter.delete("/delete/:id", deleteUser.deleteUser);

module.exports = userRouter