const cardsRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const {
  getAllCards,
  addCard,
  deleteCard,
  like,
  deleteLike,
} = require('../controllers/cards');

cardsRouter.get('/cards', getAllCards);

cardsRouter.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
  }),
}), addCard);

cardsRouter.delete('/cards/:cardId', deleteCard);

cardsRouter.put('/cards/:cardId/likes', like);

cardsRouter.delete('/cards/:cardId/likes', deleteLike);

module.exports = cardsRouter;
