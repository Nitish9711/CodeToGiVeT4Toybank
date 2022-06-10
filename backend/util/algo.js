const onGroundEvents = require('../models/onGroundEvents');
const Volunteers = require('../models/volunteers');
const VirtualEvents = require('../models/virtualEvents');



async function mapping(){
    var onGround = onGroundEvents.find({});
    var virtual = VirtualEvents.find({});
    console.log(onGround);
    console.log(virtual);
}