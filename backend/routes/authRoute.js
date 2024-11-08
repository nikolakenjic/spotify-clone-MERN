import { Router } from 'express';
import { authCallback } from '../controllers/authController.js';

const router = Router();

router.route('/callback').post(authCallback);

export default router;
