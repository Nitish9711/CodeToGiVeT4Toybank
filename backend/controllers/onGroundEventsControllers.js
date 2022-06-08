const onGroundEvents = require('../models/onGroundEvents');
const Volunteers = require('../models/volunteers');
const mailUtility = require('../util/mail')


module.exports.getonGoundEventById = async(req, res)=>{
    const {id} = req.params;
    const onGroundEvent = await onGroundEvents.findById(id);
    if(onGroundEvent){
        res.status(201).json(onGroundEvent);
        return;
    }
    else{
        res.status(201).json({message: "EVENT_NOT_FOUND"});
        return;
    }

}
module.exports.createonGroundEvent = async (req,res) =>{
    try{
    const onGroundEvent=new onGroundEvents(req.body);
    await onGroundEvent.save();
    res.status(200).json(onGroundEvent);
    } catch(e){
        res.status(400).json({"error": e});
        return;
    }
};

module.exports.editonGroundEvent = async(req,res) =>{
    const { id } = req.params;

    await onGroundEvents.findByIdAndUpdate(id, { ...req.body});
    const onGroundEvent = await onGroundEvents.findById(id);
    res.status(200).json(onGroundEvent);
    return;
};

module.exports.deleteonGroundEvent = async (req, res) => {
    const { id } = req.params;
    await onGroundEvents.findByIdAndDelete(id);
    res.status(200).json({message: "EVENT_DELETED"});
    return;
};
module.exports.sendMailToAllVolunteers = async(req, res)=>{
    const {id, message} = req.body;
    // console.log(req.body);
    const event = await onGroundEvents.findById(id);
    const promises  = event.volunteers.map(async (volunteerId) =>{
        const volunteer =  await Volunteers.findById(volunteerId);
        return volunteer.email;
      })
    
const volunteerEmailList = await Promise.all(promises)
console.log(volunteerEmailList)
  
    var emails =await volunteerEmailList.join(", "); //"red,blue,green"
    await mailUtility.sendMailToVoluntersOfAnEvent(emails, message);
    
    res.status(201).json({"message": "MAIL_SENT"})
}
