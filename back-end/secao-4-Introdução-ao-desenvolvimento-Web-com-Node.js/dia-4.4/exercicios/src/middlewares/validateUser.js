const validateUser = (req, res, next) => {
  const requiredProperties = ['email', 'password', 'firstName', 'phone'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  next();
};

module.exports = validateUser;