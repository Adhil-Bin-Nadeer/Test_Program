const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// POST /api/jobs - Add new job
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/jobs - Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    console.log(`Found ${jobs.length} jobs in the database`);
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: error.message });
  }
});

// GET /api/jobs/search - Search jobs
router.get('/search', async (req, res) => {
  const { keyword } = req.query;
  
  // If no keyword, return all jobs
  if (!keyword || keyword.trim() === '') {
    try {
      const jobs = await Job.find();
      console.log(`No search keyword, returning all ${jobs.length} jobs`);
      return res.json(jobs);
    } catch (error) {
      console.error('Error fetching all jobs:', error);
      return res.status(500).json({ message: error.message });
    }
  }

  try {
    const searchRegex = new RegExp(keyword.trim(), 'i');
    
    const jobs = await Job.find({
      $or: [
        { desc: { $regex: searchRegex } },
        { profile: { $regex: searchRegex } },
        { techs: { $in: [searchRegex] } } // For array of technologies
      ]
    });

    console.log(`Search for "${keyword}" found ${jobs.length} jobs`);
    res.json(jobs);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;