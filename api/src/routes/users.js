var express = require('express');
var router = express.Router();
const controllerUsers = require ('../controllers/controller.user')

/* GET users listing. */
router.get('/', controllerUsers.getAll);

module.exports = router;
