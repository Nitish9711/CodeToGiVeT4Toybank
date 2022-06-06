const onGroundEvents = require('../models/onGroundEvents');

module.exports.createonGroundEvent = async (req,res) =>{
    try{
    const onGroundEvent=new onGroundEvents(req.body.onGroundEvent);
    await onGroundEvents.bulkSave();
    req.flash('success', 'Successfully made a new event!');
    res.status(200).json(onGroundEvent);
    } catch(e){
        req.flash('error',e.message);
        res.status(400);
    }
};

module.exports.editonGroundEvent = async(req,res) =>{
    const { id } = req.params;
    const onGroundEvent = await onGroundEvents.findByIdAndUpdate(id, { ...req.body.onGroundEvent});
    await onGroundEvents.save();
    req.flash('success', 'Successfully updated event!');
    res.status(200).json(onGroundEvent);
};

module.exports.deleteonGroundEvent = async (req, res) => {
    const { id } = req.params;
    await onGroundEvents.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted event');
    res.status(200);
};

