const AttorneyService = require('../services/attorney.service');

const createAttorney = async (req, res) => {
  try {
    const attorney = await AttorneyService.createAttorney(req.body);
    res.status(201).json({ status: 'success', message: 'Attorney created', response: attorney });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getAllAttorneys = async (req, res) => {
  try {
    const attorneys = await AttorneyService.getAllAttorneys();
    res.json({ status: 'success', message: 'Attorneys fetched', response: attorneys });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const getAttorneyById = async (req, res) => {
  try {
    const attorney = await AttorneyService.getAttorneyById(req.params.id);
    if (!attorney) {
      return res.status(404).json({ status: 'error', message: 'Attorney not found' });
    }
    res.json({ status: 'success', message: 'Attorney fetched', response: attorney });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const countAttorneys = async (req, res) => {
  try {
    const attorneys = await AttorneyService.countAttorneys();
    res.json({ status: 'success', message: 'Attorneys fetched', response: attorneys });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const updateAttorneyById = async (req, res) => {
  try {
    const attorney = await AttorneyService.updateAttorneyById(req.params.id, req.body);
    if (!attorney) {
      return res.status(404).json({ status: 'error', message: 'Attorney not found' });
    }
    res.json({ status: 'success', message: 'Attorney updated', response: attorney });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

//get attorneys by cityId
const getAttorneysByCityId = async (req, res) => {
  try {
    const attorneys = await AttorneyService.getAttorneysByCityId(req.params.cityId);
    res.json({ status: 'success', message: 'Attorneys fetched', response: attorneys });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

const deleteAttorneyById = async (req, res) => {
  try {
    await AttorneyService.deleteAttorneyById(req.params.id);
    res.status(204).json({ status: 'success', message: 'Attorney deleted' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
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
