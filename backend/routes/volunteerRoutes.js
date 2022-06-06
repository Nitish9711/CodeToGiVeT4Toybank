const express = require('express');
const router = express.Router();

const volunteerController = require('../controllers/volunteerControllers');


router.get('/create', volunteerController.createVolunteer);
router.get('/edit/:id', volunteerController.editVolunteer);
router.get('/delete/:id', volunteerController.deleteVolunteer);



module.exports = router;