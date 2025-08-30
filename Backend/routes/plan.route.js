import express from 'express';
import Plan from '../models/Plan.model.js';
import adminAuth from '../middleware/adminAuth.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const router = express.Router();

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// Configure Multer to use Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'plans',
    format: async (req, file) => 'jpg',
    public_id: (req, file) => Date.now() + '-' + file.originalname,
  },
});

const upload = multer({ storage: storage });

// @route   POST api/plans
// @desc    Create a plan
// @access  Private (admin)
router.post('/', [adminAuth, upload.single('image')], async (req, res) => {
  const { name, price, daily, days, revenue, type } = req.body;
  if (!req.file) {
    return res.status(400).json({ msg: 'Please upload an image' });
  }
  const image = req.file.path; // This will be the Cloudinary URL

  try {
    const newPlan = new Plan({
      name,
      price,
      daily,
      days,
      revenue,
      image,
      type,
    });

    const plan = await newPlan.save();
    res.json(plan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/plans
// @desc    Get all plans
// @access  Public
router.get('/', async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/plans/:id
// @desc    Delete a plan
// @access  Private (admin)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);

    if (!plan) {
      return res.status(404).json({ msg: 'Plan not found' });
    }

    // Note: You might want to delete the image from Cloudinary here

    await plan.deleteOne();
    res.json({ msg: 'Plan removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;