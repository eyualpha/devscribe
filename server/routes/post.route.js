const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostsByUserId,
} = require("../controllers/post.controller");

const postRouter = express.Router();

postRouter.post("/", isAuthenticated, createPost);

postRouter.get("/", getAllPosts);

postRouter.get("/:id", isAuthenticated, getPostById);

postRouter.put("/:id", isAuthenticated, updatePost);

postRouter.delete("/:id", isAuthenticated, deletePost);

postRouter.get("/user/:userId", isAuthenticated, getPostsByUserId);

module.exports = postRouter;
