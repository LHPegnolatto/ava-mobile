const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const usersController = require('../controllers/usersController');

router.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
  }),
}), usersController.create);

module.exports = router;