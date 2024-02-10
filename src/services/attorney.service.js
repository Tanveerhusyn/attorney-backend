const Attorney = require('../models/attorney.model');

const createAttorney = async (attorneyData) => {
  try {
    const attorney = await Attorney.create(attorneyData);
    return attorney;
  } catch (error) {
    throw new Error('Error creating attorney');
  }
};

const getAllAttorneys = async () => {
  try {
    const attorneys = await Attorney.find();
    return attorneys;
  } catch (error) {
    throw new Error('Error fetching attorneys');
  }
};

const getAttorneyById = async (id) => {
  try {
    const attorney = await Attorney.findById(id);
    return attorney;
  } catch (error) {
    throw new Error('Error fetching attorney by id');
  }
};

const updateAttorneyById = async (id, attorneyData) => {
  try {
    const attorney = await Attorney.findByIdAndUpdate(id, attorneyData, { new: true });
    return attorney;
  } catch (error) {
    throw new Error('Error updating attorney by id');
  }
};

//get attorneys by cityId
const getAttorneysByCityId = async (cityId) => {
  try {
    const attorneys = await Attorney.find({ cityId: cityId });
    return attorneys;
  } catch (error) {
    throw new Error('Error fetching attorneys by cityId');
  }
};

const deleteAttorneyById = async (id) => {
  try {
    await Attorney.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting attorney by id');
  }
};

const countAttorneys = async () => {
  try {
    const attorneys = await Attorney.find().count();
    return attorneys;
  } catch (error) {
    throw new Error('Error fetching attorneys');
  }
};
module.exports = {
  createAttorney,
  getAllAttorneys,
  getAttorneyById,
  updateAttorneyById,
  deleteAttorneyById,
  countAttorneys,
  getAttorneysByCityId,
};
