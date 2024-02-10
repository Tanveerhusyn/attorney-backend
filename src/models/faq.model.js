const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200,
  },
  answer: {
    type: String,
    required: true,
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'City', // Assuming you have a City model
  },
});

faqSchema.plugin(toJSON);
faqSchema.plugin(paginate);

module.exports = mongoose.model('FAQ', faqSchema);
