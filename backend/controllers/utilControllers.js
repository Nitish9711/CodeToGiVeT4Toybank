const Otp = require("../models/otp");
const mongoose = require("mongoose");
const utilityFunctions = require("../util/mail");
const onGroundEvents = require("../models/onGroundEvents");
const Volunteers = require("../models/volunteers");
const VirtualEvents = require("../models/virtualEvents");

// title: String,
//date: Date,
//link: String,
//time: String,
//purpose: String
module.exports.sendData=async(req,res)=>{
  const onground = await onGroundEvents.find();
  let ans=[];
  for(let x in onground){
    let event = onground[x];
    let temp = {name : event.name , meetLink : event.scheduledMeet.link , date : event.scheduledMeet.date , time : event.scheduledMeet.time , title : event.scheduledMeet.title , purpose : event.scheduledMeet.purpose};
    ans.push(temp);
  }

  const virtual = await VirtualEvents.find();
  for(let x in virtual){
    let event = virtual[x];
    let temp = {name : event.name , meetLink : event.scheduledMeet.link , date : event.scheduledMeet.date , time : event.scheduledMeet.time , title : event.scheduledMeet.title , purpose : event.scheduledMeet.purpose};
    ans.push(temp);
  }
  res.status(201).json(ans);
};

const sendEvents = async (req, res, next) => {
  var onGround = await onGroundEvents.find({});
  onGround = onGround.filter((ele) => {
    // console.log(ele.volunteers.length)
    var d1 = new Date(Date.now());
    var d2 = new Date(ele.date);
    // console.log(d1);
    return d1 < d2;
  });

  await onGround.sort(function (a, b) {
    var d1 = new Date(a.date);
    var d2 = new Date(b.date);
    //    console.log(d1);
    //    console.log(d2);
    return d1 - d2;
  });

  var virtualEvent = await VirtualEvents.find({});

  virtualEvent = virtualEvent.filter((ele)=>{
      // console.log(ele.volunteers.length)
      var d1 = new Date(Date.now());
      var d2 = new Date(ele.date);
      // console.log(d1);
      return d1 < d2;
  })
  await virtualEvent.sort(function(a, b) {
     var d1 = new Date(a.date);
     var d2 = new Date(b.date);
  //    console.log(d1);
  //    console.log(d2);
      return d1 - d2;
  }); 

  res.status(201).json({onGround, virtualEvent});
  return;
};
const sendOtp = async (req, res, next) => {
  const { email } = req.body;
  var digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  const response = await utilityFunctions.sendMailForOtp(email, otp);
  console.log(response);
  if (response != "OTP_SENT") {
    res.status(401).json("OTP_SENT_FAILED");
    return;
  }
  const emailAlreadyexist = await Otp.findOne({ email: email });
  if (emailAlreadyexist) {
    console.log(emailAlreadyexist);
    await Otp.updateOne({ email: email }, { otp: otp, status: false });
    res.status(201).json({ message: "OTP_SENT" });
    return;
  } else {
    const otpDoc = new Otp({
      email,
      otp,
    });
    await otpDoc.save();
    res.status(201).json({ message: "OTP_SENT" });
  }
};

const verifyOtp = async (req, res, next) => {
  const { email, otp } = req.body;
  const otpDoc = await Otp.findOne({ email: email });
  console.log(email);
  console.log(otp);
  console.log(otpDoc);
  if (otpDoc) {
    if (new Date().getTime() - new Date(otpDoc.updatedAt).getTime() > 3600000) {
      res.status(401).json({ message: "OTP_EXPIRED" });
      return;
    } else if (otpDoc.otp != otp) {
      res.status(402).json({ message: "WRONG_OTP" });
      return;
    } else {
      await otpDoc.update({ status: true });
      res.status(201).json({ message: "OTP_VERIFIED" });
      return;
    }
  } else {
    res.status(404).json({ message: "EMAIL_NOT_FOUND" });
    return;
  }
};

exports.sendOtp = sendOtp;
exports.verifyOtp = verifyOtp;
exports.sendEvents = sendEvents;