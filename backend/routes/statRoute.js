import { Router } from 'express';
import { getStats } from '../controllers/statController.js';

const router = Router();

router.route('/').get(getStats);

export default router;
