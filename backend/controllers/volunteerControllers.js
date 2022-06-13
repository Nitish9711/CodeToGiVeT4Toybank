const onGroundEvents = require('../models/onGroundEvents');
const virtualEvents = require('../models/virtualEvents');
const Volunteer = require('../models/volunteers');
const mailUtility = require('../util/mail');
const mappingUtil = require("../util/algo");
var mongoose = require('mongoose');


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
        res.status(200).json({ id: help[user]._id });
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
    res.status(200).json({id : newvolunteer._id});
    } catch(e){
        res.status(400);
        return;
    }
};

module.exports.editVolunteer = async(req,res) =>{
    const { id } = req.params;
    await Volunteer.findByIdAndUpdate(id, { ...req.body});
    const newVolunteer = await Volunteer.findById(id);
    console.log(newVolunteer);
    res.status(200).json(newVolunteer);
    return;
};

module.exports.deleteVolunteer = async (req, res) => {
    const { id } = req.params;
    await Volunteer.findByIdAndDelete(id);
    res.status(200).json({message: "VOLUNTEER_DELETED"});
    return;
};
module.exports.sendMail = async(req, res)=>{
    var {id,title, message} = req.body;
    message  = "this mail is regaring " + title + ". " + message; 
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
      eventDoc = await virtualEvents.findById(eventId);
    }
    newmessage = "This email is regarding the event " + eventDoc.name + message; 
    const response = mailUtility.askDoubtViaEmail("nitishkumar12c@outlook.com", newmessage);
    res.status(201).json({message: "Mail_Sent"});
}

module.exports.upcomingEvents = async(req,res) =>{
    const {id}=req.params;
    // console.log(String(id));
    const vol=await Volunteer.findById(id);
    console.log(vol);
    const eventsArray=vol.assignedEvents;
    console.log(eventsArray);
    console.log(id);
    let events=[];
    for(let e in eventsArray){
        let ob=eventsArray[e];
        if(ob.contributionStatus==="Nonverified"){
            let evId=ob.eventId;
            let evName,mode,evDate;
            const virtual = await virtualEvents.findById(evId);
            console.log(virtual);
            if(virtual){
                evName=virtual.name;
                mode="virtual";
                evDate=virtual.date;
            }else{
                const onGround = await onGroundEvents.findById(evId);
                console.log(onGround);
                if(onGround){
                    evName=onGround.name;
                    mode="onGround";
                    evDate=onGround.date;
                }
            }
            const event = {id : evId , name : evName , eventMode : mode , date : evDate};
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
        if(ob.contributionStatus==="VOLUNTEERED"){
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
            const event = {id : evId , name : evName , eventMode : mode , date : evDate};
            console.log(event);
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

module.exports.setAvailability = async(req,res) =>{
    const islong=req.body.islong;
    const {id}=req.params;
    console.log(id);
    console.log(islong);
    if(islong){
      const {day,startDate,endDate,time,status} = req.body;
      const vol = await Volunteer.findById(id);
      var daysOfYear = [];
      let start = new Date(startDate);
      let end = new Date(endDate);
      while(start-end<0){
          var date=new Date(start);
          console.log(date);
          vol.availibility.push({date,time,status});
          start.setDate(start.getDate()+7);
      }
      console.log(vol.availibility);
      await vol.save();
    }else{
      const {date,time,status} = req.body;
      const vol = await Volunteer.findById(id);
      vol.availibility.push({date,time,status});
      console.log(vol.availibility);
      await vol.save();
    }

    // await  mappingUtil.OnGroundmapping();
    // await mappingUtil.VirtualMapping();

    res.status(200).json("DONE");
};
function convertDateObj(date) {
    var d= new Date(date);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var finalString = d.getDate() + ' ' + months[d.getMonth()] + ',' + d.getFullYear();
    console.log(finalString);
    return finalString;
}
module.exports.deleteAvailability = async (req, res )=>{
    const {id, date} = req.body;
    var volunteerDoc = await Volunteer.findById(id);
    // console.log(volunteerDoc);
    var availibilityArray = volunteerDoc.availibility;
    console.log(availibilityArray.length)


    var toRemoveEventId =[];

    availibilityArray =  await availibilityArray.filter((ele)=> {
        const d1 = new Date(ele.date);
        const d2= new Date(date);
        d1.setHours(0, 0, 0, 0);
        d2.setHours(0, 0, 0, 0);
        // console.log(d1, d2);
        // console.log(d1 - d2);
        // console.log(typeof(d1 - d2));
        if(d1 - d2  === 0 && ele.status=== "ALLOTED"){
            toRemoveEventId.push(mongoose.mongo.ObjectId(ele.eventId));
        }
        //  var difference = d1-d2;
        return d1-d2 != 0;
    });
    // console.log(availibilityArray);
    console.log(toRemoveEventId);
    volunteerDoc.availibility = availibilityArray;
    if(toRemoveEventId.length === 0){
        // volunteerDoc.save();
    }
    else{
        console.log(volunteerDoc.assignedEvents.length)
        var copyassignedEvents =  [];
        for( let x in volunteerDoc.assignedEvents ){
            if(volunteerDoc.assignedEvents[x].eventId.toString()  === toRemoveEventId[0].toString() ){
                console.log(volunteerDoc.assignedEvents[x].eventId);
            }
            else{
                copyassignedEvents.push(volunteerDoc.assignedEvents[x]);
            }
        }

        volunteerDoc.assignedEvents = copyassignedEvents
        
    }
    // volunteerDoc.save();
    // console.log(volunteerDoc);
    var event = await onGroundEvents.findById(toRemoveEventId[0]);
    if(!event){
        event = await virtualEvents.findById(toRemoveEventId[0])
    }
    console.log(event);
    var copyVolunteers = [];
    for(let x in event.volunteers){
        if(event.volunteers[x] === id){
            
        }
        else{
            copyVolunteers.push(event.volunteers[x]);
        }
    }
    event.volunteers = copyVolunteers;
    // event.save();
    console.log(event);
    res.status(201).json({message:"DELETED"});
}
// delete availibility
// volunteer id, date,
//event assgined volunteer 
//delete from volunteer assigned evetns
// delete from volunteer availibility

module.exports.sendData = async(req,res)=>{
    const {id} = req.params;
    const vol = await Volunteer.findById(id);
    let avail = vol.availibility;
    var dict={};
    for(let x in avail){
        let data = avail[x];
        if(data.status=="ALLOTED"){
            const onground = await onGroundEvents.findById(data.eventId);
            if(onground){
                dict[data.eventId]=onground.name;
            }else{
                const virtual = await virtualEvents.findById(data.eventId);
                dict[data.eventId]=virtual.name;
            }
        }
    }
    res.status(200).json(dict);
};