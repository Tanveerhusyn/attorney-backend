const ArticleService = require('../services/article.service');

const createArticle = async (req, res) => {
  try {
    console.log('create', req.body);
    const article = await ArticleService.createArticle(req.body);
    res.status(201).json({ status: 'success', message: 'Article created', response: article });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleService.getAllArticles();
    res.json({ status: 'success', message: 'Articles fetched', response: articles });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

//get articles by cityId
const getArticlesByCityId = async (req, res) => {
  try {
    const articles = await ArticleService.getArticlesByCityId(req.params.cityId);
    res.json({ status: 'success', message: 'Articles fetched', response: articles });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await ArticleService.getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ status: 'error', message: 'Article not found' });
    }
    res.json({ status: 'success', message: 'Article fetched', response: article });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

//countArticles
const countArticles = async (req, res) => {
  try {
    const articles = await ArticleService.countArticles();
    res.json({ status: 'success', message: 'Articles fetched', response: articles });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const updateArticleById = async (req, res) => {
  try {
    console.log('body', req.body, 'params', req.params.id);
    const article = await ArticleService.updateArticleById(req.params.id, req.body);
    if (!article) {
      return res.status(404).json({ status: 'error', message: 'Article not found' });
    }
    res.json({ status: 'success', message: 'Article updated', response: article });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const deleteArticleById = async (req, res) => {
  try {
    await ArticleService.deleteArticleById(req.params.id);
    res.status(204).json({ status: 'success', message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  countArticles,
  getArticlesByCityId,
};
