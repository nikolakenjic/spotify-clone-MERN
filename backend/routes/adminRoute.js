import { Router } from 'express';
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from '../controllers/adminController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/check').get(checkAdmin);

router.route('/songs').post(protectRoute, createSong);
router.route('/songs/:id').delete(deleteSong);

router.route('/albums').post(createAlbum);
router.route('/albums/:id').delete(deleteAlbum);

export default router;
