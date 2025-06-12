const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// POST /api/certificates - Add certificate
router.post('/', async (req, res) => {
  try {
    const { name, platform } = req.body;
    const cert = new Certificate({ name, platform });
    await cert.save();
    res.status(201).json(cert);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// GET /api/certificates - Get all
router.get('/', async (req, res) => {
  try {
    const certs = await Certificate.find();
    res.json(certs);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
