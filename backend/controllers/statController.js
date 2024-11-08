import catchAsync from '../utils/catchAsync.js';

export const getStats = catchAsync(async (req, res, next) => {
  res.send('getStats');
});
