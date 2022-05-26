const db = require('../db/db');

const UserService = {
  async createUser(email, password) {
    const [id] = await db('users')
      .insert({
        email,
        password
      })
      .returning('id');
    return id;
  },

  async getUser() {
    const users = await db('users')
      .select('*');
    return users;
  },

  async getUserById(id) {
    const getUserIdDb = await db('users')
      .select()
        .where({
          id,
        });
    return getUserIdDb;
  },

  async getUserByEmail(email) {
    const getEmailDb = await db('users')
      .select()
        .where({
          email,
        });
    return getEmailDb;
  },

  async updateUser(email, password, id) {
    const count = await db('users')
      .update({
        email,
        password,
      })
        .where({ 
          id,
        });
    return count;
  },

  async deleteAllUsers() {
    await db('users')
      .del();
  },

  async deleteUserById(id) {
    await db('users')
      .del()
        .where({
          id,
        });
  },

};

module.exports = UserService;