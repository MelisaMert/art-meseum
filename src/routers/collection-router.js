const router = require('express').Router();

const collectionController = require('../controllers/collection-controller');

router.get('/', collectionController.listAllCollection);

module.exports = router;