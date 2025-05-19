const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apiController');

const apiController = new ApiController();

router.get('/data', apiController.getData.bind(apiController));
router.post('/data', apiController.postData.bind(apiController));

module.exports = router;