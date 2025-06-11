require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const boletosRouter = require('./routes/boletos');
const authRouter = require('./routes/auth');

app.use(cors());
app.use(express.json());

app.use('/api/boletos', boletosRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});