const router = require('express').Router();

const collectionController = require('../controllers/collection-controller');

router.get('/', collectionController.listAllCollection);

router.get('/:collectionId', collectionController.getCollectionDetail);

module.exports = router;