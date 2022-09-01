var express = require('express');
var doctorRouter = express.Router();
const controllerDoctors = require("../dummyControllers/controller.doctor");

/* DOCTORS */
doctorRouter.get("/", controllerDoctors.getAll);
doctorRouter.post("/", controllerDoctors.createDoctor);
doctorRouter.get("/:idDoctor", controllerDoctors.getDoctor);
doctorRouter.patch("/:idDoctor", controllerDoctors.updateDoctor);
doctorRouter.delete("/:idDoctor", controllerDoctors.deleteDoctor);

module.exports = doctorRouter;
