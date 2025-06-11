const Ruta = require("../models/Ruta");
const Camion = require("../models/Camion");

exports.crearRuta = async (req, res) => {
  try {
    const nuevaRuta = await Ruta.create(req.body);
    res.json(nuevaRuta);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la ruta" });
  }
};

exports.obtenerRutas = async (req, res) => {
  try {
    const rutas = await Ruta.findAll({
      include: [{ model: Camion }],
    });
    res.json(rutas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las rutas" });
  }
};
