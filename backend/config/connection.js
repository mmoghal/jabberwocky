const Sequelize = require('sequelize');
const path = require('path');
require('dotenv').config();

let sequelize;

if (process.env.CLEARDB_DATABASE_URL) {
    sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PW, 
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
            dialectOptions: {
                decimalNumbers: true,
            },
        }
    );
}

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
