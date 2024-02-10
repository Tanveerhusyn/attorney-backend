const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const citySchema = new mongoose.Schema({
  city: { type: String },
  state_id: { type: String },
  state_name: { type: String },
  county_fips: { type: String },
  county_name: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  population: { type: Number },
  density: { type: Number },
  timezone: { type: String },
  ranking: { type: Number },
  zips: { type: [String] },
  id: { type: String },
  headerImage: { type: String },
  attorneys: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Attorney' }],
  articles: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Article' }],
  faqs: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'FAQ' }],
});

citySchema.plugin(toJSON);
citySchema.plugin(paginate);

citySchema.statics.isCityDuplicate = async function (city) {
  const result = await this.findOne({ city });
  return !!result;
};

const City = mongoose.model('City', citySchema);

module.exports = City;
