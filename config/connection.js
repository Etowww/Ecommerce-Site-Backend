require('dotenv').config();

const Sequelize = require('sequelize');
// Update the sequelize configuration to use '.env' variables 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    // Adjust host from local host to '127.0.0.1' and added the port: 3306
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
