
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCamiones = async (req, res) => {
  try {
    const camiones = await prisma.camion.findMany();
    res.json(camiones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener camiones' });
  }
};

const getCamionById = async (req, res) => {
  const { id } = req.params;
  try {
    const camion = await prisma.camion.findUnique({
      where: { id: parseInt(id) },
    });
    if (camion) {
      res.json(camion);
    } else {
      res.status(404).json({ error: 'Camión no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar camión' });
  }
};

const createCamion = async (req, res) => {
  const { modelo, capacidad } = req.body;
  try {
    const nuevoCamion = await prisma.camion.create({
      data: { modelo, capacidad },
    });
    res.status(201).json(nuevoCamion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear camión' });
  }
};

const updateCamion = async (req, res) => {
  const { id } = req.params;
  const { modelo, capacidad } = req.body;
  try {
    const camionActualizado = await prisma.camion.update({
      where: { id: parseInt(id) },
      data: { modelo, capacidad },
    });
    res.json(camionActualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar camión' });
  }
};

const deleteCamion = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.camion.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar camión' });
  }
};

module.exports = {
  getAllCamiones,
  getCamionById,
  createCamion,
  updateCamion,
  deleteCamion,
};
