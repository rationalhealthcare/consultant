/**
 * Consultant API
 * (c) 2021 rationalhealthcare.org
 *
 */
const express = require("express");
const { ConsultantController } = require("../controllers/controller.js");
const router = express.Router();
const auth = require("../auth.js");

const controller = new ConsultantController();

/**
 * API
 * Auth header not required.
 */
router.get("/api/", (req, res) => {
  console.log("Request from...", req.socket.remoteAddress);
  res.status(200).send("Consultant API is live.");
});

/**
 * GETs consultant by consultant id
 */
router.get(
  "/api/v1/consultant/:id",
  auth.verifyFirebaseToken,
  controller.getConsultantById
);

/**
 * GETs consultant by family id
 */

router.get(
  "/api/v1/consultants/family/:id",
  auth.verifyFirebaseToken,
  controller.getConsultantByFamilyId
);

/**
 * Created a new consultant, and return the "_id"
 */
router.post("/api/v1/consultant/", (req, res) => {
  auth.verifyFirebaseToken;
  controller.postConsultant(req, res);
});

/**
 * DELETEs the conlsultant ifentified by the conlsultant id
 */
router.delete("/api/v1/consultant/:id", (req, res) => {
  auth.verifyFirebaseToken;
  controller.deleteConsultant(req, res);
});

/**
 * Updates the consultant identified by the consultant id
 */
router.patch("/api/v1/consultant/:id", (req, res) => {
  auth.verifyFirebaseToken;
  controller.patchConsultant(req, res);
});

/**
 * Replaces the consultant identified by the consultant id
 */
router.put(
  "/api/v1/consultant/:id",
  auth.verifyFirebaseToken,
  controller.putConsultant
);

module.exports = router;
