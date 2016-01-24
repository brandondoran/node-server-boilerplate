import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import routes from './routes';
// const routes = require('./routes');

function createApp(config) {
  const app = express();

  // parse application/json
  app.use(bodyParser.json());

  // Gzip
  if (config.get('compression')) {
    app.use(compression());
  }

  app.use('/', routes);

  return app;
}

export default createApp;
