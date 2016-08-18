'use strinct'

import _ from 'lodash';
import sql from 'seriate';
import mssql from 'mssql';
import moment from 'moment';
import Promise from 'bluebird';

import utils from '../../utils/utils';
import config from '../../config';

// Import sql module from utils
const { sql: _sql } = utils;

/**
 * Returns a promise of all items in factProject
 * 
 * @return {Promise} -> {Object}
 */
export function getAll() {
    return new Promise((resolve, reject) => {
        // Execute query and objectify it if needed
        sql.execute({
            query: sql.fromFile('./sql/factProject.getAll.sql')
        })
        .then((factProjects) => {
            resolve(factProjects);
        })
        .catch(reject);
    });
}

/**
 * Returns a promise of log with created object.
 * 
 * @param {Object} forecastFinancial The forecastFinancial values to update with
 * @return {Promise} -> {Object}
 */
export function create(project) {

  return new Promise((resolve, reject) => {
    // Get the params

    sql.execute({
      query: sql.fromFile('./sql/factProject.create.sql'),
      params: {
        employee: {
          type: sql.NVarChar,
          val: project['Employee']
        },
        name: {
          type: sql.NVarChar,
          val: project['Project Name']
        },
        customer: {
          type: sql.NVarChar,
          val: project['Customer']
        },
        value: {
          type: sql.Float,
          val: project['Value']
        },
        probability: {
          type: sql.Float,
          val: project['Probability']
        },
        start: {
          type: sql.Date,
          val: project['Start Date']
        },
        end: {
          type: sql.Date,
          val: project['End Date']
        },
      }
    })
    .then((project) => resolve("Record created: " + JSON.stringify(project)))
    .catch(reject)
  });
}

export function update(id, project) {

  console.log(id);
  console.log(project);

  return new Promise((resolve, reject) => {
    // Get the params

    sql.execute({
      query: sql.fromFile('./sql/factProject.update.sql'),
      params: {
        id: {
          type: sql.BigInt,
          val: id,
        },
        employee: {
          type: sql.NVarChar,
          val: project['Employee']
        },
        name: {
          type: sql.NVarChar,
          val: project['Project Name']
        },
        customer: {
          type: sql.NVarChar,
          val: project['Customer']
        },
        value: {
          type: sql.Float,
          val: project['Value']
        },
        probability: {
          type: sql.Float,
          val: project['Probability']
        },
        start: {
          type: sql.Date,
          val: project['Start Date']
        },
        end: {
          type: sql.Date,
          val: project['End Date']
        },
        isdeleted: {
          type: sql.Bit,
          val: project['isDeleted']
        },
      }
    })
    .then((project) => resolve("Record created: " + JSON.stringify(project)))
    .catch(reject)
  });
}

export default {
    getAll: getAll,
    create: create,
    update: update,
}