const Sequelize = require('sequelize');
const env = require('env2');
env('./config.env')
const {
  DATABASE,
  DB_USER,
  DB_PASSWORD,
  DIALECT
} = process.env
const host = process.env.HOSTNAME || 'localhost';
const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  host,
  dialect: DIALECT,
  operatorsAliases: false,


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

module.exports = db;
// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
