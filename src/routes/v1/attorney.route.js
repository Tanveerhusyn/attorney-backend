const express = require('express');
const router = express.Router();
const AttorneyController = require('../../controllers/attorney.controller');

// Create a new attorney
router.post('/', AttorneyController.createAttorney);

// Get all
router.get('/', AttorneyController.getAllAttorneys);
router.get('/count-attorneys', AttorneyController.countAttorneys);

router.get('/city/:cityId', AttorneyController.getAttorneysByCityId);
// Get a single attorney by ID
router.get('/:id', AttorneyController.getAttorneyById);

// Update an attorney by ID
router.put('/:id', AttorneyController.updateAttorneyById);

// Delete an attorney by ID
router.delete('/:id', AttorneyController.deleteAttorneyById);

module.exports = router;
