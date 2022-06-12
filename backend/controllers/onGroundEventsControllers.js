const onGroundEvents = require('../models/onGroundEvents');
const Volunteers = require('../models/volunteers');
const mailUtility = require('../util/mail')


module.exports.getAllonGroundEvents = async(req, res)=>{
    const allOnGroundEvents = await onGroundEvents.find({});
    res.status(201).json(allOnGroundEvents);
}

module.exports.getonGoundEventById = async(req, res)=>{
    const {id} = req.params;
    const onGroundEvent = await onGroundEvents.findById(id);
    const promises  = onGroundEvent.volunteers.map(async (volId) =>{
        const trans =  await Volunteers.findById(volId);
        return trans;
      })
    
    let volunteerList = await Promise.all(promises)

    if(onGroundEvent){
        res.status(201).json({onGroundEvent, volunteerList});
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
    const {id, title, message} = req.body;
    
    console.log(id, title, message);
    // console.log(req.body);
    const event = await onGroundEvents.findById(id);
    const promises  = event.volunteers.map(async (volunteerId) =>{
        const volunteer =  await Volunteers.findById(volunteerId);
        return volunteer.email;
      })
    
    const volunteerEmailList = await Promise.all(promises)
    console.log(volunteerEmailList)
    if(volunteerEmailList.len === 0)
        res.status(201).json({"message": "MAIL_SENT"})

    var emails =await volunteerEmailList.join(", "); //"red,blue,green"
    await mailUtility.sendMailToVoluntersOfAnEvent(emails,title,  message);
    
    res.status(201).json({"message": "MAIL_SENT"})
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports.meetLink = async(req,res)=>{
    const {id} = req.params;
    const {title,date,time,purpose} = req.body;
    console.log(time);
    let roomId=generateString(8);
    roomId=roomId.substring(1);
    const meetlink='https://videolify.up.railway.app/join/'+roomId;
    console.log(meetlink);
    const onGroundEvent = await onGroundEvents.findById(id);
    onGroundEvent.scheduledMeet.link=meetlink;
    onGroundEvent.scheduledMeet.title=title;
    onGroundEvent.scheduledMeet.date=new Date(date);
    onGroundEvent.scheduledMeet.time=time;
    onGroundEvent.scheduledMeet.purpose=purpose;
    onGroundEvent.save();
    var message = "we have organized a meet regarding. The puropse of the meet is "  + purpose + ". It is on " + new Date(date).toISOString().split('T')[0]
    + " at " + time + ". Hope to see you there!";
    console.log(message);

    const promises  = onGroundEvent.volunteers.map(async (volunteerId) =>{
        const volunteer =  await Volunteers.findById(volunteerId);
        return volunteer.email;
      })
    
    const volunteerEmailList = await Promise.all(promises)
    console.log(volunteerEmailList)
    if(volunteerEmailList.len === 0)
        res.status(201).json({"message": "MAIL_SENT"})

    var emails =await volunteerEmailList.join(", "); //"red,blue,green"
    await mailUtility.sendMailToVoluntersOfAnEvent(emails,title,  message);

    res.status(200).json({"message": "MEET_DONE"});
};

module.exports.deleteVolEvent=async(req,res)=>{
    const {evId,volId} = req.params;
    // console.log(evId);
    // console.log(volId);
    const event = await onGroundEvents.findById(evId);
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