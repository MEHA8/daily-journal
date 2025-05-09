const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');

// POST: Add a new journal entry
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newJournal = new Journal({ title, content });
    await newJournal.save();
    res.status(201).json(newJournal);
  } catch (err) {
    res.status(500).json({ message: 'Error adding journal entry', error: err });
  }
});

// GET: Fetch all journal entries
router.get('/', async (req, res) => {
  try {
    const journals = await Journal.find().sort({ createdAt: -1 }); // recent first
    res.json(journals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching journal entries', error: err });
  }
});

module.exports = router;