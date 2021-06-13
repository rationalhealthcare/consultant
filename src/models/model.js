const mongoose = require("mongoose");
const schema = require("../schemas/consultantSchema.js");
const Values = mongoose.model("values", schema);

module.exports = Values;
