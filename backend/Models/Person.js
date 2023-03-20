const mongoose = require("mongoose")

const PersonSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      profilepic: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      address: {
        type: String,
      },
      number: {
        type: String,
      },
      zip: {
        type: String,
      },
      password: {
        type: String,
      },
      token: {
        type: String,
      },
      reviews: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Review',
        },
      ],
    },
    { timestamps: true }
  );
  


module.exports = mongoose.model("users", PersonSchema);