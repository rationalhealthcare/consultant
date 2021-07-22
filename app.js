/**
 * Consultant API
 * (c) 2021 rationalhealthcare.org
 */
const express = require("express");
const path = require("path");
const cors = require("cors");
const favicon = require("serve-favicon");
const logger = require("morgan");
const mongodb = require("./db");
const routes = require("./src/routes/routes");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
  app.locals.pretty = true;
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

mongodb.connectDB();

module.exports = app;
