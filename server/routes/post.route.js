const express = require("express");
const postRouter = express.Router();

postRouter.post("/", (req, res) => {
  res.send("Create a new post");
});

postRouter.get("/", (req, res) => {
  res.send("Get all posts");
});

postRouter.get("/:id", (req, res) => {
  res.send(`Get post with ID: ${req.params.id}`);
});

postRouter.put("/:id", (req, res) => {
  res.send(`Update post with ID: ${req.params.id}`);
});
postRouter.delete("/:id", (req, res) => {
  res.send(`Delete post with ID: ${req.params.id}`);
});
module.exports = postRouter;
