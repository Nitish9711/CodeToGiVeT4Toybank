const Otp = require("../models/otp");
const mongoose = require("mongoose");
const utilityFunctions = require("../util/mail");
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
    res.status(201).json("COULD_NOT_SENT_OTP");
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
      res.status(201).json({ message: "OTP_EXPIRED" });
      return;
    } else if (otpDoc.otp != otp) {
      res.status(201).json({ message: "WRONG_OTP" });
      return;
    } else {
      await otpDoc.update({ status: true });
      res.status(201).json({ message: "OTP_VERIFIED" });
      return;
    }
  } else {
    res.status(201).json({ message: "EMAIL_NOT_FOUND" });
    return;
  }
};

exports.sendOtp = sendOtp;
exports.verifyOtp = verifyOtp;
