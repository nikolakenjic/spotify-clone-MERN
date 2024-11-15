import catchAsync from '../utils/catchAsync.js';
import { Song } from '../models/songModel.js';
import { Album } from '../models/albumModel.js';
import AppError from '../utils/appError.js';

export const createSong = catchAsync(async (req, res, next) => {
  if (!req.files || !req.files.audioFile || !req.files.imageFile) {
    return res.status(400).json({ message: 'Please upload all files' });
  }

  // Check Later for real data *********************************************
  const { title, artist, albumId, duration } = req.body;
  const audioFile = req.files.audioFile;
  const imageFile = req.files.imageFile;

  // Upload files to ImageKit
  const audioUrl = await uploadToImageKit(audioFile);
  const imageUrl = await uploadToImageKit(imageFile);

  // Save song with uploaded URLs
  const song = new Song({
    title,
    artist,
    audioUrl,
    imageUrl,
    duration,
    albumId: albumId || null,
  });

  await song.save();

  // if song belongs to an album, update the album's songs array
  if (albumId) {
    await Album.findByIdAndUpdate(albumId, {
      $push: { songs: song._id },
    });
  }

  res.status(201).json(song);
});

export const deleteSong = catchAsync(async (req, res, next) => {
  const { songId } = req.params;

  const song = await Song.findById(songId);

  if (!song) {
    return next(new AppError('Can not find the song', 404));
  }

  // if song belongs to an album, update the album's songs array
  if (song.albumId) {
    await Album.findByIdAndUpdate(song.albumId, {
      $pull: { songs: song._id },
    });
  }

  await Song.findByIdAndDelete(id);

  res.status(200).json({ message: 'Song deleted successfully' });
});

export const createAlbum = catchAsync(async (req, res, next) => {
  const { title, artist, releaseYear } = req.body;
  const { imageFile } = req.files;

  const imageUrl = await uploadToImageKit(imageFile);

  const album = new Album({
    title,
    artist,
    imageUrl,
    releaseYear,
  });

  await album.save();

  res.status(201).json(album);
});

export const deleteAlbum = catchAsync(async (req, res, next) => {
  const { albumId } = req.params;

  await Song.deleteMany({ albumId: albumId });
  await Album.findByIdAndDelete(id);

  res.status(200).json({ message: 'Album deleted successfully' });
});

export const checkAdmin = catchAsync(async (req, res, next) => {
  res.status(200).json({ admin: true });
});
