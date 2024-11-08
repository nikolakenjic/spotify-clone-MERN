import catchAsync from '../utils/catchAsync.js';

export const createSong = catchAsync(async (req, res, next) => {
  res.send('Create song');
});

export const deleteSong = catchAsync(async (req, res, next) => {
  res.send('Delete song');
});

export const createAlbum = catchAsync(async (req, res, next) => {
  res.send('Create Album');
});

export const deleteAlbum = catchAsync(async (req, res, next) => {
  res.send('delete album');
});

export const checkAdmin = catchAsync(async (req, res, next) => {
  res.send('admin');
});
