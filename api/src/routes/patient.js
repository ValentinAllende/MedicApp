const express = require('express');
const patientRouter = express.Router();
const controllerPatients = require("../controllers/controller.patient");
const { paramIdPatientValidator, bodyPatientValidatorPOST, bodyPatientValidatorPATCH, bodyPatientValidatorFAVORITES } = require("../middlewares/validatorPatient.js");

/* PATIENTS */
/* Get All Patients */
patientRouter.get("/", controllerPatients.getAll);
/* Post Patient */
patientRouter.post("/", bodyPatientValidatorPOST , controllerPatients.createPatient);
/* Get Patient by Id */
patientRouter.get("/:idPatient", paramIdPatientValidator, controllerPatients.getPatient);
/* Update Patient by Id */
patientRouter.patch("/:idPatient", paramIdPatientValidator, bodyPatientValidatorPATCH, controllerPatients.updatePatient);
/* Change Status(Active) Patient*/
patientRouter.patch("/status/:idPatient", paramIdPatientValidator, controllerPatients.changeStatus);
/* Add Trust Doctor - Patient*/
patientRouter.patch("/saveDoctor/:idPatient", paramIdPatientValidator, bodyPatientValidatorFAVORITES, controllerPatients.addTrustDoctor);
/* Delete Patient */
patientRouter.delete("/:idPatient", paramIdPatientValidator, controllerPatients.deletePatient);

module.exports = patientRouter;
