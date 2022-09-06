const express = require('express');
const router = express.Router();
const controllerAdmins = require("../controllers/controller.admin");

/* Admins */
router.get("/", controllerAdmins.getAll);
router.post("/",  controllerAdmins.createAdmin);
router.get("/:id", controllerAdmins.getAdmin);
router.patch("/:id", controllerAdmins.pathAdmin);


module.exports = router;