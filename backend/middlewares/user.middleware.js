const userService = require('../services/user.service');

const userMiddleware = {
  async emailValidate(req, res, next) {
    const { email } = req.body;
    const emailValidRegex = /\S+@\S+\.\S+/;
    const isRegexEmailValid = emailValidRegex.test(email);
    
    if (email === undefined || email === '') {
      return res.status(400).json({ message: '"email" is required' });
    };

    if (!isRegexEmailValid) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    return next();
  },

  async checkEmailExists(req, res, next) {
    const { email } = req.body;
    const emailExists = await userService.getUserByEmail(email);

    if (emailExists.length > 0) {
      return res.status(409).json({ message: '"user" already exists'});
    };
    return next();
  },

  passwordValidate(req, res, next) {
    const { password } = req.body;
    const MIN_LENGTH = 6;

    if (!password || password === '') {
      return res.status(400).json({ message: '"password" is required' });
    };

    if (password.length < MIN_LENGTH) {
      return res.status(400).json({
        message: '"password" length must be 6 characters long',
      });
    };
    return next();
  },

  async checkUserExistsById(req, res, next) {
    const { id } = req.params;
    const getUserById = await userService.getUserById(id);

    if (getUserById.length === 0) {
      return res.status(404).json({ message: '"user" not found'});
    };

    return next();
  },
};

module.exports = userMiddleware;