//review routes
const express = require('express');
const router = express.Router();
const ReviewController = require('../../controllers/review.controller.js');

// Create a new review
router.post('/', ReviewController.createReview);

// Get all
router.get('/', ReviewController.getReviews);

router.get('/city/:cityId', ReviewController.getReviewByCity);

router.get('/:id', ReviewController.getReviewById);

// Update a review by ID
router.put('/:id', ReviewController.updateReviewById);

// Delete a review by ID
router.delete('/:id', ReviewController.deleteReviewById);

// Get count of reviews
module.exports = router;
