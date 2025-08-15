import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import authRoutes from './routes/auth.route.js';
import paymentRoutes from './routes/payment.route.js';
import userRoutes from './routes/user.route.js';

const app = express();

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/users', userRoutes);

// Serve static files
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));