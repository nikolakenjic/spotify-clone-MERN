import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

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

// Morgan for development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/songs', songRoutes);
app.use('/api/v1/albums', albumRoutes);
app.use('/api/v1/stats', statRoutes);

export default app;
