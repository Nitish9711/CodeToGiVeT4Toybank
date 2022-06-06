const Otp = require("../models/otp");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");


const sendOtp = async(req, res, next)=>{
    const {email} = req.body;
    var digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++ ) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    console.log(otp);

    const otpDoc = new Otp({
       email,
       otp
    })
    res.status(201).json("OTP_SENT");
}

exports.sendOtp = sendOtp;
