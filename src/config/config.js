const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

dotenv.config();

module.exports = {
  sequelize: new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
    },
  ),
};
