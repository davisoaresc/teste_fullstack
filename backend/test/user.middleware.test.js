const userMiddleware = require('../middlewares/user.middleware');
const userService = require('../services/user.service');

describe('middlewares/user.middleware', () => {
  const next = jest.fn();
  const res = { 
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis()
  }

  describe('emailValidate', () => {
    it('should throw status 400 if email is a empty string', async () => {
      const req = {
         body: {email: ''}
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(res.status).toBeCalledWith(400);
    })

    it('should throw status 400 if email has not be sent in the body ', async () => {
      const req = {
         body: {}
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(res.status).toBeCalledWith(400);
    })

    it('should throw status 400 if email has not right format', async () => {
      const req = {
         body: { email: 'test' }
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(res.status).toBeCalledWith(400);
    })

    it('should call function next if is everything right', async () => {
      const req = {
         body: { email: 'test@test.com' }
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(next).toBeCalled();
    })
  })

  describe('passwordValidate', () => {
    it('should throw status 400 if password is a empty string', async () => {
      const req = {
         body: { password: '' }
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(res.status).toBeCalledWith(400);
    })

    it('should throw status 400 if password has not be sent in the body ', async () => {
      const req = {
         body: {}
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(res.status).toBeCalledWith(400);
    })

    it('should throw status 400 if password has not min length', async () => {
      const req = {
         body: { password: '1234' }
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(res.status).toBeCalledWith(400);
    })

    it('should call function next if is everything right', async () => {
      const req = {
         body: { password: '123456'}
      };
      await userMiddleware.emailValidate(req, res, next);
      expect(next).toBeCalled();
    })
  })

  describe('checkUserExistsByEmail', () => {
    it('should throw status 404 if user does not exist', async () => {
      const req = {
        body: { email: "test@test.com" }
      }
      jest.spyOn(userService, 'getUserByEmail').mockResolvedValueOnce([{}]);
      await userMiddleware.checkEmailExists(req, res, next);
      expect(res.status).toBeCalledWith(409);
    })

    it('should call function next if is everything right', async () => {
      const req = {
        body: { email: "test@test.com" }
      };
      jest.spyOn(userService, 'getUserByEmail').mockResolvedValueOnce([]);
      await userMiddleware.checkEmailExists(req, res, next);
      expect(next).toBeCalled();
    })
  })
  
  describe('checkUserExistsById', () => {
    it('should throw status 404 if user does not exist', async () => {
      const req = {
        params: 1,
      }
      jest.spyOn(userService, 'getUserById').mockResolvedValueOnce([]);
      await userMiddleware.checkUserExistsById(req, res, next);
      expect(res.status).toBeCalledWith(404);
    })

    it('should call function next if is everything right', async () => {
      const req = {
        params: 1,
      }
      jest.spyOn(userService, 'getUserById').mockResolvedValueOnce([{}]);
      await userMiddleware.checkUserExistsById(req, res, next);
      expect(next).toBeCalled();
    })
  })

})