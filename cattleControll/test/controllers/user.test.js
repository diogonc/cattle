var request = require('supertest');

describe('UsersController', function() {

  describe('insert user', function() {
    it('should create new user', function (done) {
      var req = request(sails.hooks.http.app);

      req.post('/user')
        .send({ name: 'test', password: 'test', hash: 'cc1bf1a62115d5ec900e660f5e3ad9f3' })
        .expect(200, done);

      
    });
  });
  
});