
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllRutas = async (req, res) => {
  try {
    const rutas = await prisma.ruta.findMany({
      include: { camion: true }
    });
    res.json(rutas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener rutas' });
  }
};

const getRutaById = async (req, res) => {
  const { id } = req.params;
  try {
    const ruta = await prisma.ruta.findUnique({
      where: { id: parseInt(id) },
      include: { camion: true }
    });
    if (ruta) {
      res.json(ruta);
    } else {
      res.status(404).json({ error: 'Ruta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar ruta' });
  }
};

const createRuta = async (req, res) => {
  const { origen, destino, fechaSalida, camionId } = req.body;
  try {
    const nuevaRuta = await prisma.ruta.create({
      data: {
        origen,
        destino,
        fechaSalida: new Date(fechaSalida),
        camionId
      }
    });
    res.status(201).json(nuevaRuta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear ruta' });
  }
};

const updateRuta = async (req, res) => {
  const { id } = req.params;
  const { origen, destino, fechaSalida, camionId } = req.body;
  try {
    const rutaActualizada = await prisma.ruta.update({
      where: { id: parseInt(id) },
      data: {
        origen,
        destino,
        fechaSalida: new Date(fechaSalida),
        camionId
      }
    });
    res.json(rutaActualizada);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar ruta' });
  }
};

const deleteRuta = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ruta.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar ruta' });
  }
};

module.exports = {
  getAllRutas,
  getRutaById,
  createRuta,
  updateRuta,
  deleteRuta
};
