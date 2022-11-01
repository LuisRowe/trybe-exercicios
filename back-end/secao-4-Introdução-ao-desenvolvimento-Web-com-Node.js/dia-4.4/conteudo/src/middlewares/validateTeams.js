const teams = require("../teams");


const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    return res.status(400).json({ message: 'Faltou algum campo obrigatório' }); // Ou já responde avisando que deu errado
  }
};

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.some((t) => t.id === id);
  if (team) {
    next(); // Chama o próximo middleware
  } else {
    res.status(400).json({ message: 'Id não encontrado!' }); // Ou já responde avisando que deu errado
  }
};

module.exports = {
  validateTeam,
  existingId,
};