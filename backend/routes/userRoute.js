import { Router } from 'express';
import { getAllUsers, getMessages } from './../controllers/userController.js';

const router = Router();

router.route('/').get(getAllUsers);
router.route('/messages/:userId').get(getMessages);

export default router;
