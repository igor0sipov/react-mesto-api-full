require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Joi, celebrate, errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./backend/middlewares/logger');
const cards = require('./backend/routes/cards.js');
const users = require('./backend/routes/users.js');
const { createUser, login } = require('./backend/controllers/users.js');
const auth = require('./backend/middlewares/auth.js');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(cors());

app.use(express.json());

app.use(requestLogger);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).max(60),
    password: Joi.string().required().min(8).max(32),
  }),
}), login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).max(60),
    password: Joi.string().required().min(8).max(32),
    name: Joi.string().min(2).max(32),
    about: Joi.string().min(2).max(32),
    avatar: Joi.string(),
  }),
}), createUser);

app.use(auth);

app.use('/', cards);
app.use('/', users);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибкаQ'
        : message,
    });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
