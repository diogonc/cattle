var request = require('supertest');

describe('UsersController', function() {

  describe('should access index', function() {
    it('should access index', function (done) {
      request(sails.hooks.http.app)
        .post('/')
        .expect(200, done);
    });
  });
  
  describe('shouldnt access home', function() {
    it('shouldnt access home', function (done) {
      request(sails.hooks.http.app)
        .post('/home')
        .expect(404, done);
    });
  });
});