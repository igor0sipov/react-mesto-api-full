const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const NotFoundError = require('../errors/not-found-error');

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

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((userList) => {
      res.send(userList);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.getSpecificUser = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch(() => {
      throw new NotFoundError('Нет пользователя с таким id');
    })
    .catch(next);
};

module.exports.createUser = (req, res) => {
  const {
    email, password, name, about, avatar,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hashedPassword) => User.init().then(() => User.create([{
      email,
      password: hashedPassword,
      name,
      about,
      avatar,
    }],
    {
      runValidators: false,
    }))
      .then((user) => {
        res.send(user[0]);
      }))
    .catch((err) => {
      if (err.message.startsWith('E11000')) {
        res.status(400).send({ message: 'Пользователь с таким email уже существует' });
      }
      if (err.errors.name && err.errors.name.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      if (err.errors.about && err.errors.about.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      if (err.errors.avatar && err.errors.avatar.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      res.status(500).send({ message: err.message });
    });
};

// Для указания опции валидации email при создании пользователь объект пользователя обернут в массив
// src: https://mongoosejs.com/docs/api.html#model_Model.create;

// User.init() добавлено для корректного срабатывания unique
// src: https://luxiyalu.com/mongoose-unique-not-working/;
// без этого пользователи добавлялись без проверки уникальности email

module.exports.editUserInfo = (req, res) => {
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
      if (me === null) {
        res.status(404).send({ message: 'Пользователь не найден' });
      }
      res.send(me);
    })
    .catch((err) => {
      if (err.errors.name && err.errors.name.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      if (err.errors.about && err.errors.about.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.editUserAvatar = (req, res) => {
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
      if (me === null) {
        res.status(404).send({ message: 'Пользователь не найден' });
      }
      res.send(me);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

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
