const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const otpSchema = new Schema({
    email: String,
    otp: String,
    status: {type: String, default: "NOT_SENT"} // SENT, VERIFIED
   },
 { timestamps: true }
);
// accountSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Otp', otpSchema);