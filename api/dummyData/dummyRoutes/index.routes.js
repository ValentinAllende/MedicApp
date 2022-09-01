var express = require('express');
var router = express.Router();
const patientRoutes = require("./patient.routes");
const doctorRoutes = require("./doctor.routes");
const adminRoutes = require("./admin.routes");
const appointmentRoutes = require("./appointment.routes");

/* INDEX */
router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/admins", adminRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;