const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");
const session = require("express-session");
const passport = require("passport");
const localstrategy = require("passport-local");
const cors = require("cors");

const HttpError = require("./models/http-error");
const Volunteer = require("./models/volunteers");

const adminRoutes = require("./routes/adminRoutes");
const onGroundRoutes = require("./routes/onGroundEventsRoutes");
const virtualEventsRoutes = require("./routes/virtualEventsRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const utilRoutes = require("./routes/utilRoutes");

const mappingUtil = require("./util/algo");

const app = express();
mappingUtil.OnGroudnmapping();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  
  next();
});
app.use(cors({ credentials: true, origin: true }));
const sessionConfig = {
  name: "session",
  secret: "thisisasecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(bodyParser.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(Volunteer.authenticate()));

passport.serializeUser(Volunteer.serializeUser());
passport.deserializeUser(Volunteer.deserializeUser());

app.use("/check", (req, res, next) => {
  res.status(200);
  res.json({ message: "Api server is working" });
});

app.get("/fakeuser", async (req, res) => {
  const volunteer = new Volunteer({
    name: "akshat",
    username: "akshat1234",
    email: "akshat1234@gmail.com",
  });
  const newVolunteer = await Volunteer.register(volunteer, "ojha");
  res.send(newVolunteer);
});

// main routes here
app.use("/api/admin", adminRoutes);
app.use("/api/onGroundEvents", onGroundRoutes);
app.use("/api/virtualEvents", virtualEventsRoutes);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/util", utilRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    `mongodb+srv://nitish_kumar:1234567890@cluster0.xt7ds.mongodb.net/CodeToGiveToyBankProject?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
    
  })
  .catch((err) => {
    console.log(err);
  });
