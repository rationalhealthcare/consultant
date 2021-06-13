const mongoose = require("mongoose");

/**
 * TEST
 */
const consultantSchema = mongoose.Schema({
  name: { type: String },
  fid: { type: String },
});

/**
 *
 */
const xconsultantSchema = mongoose.Schema({
  fid: mongoose.ObjectId,
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  npi: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    address1: { type: String, required: true },
    address2: { type: String, required: false },
    city: { type: String, required: true },
    state: {
      type: String,
      enum: [
        /* list of state codes goes here */
        "IL",
        "CA",
      ],
      required: true,
    },
    postalcode: { type: String, required: true },
    country: {
      type: String,
      enum: [
        /* list of country codes goes here */
        "USA",
        "UK",
      ],
      required: true,
      default: "USA",
    },
  },
});

module.exports = consultantSchema;
