const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController'); // Import the instance directly

router.get('/data', apiController.getData.bind(apiController));
router.post('/data', apiController.postData.bind(apiController));

module.exports = router;