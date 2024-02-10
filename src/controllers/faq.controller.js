const FAQService = require('../services/faq.service');

const createFAQ = async (req, res) => {
  try {
    const faq = await FAQService.createFAQ(req.body);
    res.status(201).json({ status: 'success', message: 'FAQ created', response: faq });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getAllFAQs = async (req, res) => {
  try {
    const faqs = await FAQService.getAllFAQs();
    res.json({ status: 'success', message: 'FAQs fetched', response: faqs });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getAllFAQsByCityId = async (req, res) => {
  try {
    const faqs = await FAQService.getFAQsByCityId(req.params.cityId);
    res.json({ status: 'success', message: 'FAQs fetched', response: faqs });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getFAQById = async (req, res) => {
  try {
    const faq = await FAQService.getFAQById(req.params.id);
    if (!faq) {
      return res.status(404).json({ status: 'error', message: 'FAQ not found' });
    }
    res.json({ status: 'success', message: 'FAQ fetched', response: faq });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const updateFAQById = async (req, res) => {
  try {
    const faq = await FAQService.updateFAQById(req.params.id, req.body);
    if (!faq) {
      return res.status(404).json({ status: 'error', message: 'FAQ not found' });
    }
    res.json({ status: 'success', message: 'FAQ updated', response: faq });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const deleteFAQById = async (req, res) => {
  try {
    await FAQService.deleteFAQById(req.params.id);
    res.status(204).json({ status: 'success', message: 'FAQ deleted' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

module.exports = {
  createFAQ,
  getAllFAQs,
  getAllFAQsByCityId,
  getFAQById,
  updateFAQById,
  deleteFAQById,
};
