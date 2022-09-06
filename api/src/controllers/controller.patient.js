const Patient = require("../models/Patient");

const controllerPatients = {
  getAll: async (req, res, next) => {
    try {
      const patients = await Patient.find();
      if (!patients) {
        throwError(1301); //Código de error interno
      }
      return res.status(200).send({ data: patients });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message }); //Enviamos el error con el código y mensaje respectivo
    }
  },
  createPatient: async (req, res, next) => {
    const { name, email, password, phoneNumber } = req.body;
    try {
      const newPatient = new Patient({ name, email, password, phoneNumber });
      await newPatient.save();
      return res.status(201).send({ newPatient: newPatient });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  getPatient: async (req, res, next) => {
    const { idPatient } = req.params;
    try {
      const patientById = await Patient.findById(idPatient);
      if (!patientById) {
        throwError(1302);
      }
      return res.status(200).send({ data: patientById });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  updatePatient: async (req, res, next) => {
    const { idPatient } = req.params;
    const requestChanges = req.body; 
    try {
      const patientForUpdate = await Patient.findById(idPatient);
      if (!patientForUpdate) {
        throwError(1302);
      }
      Object.assign(patientForUpdate, requestChanges);
      await patientForUpdate.save();
      res.status(200).send({ data: patientForUpdate });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  changeStatus: async (req, res, next) => {
    const { idPatient } = req.params;
    try {
      const patient = await Patient.findById(idPatient);
      if (!patient) {
        throwError(1302);
      }
      patient.active = !patient.active;
      await patient.save();
      res.status(200).send({ data: patient });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  addTrustDoctor: async (req, res, next) => {
    const { idPatient } = req.params;
    const { idDoctor } = req.body;
    try {
      const patient = await Patient.findById(idPatient);
      if (!patient) {
        throwError(1302);
      }
      patient.trustedDoctors.push(idDoctor);
      await patient.save();
      res.status(200).send({ msg: "Doctor Save in Favorites" });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  deletePatient: async (req, res, next) => {
    const { idPatient } = req.params;
    try {
      const patientForDelete = await Patient.findById(idPatient);
      if (!patientForDelete) {
        throwError(1302);
      }
      await patientForDelete.remove();
      return res.status(200).send({ deleted: patientForDelete });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
};

const throwError = (errorType) => {
  if (errorType === 1301) {
    const error = new Error("No encontramos pacientes");
    error.code = 404;
    throw error;
  }
  if (errorType === 1302) {
    const error = new Error("El Paciente no existe");
    error.code = 404;
    throw error;
  }
};

module.exports = controllerPatients;
