const express = require("express");
const router = express.Router();
const { crearCamion, obtenerCamiones } = require("../controllers/camionController");

router.post("/", crearCamion);
router.get("/", obtenerCamiones);

module.exports = router;
