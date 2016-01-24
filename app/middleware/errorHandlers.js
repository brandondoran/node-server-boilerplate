import { NotFoundError } from '../util/httpErrors';

// Use after all routes are mounted.
// Catches unmatched routes and forward to error handling.
export function notFound(req, res, next) {
  next(new NotFoundError(), req, res);
}

// Formats json error response
export function errorHandler({ env = 'production' }) {
  return function(err, req, res, next) {
    if (!err) {
      return next(err, req, res);
    }

    if (env !== 'test') {
      console.error(`Error handling ${req.originalUrl}\n`,  // eslint-disable-line no-console
        err.message, err.stack);
    }

    let result;
    const status = err.status || 500;

    // Only show error details for non-production environments
    if (env !== 'production') {
      result = {
        message: err.message,
        status,
        originalUrl: req.originalUrl,
        stack: err.status === 404 ? undefined : err.stack
      };
    }

    res.status(status).send(result);
    next();
  };
}
