const express = require('express');
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

const userRouter = express.Router();

userRouter.post(
  '/users',
  userMiddleware.emailValidate,
  userMiddleware.checkEmailExists,
  userMiddleware.passwordValidate,
  userController.createUser,
);

userRouter.get(
  '/users',
  userController.readUser,
);

userRouter.get(
  '/users/:id',
  userController.readUserById,
)

userRouter.put(
  '/users/:id',
  userMiddleware.checkUserExistsById,
  userMiddleware.emailValidate,
  userMiddleware.passwordValidate,
  userController.updateUser,
);

userRouter.delete(
  '/users',
  userController.deleteAllUsers,
)

userRouter.delete(
  '/users/:id',
  userMiddleware.checkUserExistsById,
  userController.deleteUserById,
);

module.exports = userRouter;