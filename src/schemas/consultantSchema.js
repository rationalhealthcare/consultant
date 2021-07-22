const mongoose = require("mongoose");

/**
 * NOTE that the addressSchema is not required, but if it's present, all the 
 * required fields must be present else validation fails 
 */
const addressSchema = mongoose.Schema({
  address1: { type: String, required: true },
  address2: { type: String, required: false },
  city: { type: String, required: true },
  state: {
    type: String,
    enum: [
        "AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL",
        "GA","HI","ID","IL","IN","IA","KS","KY","LA","ME",
        "MD","MA","MI","MN","MS","MO","MT","NE","NV","NH",
        "NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI",
        "SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
    ],
    required: true
  },
  postalcode: { type: String, required: true },
  country: {
    type: String,
    enum: ["USA", "UK"],
    required: true,
    default: "USA",
  },
});

const consultantSchema = mongoose.Schema({
  fid: { type: String, required: true },
  name: { type: String, required: true },
  npi: { type: String, required: false },
  type: String,
  enum: ["Practitioner", "Facility"],
  phone: { type: String, required: false },
  address: { type: addressSchema, required: false },
});


module.exports = consultantSchema;

