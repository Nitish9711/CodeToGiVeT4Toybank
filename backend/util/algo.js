const onGroundEvents = require("../models/onGroundEvents");
const Volunteers = require("../models/volunteers");
const VirtualEvents = require("../models/virtualEvents");

function findCommonElements(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}

async function OnGroudnmapping() {
    var onGround = await onGroundEvents.find({});
    // console.log(onGround.length);
    // events which has already assigned events
    onGround = onGround.filter((ele) => {
        // console.log(ele.volunteers.length)
        return String(ele.volunteers.length) !== ele.noOfVolunteersRequired;
    });
    // console.log(onGround.length)
    // past events remove
    onGround = onGround.filter((ele) => {
        // console.log(ele.name)
        var d1 = new Date(Date.now());
        var d2 = new Date(ele.date);
        // console.log(d1);
        return d1 < d2;
    });
    // console.log(onGround.length)
    // for(let x in onGround){
    //     console.log(onGround[x].name);
    // }

    await onGround.sort(function (a, b) {
        var d1 = new Date(a.date);
        var d2 = new Date(b.date);
        //    console.log(d1);
        //    console.log(d2);
        return d1 - d2;
    });

    console.log(onGround.length)
    for(let x in onGround){
        console.log(onGround[x].name);
    }

    for (let e in onGround) {
        const event = onGround[e];
        console.log("event " , event);
        console.log("event date ", event.date);
        const allVolunteers = await Volunteers.find({});
        var matches = [];
        for (let x in allVolunteers) {
            let volunteer = allVolunteers[x];
            //   console.log(volunteer.name);
            const volunteerAv = volunteer.availibility;
            //   console.log(volunteerAv);
            for (let y in volunteerAv) {
                const ele = volunteerAv[y];
                const d1 = new Date(ele.date);
                const d2 = new Date(event.date);
                d1.setHours(0, 0, 0, 0);
                d2.setHours(0, 0, 0, 0);
                // console.log(d1 - d2);
                if (d1 - d2 === 0 && ele.status === "FREE") {
                    // console.log(ele.date);
                    let knowLanguage = findCommonElements(
                        event.languagesRequired,
                        volunteer.languagesKnown
                    );
                    // console.log(volunteer._id.toString() + " " + knowLanguage);
                    let skillMatches = findCommonElements(
                        event.skillsRequired,
                        volunteer.skills
                    );
                    // console.log(event.skillsRequired);
                    // console.log(volunteer.skills);
                    if (knowLanguage && skillMatches) {
                        await matches.push(volunteer._id.toString());
                    }
                }
            }
        }

        console.log("matches ", matches);
        var confirmedVolunteers = [];
        var confirmedIdx = [];
        for (let x in matches) {
            // console.log(x);
            // console.log(matches[x]);
            volunteer = await Volunteers.findById(matches[x]);
            if (volunteer) {
                if (volunteer.preferredDistrict != null) {
                    if (
                        volunteer.preferredDistrict.includes(event.district) &&
                        String(confirmedVolunteers.length) <
                        String(event.noOfVolunteersRequired)
                        ) {
                        console.log("preffred district volunteer ", volunteer.name);
                        await confirmedVolunteers.push(matches[x]);
                        confirmedIdx.push(x);
                    }
                }
            }
        }
        var temp = [];
        for (let z in matches) {
            if (confirmedIdx.find(ele => { return ele === z })) {

            }
            else {
                temp.push(matches[z]);
            }
        }
        //   console.log(temp);
        matches = temp;
        console.log("final matches", matches);
        console.log("confirmed Volunteer ",confirmedVolunteers);
        var i = 0;
        while (String(confirmedVolunteers.length) < String(event.noOfVolunteersRequired) && i < confirmedVolunteers.length) {
            await confirmedVolunteers.push(matches[i]);
            i++;
        }
        // console.log(confirmedVolunteers);
        console.log("final confirmed Volunteer ",confirmedVolunteers);
          for(let x in confirmedVolunteers){
              var volunteer = await Volunteers.findById(confirmedVolunteers[x]);
              console.log(event.name + " ", volunteer.name);

            //   var idx = volunteer.availibility.findIndex(ele =>{
            //       return ele.date - event.date===0;
            //   })
            //   console.log(volunteer.availibility[idx]);
            //   volunteer.availibility[idx]["status"] = "ALLOTED";
            //   volunteer.availibility[idx]["eventId"] = String(event._id);
            //   console.log(volunteer.availibility[idx]);
              // await volunteer.save();
          }
        //     // await onGroundEvents.updateOne({_id : event._id}, {volunteers: confirmedVolunteers})
    }
}

