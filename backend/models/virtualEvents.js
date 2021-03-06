const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const virtualEventsSchema = new Schema({
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
    linksIfAny: {type: String},
    volunteers: [{type: String}],
    scheduledMeet: {
        title: String,
        date: Date,
        link: String,
        time: String,
        purpose: String
    } 
});
module.exports = mongoose.model('VirtualEvents', virtualEventsSchema);