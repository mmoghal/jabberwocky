const { auth } = require('express-openid-connect');

const getClientSecret = () => {
  if (process.env.CLIENT_SECRET) {
    return process.env.CLIENT_SECRET;
  }
  return null;
};

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: 'Super secret secret',
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  clientSecret: getClientSecret(),
  routes: {
    login: false, // Disable the default login route
  },
  authorizationParams: {
    response_type: 'code id_token',
    scope: 'openid profile',
  },
};

const authMiddleware = getClientSecret() ? auth(authConfig) : (req, res, next) => next();

module.exports = authMiddleware;
