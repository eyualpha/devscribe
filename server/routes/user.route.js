const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { getAllUsers, getUserById } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", isAuthenticated, getAllUsers);

userRouter.get("/:id", isAuthenticated, getUserById);

module.exports = userRouter;
