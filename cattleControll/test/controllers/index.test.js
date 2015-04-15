var request = require('supertest');

describe('IndexController', function() {

  describe('should access index', function() {
    it('should access index', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .expect(200, done);
    });
  });
  
  describe('shouldnt access home', function() {
    it('shouldnt access home', function (done) {
      request(sails.hooks.http.app)
        .get('/home')
        .expect(404, done);
    });
  });
});