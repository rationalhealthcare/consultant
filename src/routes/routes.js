/**
 * Consultant API
 * (c) 2021 rationalhealthcare.org
 * 
 */
const express = require("express");
const controller = require("../controllers/controller.js");
const router = express.Router();

/**
 * API
 */
router.get("/api/", (req, res) => {
  res.send(200, "Consultant API is live.");
});

/**
 * GETs by CONSULTANT id
 */
router.get("/api/v1/consultant/:id", (req, res) => {
  controller.getConsultantById(req, res);
});

/**
 * GETs by FAMILY id
 */
router.get("/api/v1/consultants/family/:id", (req, res) => {
  controller.getConsultantByFamilyId(req, res);
});

router.post("/api/v1/consultant/", (req, res) => {
  controller.postConsultant(req, res);
});

router.delete("/api/v1/consultant/:id", (req, res) => {
  controller.deleteConsultant(req, res);
});

router.patch("/api/v1/consultant/:id", (req, res) => {
  controller.patchConsultant(req, res);
});

router.put("/api/v1/consultant/:id", (req, res) => {
  controller.putConsultant(req, res);
});

module.exports = router;
