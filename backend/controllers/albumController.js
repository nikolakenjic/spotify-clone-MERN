import { Album } from '../models/albumModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllAlbums = catchAsync(async (req, res, next) => {
  const albums = await Album.find();

  res.status(200).json(albums);
});

export const getAlbumById = catchAsync(async (req, res, next) => {
  res.send('get album by Id');
});
