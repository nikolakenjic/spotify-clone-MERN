import { clerkClient } from '@clerk/express';
import catchAsync from '../utils/catchAsync.js';

export const protectRoute = catchAsync(async (req, res, next) => {
  // Temporarily mock the userId if it's not coming from Clerk
  if (!req.auth || !req.auth.userId) {
    req.auth = { userId: '5615618513215' }; // Add a mocked userId for testing
  }
  if (!req.auth.userId) {
    return res
      .status(401)
      .json({ message: 'Unauthorized - You must be logged in' });
  }
  next();
});

export const requireAdmin = catchAsync(async (req, res, next) => {
  const currentUser = await clerkClient.users.getUser(req.auth.userId);
  const isAdmin =
    process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

  if (!isAdmin) {
    return res
      .status(403)
      .json({ message: 'Unauthorized - you must be admin' });
  }

  next();
});
