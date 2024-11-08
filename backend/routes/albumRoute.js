import { Router } from 'express';
import { getAlbum } from '../controllers/albumController.js';

const router = Router();

router.route('/').get(getAlbum);

export default router;
