import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import routes from './routes';
import { notFound, errorHandler } from './middleware/errorHandlers';

function createApp(config) {
  const app = express();

  // parse application/json
  app.use(bodyParser.json());

  // Gzip
  if (config.get('compression')) {
    app.use(compression());
  }

  app.use('/', routes);

  // Unmatched routes
  app.use(notFound);

  // Client error response
  app.use(errorHandler({ env: config.get('env') }));

  return app;
}

export default createApp;
