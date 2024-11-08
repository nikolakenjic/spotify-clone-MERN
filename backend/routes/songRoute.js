import { Router } from 'express';
import { getSong } from '../controllers/songController.js';

const router = Router();

router.route('/').get(getSong);

export default router;
