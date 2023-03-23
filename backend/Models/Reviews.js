const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema(
    {
      personId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
      },
      username: {
        type: String,
      },
      postId: {
        type: String,
      },
      Rate: {
        type: String,
      },
      comments: {
        type: String,
      },
    },
    { timestamps: true }
  );
  


module.exports = mongoose.model("Review", ReviewSchema);