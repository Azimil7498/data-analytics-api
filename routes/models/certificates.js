const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
