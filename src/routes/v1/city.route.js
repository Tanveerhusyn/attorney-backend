const express = require('express');
const router = express.Router();
const cityController = require('../../controllers/city.controller');

router.post('/', cityController.createCity);

router.get('/', cityController.getCities);
router.get('/count-cities', cityController.countCities);

router.get('/:cityId', cityController.getCityById);

router.get('/state/:state', cityController.getCityByState);

router.put('/:cityId', cityController.updateCityById);

router.delete('/:cityId', cityController.deleteCityById);

module.exports = router;
