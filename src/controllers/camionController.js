const getAllCamiones = async (req, res) => {
  res.json([{ id: 1, placa: "ABC-123", modelo: "Mercedes" }]);
};

const createCamion = async (req, res) => {
  const nuevoCamion = req.body;
  res.status(201).json({ message: "Camión creado", camion: nuevoCamion });
};

const updateCamion = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;
  res.json({ message: `Camión ${id} actualizado`, data: datos });
};

const deleteCamion = async (req, res) => {
  const id = req.params.id;
  res.json({ message: `Camión ${id} eliminado` });
};

module.exports = { getAllCamiones, createCamion, updateCamion, deleteCamion };