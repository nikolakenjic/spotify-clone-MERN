import { User } from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json(users);
});

export const getMessages = catchAsync(async (req, res, next) => {
  res.send('Message');
});
