const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const rutasRoutes = require("./routes/rutas");
const boletosRoutes = require("./routes/boletos");
require("dotenv").config();

const app = express();
const camionRoutes = require("../routes/camionRoutes");
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/rutas", rutasRoutes);
app.use("/api/boletos", boletosRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
