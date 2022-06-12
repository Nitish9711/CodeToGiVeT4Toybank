const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminControllers');


router.get('/allVirtualEvents', adminController.allVirtualEvents);
router.get('/allonGroundEvents', adminController.allonGroundEvents);
router.get('/allVolunteers', adminController.allVolunteers);
router.post('/login',adminController.login);
router.post('/signUp',adminController.signUp);
router.get('/getAllMeets',adminController.getAllMeets);


module.exports = router;