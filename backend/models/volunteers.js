const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');

const volunteerSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    age: {type: String},
    phoneno:{type: String},
    email: {type: String, required: true,unique:true},
    profession:{type: String},
    organization: {type: String},
    skills:[{type: String}],
    addresss:{type:String},
    town: {type:String},
    district:{type: String},
    city:{type: String},
    state:{type: String, default: "Maharashtra"},
    preferredDistrict:[{type: String}],
    nationality:{type: String},
    academicQualification: {type: String},
    languagesKnown:[{type: String}],
    // Assigned events array event id - [{eventids, contributionStatus - Voluteered|| Not Voluteered || Nonverified || verified}]
    assignedEvents: [{eventId: mongoose.Types.ObjectId, contributionStatus: String}],
    longTermAvailability: [{day: String, startDate: Date, endDate: Date,  time: String, status:{type:String, default:"FREE"}}],
    shortTermAvailability: [{date: Date, time: String,status:{type:String, default:"FREE"}}],
    availibility:  [{date: Date, time: String, eventId:String, status:{type:String, default:"FREE"}}]
});
volunteerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Volunteer', volunteerSchema);