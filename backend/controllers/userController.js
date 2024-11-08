import catchAsync from '../utils/catchAsync.js';

export const getAllUsers = catchAsync(async (req, res, next) => {
  res.send('get all users');
});

export const getMessages = catchAsync(async (req, res, next) => {
  res.send('Message');
});
