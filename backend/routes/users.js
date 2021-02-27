const usersRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const {
  getCurrentUser,
  getAllUsers,
  getSpecificUser,
  editUserInfo,
  editUserAvatar,
} = require('../controllers/users');

usersRouter.get('/users/me', getCurrentUser);

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().length(24).hex(),
  }),
}), getSpecificUser);

usersRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), editUserInfo);

usersRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i).required(),
  }),
}), editUserAvatar);

module.exports = usersRouter;
