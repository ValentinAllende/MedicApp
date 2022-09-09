const express = require('express');
const stripeRouter = express.Router();
const controllerStripe = require("../controllers/controller.stripe");
const ValidateToken = require('../middlewares/Authorization');

/* STRIPE */

/* Post Patient */
stripeRouter.post("/checkout",[ValidateToken.Patient], controllerStripe.checkout);
/* Get Patient by Id */


module.exports = stripeRouter;
