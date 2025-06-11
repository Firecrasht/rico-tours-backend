const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Camion = require("./Camion");

const Ruta = sequelize.define("Ruta", {
  origen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaSalida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  camionId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Camions",
      key: "id",
    },
  },
});

Ruta.belongsTo(Camion, { foreignKey: "camionId" });

module.exports = Ruta;
