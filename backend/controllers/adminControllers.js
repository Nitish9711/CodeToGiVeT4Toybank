const onGroundEvents = require('../models/onGroundEvents');
const VirtualEvents = require('../models/virtualEvents');
const Volunteers = require('../models/volunteers');
const Admin = require('../models/admin');

module.exports.allVirtualEvents =async(req,res) =>{
    const allvirtualEvents = await VirtualEvents.find({});
    console.log(allvirtualEvents);
    res.status(200).json(allvirtualEvents);
    return;
};

module.exports.allonGroundEvents =async(req,res) =>{
    const allonGroundEvents = await onGroundEvents.find({});
    console.log(allonGroundEvents);
    res.status(200).json(allonGroundEvents);
    return;
};

module.exports.allVolunteers =async(req,res) =>{
    const allVolunteers = await Volunteers.find({});
    console.log(allVolunteers);
    res.status(200).json(allVolunteers);
    return;
};

module.exports.login = async(req,res) =>{
    const u=req.body.username;
    const p=req.body.password;
    const help= await Admin.find();
    for(let user in help){
      if(help[user].username===u && help[user].password===p){
        // res.send("Logged in");
        res.status(200).json({message:"LOGGED_IN"});
        return;
      }
    }
    // res.send("No user");
    res.status(400).json({message:"NO_ADMIN_FOUND"});
};

module.exports.signUp = async(req,res) =>{
    try{
        const newAdmin=new Admin(req.body);
        await newAdmin.save();
        res.status(200).json(newAdmin);
    } catch(e){
            res.status(400);
            return;
        }
};
