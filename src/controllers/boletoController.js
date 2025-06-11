const getAllBoletos = async (req, res) => {
  res.json([{ id: 1, cliente: "Juan", ruta: "A - B" }]);
};

const createBoleto = async (req, res) => {
  const nuevoBoleto = req.body;
  res.status(201).json({ message: "Boleto creado", boleto: nuevoBoleto });
};

const updateBoleto = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;
  res.json({ message: `Boleto ${id} actualizado`, data: datos });
};

const deleteBoleto = async (req, res) => {
  const id = req.params.id;
  res.json({ message: `Boleto ${id} eliminado` });
};

module.exports = { getAllBoletos, createBoleto, updateBoleto, deleteBoleto };