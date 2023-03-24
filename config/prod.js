// prod.js - production keys go here!!

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  gitHubClientID: process.env.GITHUB_CLIENT_ID,
  gitHubSecret: process.env.GITHUB_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};