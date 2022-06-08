const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password:{type: String, required: true},
    age: {type: String,required: true},
    phoneno:{type: String, required: true},
    email: {type: String, required: true},
    profession:{type: String, required: true},
    organization: {type: String,required: true},
    skills:[{type: String}],
    addresss:{type:String},
    town: {type:String,required: true},
    district:{type: String, required: true},
    city:{type: String, required: true},
    state:{type: String, required: true, default: "Maharashtra"},
    preferredDistrict:[{type: String}],
    nationality:{type: String},
    academicQualification: {type: String},
    languagesKnown:[{type: String}],
    // Assigned events array event id - [{eventids, contributionStatus - Voluteered|| Not Voluteered || Nonverified || verified}]
    //  type OnGroundEvents || VirtualEvents
    assignedEvents: [{eventId: String, type: String, contributionStatus: String}],
    longTermAvailability: [{day: String, startDate: Date, endDate: Date, time: String, status:{type: String, default: "PENDING"}}],
    shortTermAvailability: [{date: Date, time: String, status:{type: String, default: "PENDING"}}]
});
module.exports = mongoose.model('Volunteer', volunteerSchema);