var request = require('supertest');

describe('IndexController', function() {

  describe('should access index', function() {
    it('should access index', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .expect(200, done);
    }),
    it('shouldnt access home', function (done) {
      request(sails.hooks.http.app)
        .get('/home')
        .expect(404, done);
    });
  });
  
  describe('security', function(){
    it('should block accesw without token', function(){
      request(sails.hook.http.app)
        .get('index')
        .expect(400, done);
    });
  });
});