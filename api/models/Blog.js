import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    commentsBoolean: {
      type: Boolean,
      default: true,
    },
    comments: [
      {
        body: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
        username: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
