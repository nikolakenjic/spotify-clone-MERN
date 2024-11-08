import { Router } from 'express';
import { getAlbumById, getAllAlbums } from '../controllers/albumController.js';

const router = Router();

router.route('/').get(getAllAlbums);
router.route('/:albumId').get(getAlbumById);

export default router;
