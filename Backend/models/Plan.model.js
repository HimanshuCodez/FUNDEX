import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  daily: {
    type: Number,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['long', 'vip'],
    required: true,
  },
});

export default mongoose.models.Plan || mongoose.model('Plan', planSchema);