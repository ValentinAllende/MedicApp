var express = require('express');
var appointmentRouter = express.Router();
const controllerAppointment = require("../dummyControllers/controller.appointment");

/* APPOINTMENTS */
appointmentRouter.get("/", controllerAppointment.getAll);
appointmentRouter.post("/", controllerAppointment.createAppointment);
appointmentRouter.get("/:idAppointment", controllerAppointment.getAppointment);
appointmentRouter.delete("/:idAppointment", controllerAppointment.deleteAppointment);

module.exports = appointmentRouter;