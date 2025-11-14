const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    commnets: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Posts", postSchema);

module.exports = Post;
