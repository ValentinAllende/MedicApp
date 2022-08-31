var express = require('express');
var router = express.Router();
const routesUser = require('./users')

/* GET home page. */
router.use('/users',routesUser );

module.exports = router;
