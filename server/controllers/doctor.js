const DoctorService = require('../services/doctor');

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving doctors' });
  }
};

exports.getDoctorByWallet = async (req, res) => {
  try {
      const wallet_address = req.params.wallet_address.toLowerCase();
      const doctor = await DoctorService.getDoctorByWallet(wallet_address);
      res.json(doctor);
  } catch (error) {
      console.error('Error retrieving doctor:', error);
      res.status(500).json({ error: 'Error retrieving doctor' });
  }
};

exports.addDoctor = async (req, res) => {
  try {
    const doctorData = req.body;
    console.log(doctorData);
    const result = await DoctorService.addDoctor(doctorData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding doctor' });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const doctorId = parseInt(req.params.id); // Assuming ID is in request params (modify as needed)
    const doctorData = req.body;
    const result = await DoctorService.updateDoctor(doctorId, doctorData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating doctor' });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctorId = parseInt(req.params.id); // Assuming ID is in request params (modify as needed)
    const result = await DoctorService.deleteDoctor(doctorId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting doctor' });
  }
};

exports.maxIdFinder = async (req, res) => {
  try {
    const result = await DoctorService.maxIdFinder();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error getting doctor'});
  }
};