//create a crud service for city
const City = require('../models/city');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const createCity = async (cityBody) => {
  if (await City.isCityDuplicate(cityBody)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'City already exists');
  }
  return City.create(cityBody);
};

const queryCities = async (filter, options) => {
  console.log('filter', filter, 'options', options);
  const cities = await City.paginate(filter, options);
  return cities;
};

const getCityById = async (id) => {
  return City.findById(id);
};

const getCityByState = async (state) => {
  return City.find({ state_name: state });
};

const countCities = async () => {
  const count = City.find().count();
  console.log('count', count);
  return count;
};
const updateCityById = async (cityId, updateBody) => {
  const city = await getCityById(cityId);
  if (!city) {
    throw new ApiError(httpStatus.NOT_FOUND, 'City not found');
  }
  if (updateBody.city && (await City.isCityDuplicate(updateBody))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'City already exists');
  }
  Object.assign(city, updateBody);
  await city.save();
  return city;
};

const deleteCityById = async (cityId) => {
  const city = await getCityById(cityId);
  if (!city) {
    throw new ApiError(httpStatus.NOT_FOUND, 'City not found');
  }
  await city.remove();
  return city;
};

module.exports = {
  createCity,
  queryCities,
  getCityById,
  getCityByState,
  updateCityById,
  deleteCityById,
  countCities,
};
