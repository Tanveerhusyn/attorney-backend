const FAQ = require('../models/faq.model');

const createFAQ = async (faqData) => {
  try {
    const faq = await FAQ.create(faqData);
    return faq;
  } catch (error) {
    throw new Error('Error creating FAQ');
  }
};

const getAllFAQs = async () => {
  try {
    const faqs = await FAQ.find();
    return faqs;
  } catch (error) {
    throw new Error('Error fetching FAQs');
  }
};

const getFAQById = async (id) => {
  try {
    const faq = await FAQ.findById(id);
    return faq;
  } catch (error) {
    throw new Error('Error fetching FAQ by id');
  }
};

const getFAQsByCityId = async (cityId) => {
  try {
    const faqs = await FAQ.find({ cityId });
    return faqs;
  } catch (error) {
    throw new Error('Error fetching FAQs by city id');
  }
};

const updateFAQById = async (id, faqData) => {
  try {
    const faq = await FAQ.findByIdAndUpdate(id, faqData, { new: true });
    return faq;
  } catch (error) {
    throw new Error('Error updating FAQ by id');
  }
};

const deleteFAQById = async (id) => {
  try {
    await FAQ.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting FAQ by id');
  }
};

module.exports = {
  createFAQ,
  getAllFAQs,
  getFAQById,
  getFAQsByCityId,
  updateFAQById,
  deleteFAQById,
};
