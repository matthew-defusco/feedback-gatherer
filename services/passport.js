const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const foundUser = await User.findById(id);
  done(null, foundUser);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({
          googleId: profile.id,
        }).save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.gitHubClientID,
      clientSecret: keys.gitHubSecret,
      callbackURL: '/auth/github/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ gitHubId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({ gitHubId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
