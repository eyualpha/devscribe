const Post = require("../models/post.model");

const createPost = async (req, res) => {
  console.log("Creating post for user:", req.user);
  const { title, description } = req.body;
  const createdBy = req.user.userId;
  try {
    const newPost = new Post({ title, description, createdBy });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
};
const getPostById = async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
};

const updatePost = async (req, res) => {
  const postId = req.params.postId;
  const { title, description } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, description },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};

const getPostsByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const posts = await Post.find({ createdBy: userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostsByUserId,
};
