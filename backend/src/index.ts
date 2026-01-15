import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes';
import videoRoutes from './routes/video.routes';
import adminRoutes from './routes/admin.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/admin', adminRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Create admin user on startup
import User from './models/User';

const createAdminUser = async () => {
  try {
    const adminExists = await User.findOne({ username: process.env.ADMIN_USERNAME });
    
    if (!adminExists) {
      const admin = new User({
        username: process.env.ADMIN_USERNAME,
        email: 'admin@netflixclone.com',
        password: process.env.ADMIN_PASSWORD,
        isAdmin: true
      });
      await admin.save();
      console.log('✅ Admin user created successfully');
    }
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  }
};

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  createAdminUser();
});