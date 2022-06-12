const onGroundEvents = require('../models/onGroundEvents');
const VirtualEvents = require('../models/virtualEvents');
const Volunteers = require('../models/volunteers');
const Admin = require('../models/admin');

module.exports.allVirtualEvents = async (req, res) => {
    const allvirtualEvents = await VirtualEvents.find({});
    console.log(allvirtualEvents);
    res.status(200).json(allvirtualEvents);
    return;
};

module.exports.allonGroundEvents = async (req, res) => {
    const allonGroundEvents = await onGroundEvents.find({});
    console.log(allonGroundEvents);
    res.status(200).json(allonGroundEvents);
    return;
};

module.exports.allVolunteers = async (req, res) => {
    const allVolunteers = await Volunteers.find({});
    console.log(allVolunteers);
    res.status(200).json(allVolunteers);
    return;
};

module.exports.login = async (req, res) => {
    const u = req.body.username;
    const p = req.body.password;
    const help = await Admin.find();
    for (let user in help) {
        if (help[user].username === u && help[user].password === p) {
            // res.send("Logged in");
            res.status(200).json({ id: help[user]._id });
            return;
        }
    }
    // res.send("No user");
    res.status(400).json({ message: "NO_ADMIN_FOUND" });
};

module.exports.signUp = async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        await newAdmin.save();
        res.status(200).json(newAdmin);
    } catch (e) {
        res.status(400);
        return;
    }
};

module.exports.getAllMeets = async(req,res) =>{
    const virtual = await VirtualEvents.find();
    const onground = await onGroundEvents.find();
    let ans = [];
    for(let e in virtual){
        let event = virtual[e];
        if(new Date(event.scheduledMeet.date)>=Date.now()){
            // console.log(event.scheduledMeet);
            ans.push(event.scheduledMeet);
        }
    }
    for(let e in onground){
        let event = onground[e];
        if(new Date(event.scheduledMeet.date)>=Date.now()){
            // console.log(event.scheduledMeet);
            ans.push(event.scheduledMeet);
        }
    }
    // res.send(ans);
    res.status(200).json(ans);
};


module.exports.monthWiseData = async(req,res)=>{
    var ob1 = {
       Jan : 0,
       Feb : 0,
       Mar : 0,
       Apr : 0,
       May : 0,
       Jun : 0,
       July : 0,
       Aug : 0,
       Sep : 0,
       Oct : 0,
       Nov : 0,
       Dec : 0
    };
    var ob2 = {
        1 : "Jan",
        2 : "Feb",
        3 : "Mar",
        4 : "Apr",
        5 : "May",
        6 : "Jun",
        7 : "July",
        8 : "Aug",
        9 : "Sep",
        10 : "Oct",
        11 : "Nov",
        12 : "Dec"
     };

     const virtual = await VirtualEvents.find();
     for(let e in virtual){
         var mm = virtual[e].date.toISOString().slice(5,7);
         var month = ob2[parseInt(mm)];
         ob1[month]+=1;
     }
     const onground = await onGroundEvents.find();
     for(let e in onground){
         console.log(onground[e].date);
         var mm = onground[e].date.toISOString().slice(5,7);
         console.log(mm);
         var month = ob2[parseInt(mm)];
         console.log(month);
         ob1[month]+=1;
     }
     var ans = [
         {
             "name" : "January", 
            "Total" : 0
        },
        {
            "name" : "February", 
           "Total" : 0
       },
       {
        "name" : "March", 
       "Total" : 0
   },
   {
        "name" : "April", 
        "Total" : 0
    },
    {
        "name" : "May", 
    "Total" : 0
    },
    {
        "name" : "June", 
    "Total" : 0
    },
    {
        "name" : "July", 
    "Total" : 0
    },
    {
        "name" : "August", 
    "Total" : 0
    },
    {
        "name" : "September", 
    "Total" : 0
    },
    {
        "name" : "October", 
    "Total" : 0
    },
    {
        "name" : "November", 
    "Total" : 0
    },
    {
        "name" : "December", 
    "Total" : 0
    }];

    ans[0].Total = ob1.Jan;
    ans[1].Total = ob1.Feb;
    ans[2].Total = ob1.Mar;
    ans[3].Total = ob1.Apr;
    ans[4].Total = ob1.May;
    ans[5].Total = ob1.Jun;
    ans[6].Total = ob1.July;
    ans[7].Total = ob1.Aug;
    ans[8].Total = ob1.Sep;
    ans[9].Total = ob1.Oct;
    ans[10].Total = ob1.Nov;
    ans[11].Total = ob1.Dec;
     res.status(201).json(ans);
};