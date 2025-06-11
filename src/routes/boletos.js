const express = require("express");
const verifyToken = require('../middleware/auth');
const boletoController = require('../controllers/boletoController');
const router = express.Router();
const QRCode = require("qrcode");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post('/', verifyToken(['admin']), "/comprar", async (req, res) => {
  const { usuarioId, rutaId } = req.body;
  try {
    const boleto = await prisma.boleto.create({
      data: { usuarioId, rutaId, usado: false },
    });
    const qrCode = await QRCode.toDataURL(`boleto:${boleto.id}`);
    res.json({ mensaje: "Boleto generado", qrCode });
  } catch (e) {
    res.status(400).json({ error: "Error al comprar boleto" });
  }
});

router.post('/', verifyToken(['admin']), "/validar", async (req, res) => {
  const { codigo } = req.body;
  if (!codigo || !codigo.startsWith("boleto:")) {
    return res.status(400).json({ valido: false, mensaje: "Código inválido" });
  }
  const id = parseInt(codigo.split(":")[1]);
  const boleto = await prisma.boleto.findUnique({ where: { id } });
  if (!boleto) {
    return res.status(404).json({ valido: false, mensaje: "Boleto no encontrado" });
  }
  if (boleto.usado) {
    return res.json({ valido: false, mensaje: "Boleto ya usado" });
  }
  await prisma.boleto.update({ where: { id }, data: { usado: true } });
  return res.json({ valido: true, mensaje: `Boleto válido. ID: ${boleto.id}` });
});

module.exports = router;