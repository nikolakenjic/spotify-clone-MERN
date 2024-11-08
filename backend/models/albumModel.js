import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
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
    releaseYear: {
      type: Number,
      required: [true, 'Please provide released year'],
    },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  },
  {
    timestamps: true,
  }
);

export const Album = mongoose.model('Album', albumSchema);
