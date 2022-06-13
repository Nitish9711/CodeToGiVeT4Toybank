const virtualEvents = require('../models/virtualEvents');
const VirtualEvents = require('../models/virtualEvents');
const Volunteers = require('../models/volunteers');
const mailUtility = require('../util/mail')
const mappingUtil = require("../util/algo");

module.exports.getAllVirtualEvents = async(req, res)=>{
    const AllVirtualEvents = await VirtualEvents.find({});
    res.status(201).json(AllVirtualEvents);
}
module.exports.getvirtualEventById = async(req, res)=>{
    const {id} = req.params;
    const virtualEvent = await VirtualEvents.findById(id);
    const promises  = virtualEvent.volunteers.map(async (volId) =>{
        const trans =  await Volunteers.findById(volId);
        return trans;
      })
    
    let volunteerList = await Promise.all(promises)

    if(virtualEvent){
        res.status(201).json({virtualEvent,volunteerList });
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
    await mappingUtil.VirtualMapping();
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

module.exports.sendMailToAllVolunteers = async(req, res)=>{
    const {id, message} = req.body;
    // console.log(req.body);
    const event = await VirtualEvents.findById(id);
    const promises  = event.volunteers.map(async (volunteerId) =>{
        const volunteer =  await Volunteers.findById(volunteerId);
        return volunteer.email;
      })   
const volunteerEmailList = await Promise.all(promises)
console.log(volunteerEmailList)
  
    var emails =await volunteerEmailList.join(", "); //"red,blue,green"
    await mailUtility.sendMailToVoluntersOfAnEvent(emails, message);
    
    res.status(201).json({"message": "MAIL_SENT"})
};

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// title: String,
// date: Date,
// link: String,
// time: String,
// purpose: String

module.exports.meetLink = async(req,res)=>{
    const {id} = req.params;
    const {title,date,time,purpose} = req.body;
    let roomId=generateString(8);
    roomId=roomId.substring(1);
    const meetlink='https://videolify.up.railway.app/join/'+roomId;
    console.log(meetlink);
    const virtualEvent = await VirtualEvents.findById(id);
    virtualEvent.scheduledMeet.link=meetlink;
    virtualEvent.scheduledMeet.title=title;
    virtualEvent.scheduledMeet.purpose=purpose;
    virtualEvent.scheduledMeet.date=new Date(date);
    virtualEvent.scheduledMeet.time=time;
    // virtualEvent.save();
    console.log(virtualEvent);
    res.status(200).json({"message": "MEET_DONE"});
};

module.exports.deleteVolEvent=async(req,res)=>{
    const {evId,volId} = req.params;
    // console.log(evId);
    // console.log(volId);
    const event = await virtualEvents.findById(evId);
    let volArray = event.volunteers;
    // console.log(volArray);
    let array =[];
    for(let v in volArray){
        if(volArray[v]!=volId){
            array.push(volArray[v]);
        }
    }
    // console.log(event.volunteers);
    event.volunteers = array;
    // console.log(event.volunteers);
    await event.save();
    res.status(201).json("WORK_DONE");
}


