'use strict'

import express from 'express';
import path from 'path';
import morgan from 'morgan';

const root = path.resolve();

/**
 * @param {Object} app Express instance
 * @param {Function} log To where morgan should log stuff
 */
export default (app, log) => {
  // Client side app
  app.use(express.static(root + '/bin'));

  // Logging, should be below static stuff to only log API calls, and not assets
  app.use(morgan('combined', { stream: log.stream }))

  /*****************************************************************
   * Do not remove these,
   * it's used for the Yo generator to find where to inject routes.
   ****************************************************************/

  /// Start inject routes ///
  app.use('/api/projects/', require('./api/factProject').default);
  app.use('/api/projects/create', require('./api/factProject').default);
  app.use('/api/projects/all', require('./api/factProject').default);
  /// Stop inject routes ///

  /// Start inject services ///
  app.use('/services/auth', require('./services/auth').default);
  /// Stop inject services ///
}
