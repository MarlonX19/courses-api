const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  startedAt: {
    type: Date
  },

  description: String,

  isActive: {
    type: Boolean,
    default: true,
    required: true
  },

},
  {
    timestamps: true,
  })

module.exports = model('Course', CourseSchema);

