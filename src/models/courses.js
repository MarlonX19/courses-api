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

  isActive: Boolean, 

},
  {
    timestamps: true,
  })

module.exports = model('Course', CourseSchema);

