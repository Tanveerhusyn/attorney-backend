const express = require('express');
const router = express.Router();
const ArticleController = require('../../controllers/article.controller');

// Create a new article
router.post('/', ArticleController.createArticle);

// Get all
router.get('/', ArticleController.getAllArticles);
router.get('/count-articles', ArticleController.countArticles);

router.get('/city/:cityId', ArticleController.getArticlesByCityId);

router.get('/:id', ArticleController.getArticleById);

// Update an article by ID
router.put('/:id', ArticleController.updateArticleById);

// Delete an article by ID
router.delete('/:id', ArticleController.deleteArticleById);

// Get count of articles
module.exports = router;
