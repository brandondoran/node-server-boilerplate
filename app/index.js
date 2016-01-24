import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

function createApp() {
  const app = express();

  // parse application/json
  app.use(bodyParser.json());

  // Gzip
  app.use(compression());

  return app;
}

export default createApp;
