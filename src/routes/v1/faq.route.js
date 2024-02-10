const express = require('express');
const router = express.Router();
const FAQController = require('../../controllers/faq.controller');

// Create a new FAQ
router.post('/', FAQController.createFAQ);

// Get all FAQs
router.get('/', FAQController.getAllFAQs);

// Get a single FAQ by ID
router.get('/:id', FAQController.getFAQById);

// Get FAQs by city ID
router.get('/city/:cityId', FAQController.getAllFAQsByCityId);

// Update a FAQ by ID
router.put('/:id', FAQController.updateFAQById);

// Delete a FAQ by ID
router.delete('/:id', FAQController.deleteFAQById);

module.exports = router;
