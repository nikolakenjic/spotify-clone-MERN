import { Album } from '../models/albumModel.js';
import { Song } from '../models/songModel.js';
import { User } from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getStats = catchAsync(async (req, res, next) => {
  const [totalSongs, totalAlbums, totalUsers, uniqueArtists] =
    await Promise.all([
      Song.countDocuments(),
      Album.countDocuments(),
      User.countDocuments(),

      Song.aggregate([
        {
          $unionWith: {
            coll: 'albums',
            pipeline: [],
          },
        },
        {
          $group: {
            _id: '$artist',
          },
        },
        {
          $count: 'count',
        },
      ]),
    ]);

  res.status(200).json({
    totalAlbums,
    totalSongs,
    totalUsers,
    totalArtists: uniqueArtists[0]?.count || 0,
  });
});
