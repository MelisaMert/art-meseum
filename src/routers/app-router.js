const express = require('express');
const router = express.Router();
const appController = require('../controllers/app-controller');

router.get('/', appController.welcomeApp);

module.exports = router;