const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  body: {
    type: String,
    required: true,
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'City', // Assuming you have a City model
  },
});
articleSchema.plugin(toJSON);
articleSchema.plugin(paginate);

module.exports = mongoose.model('Article', articleSchema);
