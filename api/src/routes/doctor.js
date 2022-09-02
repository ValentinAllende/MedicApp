var express = require('express');
var doctorRouter = express.Router();
const controllerDoctors = require("../controllers/controller.doctor");

/* DOCTORS */
/* Get All Doctors */
doctorRouter.get("/", controllerDoctors.getAll);
/* Post Doctor */
doctorRouter.post("/", controllerDoctors.createDoctor);
/* Get Doctor by Id */
doctorRouter.get("/:idDoctor", controllerDoctors.getDoctor);
/* Update Doctor by Id */
doctorRouter.patch("/:idDoctor", controllerDoctors.updateDoctor);
/* Change Status(Active) Doctor*/
doctorRouter.patch("/status/:idDoctor", controllerDoctors.changeStatus);
/* Delete Doctor */
doctorRouter.delete("/:idDoctor", controllerDoctors.deleteDoctor);

module.exports = doctorRouter;
