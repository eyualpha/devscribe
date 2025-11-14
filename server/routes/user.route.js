const express = require("express");
const { register } = require("../controllers/auth.controller");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Get all users");
});

userRouter.get("/:id", (req, res) => {
  res.send(`Get user with ID: ${req.params.id}`);
});

module.exports = userRouter;
