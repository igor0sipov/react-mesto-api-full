const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const BadRequestError = require('../errors/bad-request-error');
const UnauthorizedError = require('../errors/unauthorized-error');
const NotFoundError = require('../errors/not-found-error');
const ConflictError = require('../errors/conflict-error');

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((currentUser) => {
      res.send(currentUser);
    })
    .catch(() => {
      throw new NotFoundError('Нет пользователя с таким id');
    })
    .catch(next);
};

module.exports.getAllUsers = (req, res, next) => {
  User.find({})
    .then((userList) => {
      res.send(userList);
    })
    .catch(next);
};

module.exports.getSpecificUser = (req, res, next) => {
  User.findById(req.params.id)
    // eslint-disable-next-line consistent-return
    .then((user) => {
      if (user === null) {
        return next(new NotFoundError('Такой пользователь не найден'));
      }
      res.send(user);
    })
    .catch(() => {
      throw new NotFoundError('Нет пользователя с таким id');
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    email, password, name, about, avatar,
  } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      User.init();
      return hashedPassword;
    })
    .then((hashedPassword) => User.create(
      [
        {
          email,
          password: hashedPassword,
          name,
          about,
          avatar,
        },
      ],
      {
        runValidators: true,
      },
    ))
    .then((user) => {
      res.send({
        email: user[0].email, name: user[0].name, about: user[0].about, avatar: user[0].avatar,
      });
    })
    .catch((err) => {
      if (err.message.startsWith('E11000')) {
        throw new ConflictError('Пользователь с таким email уже существует');
      }
      if (err.errors.name && err.errors.name.name === 'ValidatorError') {
        throw new BadRequestError(err.message);
      }
      if (err.errors.about && err.errors.about.name === 'ValidatorError') {
        throw new BadRequestError(err.message);
      }
      if (err.errors.avatar && err.errors.avatar.name === 'ValidatorError') {
        throw new BadRequestError(err.message);
      }
    })
    .catch(next);
};

// Для указания опции валидации email при создании пользователь объект пользователя обернут в массив
// src: https://mongoosejs.com/docs/api.html#model_Model.create;

// User.init() добавлено для корректного срабатывания unique
// src: https://luxiyalu.com/mongoose-unique-not-working/;
// без этого пользователи добавлялись без проверки уникальности email

module.exports.editUserInfo = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .then((me) => {
      res.send(me);
    })
    .catch((err) => {
      if (err.errors.name && err.errors.name.name === 'ValidatorError') {
        throw new BadRequestError(err.message);
      }
      if (err.errors.about && err.errors.about.name === 'ValidatorError') {
        throw new BadRequestError(err.message);
      }
    })
    .catch(next);
};

module.exports.editUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .then((me) => {
      res.send(me);
    })
    .catch((err) => {
      if (err.errors.avatar && err.errors.avatar.name === 'ValidatorError') {
        throw new BadRequestError(err.message);
      }
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  const { NODE_ENV, JWT_SECRET } = process.env;
  const STUDENT_JWT_SECRET = '3fbb822da62a2282bd5b427156bf28502e59044bf2ad076d0bbd9a214a54b145';
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production'
          ? JWT_SECRET
          : STUDENT_JWT_SECRET,
        { expiresIn: '7d' },
      );

      res
        .cookie('token', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        })
        .send({ message: 'Успешно!' })
        .end();
    })
    .catch((err) => {
      throw new UnauthorizedError(err.message);
    })
    .catch(next);
};

module.exports.signout = (req, res) => {
  try {
    res.clearCookie('token');
  } catch (error) {
    throw new BadRequestError(error);
  }
  return res.send({ message: 'Успешно!' });
};
