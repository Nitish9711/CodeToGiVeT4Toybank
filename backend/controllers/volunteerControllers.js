const onGroundEvents = require('../models/onGroundEvents');
const virtualEvents = require('../models/virtualEvents');
const Volunteer = require('../models/volunteers');
const mailUtility = require('../util/mail');
module.exports.getAllVolunteers = async(req, res)=>{
    const allVolunteers = await Volunteer.find({});
    res.status(201).json(allVolunteers);
}
module.exports.getVolunteerById = async(req, res)=>{
    const {id} = req.params;
    const volunteerDoc = await Volunteer.findById(id);
    if(volunteerDoc){
        res.status(201).json(volunteerDoc);
        return;
    }
    else{
        res.status(201).json({message: "VOLUNTEER_NOT_FOUND"});
        return;
    }

}

module.exports.login = async(req, res)=>{
    const u=req.body.username;
    const p=req.body.password;
    const help= await Volunteer.find();
    for(let user in help){
        console.log(help[user].password);
      if(help[user].username===u && help[user].password===p){
        // res.send("Logged in");
        res.status(200).json({message:"LOGGED_IN"});
        return;
      }
    }
    // res.send("No user");
    res.status(400).json({message:"NO_USER_FOUND"});
};

module.exports.createVolunteer = async (req,res) =>{
    try{
    const newvolunteer=new Volunteer(req.body);
    await newvolunteer.save();
    res.status(200).json(newVolunteer);
    } catch(e){
        res.status(400);
        return;
    }
};

module.exports.editVolunteer = async(req,res) =>{
    const { id } = req.params;
    await Volunteer.findByIdAndUpdate(id, { ...req.body.volunteer});
    const newVolunteer = Volunteer.findById(id);
    res.status(200).json(newvolunteer);
    return;
};

module.exports.deleteVolunteer = async (req, res) => {
    const { id } = req.params;
    await Volunteer.findByIdAndDelete(id);
    res.status(200).json({message: "VOLUNTEER_DELETED"});
    return;
};
module.exports.sendMail = async(req, res)=>{
    const {id, message} = req.body;
    const volunteerDoc = await Volunteer.findById(id);
    const response = await mailUtility.sendMailToVolunteer(volunteerDoc.email, message);

    res.status(201).json({message: "MAIL_SENT"});
    return;
}


module.exports.askDoubt = async(req, res)=>{
    const {volunteerId, message, eventId} = req.body;
    const volunteerDoc = Volunteer.findById(volunteerId);
    let eventDoc = await onGroundEvents.findById(eventId);
    if (!eventDoc) {
      eventDoc = await VirtualEvents.findById(eventId);
    }
    newmessage = "This email is regarding the event " + eventDoc.name + message; 
    const response = mailUtility.askDoubtViaEmail("nitishkumar12c@outlook.com", newmessage);
    res.status(201).json({message: "Mail_Sent"});
}


module.exports.upcomingEvents = async(req,res) =>{
    const {id}=req.params;
    const vol=await Volunteer.findById(id);
    const eventsArray=vol.assignedEvents;
    // console.log(eventsArray);
    let events=[];
    for(let e in eventsArray){
        let ob=eventsArray[e];
        if(ob.contributionStatus==="Not Volunteered"){
            let evId=ob.eventId;
            let evName,mode,evDate;
            const virtual = await virtualEvents.findById(evId);
            if(virtual){
                evName=virtual.name;
                mode="virtual";
                evDate=virtual.date;
            }else{
                const onGround = await onGroundEvents.findById(evId);
                if(onGround){
                    evName=onGround.name;
                    mode="onGround";
                    evDate=onGround.date;
                }
            }
            const event = {eventId : evId , eventName : evName , eventMode : mode , eventDate : evDate};
            // console.log(event);
            events.push(event); 
        }
    }
    // console.log(events);
    res.status(200).json(events);
};

module.exports.pastEvents = async(req,res) =>{
    const {id}=req.params;
    const vol=await Volunteer.findById(id);
    const eventsArray=vol.assignedEvents;
    // console.log(eventsArray);
    let events=[];
    for(let e in eventsArray){
        let ob=eventsArray[e];
        if(ob.contributionStatus==="Volunteered"){
            let evId=ob.eventId;
            let evName,mode,evDate;
            const virtual = await virtualEvents.findById(evId);
            if(virtual){
                evName=virtual.name;
                mode="virtual";
                evDate=virtual.date;
            }else{
                const onGround = await onGroundEvents.findById(evId);
                if(onGround){
                    evName=onGround.name;
                    mode="onGround";
                    evDate=onGround.date;
                }
            }
            const event = {eventId : evId , eventName : evName , eventMode : mode , eventDate : evDate};
            // console.log(event);
            events.push(event); 
        }
    }
    // console.log(events);
    res.status(200).json(events);
};

module.exports.setlongTermAvailability = async(req,res) =>{
    const {id}= req.params;
    console.log(id);
    const toset = req.body;
    const vol = await Volunteer.findById(id);
    vol.longTermAvailability.push(toset);
    await vol.save();
    res.status(200).json("WORK_DONE");
};

module.exports.showlongTermAvailability = async(req,res) =>{
    const {id}= req.params;
    const vol = await Volunteer.findById(id);
    const avail = vol.longTermAvailability;
    res.status(200).json(avail);
};

module.exports.setshortTermAvailability = async(req,res) =>{
    const {id}= req.params;
    const toset = req.body;
    const vol = await Volunteer.findById(id);
    vol.shortTermAvailability.push(toset);
    console.log(vol.shortTermAvailability);
    await vol.save();
    res.status(200).json("WORK_DONE");
};

module.exports.showshortTermAvailability = async(req,res) =>{
    const {id}= req.params;
    const vol = await Volunteer.findById(id);
    const avail = vol.shortTermAvailability;
    res.status(200).json(avail);
};
