const express = require("express");
const router = express.Router();
const { crearRuta, obtenerRutas } = require("../controllers/rutaController");

router.post("/", crearRuta);
router.get("/", obtenerRutas);

module.exports = router;
