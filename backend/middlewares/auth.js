const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { token } = req.cookies;
  const { JWT_SECRET, NODE_ENV } = process.env;
  console.log(NODE_ENV);
  const DEVELOP_JWT = '3fbb822da62a2282bd5b427156bf28502e59044bf2ad076d0bbd9a214a54b145';
  if (!token) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : DEVELOP_JWT);
  } catch (error) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  req.user = payload;

  next();
};
