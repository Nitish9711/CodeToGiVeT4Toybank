const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const virtualEventsSchema = new Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true},
    typeOfEvent:{type: String, required: true},
    description:{type: String, required: true},
    noOfVolunteersRequired:{type: String, required: true},
    typeOfVolunteers:{type:String , required:true},
    languagesRequired: [{type: String}],
    skillsRequired:[{type: String}],
    linksIfAny: {type: String,required: true},
    volunteers:[{type: mongoose.Types.ObjectId, ref: 'Volunteers'}]
});
module.exports = mongoose.model('VirtualEventsSchema', virtualEventsSchema);