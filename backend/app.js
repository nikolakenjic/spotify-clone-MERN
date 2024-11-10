import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { clerkMiddleware } from '@clerk/express';
import ImageKit from 'imagekit';
import fileUpload from 'express-fileupload';

import AppError from './utils/appError.js';
import errorHandler from './utils/errorHandler.js';

// Routes
import userRoutes from './routes/userRoute.js';
import adminRoutes from './routes/adminRoute.js';
import authRoutes from './routes/authRoute.js';
import songRoutes from './routes/songRoute.js';
import albumRoutes from './routes/albumRoute.js';
import statRoutes from './routes/statRoute.js';

const app = express();

// Get the current directory from the import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __config = path.dirname(__filename);
// Use path.resolve to construct the path to the .env file
dotenv.config({ path: path.resolve(__config, './../.env') });

const __dirname = path.resolve();

// Morgan for development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

app.use(express.json()); // parse req.body
app.use(clerkMiddleware()); // add auth ti req.obj
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// ImageKIT
app.use((req, res, next) => {
  req.imageKit = imageKit;
  next();
});

// FileUpload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'tmp'),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB  max file size
    },
  })
);

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/albums', albumRoutes);
app.use('/api/v1/songs', songRoutes);
app.use('/api/v1/stats', statRoutes);

// Handling undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware
app.use(errorHandler);

export default app;
