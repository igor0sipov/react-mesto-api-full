require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Joi, celebrate, errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./backend/middlewares/logger');
const cards = require('./backend/routes/cards.js');
const users = require('./backend/routes/users.js');
const { createUser, login, signout } = require('./backend/controllers/users.js');
const auth = require('./backend/middlewares/auth.js');
const NotFoundError = require('./backend/errors/not-found-error');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const corsOptions = {
  origin: 'https://mesto.fakealien.students.nomoreparties.space',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

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

app.post('/signout', signout);

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
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
