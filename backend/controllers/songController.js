import catchAsync from '../utils/catchAsync.js';

export const getAllSongs = catchAsync(async (req, res, next) => {
  res.send('Get All SOngs');
});

export const getFeaturedSongs = catchAsync(async (req, res, next) => {
  res.send('Get Featured songs');
});

export const getMadeForYouSongs = catchAsync(async (req, res, next) => {
  res.send('Get songs for you');
});

export const getTrendingSongs = catchAsync(async (req, res, next) => {
  res.send('get trending songs');
});
