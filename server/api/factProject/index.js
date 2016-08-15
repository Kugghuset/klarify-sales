'use strict'

import express from 'express';
import controller from './factProject.controller';
import auth from '../../services/auth/auth.service';

const router = express.Router();

router.get('/all', controller.all);
router.put('/create', controller.create);
router.put('/update/:id', controller.update)
export default router;