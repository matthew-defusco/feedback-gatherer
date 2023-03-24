// keys.js - figure out which creds to return
if (process.env.NODE_ENV === 'production') {
  // we are in prod, return prod keys
  module.exports = require('./prod');
} else {
  // we are in development, return dev keys
  module.exports = require('./dev');
}
