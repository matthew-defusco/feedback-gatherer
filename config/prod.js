// prod.js - production keys go here!!

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  gitHubClientID: process.env.GITHUB_CLIENT_ID,
  gitHubSecret: process.env.GITHUB_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  mailGunKey: process.env.MAIL_GUN_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
};
