var express = require('express');
var router = express.Router();
const routesUser = require('./users')
const dummyRoutes = require('../../dummyData/dummyRoutes/index.routes');

/* GET home page. */
router.use('/users',routesUser );

/* GET dummy routes. */
router.use('/dummy',dummyRoutes );
module.exports = router;
