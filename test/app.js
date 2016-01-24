import request from 'supertest';
import createApp from '../app';
import config from '../config';

describe('app', function() {
  let app;

  beforeEach(function() {
    app = createApp(config);
  });

  describe('/', function() {
    it('should return json response', function(done) {
      request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });
});
