const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const cityRoute = require('./city.route');
const articleRoute = require('./article.route');
const attorneyRoute = require('./attorney.route');
const faqsRoute = require('./faq.route');
const reviewsRoute = require('./review.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/cities',
    route: cityRoute,
  },
  {
    path: '/articles',
    route: articleRoute,
  },
  {
    path: '/attorneys',
    route: attorneyRoute,
  },
  {
    path: '/faqs',
    route: faqsRoute,
  },
  {
    path: '/reviews',
    route: reviewsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
