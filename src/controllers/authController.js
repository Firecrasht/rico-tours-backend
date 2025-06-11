const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
  const { email, password } = req.body;

  // Simulación de búsqueda de usuario (reemplazar con llamada real a la DB si es necesario)
  const fakeUser = {
    id: 1,
    email: 'admin@correo.com',
    password: await bcrypt.hash('123456', 10),
    rol: 'admin',
  };

  const match = await bcrypt.compare(password, fakeUser.password);
  if (email === fakeUser.email && match) {
    const token = jwt.sign({ id: fakeUser.id, rol: fakeUser.rol }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Credenciales inválidas' });
};

module.exports = { login };