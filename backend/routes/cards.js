const cardsRouter = require('express').Router();
const {
  getAllCards,
  addCard,
  deleteCard,
  like,
  deleteLike,
} = require('../controllers/cards');

cardsRouter.get('/cards', getAllCards);

cardsRouter.post('/cards', addCard);

cardsRouter.delete('/cards/:cardId', deleteCard);

cardsRouter.put('/cards/:cardId/likes', like);

cardsRouter.delete('/cards/:cardId/likes', deleteLike);

module.exports = cardsRouter;
