import express from 'express';

import adminAuth from '../middleware/adminAuth.js';
import auth from '../middleware/auth.js';
import User from '../models/User.model.js';
import Plan from '../models/Plan.model.js';


const router = express.Router();

// @route   GET api/users
// @desc    Get all users
// @access  Private (admin)
router.get('/', adminAuth, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/users/buy-plan
// @desc    Buy a plan
// @access  Private
router.post('/buy-plan', auth, async (req, res) => {
  const { planId } = req.body;

  try {
    const user = await User.findById(req.user.id);
    const plan = await Plan.findById(planId);

    if (!user || !plan) {
      return res.status(404).json({ msg: 'User or Plan not found' });
    }

    if (user.balance < plan.price) {
      return res.status(400).json({ msg: 'Insufficient balance' });
    }

    if (user.currentPlan) {
        return res.status(400).json({ msg: 'You already have an active plan' });
    }

    user.balance -= plan.price;
    user.currentPlan = planId;

    await user.save();

    res.json({ msg: 'Plan purchased successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;