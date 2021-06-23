const router = require('express').Router();

const collectionController = require('../controllers/collection-controller');

router.get('/create', collectionController.getCreateCollection);
router.post('/', collectionController.createCollection)
router.post('/edit/:collectionId', collectionController.editCollection);
router.get('/edit/:collectionId', collectionController.getEditCollection)
router.post('/delete/:collectionId', collectionController.deleteCollection )
router.get('/', collectionController.listAllCollection);
router.get('/:collectionId', collectionController.getCollectionDetail);

module.exports = router;