import express from 'express';
import validatorHandler from '../middlewares/validators.handler.js';
import { createUser } from '../schemas/users.schemas.js';
import usersService from '../controllers/users.controller.js';
import { requestTypesConstants } from '../constants/constants.js';

const usersRouter = express.Router();
const instanceUsersService = new usersService();

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await instanceUsersService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.post(
  '/',
  validatorHandler(createUser, requestTypesConstants.BODY),
  async (req, res, next) => {
    try {
      const body = req.body;
      await instanceUsersService.setUser(body);
      res.status(200).json({
        message: 'Usuario guardado correctamente',
        status: 200,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default usersRouter;
