const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(require('./zookeeperRoutes'));
router.use(require('./animalRoutes'));

module.exports = router;