const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  body: {
    type: String,
    trim: true,
    required: [true, "Please add a title for the review"],
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Tweet", TweetSchema);

