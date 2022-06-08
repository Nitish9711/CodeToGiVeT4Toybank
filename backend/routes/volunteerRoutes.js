const express = require('express');
const router = express.Router();

const volunteerController = require('../controllers/volunteerControllers');

router.get('/getDetails/:id', volunteerController.getVolunteerById);
router.post('/create', volunteerController.createVolunteer);
router.post('/edit/:id', volunteerController.editVolunteer);
router.post('/delete/:id', volunteerController.deleteVolunteer);
router.post('/sendMail', volunteerController.sendMail);
router.post('/login',volunteerController.login);

module.exports = router;