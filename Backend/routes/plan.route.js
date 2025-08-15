import express from 'express';
import Plan from '../models/Plan.model.js';
import adminAuth from '../middleware/adminAuth.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/plans/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// @route   POST api/plans
// @desc    Create a plan
// @access  Private (admin)
router.post('/', [adminAuth, upload.single('image')], async (req, res) => {
  const { name, price, daily, days, revenue, type } = req.body;
  const image = req.file.path;

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

    await plan.deleteOne();
    res.json({ msg: 'Plan removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;