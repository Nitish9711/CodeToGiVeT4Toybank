const express = require('express');
const router = express.Router();

const volunteerController = require('../controllers/volunteerControllers');

router.get('/getDetails/:id', volunteerController.getVolunteerById);
router.post('/create', volunteerController.createVolunteer);
router.post('/edit/:id', volunteerController.editVolunteer);
router.post('/delete/:id', volunteerController.deleteVolunteer);
router.post('/sendMail', volunteerController.sendMail);
router.post('/login',volunteerController.login);
router.get('/getAll', volunteerController.getAllVolunteers);

router.get('/upcomingEvents/:id', volunteerController.upcomingEvents);
router.get('/pastEvents/:id', volunteerController.pastEvents);


router.get('/showlongTermAvailability/:id' , volunteerController.showlongTermAvailability);
router.post('/setlongTermAvailability/:id' , volunteerController.setlongTermAvailability);
router.get('/showshortTermAvailability/:id' , volunteerController.showshortTermAvailability);
router.post('/setshortTermAvailability/:id' , volunteerController.setshortTermAvailability);
router.post('/deleteAvailability', volunteerController.deleteAvailability);


router.post('/setAvailability/:id' , volunteerController.setAvailability);
router.post('/askDoubts', volunteerController.askDoubt)

module.exports = router;