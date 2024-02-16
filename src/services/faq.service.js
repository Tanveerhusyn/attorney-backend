const FAQ = require('../models/faq.model');

const OpenAIApi = require('openai');
const mongoose = require('mongoose');

const {
  openai: { apiKey },
} = require('../config/config');

const openai = new OpenAIApi({
  apiKey: apiKey,
});

function parseContent(object) {
  // Access the 'content' property of the object
  const contentString = object.content;

  // Convert the stringified JSON into a JavaScript object
  try {
    const contentArray = JSON.parse(contentString);
    return contentArray;
  } catch (error) {
    console.error('Parsing error:', error);
    return null; // Return null or an appropriate error handling response
  }
}

const generateFAQ = async (cityName) => {
  try {
    // Generate FAQ using OpenAI related to the city and return it as an array of objects. there should be exactly 5 objects in the array and mention the response structure in the prompt.

    const faqData = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',

      messages: [
        {
          role: 'system',
          content: `
    I am a chat
        bot that generate 5 FAQs about ${cityName}.  
      Please generate 5 Questions and answers objects about ${cityName} and provide the answers in the following format (ONLY ARRAY):
        [{
          "question": "What is ${cityName} known for?",
          "answer": "${cityName} is known for..."
         
        }...]
        
    `,
        },
        { role: 'user', content: cityName },
      ],
    });

    const contentArray = parseContent(faqData.choices[0].message);

    return contentArray;
  } catch (error) {
    console.log(error);
    throw new Error('Error generating FAQ');
  }
};

const createFAQ = async (faqData) => {
  try {
    const faq = await FAQ.create(faqData);
    return faq;
  } catch (error) {
    throw new Error('Error creating FAQ');
  }
};

// Add many FAQs to the database
const addFAQs = async (faqs, cityId) => {
  try {
    // Convert cityId to an ObjectId
    const objectIdCityId = mongoose.Types.ObjectId(cityId);

    // Check if there's an existing FAQ document for the city
    let existingFAQ = await FAQ.findOne({ cityId: objectIdCityId });

    if (existingFAQ) {
      // If exists, update the document by adding new FAQs
      existingFAQ.faqs.push(...faqs); // Assumes faqs is an array of {question, answer} objects
      await existingFAQ.save();
    } else {
      // If not, create a new FAQ document for the city with the given FAQs
      const newFAQ = new FAQ({
        cityId: objectIdCityId,
        faqs: faqs, // Here, faqs should already include the cityId if needed
      });
      await newFAQ.save();
    }

    return existingFAQ ? existingFAQ : newFAQ;
  } catch (error) {
    console.log(error);
    throw new Error('Error adding or updating FAQs');
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
  generateFAQ,
  addFAQs,
};
