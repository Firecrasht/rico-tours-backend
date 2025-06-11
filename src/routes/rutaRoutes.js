const express = require("express");
const verifyToken = require('../middleware/auth');
const router = express.Router();
const { crearRuta, obtenerRutas } = require("../controllers/rutaController");

router.post('/', verifyToken(['admin']), "/", crearRuta);
router.get('/', verifyToken(), "/", obtenerRutas);

module.exports = router;