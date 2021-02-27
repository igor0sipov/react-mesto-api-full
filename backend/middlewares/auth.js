const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const { JWT_SECRET } = process.env;
  if (!token) {
    throw new UnauthorizedError('Необходима авторизацияq');
  }

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new UnauthorizedError('Необходима авторизацияs');
  }

  req.user = payload;

  next();
};
