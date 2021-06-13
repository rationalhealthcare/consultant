const Consultant = require("../models/consultantModel.js");
const consultantController = {
  hello: (req, res) => {
    res.send(200, "Consultant API, version 'v1', at your service!");
  },

  /**
   * GETs
   */
  getConsultantById: (req, res) => {
    Consultant.findById(req.params.id, (err, result) => {
      if (err) {
        console.log(err);
        res.send("database error");
        return;
      }
      res.send(200, JSON.stringify(result));
    });
  },

  getConsultantByFamilyId: (req, res) => {
    Consultant.find({ fid: req.params.id }, (err, result) => {
      if (err) {
        console.log(err);
        res.send("database error");
        return;
      }
      res.send(200, JSON.stringify(result));
    });
  },

  /**
   * POSTs
   */
  postConsultant: (req, res) => {
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
          id: result["_id"],
        })
      );
    });
  },

  /**
   * DELETEs
   */

  removeConsultant: (req, res) => {
    res.status(200).send("ok");
  },

  deleteConsultant: (req, res) => {
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
  },

  /**
   * PUTs
   */

  updateConsultant: (req, res) => {
    Consultant.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, result) => {
      if (err) {
        console.log(err);
        res.send(
          JSON.stringify({ status: "error", value: "Error, db request failed" })
        );
        return;
      }
      res.status(201).send(JSON.stringify(result));
    });
  },
};

module.exports = consultantController;
