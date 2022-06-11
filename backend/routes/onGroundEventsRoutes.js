const express = require('express');
const router = express.Router();

const onGroundEventsController = require('../controllers/onGroundEventsControllers');

router.get('/getDetails/:id/', onGroundEventsController.getonGoundEventById);
router.post('/sendMail', onGroundEventsController.sendMailToAllVolunteers);
router.post('/create', onGroundEventsController.createonGroundEvent);
router.post('/edit/:id', onGroundEventsController.editonGroundEvent);
router.post('/delete/:id', onGroundEventsController.deleteonGroundEvent);
router.get('/getAll', onGroundEventsController.getAllonGroundEvents);
router.post('/meetLink/:id',onGroundEventsController.meetLink);

module.exports = router;