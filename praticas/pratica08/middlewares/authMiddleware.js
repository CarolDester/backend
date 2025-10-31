const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  try {
    const {authorization} = req.headers;
    if (!authorization) {
      return res.status(401).json({ msg: "Não autorizado" });
    }
    const token = authorization;
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload; 

    return next();
  } catch (error) {
    return res.status(401).json({ msg: "Token inválido" });
  }
}

function gerarToken(payload) {
  const expiresIn = 120; 
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
  } catch (error) {
    throw new Error("Erro ao gerar o token");
  }
}

module.exports = {
  verificarToken,
  gerarToken,
};
