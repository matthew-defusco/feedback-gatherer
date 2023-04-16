const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  gitHubId: String,
  credits: {
    type: Number,
    default: 0,
  },
});

mongoose.model("User", userSchema);
