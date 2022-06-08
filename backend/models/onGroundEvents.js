const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const onGroundEventsSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    StartTime: {type: String, required: true},
    EndTime: {type: String, required: true},
    typeOfEvent: {type: String, required: true},
    description: {type: String, required: true},
    noOfVolunteersRequired: {type: String, required: true},
    typeOfVolunteers: {type:String , required:true},
    languagesRequired: [{type: String}],
    skillsRequired: [{type: String}],
    venue: {type: String,required: true},
    town: {type:String,required: true},
    district: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true, default: "Maharashtra"},
    volunteers: [{type: String}],
    scheduledMeet: {
        date: Date,
        link: String,
        time: String
    }
});
module.exports = mongoose.model('OnGroundEvents', onGroundEventsSchema);