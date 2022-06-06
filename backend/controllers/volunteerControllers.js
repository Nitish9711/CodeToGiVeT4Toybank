const Volunteer = require('../models/volunteers');


module.exports.signUp = async(req, res)=>{

};

module.exports.createVolunteer = async (req,res) =>{
    try{
    // const {name,userName,password,age,phoneno,email,profession,organization,skills,address,town,district,city,state,preferredDistrict,nationality,academicQualification,languagesKnown} = req.body;
    // const volunteer = new Voluteer({name,userName,age,phoneno,email,profession,organization,skills,address,town,district,city,state,preferredDistrict,nationality,academicQualification,languagesKnown});
    const newvolunteer=new Volunteer(req.body);
    // const newVolunteer = await Voluteer.bulkSave();
    await newVolunteer.save();
    // req.flash('success', 'Successfully made a new volunteer!');
    res.status(200).json(newVolunteer);
    } catch(e){
        req.flash('error',e.message);
        res.status(400);
        return;
    }
};

module.exports.editVolunteer = async(req,res) =>{
    const { id } = req.params;
    const newvolunteer = await Volunteer.findByIdAndUpdate(id, { ...req.body});
    await newVolunteer.save();
    req.flash('success', 'Successfully updated Volunteer!');
    res.status(200).json(newvolunteer);
    return;
};

module.exports.deleteVolunteer = async (req, res) => {
    const { id } = req.params;
    await newVolunteer.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted Volunteer');
    res.status(200);
    return;
};

