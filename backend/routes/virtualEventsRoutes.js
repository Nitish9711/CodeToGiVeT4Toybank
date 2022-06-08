const express = require('express');
const router = express.Router();

const virtualEventsController = require('../controllers/virtualEventControllers');

router.get('/getDetails/:id/', virtualEventsController.getvirtualEventById);
router.post('/sendMail', virtualEventsController.sendMailToAllVolunteers);
router.post('/create', virtualEventsController.createVirtualEvent);
router.post('/edit/:id', virtualEventsController.editVirtualEvent);
router.post('/delete/:id', virtualEventsController.deleteVirtualEvent);
router.get('/meetLink/:id',virtualEventsController.meetLink);

module.exports = router;