const jwt = require('jsonwebtoken');
const User = require('../models/users');

module.exports.login = (req, res) => {
  const { email, password } = req.body;
  const { NODE_ENV, JWT_SECRET } = process.env;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : '3fbb822da62a2282bd5b427156bf28502e59044bf2ad076d0bbd9a214a54b145',
        { expiresIn: '7d' },
      );

      res.send({ message: 'Всё верно' });

      res.cookie(
        'token', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        },
      ).end();
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message });
    });
};
