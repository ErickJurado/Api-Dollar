const Sequelize = require('sequelize');

const connection = new Sequelize('project_dollar', 'root', '123456789',{
    host: "localhost",
    dialect: 'mysql',
    logging: false
});

module.exports = connection;