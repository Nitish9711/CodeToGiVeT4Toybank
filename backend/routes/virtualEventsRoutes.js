const express = require('express');
const router = express.Router();

const virtualEventsController = require('../controllers/virtualEventControllers');


router.get('/create', virtualEventsController.createVirtualEvent);
router.get('/edit/:id', virtualEventsController.editVirtualEvent);
router.get('/delete/:id', virtualEventsController.deleteVirtualEvent);



module.exports = router;