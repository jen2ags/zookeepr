const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes')

router.use(require(animalRoutes));
router.use(require(zookeeperRoutes));

module.exports = router;