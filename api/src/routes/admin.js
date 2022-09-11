const express = require('express');
const router = express.Router();
const controllerAdmins = require("../controllers/controller.admin");
const ValidateToken = require('../middlewares/Authorization');

/* Admins */
// UNA RUTA SOLO ADMINS:
router.get("/", controllerAdmins.getAll);
// router.get("/", controllerAdmins.getAll);
router.post("/",  controllerAdmins.createAdmin);
router.get("/:id", controllerAdmins.getAdmin);
router.patch("/:id", controllerAdmins.pathAdmin);


module.exports = router;