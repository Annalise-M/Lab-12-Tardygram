const bcrypt = require('bcryptjs');

// const SALT = 'RANDOMLY_GENERATED';
// const password = 'password';
// const saltedPassword = `${SALT}${password}`;

const hash = '$2a$14$eA668o2OoXZEAHJhufLpxeFyB1fA4PNlPHX6Pd/wOTgwYDkhUZ6UW';

bcrypt
//   .hash('password', 14)
//   .then(hash => console.log(hash));
  .compare('password', hash)
  .then(result => console.log(result));
