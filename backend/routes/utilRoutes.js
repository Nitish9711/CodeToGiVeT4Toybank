const express = require('express');
const router = express.Router();

const utilController = require('../controllers/utilControllers');


router.get('/sentOtp', utilController.sendOtp);



module.exports = router;