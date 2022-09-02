const Doctor = require("../models/Doctor");

const controllerDoctors = {
  getAll: async (req, res, next) => {
    try {
      const doctors = await Doctor.find();
      if (!doctors) {
        throwError(1301);
      }
      return res.status(200).send({ data: doctors });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  createDoctor: async (req, res, next) => {
    const {
      name, specialities, license, address, email, password, phoneNumber, hour, space, checkUpPrice,
    } = req.body;
    try {
      const newDoctor = new Doctor({
        name,
        specialities,
        license,
        address,
        email,
        password,
        phoneNumber,
        schedule: [
          {
            hour,
            space,
            checkUpPrice,
          },
        ],
        active: true,
      });
      await newDoctor.save();
      return res.status(201).send({ newDoctor });
    } catch (error) {
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  getDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const doctorById = await Doctor.findById(idDoctor);
      if (!doctorById) {
        throwError(1302);
      }
      return res.status(200).send({ data: doctorById });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  updateDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    const requestChanges = req.body; 
    try {
      const doctorForUpdate = await Doctor.findById(idDoctor);
      if (!doctorForUpdate) {
        throwError(1302);
      }
      Object.assign(doctorForUpdate, requestChanges);
      await doctorForUpdate.save();
      res.status(200).send({ data: doctorForUpdate });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  changeStatus: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const doctor = await Doctor.findById(idDoctor);
      if (!doctor) {
        throwError(1302);
      }
      doctor.active = !doctor.active;
      await doctor.save();
      res.status(200).send({ data: doctor });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(403).send({ errors: "Formato de ID incorrecto" });
      }
      return res.status(error.code || 500).send({ errors: error.message });
    }
  },
  deleteDoctor: async (req, res, next) => {
    const { idDoctor } = req.params;
    try {
      const doctorForDelete = await Doctor.findById(idDoctor);
      if (!doctorForDelete) {
        throwError(1302);
      }
      await doctorForDelete.remove();
      return res.status(200).send({ deleted: doctorForDelete });
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
    const error = new Error("No se encontro ningun doctor");
    error.code = 404;
    throw error;
  }
  if (errorType === 1302) {
    const error = new Error("El Doctor no existe");
    error.code = 404;
    throw error;
  }
};

module.exports = controllerDoctors;
