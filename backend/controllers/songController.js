import { Song } from '../models/songModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllSongs = catchAsync(async (req, res, next) => {
  res.send('Get All SOngs');
});

export const getFeaturedSongs = catchAsync(async (req, res, next) => {
  // fetch 6 random songs using mongodb's aggregation pipeline
  const songs = await Song.aggregate([
    {
      $sample: { size: 6 },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        artist: 1,
        imageUrl: 1,
        audioUrl: 1,
      },
    },
  ]);

  res.status(200).json(songs);
});

export const getMadeForYouSongs = catchAsync(async (req, res, next) => {
  res.send('Get songs for you');
});

export const getTrendingSongs = catchAsync(async (req, res, next) => {
  res.send('get trending songs');
});
