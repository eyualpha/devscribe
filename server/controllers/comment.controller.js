const Comment = require("../models/comment.model");

const createComment = async (req, res) => {
  const { content } = req.body;
  const postId = req.params.id;
  const createdBy = req.user.userId;
  try {
    const newComment = new Comment({ content, postId, createdBy });
    await newComment.save();
    res.status(201).json({ message: "Comment created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
};

const getCommentsByPostId = async (req, res) => {
  const postId = req.params.id;
  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
};

module.exports = { createComment, getCommentsByPostId };
