import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'You must provide full name'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Must provide image'],
    },
    clerkId: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
