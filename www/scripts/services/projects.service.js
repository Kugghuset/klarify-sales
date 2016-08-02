'use strict'

import Promise from 'bluebird';

import config from '../config';
import utils from './utils.js';
import auth from './auth.js';

// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

let __curentProjects;

function getCurrentRemoteProjects() {
  let _headers = auth.getHeaders();
  return http.get(`${config.baseUrl}/api/projects/all/`, {headers: _headers})
  .then((projects) => {
    storage.set('allProjects', projects);
    return Promise.resolve(projects);
  })
}

export default {
  getCurrentProjects: getCurrentRemoteProjects
}