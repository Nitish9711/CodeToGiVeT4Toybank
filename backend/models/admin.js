const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {type: String, required:true, default: "hello"},
    password: {type: String, required: true, default: "1234"},
    email: {type: String, required: true, default: "hello@gmail.com"},
    phoneno: {type: String, required:true, default:"112345678"}
});
// accountSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Admin', adminSchema);