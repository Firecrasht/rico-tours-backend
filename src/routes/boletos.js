const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', authenticate, async (req, res) => {
    const boletos = await prisma.boleto.findMany();
    res.json(boletos);
});

module.exports = router;