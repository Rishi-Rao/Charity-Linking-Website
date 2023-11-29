const mongoose = require("mongoose");
const {Schema} = mongoose;

const CharSchema = new Schema({
    Name: String,
    Need: String,
    Address:{Latitude: String,Longitude: String},
    Contact: String
  });

module.exports = mongoose.model('charities',CharSchema);