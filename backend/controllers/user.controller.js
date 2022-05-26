const userService = require('../services/user.service');

const UserController = {

  async createUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const id = await userService.createUser(email, password);
      return res.status(201).json(id)
    } catch (error) {
      return next(error);
    };
  },

  async readUser(req, res, next) {
    try {
      const users = await userService.getUser();
      return res.status(200).json(users);
    } catch (error) {
      return next(error);
    };
  },

  async readUserById(req, res, next) {
    try {
      const { id } = req.params;
      const getUserIdDb = await userService.getUserById(id);
      return res.status(200).json(getUserIdDb);
    } catch (error) {
      next(error);
    };
  },

  async updateUser(req, res, next) {
    try {
      const { email, password} = req.body;
      const { id } = req.params;
      await userService
        .updateUser(email, password, id);
      return res.status(200).json({ message: 'User updated successfully'});
    } catch (error) {
      next(error);
    };
  },

  async deleteAllUsers(req, res, next) {
    try {
      await userService.deleteAllUsers();
      return res.status(200).json({ message: 'All users deleted successfully'})
    } catch (error) {
      next(error);
    };
  },

  async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;
      await userService.deleteUserById(id);
      return res.status(200).json({ message: 'User deleted successfully'})
    } catch (error) {
      next(error);
    };
  },
}

module.exports = UserController;