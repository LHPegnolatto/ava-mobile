const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const usersController = require('../controllers/usersController');

router.post('/register', celebrate({
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
  }),
}), usersController.register);

module.exports = router;