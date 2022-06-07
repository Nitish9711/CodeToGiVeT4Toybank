const express = require('express');
const router = express.Router();

const onGroundEventsController = require('../controllers/onGroundEventsControllers');

router.get('/getDetails/:id/', onGroundEventsController.getonGoundEventById);
router.post('/create', onGroundEventsController.createonGroundEvent);
router.post('/edit/:id', onGroundEventsController.editonGroundEvent);
router.post('/delete/:id', onGroundEventsController.deleteonGroundEvent);



module.exports = router;