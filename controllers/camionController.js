const Camion = require("../models/Camion");

exports.crearCamion = async (req, res) => {
  try {
    const camion = await Camion.create(req.body);
    res.json(camion);
  } catch (err) {
    res.status(500).json({ error: "Error al crear el camión" });
  }
};

exports.obtenerCamiones = async (req, res) => {
  try {
    const camiones = await Camion.findAll();
    res.json(camiones);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los camiones" });
  }
};
