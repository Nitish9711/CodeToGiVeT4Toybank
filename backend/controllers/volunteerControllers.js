const Volunteer = require('../models/volunteers');

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
        req.flash('error',e.message);
        res.status(400);
        return;
    }
};

module.exports.editVolunteer = async(req,res) =>{
    const { id } = req.params;
    const newvolunteer = await Volunteer.findByIdAndUpdate(id, { ...req.body.volunteer});
    await newvolunteer.save();
    res.status(200).json(newvolunteer);
    return;
};

module.exports.deleteVolunteer = async (req, res) => {
    const { id } = req.params;
    await Volunteer.findByIdAndDelete(id);
    res.status(200);
    return;
};


