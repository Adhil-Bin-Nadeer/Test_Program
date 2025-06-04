const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  desc: String,
  exp: Number,
  profile: String,
  techs: [String]
}, {
  timestamps: true, // This will add createdAt and updatedAt fields automatically
  collection: 'joblisting' // Specify the collection name
});

module.exports = mongoose.model('Job', jobSchema);