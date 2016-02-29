import config from './config';
import createApp from './app';

const app = createApp(config);

const server = app.listen(config.get('http').port, () => {
  const port = server.address().port;
  console.log('==> listening on port %s', port); // eslint-disable-line no-console
});
