const Article = require('../models/article.model');

const createArticle = async (articleData) => {
  try {
    const article = await Article.create(articleData);
    return article;
  } catch (error) {
    console.log('error', error);
    throw new Error('Error creating article');
  }
};

const getAllArticles = async () => {
  try {
    const articles = await Article.find().populate('cityId');
    console.log('articles', articles);
    return articles;
  } catch (error) {
    throw new Error('Error fetching articles');
  }
};
//get articles by cityId
const getArticlesByCityId = async (cityId) => {
  try {
    const articles = await Article.find({ cityId: cityId });
    return articles;
  } catch (error) {
    throw new Error('Error fetching articles by cityId');
  }
};
const countArticles = async () => {
  try {
    const articles = await Article.find().count();
    console.log('articles', articles);
    return articles;
  } catch (error) {
    throw new Error('Error fetching articles');
  }
};

const getArticleById = async (id) => {
  try {
    const article = await Article.findById(id);
    return article;
  } catch (error) {
    throw new Error('Error fetching article by id');
  }
};

const updateArticleById = async (id, articleData) => {
  try {
    const article = await Article.findByIdAndUpdate(id, articleData, { new: true });
    console.log('article', article);
    return article;
  } catch (error) {
    throw new Error('Error updating article by id');
  }
};

const deleteArticleById = async (id) => {
  try {
    await Article.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting article by id');
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
