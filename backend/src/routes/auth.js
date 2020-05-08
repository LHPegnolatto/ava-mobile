const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const authController = require('../controllers/authController');

router.post('/authenticate', celebrate({
  [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
  }),
}), authController.authenticate);

module.exports = router;