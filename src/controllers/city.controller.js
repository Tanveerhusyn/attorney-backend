const cityService = require('../services/city.service');
const httpStatus = require('http-status');

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    res.status(httpStatus.CREATED).send(city);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        status: 'Error',
        message: error.message,
        response: null,
      },
    });
  }
};

const getCities = async (req, res) => {
  try {
    const filter = {};
    const options = {
      limit: parseInt(req.query.limit, 10) || 10,
      page: parseInt(req.query.page, 10) || 1,
    };

    const result = await cityService.queryCities(filter, options);
    res.send(result);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        status: 'Error',
        message: error.message,
        response: null,
      },
    });
  }
};

const getCityById = async (req, res) => {
  try {
    const city = await cityService.getCityById(req.params.cityId);
    if (!city) {
      return res.status(httpStatus.NOT_FOUND).send();
    }
    res.send(city);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        status: 'Error',
        message: error.message,
        response: null,
      },
    });
  }
};

const getCityByState = async (req, res) => {
  try {
    const city = await cityService.getCityByState(req.params.state);
    res.send(city);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        status: 'Error',
        message: error.message,
        response: null,
      },
    });
  }
};

const updateCityById = async (req, res) => {
  try {
    const city = await cityService.updateCityById(req.params.cityId, req.body);
    res.send(city);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        status: 'Error',
        message: error.message,
        response: null,
      },
    });
  }
};

const deleteCityById = async (req, res) => {
  try {
    await cityService.deleteCityById(req.params.cityId);
    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        status: 'Error',
        message: error.message,
        response: null,
      },
    });
  }
};

const countCities = async (req, res) => {
  try {
    const cities = await cityService.countCities();
    res.json({ status: 'success', message: 'Cities fetched', response: cities });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
};
module.exports = {
  createCity,
  getCities,
  getCityById,
  getCityByState,
  updateCityById,
  deleteCityById,
  countCities,
};
