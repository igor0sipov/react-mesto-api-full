const User = require('../models/users');
const Card = require('../models/cards');

module.exports.getAllCards = (req, res) => {
  Card.find({})
    .then((userList) => {
      res.send(userList);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.addCard = (req, res) => {
  const { name, link } = req.body;
  User.findById(req.user._id)
    .then((owner) => {
      Card.create({ name, link, owner })
        .then((card) => {
          res.send(card);
        })
        .catch((err) => {
          if (err.errors.name && err.errors.name.name === 'ValidatorError') {
            res.status(400).send({ message: err.message });
          }

          if (err.errors.link && err.errors.link.name === 'ValidatorError') {
            res.status(400).send({ message: err.message });
          }

          res.send({ message: err });
        });
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete({ _id: req.params.cardId })
    .then((card) => {
      if (card === null) {
        res.status(404).send({ message: 'Карточка не найдена' });
      }
      res.send(card);
    })
    .catch(() => {
      res.status(400).send({ message: 'id введен некорректно' });
    });
};

module.exports.like = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card === null) {
        res.status(404).send({ message: 'Карточка не найдена' });
      }
      res.send(card);
    })

    .catch(() => {
      res.status(400).send({ message: 'id введен некорректно' });
    });
};

module.exports.deleteLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card === null) {
        res.status(404).send({ message: 'Карточка не найдена' });
      }
      res.send(card);
    })
    .catch(() => {
      res.status(400).send({ message: 'id введен некорректно' });
    });
};
