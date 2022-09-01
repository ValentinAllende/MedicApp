var express = require('express');
var router = express.Router();
const routesUser = require('./users')
const dummyRoutes = require('../../dummyData/dummyRoutes/index.routes');
const routesDoctor = require('./doctor')
const routesPatient = require('./patient');

/* GET home page. */
router.use('/users',routesUser );

/* GET dummy routes. */
router.use('/dummy',dummyRoutes );

/* Doctor routes */
router.use('/doctors', routesDoctor);

/* Patient routes */
router.use('/patients', routesPatient);
module.exports = router;
