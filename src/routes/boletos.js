const express = require("express");
const router = express.Router();
const { verifyToken } = require("../utils/jwt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/comprar", verifyToken(["admin"]), async (req, res) => {
  const { cantidad, viajeId, clienteId } = req.body;

  try {
    const nuevoBoleto = await prisma.boleto.create({
      data: {
        cantidad,
        viaje: { connect: { id: viajeId } },
        cliente: { connect: { id: clienteId } },
      },
    });
    res.json(nuevoBoleto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el boleto" });
  }
});

module.exports = router;
