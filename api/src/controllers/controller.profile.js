const Admin = require('../models/Admin');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Appointment = require('../models/Patient');



const controllerProfile = {
    profileAdmin: async (req, res, next) =>{
        try {
            
            const id = req.user_id
            console.log(id);
            const user = await Admin.findById(id)
            res.status(200).json({data:user})
        } catch (error) {
            next(error)
        }
    },
    profileDoctor: async (req, res, next) =>{
        try {
            
            const id = req.user_id
            console.log(id);
            const doctor = await Doctor.findById(id)
            res.status(200).json({data:doctor })
        } catch (error) {
            next(error)
        }
    },
    profilePatient: async (req, res, next) =>{
        try {
            
            const id = req.user_id
            console.log(id);
            const user = await Patient.findById(id)
            res.status(200).json({data:user})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = controllerProfile;