const mongoose = require("mongoose");
const consultantSchema = require("../schemas/consultantSchema.js");
const Consultant = mongoose.model("Consultant", consultantSchema);
module.exports = Consultant;
