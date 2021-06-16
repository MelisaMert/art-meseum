const router = require('express').Router();

const collectionController = require('../controllers/collection-controller');

router.get('/create', collectionController.getCreateCollection);
router.post('/', collectionController.createCollection)
router.get('/', collectionController.listAllCollection);
router.get('/:collectionId', collectionController.getCollectionDetail);

module.exports = router;