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

usersRouter.get('/users/:id', getSpecificUser);

usersRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    ablout: Joi.string().required().min(2).max(30),
  }),
}), editUserInfo);

usersRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }),
}), editUserAvatar);

module.exports = usersRouter;
