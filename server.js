require('babel-register');
const createApp = require('./app').default;

const app = createApp();

const server = app.listen(8000, function() {
  const port = server.address().port;
  console.log('==> listening on port %s', port); // eslint-disable-line no-console
});
