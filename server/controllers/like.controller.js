const Post = require("../models/post.model");

const handleLikePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.userId;
    console.log(userId, postId);

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const alreadyLiked = post.likes.includes(userId);

    if (alreadyLiked) {
      post.likes = post.likes.filter((id) => id.toString() !== userId);
    } else {
      post.likes.push(userId);
    }

    await post.save();

    return res.status(200).json({
      message: alreadyLiked ? "Post unliked" : "Post liked",
      likesCount: post.likes.length,
      likedByUser: !alreadyLiked,
      likes: post.likes,
    });
  } catch (error) {
    res.status(500).json({ message: "Error liking/unliking post", error });
  }
};

module.exports = { handleLikePost };
