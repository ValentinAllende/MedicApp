var express = require('express');
var router = express.Router();
const routesUser = require('./users')
const dummyRoutes = require('../../dummyData/dummyRoutes/index.routes');
const routesDoctor = require('./doctor')
const routesPatient = require('./patient');
const routesAdmin = require('./admin');
const routesAppoinment = require('./appointment');
const routesStripe = require('./stripe');

/* GET home page. */
router.use('/users',routesUser );

/* GET dummy routes. */
router.use('/dummy',dummyRoutes );

/* Doctor routes */
router.use('/doctors', routesDoctor);

/* Patient routes */
router.use('/patients', routesPatient);

/* Admin routes */
router.use('/admins', routesAdmin);

/* Appointment routes */
router.use('/appointments', routesAppoinment);

router.use('/stripe', routesStripe);

module.exports = router;
