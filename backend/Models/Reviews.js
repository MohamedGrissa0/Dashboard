const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema(
  {
    personId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },
    username: {
      type: String,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    rate: {
      type: Number,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);
  


module.exports = mongoose.model("Review", ReviewSchema);