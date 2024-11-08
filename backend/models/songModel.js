import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide the title'],
    },
    artist: {
      type: String,
      required: [true, 'Please provide an artist'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image'],
    },
    audioUrl: {
      type: String,
      required: [true, 'Please provide an audio'],
    },
    duration: {
      type: String,
      required: [true, 'Please provide a duration'],
    },
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album',
    },
  },
  { timestamps: true }
);

export const Song = mongoose.model('Song', songSchema);
