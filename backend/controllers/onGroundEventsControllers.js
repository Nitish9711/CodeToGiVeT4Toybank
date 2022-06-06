const onGroundEvents = require('../models/onGroundEvents');

module.exports.createonGroundEvent = async (req,res) =>{
    try{
    const onGroundEvent=new onGroundEvents(req.body);
    await onGroundEvent.save();
    res.status(200).json(onGroundEvent);
    } catch(e){
        req.flash('error',e.message);
        res.status(400);
        return;
    }
};

module.exports.editonGroundEvent = async(req,res) =>{
    const { id } = req.params;
    const onGroundEvent = await onGroundEvents.findByIdAndUpdate(id, { ...req.body.onGroundEvent});
    await onGroundEvents.save();
    res.status(200).json(onGroundEvent);
    return;
};

module.exports.deleteonGroundEvent = async (req, res) => {
    const { id } = req.params;
    await onGroundEvents.findByIdAndDelete(id);
    res.status(200);
    return;
};
