var express = require('express');
var adminRouter = express.Router();
const controllerAdmin = require("../dummyControllers/controller.admin");

/* ADMINS */
adminRouter.get("/", controllerAdmin.getAll);
adminRouter.post("/", controllerAdmin.createAdmin);
adminRouter.get("/:idAdmin", controllerAdmin.getAdmin);
adminRouter.patch("/:idAdmin", controllerAdmin.updateAdmin);
adminRouter.delete("/:idAdmin", controllerAdmin.deleteAdmin);

module.exports = adminRouter;