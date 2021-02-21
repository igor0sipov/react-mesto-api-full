const User = require('../models/users');
const Card = require('../models/cards');
const BadRequestError = require('../errors/bad-request-error');
const UnauthorizedError = require('../errors/unauthorized-error');
const ForbiddenError = require('../errors/forbidden-error');
const NotFoundError = require('../errors/not-found-error');

module.exports.getAllCards = (req, res, next) => {
  Card.find({})
    .then((userList) => {
      res.send(userList);
    })
    .catch(next);
};

module.exports.addCard = (req, res, next) => {
  const { name, link } = req.body;
  User.findById(req.user._id)
    .then((owner) => {
      Card.create([{ name, link, owner }], { runValidators: true })
        .then((card) => {
          res.send(card);
        })
        .catch((err) => {
          if (err.errors.name && err.errors.name.name === 'ValidatorError') {
            throw new NotFoundError(err.message);
          }

          if (err.errors.link && err.errors.link.name === 'ValidatorError') {
            throw new NotFoundError(err.message);
          }
        });
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    // eslint-disable-next-line consistent-return
    .then((card) => {
      if (req.user._id !== card.owner.toString()) {
        throw new ForbiddenError('Нельзя удалять чужие карточки');
      } else {
        return Card.deleteOne({ _id: card._id }).then(() => card);
      }
    }).then((card) => {
      res.send(card);
    }).catch((err) => {
      if (!err.statusCode) {
        throw new Error();
      }
      return (next(err));
    })
    .catch(() => {
      throw new BadRequestError('Карточка с таким id не найдена');
    })
    .catch(next);
};

module.exports.like = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      res.send(card);
    })
    .catch(() => {
      throw new BadRequestError('Карточка с таким id не найдена');
    })
    .catch(next);
};

module.exports.deleteLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      res.send(card);
    })
    .catch(() => {
      throw new BadRequestError('Карточка с таким id не найдена');
    })
    .catch(next);
};
