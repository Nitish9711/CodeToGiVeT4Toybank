const onGroundEvents = require('../models/onGroundEvents');
const VirtualEvents = require('../models/virtualEvents');
const Volunteers = require('../models/volunteers');






module.exports.allVirtualEvents =async(req,res) =>{
    const allvirtualEvents = await VirtualEvents.find({});
    console.log(allvirtualEvents);
    res.status(200).json(allvirtualEvents);
    return;
};

module.exports.allonGroundEvents =async(req,res) =>{
    const allonGroundEvents = await onGroundEvents.find({});
    console.log(allonGroundEvents);
    res.status(200).json(allonGroundEvents);
    return;
};

module.exports.allVolunteers =async(req,res) =>{
    const allVolunteers = await Volunteers.find({});
    console.log(allVolunteers);
    res.status(200).json(allVolunteers);
    return;
};

