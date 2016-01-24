require('babel-register');
const config = require('./config').default;
const createApp = require('./app').default;

const app = createApp(config);

const server = app.listen(config.get('http').port, function() {
  const port = server.address().port;
  console.log('==> listening on port %s', port); // eslint-disable-line no-console
});