async function virtualMapping() {
    var virtualEvent = await VirtualEvents.find({});
    // console.log(onGround.length);
    // events which has already assigned events
    virtualEvent = virtualEvent.filter((ele) => {
        // console.log(ele.volunteers.length)
        return String(ele.volunteers.length) !== ele.noOfVolunteersRequired;
    });
    // console.log(onGround.length)
    // past events remove
    virtualEvent = virtualEvent.filter((ele) => {
        // console.log(ele.volunteers.length)
        var d1 = new Date(Date.now());
        var d2 = new Date(ele.date);
        // console.log(d1);
        return d1 < d2;
    });
    if (virtualEvent.length === 0) return;

    await virtualEvent.sort(function (a, b) {
        var d1 = new Date(a.date);
        var d2 = new Date(b.date);
        //    console.log(d1);
        //    console.log(d2);
        return d1 - d2;
    });
    for (let e in virtualEvent) {
        const event = virtualEvent[e];
        console.log(event);
        const allVolunteers = await Volunteers.find({});
        var matches = [];
        for (let x in allVolunteers) {
            const volunteer = allVolunteers[x];
            //   console.log(volunteer);
            const matchedVolunteer = await volunteer.availibility.find(
                async (ele) => {
                    // console.log(ele.date);
                    // console.log(event.date);
                    // console.log(
                    if (
                        new Date(ele.date) - new Date(event.date) === 0 &&
                        ele.status === "FREE"
                    ) {
                        let knowLanguage = findCommonElements(
                            event.languagesRequired,
                            volunteer.languagesKnown
                        );
                        // console.log(volunteer._id.toString() + " " + knowLanguage);
                        let skillMatches = findCommonElements(
                            event.skillsRequired,
                            volunteer.skills
                        );
                        // console.log(event.skillsRequired);
                        // console.log(volunteer.skills);
                        if (knowLanguage && skillMatches) {
                            await matches.push(volunteer._id.toString());
                        }
                    }
                }
            );
        }
        console.log(matches);
        var confirmedVolunteers = [];

        for (let x in matches) {
            const volunteer = await Volunteers.findById(matches[x]);
            if (
                volunteer.preferredDistrict.includes(event.district) &&
                String(confirmedVolunteers.length) <
                String(event.noOfVolunteersRequired)
            ) {
                await confirmedVolunteers.push(matches[x]);
                matches = await matches.filter((ele) => {
                    return ele != matches[x];
                });
            }
        }
        var i = 0;
        while (
            String(confirmedVolunteers.length) < String(event.noOfVolunteersRequired)
        ) {
            await confirmedVolunteers.push(matches[i]);
            i++;
        }
        console.log(matches);
        console.log(confirmedVolunteers);
        for (let x in confirmedVolunteers) {
            const volunteer = await Volunteers.findById(confirmedVolunteers[x]);
            var idx = volunteer.availibility.findIndex((ele) => {
                return ele.date - event.date === 0;
            });
            console.log(volunteer.availibility[idx]);
            volunteer.availibility[idx]["status"] = "ALLOTED";
            volunteer.availibility[idx]["eventId"] = String(event._id);
            console.log(volunteer.availibility[idx]);
            // await volunteer.save();
        }
        // await VirtualEvents.updateOne({_id : event._id}, {volunteers: confirmedVolunteers})
        console.log(event.name + " ", confirmedVolunteers);
    }
}

exports.OnGroudnmapping = OnGroudnmapping;
exports.virtualMapping = virtualMapping;
