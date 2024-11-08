import { Router } from 'express';
import { getAuth } from '../controllers/authController.js';

const router = Router();

router.route('/').get(getAuth);

export default router;
