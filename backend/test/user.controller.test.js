const userController = require('../controllers/user.controller');
const userService = require('../services/user.service');

describe('controllers/user.controller', () => {
  const next = jest.fn();
  const res = { 
    status: jest.fn().mockReturnThis() 
  }

  describe('createUser', () => {
    it('should throw if userService.updateUser throws', async () => {
      const req = { body: {} };
      jest.spyOn(userService, 'createUser').mockRejectedValueOnce(new Error());
      await userController.createUser(req, {}, next);
      expect(next).toBeCalled();
    })

    it('should call response with 201 if success', async () => {
      const req = {
        body: { email: 'test@test.com', password:'123456'}
      };
      jest.spyOn(userService, 'createUser').mockResolvedValueOnce();
      await userController.createUser(req, res, next);
      expect(res.status).toBeCalledWith(201);
    })
  })

  describe('readUser', () => {
    it('should throw if userService.updateUser throws', async () => {
      jest.spyOn(userService, 'getUser').mockRejectedValueOnce(new Error());
      await userController.readUser({}, {}, next);
      expect(next).toBeCalled();
    })

    it('should call response with 200 if success', async () => {
      jest.spyOn(userService, 'getUser').mockResolvedValueOnce();
      await userController.readUser({}, res, next);
      expect(res.status).toBeCalledWith(200);
    })
  })

  describe('readUserById', () => {
    it('should throw if userService.updateUser throws', async () => {
      const req = { params: {}, body: {} };
      jest.spyOn(userService, 'getUserById').mockRejectedValueOnce(new Error());
      await userController.readUserById(req, {}, next);
      expect(next).toBeCalled();
    })

    it('should call response with 200 if success', async () => {
      const req = {
        params:  1 ,
      };
      jest.spyOn(userService, 'getUserById').mockResolvedValueOnce({});
      await userController.readUserById(req, res, next);
      expect(res.status).toBeCalledWith(200);
    })
  })

  describe('updateUser', () => {
      it('should throw if userService.updateUser throws', async () => {
        const req = { params: {}, body: {} };
        jest.spyOn(userService, 'updateUser').mockRejectedValueOnce(new Error());
        await userController.updateUser(req, {}, next);
        expect(next).toBeCalled();
      })

      it('should call response with 200 if success', async () => {
        const req = {
          params:  1 ,
          body: { email: 'test@test.com', password:'123456'}
        };
        jest.spyOn(userService, 'updateUser').mockResolvedValueOnce({});
        await userController.updateUser(req, res, next);
        expect(res.status).toBeCalledWith(200);
      })
    })

  describe('deleteAllUsers', () => {
    it('should throw if userService.updateUser throws', async () => {
      const req = { params: {}, body: {} };
      jest.spyOn(userService, 'deleteAllUsers').mockRejectedValueOnce(new Error());
      await userController.deleteAllUsers(req, {}, next);
      expect(next).toBeCalled();
    })

    it('should call response with 200 if success', async () => {
      jest.spyOn(userService, 'deleteAllUsers').mockResolvedValueOnce({});
      await userController.deleteAllUsers({}, res, next);
      expect(res.status).toBeCalledWith(200);
    })
  })

  describe('deleteUserById', () => {
    it('should throw if userService.updateUser throws', async () => {
      const req = { params: {}, body: {} };
      jest.spyOn(userService, 'deleteUserById').mockRejectedValueOnce(new Error());
      await userController.deleteUserById(req, {}, next);
      expect(next).toBeCalled();
    })

    it('should call response with 200 if success', async () => {
      const req = { 
        params: 1
      };
      jest.spyOn(userService, 'deleteUserById').mockResolvedValueOnce({});
      await userController.deleteUserById(req, res, next);
      expect(res.status).toBeCalledWith(200);
    })
  })
});