const express = require('express');
const validatorHandler = require('../middlewares/validators.handler');
const { createUser } = require('../schemas/users.schemas');
const usersControllers = require('../controllers/users.controller');
const requestTypesConstants = require('../constants/constants');

const router = express.Router();
const usersService = new usersControllers();

router.get('/', async (req, res, next) => {
  try {
    const users = await usersService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createUser, requestTypesConstants.BODY),
  async (req, res, next) => {
    try {
      const body = req.body;
      await usersService.setUser(body);
      res.status(200).json({
        message: 'Usuario guardado correctamente',
        status: 200,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
