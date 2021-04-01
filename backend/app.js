require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Joi, celebrate, errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');
const { createUser, login, signout } = require('./controllers/users.js');
const auth = require('./middlewares/auth.js');
const NotFoundError = require('./errors/not-found-error');

const { PORT = 3000 } = process.env;

const app = express();

const allowedUrls = [
  'http://mesto.fakealien.students.nomoredomains.icu',
  'https://mesto.fakealien.students.nomoredomains.icu',
  'http://www.mesto.fakealien.students.nomoredomains.icu',
  'https://www.mesto.fakealien.students.nomoredomains.icu',
];
const corsOptions = {
  origin: allowedUrls,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Headers', 'Authorization', 'X-Requested-With'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

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
    avatar: Joi.string().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i),
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

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
