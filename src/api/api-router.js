'use strict';
import express from 'express';
const router = express.Router();

// routes
import hello from './hello';
router.use('/hello', hello);

export default router;