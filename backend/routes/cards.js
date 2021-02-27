const cardsRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const {
  getAllCards,
  addCard,
  deleteCard,
  like,
  deleteLike,
} = require('../controllers/cards');

const cardIdValidationObject = {
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
};

cardsRouter.get('/cards', getAllCards);

cardsRouter.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i).required(),
  }),
}), addCard);

cardsRouter.delete('/cards/:cardId', celebrate(cardIdValidationObject), deleteCard);

cardsRouter.put('/cards/:cardId/likes', celebrate(cardIdValidationObject), like);

cardsRouter.delete('/cards/:cardId/likes', celebrate(cardIdValidationObject), deleteLike);

module.exports = cardsRouter;
