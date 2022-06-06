const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");

const HttpError = require("./models/http-error");

const adminRoutes = require("./routes/adminRoutes");
const onGroundRoutes = require("./routes/onGroundEventsRoutes");
const virtualEventsRoutes = require("./routes/virtualEventsRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const utilRoutes = require("./routes/utilRoutes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/check", (req, res, next) => {
  res.status(200);
  res.json({ message: "Api server is working" });
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
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
