const express = require("express");
const userRouter = express.Router();
const authToken = require("../middleware/auth-middleware");


const registerUser = require("../controllers/register-user");
const loginUser = require("../controllers/login-user")
const deleteUser = require("../controllers/delete-user");
const getUsers = require("../controllers/get-users")
const getOneUser = require("../controllers/get-one-user")
const getProfile = require("../controllers/get-profile")
//!-------------------------------- les routes qui n'ont pas besoin d'authentification ----------------------------//
userRouter.post("/register", registerUser.register)
    .post("/login", loginUser.login)

//? ------------------------------- les routes AVEC les authentifications nécessaires (token)-------------------//

userRouter.use(authToken);
// j'utilise le middleware ici pour toute les routes qui ont besoin du token pour accéder à la route


userRouter.get("/allUsers", getUsers.getUsers)
    .get("/getProfile", getProfile.getProfile)
    .get("/:id", getOneUser.getOneUser)
    .delete("/delete/:id", deleteUser.deleteUser)

module.exports = userRouter