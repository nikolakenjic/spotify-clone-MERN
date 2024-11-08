import catchAsync from '../utils/catchAsync.js';

export const authCallback = catchAsync(async (req, res, next) => {
  res.send('Auth');
});
