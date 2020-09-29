const bcrypt = require('bcryptjs');
const User = require('../models/user');

const create = async({ email, password }) => {
  const passwordHash = await bcrypt.hash(password, 4);

  return User.insert({ email, passwordHash });
};

module.exports = {
  create
};


