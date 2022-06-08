const Volunteer = require('../models/volunteers');
const mailUtility = require('../util/mail');
const onGroundEvents = require('../models/onGroundEvents');
const VirtualEvents = require('../models/virtualEvents');

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

module.exports.signUp = async(req, res)=>{
    
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
