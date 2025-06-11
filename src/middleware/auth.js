const jwt = require("jsonwebtoken");

function verifyToken(roles = []) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ mensaje: "Token requerido" });

    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (roles.length && !roles.includes(decoded.rol)) {
        return res.status(403).json({ mensaje: "No autorizado" });
      }
      req.usuario = decoded;
      next();
    } catch {
      return res.status(401).json({ mensaje: "Token inválido" });
    }
  };
}

module.exports = verifyToken;
