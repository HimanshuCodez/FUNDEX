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
  days: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Plan || mongoose.model('Plan', planSchema);