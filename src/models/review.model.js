//create a review model
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'City',
  },
});
reviewSchema.plugin(toJSON);
reviewSchema.plugin(paginate);

module.exports = mongoose.model('Review', reviewSchema);
