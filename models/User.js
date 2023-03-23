const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  gitHubId: String,
});

mongoose.model('users', userSchema);
