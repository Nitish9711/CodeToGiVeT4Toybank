const VirtualEvents = require('../models/virtualEvents');

module.exports.createVirtualEvent = async (req,res) =>{
    try{
    const virtualEvent=new virtualEvents(req.body);
    await virtualEvent.bulkSave();
    // req.flash('success', 'Successfully made a new event!');
    res.status(200).json(virtualEvent);
    } catch(e){
        req.flash('error',e.message);
        res.status(400);
        return;
    }
};

module.exports.editVirtualEvent = async(req,res) =>{
    const { id } = req.params;
    const virtualEvent = await VirtualEvents.findByIdAndUpdate(id, { ...req.body});
    await virtualEvent.save();
    // req.flash('success', 'Successfully updated event!');
    res.status(200).json(virtualEvent);
    return;
};

module.exports.deleteVirtualEvent = async (req, res) => {
    const { id } = req.params;
    await VirtualEvents.findByIdAndDelete(id);
    // req.flash('success', 'Successfully deleted event');
    res.status(200);
    return;
};

