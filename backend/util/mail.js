const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: "nitishkumar12c@outlook.com",
    pass: "luffy12c@",
  },
});

async function sendMailForOtp(email, otp) {
  // setup e-mail data, even with unicode symbols
  var mailOptions = {
    from: '"Toy Bank "nitishkumar12c@outlook.com', // sender address (who sends)
    to: email, // list of receivers (who receives)
    subject: "OTP For Email Verification ", // Subject line
    text: "", // plaintext body
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Toy Bank</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing to Volunteer. Use the following OTP to complete your Sign Up procedures. OTP is valid for 1 hour</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />Toy Bank Team</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Toy Bank</p>
        <p>XYZ address</p>
        <p>Maharashtra</p>
      </div>
    </div>
  </div>`,
    // html body
  };

  // send mail with defined transport object
  await transporter.sendMail(
    mailOptions,
    function (error, info) {
      if (error) {
        console.log(error);
        return error;
      }
    }
  );
  return "OTP_SENT";
}
async function sendMailToVolunteer(email, message) {
  // setup e-mail data, even with unicode symbols
  var mailOptions = {
    from: '"Toy Bank "nitishkumar12c@outlook.com', // sender address (who sends)
    to: email, // list of receivers (who receives)
    subject: "Mail From Toy Bank Excutiv", // Subject line
    text: "", // plaintext body
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Toy Bank</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>${message}</p>
      <p style="font-size:0.9em;">Regards,<br />Toy Bank Team</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Toy Bank</p>
        <p>XYZ address</p>
        <p>Maharashtra</p>
      </div>
    </div>
  </div>`,
    // html body
  };

  // send mail with defined transport object
  await transporter.sendMail(
    mailOptions,
    function (error, info) {
      if (error) {
        console.log(error);
        return error;
      }
    }
  );
  return "MAIL_SENT";
}
async function sendMailToVoluntersOfAnEvent(emails, message) {
  // setup e-mail data, even with unicode symbols
  var mailOptions = {
    from: '"Toy Bank "nitishkumar12c@outlook.com', // sender address (who sends)
    // to: emails, // list of receivers (who receives)
    bcc:emails,
    subject: "Mail From Toy Bank Excutiv", // Subject line
    text: "", // plaintext body
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Toy Bank</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>${message}</p>
      <p style="font-size:0.9em;">Regards,<br />Toy Bank Team</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Toy Bank</p>
        <p>XYZ address</p>
        <p>Maharashtra</p>
      </div>
    </div>
  </div>`,
    // html body
  };

  // send mail with defined transport object
  await transporter.sendMail(
    mailOptions,
    function (error, info) {
      if (error) {
        console.log(error);
        return error;
      }
    }
  );
  return "MAIL_SENT";
}

exports.sendMailForOtp = sendMailForOtp;
exports.sendMailToVolunteer = sendMailToVolunteer
exports.sendMailToVoluntersOfAnEvent = sendMailToVoluntersOfAnEvent
