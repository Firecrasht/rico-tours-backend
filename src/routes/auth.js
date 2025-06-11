const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/registrar", async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const usuario = await prisma.usuario.create({
      data: { nombre, email, password: hashed, rol },
    });
    const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: "Email ya registrado" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return res.status(401).json({ error: "Usuario no encontrado" });
  const valid = await bcrypt.compare(password, usuario.password);
  if (!valid) return res.status(401).json({ error: "Contraseña inválida" });
  const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
