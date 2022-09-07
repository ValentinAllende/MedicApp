const express = require('express');
const stripeRouter = express.Router();
const controllerStripe = require("../controllers/controller.stripe");

/* STRIPE */

/* Post Patient */
stripeRouter.post("/checkout", controllerStripe.checkout);
/* Get Patient by Id */


module.exports = stripeRouter;
