const Doctor = require('../models/Doctor');

const controllerDoctors = {
    getAll: async (req, res, next) => {
      try {
        Doctor.find()
        .then(doctors => res.status(200).send(doctors))
      } catch (error) {
        console.log(error);
      }
    },
    createDoctor: async (req, res, next) => {
      const { name, specialities, license, address, email, password, phoneNumber, hour, space, checkUpPrice} = req.body;
      const newDoctor = new Doctor({
        name,
        specialities,
        license,
        address,
        email,
        password,
        phoneNumber,
        schedule:[
          {
            hour,
            space,
            checkUpPrice
          }
        ],
        active: true,
      });
      try {
        newDoctor.save()
          .then(doctor => res.status(200).send(doctor))
      } catch (error) {
        console.log(error);
      }
    },
    getDoctor: async (req, res, next) => {
      const { idDoctor } = req.params;
      try {
        Doctor.find({_id: idDoctor})
        .then(doctor => res.status(200).send(doctor))
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  module.exports = controllerDoctors;