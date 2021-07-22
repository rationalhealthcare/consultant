const Consultant = require("../models/consultantModel.js");

class ConsultantController {
  constructor() {}
  hello = (req, res) => {
    res.send(200, "Consultant API, version 'v1'.");
  };

  /**
   * GETs
   */
  getConsultantById = (req, res) => {
    Consultant.findById(req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        res.send("database error");
        return;
      }
      res.status(200).send(JSON.stringify(result));
    });
  };

  getConsultantByFamilyId = (req, res) => {
    const me = "getConsultantByFamilyId()";

    Consultant.find({ fid: req.params.id }, (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.status(200).send(JSON.stringify(result));
    });
  };

  /**
   * POSTs
   */
  postConsultant = (req, res) => {
    const consultant = new Consultant(req.body);
    consultant.save((err, result) => {
      if (err) {
        console.log(err);
        res.send(
          JSON.stringify({ status: "error", value: "Error, db request failed" })
        );
        return;
      }
      res.status(201).send(
        JSON.stringify({
          status: "ok",
          data: result,
        })
      );
    });
  };

  /**
   * DELETEs
   */

  removeConsultant = (req, res) => {
    res.status(200).send("ok");
  };

  deleteConsultant = (req, res) => {
    Consultant.findOneAndDelete({ _id: req.params.id }, (err, result) => {
      if (err) {
        console.log(err);
        res.send(
          JSON.stringify({ status: "error", value: "Error, db request failed" })
        );
        return;
      }
      res.status(201).send(JSON.stringify(result));
    });
  };

  /**
   * PATCHes
   */

  patchConsultant = (req, res) => {
    Consultant.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(
            JSON.stringify({
              status: "error",
              value: "Error, db request failed",
            })
          );
          return;
        }
        res.status(201).send(JSON.stringify(result));
      }
    );
  };

  /**
   * PUTs
   */
  putConsultant = async function(req, res) {
    const me = "putConsultant()";
    console.log(me, "req.body", req.body);
    console.log(me, "req.params.id", req.params.id);

    Consultant.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err.message);
        }
        res.status(201).send(JSON.stringify(result));
      }
    );
  };
} //end module

module.exports = { ConsultantController };
