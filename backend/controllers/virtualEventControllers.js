const VirtualEvents = require('../models/virtualEvents');

module.exports.getvirtualEventById = async(req, res)=>{
    const {id} = req.params;
    const virtualEvent = await VirtualEvents.findById(id);
    if(virtualEvent){
        res.status(201).json(virtualEvent);
        return;
    }
    else{
        res.status(201).json({message: "EVENT_NOT_FOUND"});
        return;
    }

}
module.exports.createVirtualEvent = async (req,res) =>{
    try{
    const virtualEvent=new VirtualEvents(req.body);
    await virtualEvent.save();
    res.status(200).json(virtualEvent);
    } catch(e){
        res.status(400).json({"error": e});
        return;
    }
};

module.exports.editVirtualEvent = async(req,res) =>{
    const { id } = req.params;
    await VirtualEvents.findByIdAndUpdate(id, { ...req.body});
    const virtualEvent = await VirtualEvents.findById(id);
    res.status(200).json(virtualEvent);
    return;
};

module.exports.deleteVirtualEvent = async (req, res) => {
    const { id } = req.params;
    await VirtualEvents.findByIdAndDelete(id);
    res.status(200).json({message: "EVENT_DELETED"});
    return;
};

