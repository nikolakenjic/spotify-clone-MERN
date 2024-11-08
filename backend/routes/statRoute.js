import { Router } from 'express';
import { getStat } from '../controllers/statController.js';

const router = Router();

router.route('/').get(getStat);

export default router;
