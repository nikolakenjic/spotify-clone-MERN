import { Message } from '../models/messageModel.js';
import { User } from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json(users);
});

export const getMessages = catchAsync(async (req, res, next) => {
  // Add my
  if (!req.auth || !req.auth.userId) {
    req.auth = { userId: '5615618513215' }; // Add a mocked userId for testing
  }
  // Temporary auth
  const myId = req.auth.userId;

  const { userId } = req.params;

  const messages = await Message.find({
    $or: [
      { senderId: userId, receiverId: myId },
      { senderId: myId, receiverId: userId },
    ],
  }).sort({ createdAt: 1 });

  res.status(200).json(messages);
});
