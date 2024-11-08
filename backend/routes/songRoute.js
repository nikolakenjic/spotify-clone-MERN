import { Router } from 'express';
import {
  getAllSongs,
  getFeaturedSongs,
  getMadeForYouSongs,
  getTrendingSongs,
} from '../controllers/songController.js';

const router = Router();

router.route('/').get(getAllSongs);
router.route('/featured').get(getFeaturedSongs);
router.route('/made-for-you').get(getMadeForYouSongs);
router.route('/trending').get(getTrendingSongs);

export default router;
