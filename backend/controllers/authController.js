import { User } from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';

export const authCallback = catchAsync(async (req, res, next) => {
  const { id, firstName, imageUrl } = req.body;

  const user = await User.findOne({ clerkId: id });

  if (!user) {
    // Signup
    await User.create({ clerkId: id, firstName, imageUrl });
  }

  res.status(201).json({ status: 'success' });
});
