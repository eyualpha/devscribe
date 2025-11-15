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
const {
  createComment,
  getCommentsByPostId,
} = require("../controllers/comment.controller");
const { handleLikePost } = require("../controllers/like.controller");

const postRouter = express.Router();

postRouter.post("/", isAuthenticated, createPost);

postRouter.get("/", getAllPosts);

postRouter.get("/:postId", isAuthenticated, getPostById);

postRouter.put("/:postId", isAuthenticated, updatePost);

postRouter.delete("/:postId", isAuthenticated, deletePost);

postRouter.get("/user/:userId", isAuthenticated, getPostsByUserId);

postRouter.post("/comment/:postId", isAuthenticated, createComment);

postRouter.get("/comment/:postId", isAuthenticated, getCommentsByPostId);

postRouter.put("/like/:postId", isAuthenticated, handleLikePost);

module.exports = postRouter;
