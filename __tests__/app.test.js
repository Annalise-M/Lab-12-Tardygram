const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
// const user = require('../user');

describe('Tardygram routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('signUp a user via POST', async() => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      });
console.log(response.body, 'fuckkkkkkkkkkkkkkkkkkkkkk');
    expect(response.body).toEqual({
      id: expect.any(String),
      email: 'test@test.com'
    });
  });

});
