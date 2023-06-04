const path = require("path");
const express = require('express');
const routes = require('./backend/routes');
const sequelize = require('./backend/config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './frontend/public')));

// Set up Handlebars.js
const viewsPath = path.join(__dirname, './frontend/views');
app.set('views', viewsPath);
const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: viewsPath + '/layouts',
  helpers: {
    greaterThanOrEqualTo: (a, b) => {return (a >= b);}
}
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use routes
app.use(routes);

// Sync models and then start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
