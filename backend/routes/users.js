const usersRouter = require('express').Router();
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

usersRouter.patch('/users/me', editUserInfo);

usersRouter.patch('/users/me/avatar', editUserAvatar);

module.exports = usersRouter;
