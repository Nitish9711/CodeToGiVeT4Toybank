const express = require('express');
const router = express.Router();

const onGroundEventsController = require('../controllers/onGroundEventsControllers');


router.get('/create', onGroundEventsController.createonGroundEvent);
router.get('/edit/:id', onGroundEventsController.editonGroundEvent);
router.get('/delete/:id', onGroundEventsController.deleteonGroundEvent);



module.exports = router;