const express = require('express');
const router = express.Router();

const utilController = require('../controllers/utilControllers');


router.post('/sendOtp', utilController.sendOtp);
router.post('/verifyOtp', utilController.verifyOtp);
router.get('/sendEvents', utilController.sendEvents);
router.get('/sendData', utilController.sendData);

module.exports = router;