import { Song } from '../models/songModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllSongs = catchAsync(async (req, res, next) => {
  const songs = await Song.find().sort({ createdAt: -1 });

  res.status(200).json(songs);
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
  // fetch 4 random songs using mongodb's aggregation pipeline
  const songs = await Song.aggregate([
    {
      $sample: { size: 4 },
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

export const getTrendingSongs = catchAsync(async (req, res, next) => {
  // fetch 4 random songs using mongodb's aggregation pipeline
  const songs = await Song.aggregate([
    {
      $sample: { size: 4 },
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
