const express = require("express");
const controller = require("../controllers/controller.js");
const router = express.Router();

/**
 * API
 */
router.get("/api/", (req, res) => {
  res.send(200, "Consultant API, at your service!");
});

router.get("/api/v1/", (req, res) => {
  controller.hello(req, res);
});

router.get("/api/v1/consultants/:id", (req, res) => {
  controller.getConsultantById(req, res);
});

router.get("/api/v1/consultants/family/:id", (req, res) => {
  controller.getConsultantByFamilyId(req, res);
});

router.post("/api/v1/consultant/", (req, res) => {
  controller.postConsultant(req, res);
});

router.delete("/api/v1/consultants/:id", (req, res) => {
  controller.deleteConsultant(req, res);
});

router.put("/api/v1/consultants/:id", (req, res) => {
  controller.updateConsultant(req, res);
});


/* GET home page. */
/* router.get("/", function (req, res) {
  mongodb.getVal(res);
});

router.post("/values", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  var val = req.body.value;

  if (val === undefined || val === "") {
    res.send(JSON.stringify({ status: "error", value: "Value undefined" }));
    return;
  }
  mongodb.sendVal(val, res);
});

router.delete("/values/:id", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  var uuid = req.params.id;

  if (uuid === undefined || uuid === "") {
    res.send(JSON.stringify({ status: "error", value: "UUID undefined" }));
    return;
  }
  mongodb.delVal(uuid);
  res.send(JSON.stringify({ status: "ok", value: uuid }));
}); */

module.exports = router;
