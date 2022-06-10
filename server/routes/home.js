import express from 'express';
const router = express.Router();

import { hiMessage } from '../controllers/home.js';

router.get('/hi', hiMessage);

export default router;
