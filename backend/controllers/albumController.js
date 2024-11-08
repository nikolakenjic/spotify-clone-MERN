import catchAsync from '../utils/catchAsync.js';

export const getAllAlbums = catchAsync(async (req, res, next) => {
  res.send('get All Albums');
});

export const getAlbumById = catchAsync(async (req, res, next) => {
  res.send('get album by Id');
});
