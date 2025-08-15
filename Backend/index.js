import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import authRoutes from './routes/auth.js';

const app = express();

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://himanshugaur:fundex@fundex.86joivx.mongodb.net/?retryWrites=true&w=majority&appName=FUNDEX';

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));