const onGroundEvents = require('../models/onGroundEvents');
const Volunteers = require('../models/volunteers');
const VirtualEvents = require('../models/virtualEvents');



async function OnGroudnmapping(){
    var onGround = await onGroundEvents.find({});
    console.log(onGround.length);
    // events which has already assigned events
    onGround = onGround.filter((ele)=>{
        // console.log(ele.volunteers.length)
        return (String(ele.volunteers.length) !== ele.noOfVolunteersRequired);
    })
    console.log(onGround.length)
    // past events remove
    onGround = onGround.filter((ele)=>{
        // console.log(ele.volunteers.length)
        var d1 = new Date(Date.now());
        var d2 = new Date(ele.date);
        console.log(d1);
        // console.log(d2);
        return d1 > d2;
    })

    console.log(onGround.length);

    
}
exports.OnGroudnmapping = OnGroudnmapping;