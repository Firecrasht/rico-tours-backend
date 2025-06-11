const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Camion = sequelize.define("Camion", {
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Camion;
