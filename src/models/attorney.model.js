const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const attorneySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  address: {
    type: String,
    maxlength: 160,
    minlength: 4,
  },
  phone: {
    type: String,
    maxlength: 20,
    minlength: 4,
  },
  website: {
    type: String,
    maxlength: 160,
    minlength: 4,
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'City', // Assuming you have a City model
  },
  image: String,
});
attorneySchema.plugin(toJSON);
attorneySchema.plugin(paginate);
module.exports = mongoose.model('Attorney', attorneySchema);
