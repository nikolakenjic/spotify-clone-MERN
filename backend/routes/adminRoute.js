import { Router } from 'express';
import { getAdmin } from '../controllers/adminController.js';

const router = Router();

router.route('/').get(getAdmin);

export default router;
