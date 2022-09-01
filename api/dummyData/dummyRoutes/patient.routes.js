var express = require('express');
var patientRouter = express.Router();
const controllerPatients = require("../dummyControllers/controller.patient");

/* PATIENTS */
patientRouter.get("/", controllerPatients.getAll);
patientRouter.post("/", controllerPatients.createPatient);
patientRouter.get("/:idPatient", controllerPatients.getPatient);
patientRouter.patch("/:idPatient", controllerPatients.updatePatient);
patientRouter.delete("/:idPatient", controllerPatients.deletePatient);

module.exports = patientRouter;

