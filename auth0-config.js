const { auth } = require('express-openid-connect');

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: 'Super secret secret',
  baseURL: 'http://localhost:3001', // Replaced with your actual base URL
  clientID: 'xAmIzMi3vgs4srAQQZ6uuraRExaWfGKA',
  issuerBaseURL: 'https://dev-3kdcce2iloekw6mb.us.auth0.com'
};

module.exports = auth(authConfig);
