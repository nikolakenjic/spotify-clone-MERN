import catchAsync from '../utils/catchAsync.js';
import { Album } from '../models/albumModel.js';
import { Song } from '../models/songModel.js';

export const getAllAlbums = catchAsync(async (req, res, next) => {
  const albums = await Album.find();

  res.status(200).json(albums);
});

export const getAlbumById = catchAsync(async (req, res, next) => {
  const { albumId } = req.params;

  const album = await Album.findById(albumId).populate('songs');

  if (!album) {
    res.status(404).json({ status: 'failed', message: 'Album not found' });
  }

  res.status(200).json(album);
});
