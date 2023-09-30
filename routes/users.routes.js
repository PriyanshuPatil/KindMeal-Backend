const express = require("express");
const { register, login, getUser, getSingleUser, updateUser, deleteUser } = require("../controller/user.controller");
const { Authenticator } = require("../middleware/authentication.middleware");
const usersRouter = express.Router();

// /users/register -- POST/user  ==> To register a new user.
usersRouter.post("/register", register);

// /users/login -- POST/user  ==> To login/generate a new token.
usersRouter.post("/login", login);

// /users -- GET/admin ==> To get user data.
usersRouter.get("/", getUser);

// /users/:id -- GET/admin ==> To get single user data.
usersRouter.get("/:id",Authenticator, getSingleUser);

// /users/:id -- PATCH/admin ==> To update single user data.
usersRouter.patch("/:id", updateUser);

// /users/:id -- DELETE/admin ==> To delete single user data.
usersRouter.delete("/:id", deleteUser);

module.exports = { usersRouter};