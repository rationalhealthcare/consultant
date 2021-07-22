/**
 * (c) rationalhealthcare.org 2019 - present 
 * This work is currently not licensed for use or distribution by any 
 * 3rd party.
 */
var mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
module.exports = {
  connectDB: function () {
    mongoose.connect(process.env.MONGODB_ADDON_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
}; 
