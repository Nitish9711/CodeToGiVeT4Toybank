const Volunteer = require('../models/volunteers');
const mailUtility = require('../util/mail');

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


