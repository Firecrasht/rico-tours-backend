const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const rutas = await prisma.ruta.findMany();
  res.json(rutas);
});

router.post("/", async (req, res) => {
  const { origen, destino, fechaHora } = req.body;
  try {
    const ruta = await prisma.ruta.create({
      data: { origen, destino, fechaHora: new Date(fechaHora) },
    });
    res.json(ruta);
  } catch (e) {
    res.status(400).json({ error: "Error al crear ruta" });
  }
});

module.exports = router;
