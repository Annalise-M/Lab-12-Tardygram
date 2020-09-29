const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3BvdCIsImFnZSI6NCwid2VpZ2h0IjoiMjAgbGJzIiwiaWF0IjoxNjAxMzI5OTQzLCJleHAiOjE2MDEzNDQzNDN9.IDGN6Nueb7qCLUbLYbriVZGTfjVGsg--JfGkZmcXOw8';
//sign
// const token = jwt.sign({
//   name: 'spot',
//   age: 4,
//   weight: '20 lbs'
// }, 'supersecret', {
//   expiresIn: '4h'
// });
//header + payload + supersecret
console.log(token);

//verify
const result = jwt.verify(token, 'supersecret');
console.log(result);
