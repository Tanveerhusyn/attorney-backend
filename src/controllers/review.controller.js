//controller file for review
const httpStatus = require('http-status');
const reviewService = require('../services/review.service.js');

const createReview = async (req, res) => {
  try {
    const review = await reviewService.createReview(req.body);
    res.status(200).send({ status: 'success', message: 'Review created', response: review });
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

const getReviews = async (req, res) => {
  try {
    const filter = {};
    const options = {
      limit: parseInt(req.query.limit, 10) || 10,
      page: parseInt(req.query.page, 10) || 1,
    };

    const result = await reviewService.queryReviews(filter, options);
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

const getReviewById = async (req, res) => {
  try {
    const review = await reviewService.getReviewById(req.params.reviewId);
    if (!review) {
      return res.status(httpStatus.NOT_FOUND).send();
    }
    res.send(review);
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

const getReviewByCity = async (req, res) => {
  try {
    const review = await reviewService.getReviewByCity(req.params.cityId);
    if (!review) {
      return res.status(httpStatus.NOT_FOUND).send();
    }
    res.status(200).send({ status: 'success', message: 'Review fetched', response: review });
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

const updateReviewById = async (req, res) => {
  try {
    const review = await reviewService.updateReviewById(req.params.reviewId, req.body);
    if (!review) {
      return res.status(httpStatus.NOT_FOUND).send();
    }
    res.send(review);
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

const deleteReviewById = async (req, res) => {
  try {
    await reviewService.deleteReviewById(req.params.reviewId);
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

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  getReviewByCity,
  updateReviewById,
  deleteReviewById,
};
