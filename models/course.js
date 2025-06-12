// models/course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ['In Progress', 'Completed'],
    default: 'In Progress'
  }
});

module.exports = mongoose.model('Course', courseSchema);
