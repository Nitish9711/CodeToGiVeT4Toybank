const onGroundEvents = require('../models/onGroundEvents');
const Volunteers = require('../models/volunteers');
const VirtualEvents = require('../models/virtualEvents');

function findCommonElements(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

async function OnGroudnmapping(){
    var onGround = await onGroundEvents.find({});
    // console.log(onGround.length);
    // events which has already assigned events
    onGround = onGround.filter((ele)=>{
        // console.log(ele.volunteers.length)
        return (String(ele.volunteers.length) !== ele.noOfVolunteersRequired);
    })
    // console.log(onGround.length)
    // past events remove
    onGround = onGround.filter((ele)=>{
        // console.log(ele.volunteers.length)
        var d1 = new Date(Date.now());
        var d2 = new Date(ele.date);
        // console.log(d1);
        return d1 < d2;
    })
    
    await onGround.sort(function(a, b) {
       var d1 = new Date(a.date);
       var d2 = new Date(b.date);
    //    console.log(d1);
    //    console.log(d2);
        return d1 - d2;
    }); 
    
    for(let e in onGround){
        const event = onGround[e];
        console.log(event);
        const allVolunteers = await Volunteers.find({});
        var matches = []
        for(let x in allVolunteers){
          const volunteer  = allVolunteers[x];
        //   console.log(volunteer);
          const matchedVolunteer = await volunteer.availibility.find( async(ele) =>{
                // console.log(ele.date);
                // console.log(event.date);
                // console.log(
                if(new Date(ele.date) - new Date(event.date) === 0 && ele.status === "FREE"){
                   
                    let knowLanguage = findCommonElements(event.languagesRequired , volunteer.languagesKnown)
                    // console.log(volunteer._id.toString() + " " + knowLanguage);
                    let skillMatches = findCommonElements(event.skillsRequired , volunteer.skills)
                    // console.log(event.skillsRequired);
                    // console.log(volunteer.skills);
                    if(knowLanguage && skillMatches ){
                        await matches.push(volunteer._id.toString());

                    }
                }
          })
        }
        console.log(matches);
        var confirmedVolunteers = [];

        for( let x in matches){
            const volunteer = await Volunteers.findById(matches[x]);
            if(volunteer.preferredDistrict.includes(event.district) && String(confirmedVolunteers.length) < String(event.noOfVolunteersRequired)){
                await confirmedVolunteers.push(matches[x]);
                matches  = await matches.filter(ele =>{
                    return ele != matches[x];
                })
            }
        }
        var i =0;
        while(String(confirmedVolunteers.length) < String(event.noOfVolunteersRequired)){
            await confirmedVolunteers.push(matches[i]);
            i++;
        }
        console.log(matches);
        console.log(confirmedVolunteers);
        for(let x in confirmedVolunteers){
            const volunteer = await Volunteers.findById(confirmedVolunteers[x]);
            var idx = volunteer.availibility.findIndex(ele =>{
                return ele.date - event.date===0; 
            })
            console.log(volunteer.availibility[idx]);
            volunteer.availibility[idx]["status"] = "ALLOTED";
            volunteer.availibility[idx]["eventId"] = String(event._id); 
            console.log(volunteer.availibility[idx]);
            // await volunteer.save();
        }
        // await onGroundEvents.updateOne({_id : event._id}, {volunteers: confirmedVolunteers})
        console.log(event.name + " ",confirmedVolunteers );
    }
}
async function virtualMapping(){
    var virtualEvent = await VirtualEvents.find({});
    // console.log(onGround.length);
    // events which has already assigned events
    virtualEvent = virtualEvent.filter((ele)=>{
        // console.log(ele.volunteers.length)
        return (String(ele.volunteers.length) !== ele.noOfVolunteersRequired);
    })
    // console.log(onGround.length)
    // past events remove
    virtualEvent = virtualEvent.filter((ele)=>{
        // console.log(ele.volunteers.length)
        var d1 = new Date(Date.now());
        var d2 = new Date(ele.date);
        // console.log(d1);
        return d1 < d2;
    })
    if(virtualEvent.length === 0)
        return ;

    await virtualEvent.sort(function(a, b) {
       var d1 = new Date(a.date);
       var d2 = new Date(b.date);
    //    console.log(d1);
    //    console.log(d2);
        return d1 - d2;
    }); 
    for(let e in virtualEvent){
        const event = virtualEvent[e];
        console.log(event);
        const allVolunteers = await Volunteers.find({});
        var matches = []
        for(let x in allVolunteers){
          const volunteer  = allVolunteers[x];
        //   console.log(volunteer);
          const matchedVolunteer = await volunteer.availibility.find( async(ele) =>{
                // console.log(ele.date);
                // console.log(event.date);
                // console.log(
                if(new Date(ele.date) - new Date(event.date) === 0 && ele.status === "FREE"){
                   
                    let knowLanguage = findCommonElements(event.languagesRequired , volunteer.languagesKnown)
                    // console.log(volunteer._id.toString() + " " + knowLanguage);
                    let skillMatches = findCommonElements(event.skillsRequired , volunteer.skills)
                    // console.log(event.skillsRequired);
                    // console.log(volunteer.skills);
                    if(knowLanguage && skillMatches ){
                        await matches.push(volunteer._id.toString());

                    }
                }
          })
        }
        console.log(matches);
        var confirmedVolunteers = [];

        for( let x in matches){
            const volunteer = await Volunteers.findById(matches[x]);
            if(volunteer.preferredDistrict.includes(event.district) && String(confirmedVolunteers.length) < String(event.noOfVolunteersRequired)){
                await confirmedVolunteers.push(matches[x]);
                matches  = await matches.filter(ele =>{
                    return ele != matches[x];
                })
            }
        }
        var i =0;
        while(String(confirmedVolunteers.length) < String(event.noOfVolunteersRequired)){
            await confirmedVolunteers.push(matches[i]);
            i++;
        }
        console.log(matches);
        console.log(confirmedVolunteers);
        for(let x in confirmedVolunteers){
            const volunteer = await Volunteers.findById(confirmedVolunteers[x]);
            var idx = volunteer.availibility.findIndex(ele =>{
                return ele.date - event.date===0; 
            })
            console.log(volunteer.availibility[idx]);
            volunteer.availibility[idx]["status"] = "ALLOTED";
            volunteer.availibility[idx]["eventId"] = String(event._id); 
            console.log(volunteer.availibility[idx]);
            // await volunteer.save();
        }
        // await VirtualEvents.updateOne({_id : event._id}, {volunteers: confirmedVolunteers})
        console.log(event.name + " ",confirmedVolunteers );
    }
}

exports.OnGroudnmapping = OnGroudnmapping;
exports.virtualMapping = virtualMapping;