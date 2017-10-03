const mongoose = require('mongoose');

const model = mongoose.model('Puppy', {
  name: {
    type: String,
    required: true,
  },
});

module.exports = model;
