import express from 'express';
import multer from 'multer';
import Payment from '../models/Payment.model.js';
import User from '../models/User.model.js';
import auth from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', [auth, upload.single('screenshot')], async (req, res) => {
  const { amount } = req.body;
  const screenshot = req.file.path;

  try {
    const newPayment = new Payment({
      user: req.user.id,
      amount,
      screenshot,
    });

    const payment = await newPayment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/payment
// @desc    Get all payments
// @access  Private (admin)
router.get('/', adminAuth, async (req, res) => {
  try {
    const payments = await Payment.find().populate('user', ['name', 'email']);
    res.json(payments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/payment/:id
// @desc    Update payment status
// @access  Private (admin)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }

    // If payment is approved, update user's balance
    if (status === 'approved' && payment.status !== 'approved') {
      const user = await User.findById(payment.user);
      if (user) {
        user.balance += payment.amount;
        await user.save();
      }
    }

    payment.status = status;
    await payment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;