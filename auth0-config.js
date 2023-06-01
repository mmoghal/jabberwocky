const { auth } = require('express-openid-connect');

const authConfig = {
    authRequired: false,
    auth0Logout: true,
    secret: 'Super secret secret',
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
  };
  

module.exports = auth(authConfig);
