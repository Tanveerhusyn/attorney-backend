//service file for review
const httpStatus = require('http-status');
const Review = require('../models/review.model');
const ApiError = require('../utils/ApiError');

/**
 * Create a review
 * @param {Object} reviewData
 * @returns {Promise<Review>}
 */
const createReview = async (reviewData) => {
  try {
    const review = await Review.create(reviewData);
    return review;
  } catch (error) {
    console.log('error', error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error creating review');
  }
};

/**
 * Query for reviews
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
const queryReviews = async (filter, options) => {
  const reviews = await Review.paginate(filter, options);
  return reviews;
};

/**
 * Get review by id
 * @param {ObjectId} id
 * @returns {Promise<Review>}
 */

const getReviewById = async (id) => {
  return Review.findById(id);
};

/**
 * Get review by city
 * @param {String} city
 * @returns {Promise<Review>}
 */
const getReviewByCity = async (cityId) => {
  return Review.find({ cityId: cityId });
};

module.exports = {
  createReview,
  queryReviews,
  getReviewById,
  getReviewByCity,
};
