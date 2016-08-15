'use strict'

import FactProject from './factProject.db';
import config from '../../config';
import utils from '../../utils/utils';

/**
 * Route: GET '/api/factProject/all'
 */
export const getAllProjects = (req, res) => {
    FactProject.getAll()
    .then((factProject) => res.status(200).json(factProject))
    .catch((err) => utils.handleError(res, err));
}

/**
 * Route: GET '/api/factProject/create'
 */
export const createProject = (req, res) => {
    let _project = req.body;
    FactProject.create(_project)
    .then((factProject) => res.status(200).json(factProject))
    .catch((err) => utils.handleError(res, err));
}

/**
 * Route: GET '/api/factProject/update:id'
 */
export const updateProject = (req, res) => {
    let {id} = req.params;
    let _project = req.body;
    FactProject.update(id, _project)
    .then((factProject) => res.status(200).json(factProject))
    .catch((err) => utils.handleError(res, err));
}

export default {
    all: getAllProjects,
    create: createProject,
    update: updateProject,
}