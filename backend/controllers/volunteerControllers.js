const Voluteer = require('../models/volunteers');

module.exports.createVolunteer = async (req,res) =>{
    try{
    // const {name,userName,password,age,phoneno,email,profession,organization,skills,address,town,district,city,state,preferredDistrict,nationality,academicQualification,languagesKnown} = req.body;
    // const volunteer = new Voluteer({name,userName,age,phoneno,email,profession,organization,skills,address,town,district,city,state,preferredDistrict,nationality,academicQualification,languagesKnown});
    const volunteer=new Voluteer(req.body.volunteer);
    // const newVolunteer = await Voluteer.bulkSave();
    await Voluteer.bulkSave();
    req.flash('success', 'Successfully made a new volunteer!');
    res.status(200).json(newVolunteer);
    } catch(e){
        req.flash('error',e.message);
        res.status(400);
    }
};

module.exports.editVolunteer = async(req,res) =>{
    const { id } = req.params;
    const volunteer = await Voluteer.findByIdAndUpdate(id, { ...req.body.volunteer});
    await campground.save();
    req.flash('success', 'Successfully updated Volunteer!');
    res.status(200).json(volunteer);
};

module.exports.deleteCampground = async (req, res) => {
    const { id } = req.params;
    await Voluteer.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted Volunteer');
    res.status(200);
};

