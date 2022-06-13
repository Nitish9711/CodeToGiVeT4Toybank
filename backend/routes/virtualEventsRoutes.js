const express = require('express');
const router = express.Router();

const virtualEventsController = require('../controllers/virtualEventControllers');

router.get('/getDetails/:id/', virtualEventsController.getvirtualEventById);
router.post('/sendMail', virtualEventsController.sendMailToAllVolunteers);
router.post('/create', virtualEventsController.createVirtualEvent);
router.post('/edit/:id', virtualEventsController.editVirtualEvent);
router.post('/delete/:id', virtualEventsController.deleteVirtualEvent);
router.get('/getAll', virtualEventsController.getAllVirtualEvents);
router.post('/assignVolunteer', virtualEventsController.assignVolunteer);

router.post('/meetLink/:id',virtualEventsController.meetLink);

router.get('/deleteVolEvent/:evId/:volId',virtualEventsController.deleteVolEvent);

module.exports = router;