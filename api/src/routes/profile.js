const express = require('express');
const router = express.Router();
const controllerProfile = require("../controllers/controller.profile");
const ValidateToken = require('../middlewares/Authorization');

/* Admins */
// UNA RUTA SOLO ADMINS:router.get("/",[ValidateToken.Admin], controllerAdmins.getAll);
router.get("/admin",[ValidateToken.Admin], controllerProfile.profileAdmin);
router.get("/doctor",[ValidateToken.Doctor], controllerProfile.profileDoctor);
router.get("/patient",[ValidateToken.Patient], controllerProfile.profilePatient);





module.exports = router;